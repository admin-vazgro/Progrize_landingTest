"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter, useSearchParams } from "next/navigation";

interface VerificationDetails {
  id: string;
  user_id: string;
  request_type: string;
  reference_id: string;
  verifier_email: string;
  status: string;
  created_at: string;
  expires_at?: string;
  user_name: string;
  user_email: string;
  item_details: {
    title: string;
    organization: string;
    start_date: string;
    end_date?: string;
    is_current: boolean;
    description?: string;
  };
}

export default function VerifyRequestPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [loading, setLoading] = useState(true);
  const [verificationDetails, setVerificationDetails] = useState<VerificationDetails | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [rejectionReason, setRejectionReason] = useState("");
  const [showRejectionForm, setShowRejectionForm] = useState(false);

  useEffect(() => {
    loadVerificationDetails();
  }, [token]);

  const loadVerificationDetails = async () => {
    if (!token) {
      setError("Invalid verification link");
      setLoading(false);
      return;
    }

    try {
      // Get verification request
      const { data: requestData, error: requestError } = await supabase
        .from("verification_requests")
        .select("*")
        .eq("verification_token", token)
        .single();

      if (requestError) throw requestError;

      if (requestData.status !== "pending") {
        setError(`This verification request has already been ${requestData.status}`);
        setLoading(false);
        return;
      }

      // Check if expired
      if (new Date(requestData.expires_at) < new Date()) {
        await supabase
          .from("verification_requests")
          .update({ status: "expired" })
          .eq("id", requestData.id);

        setError("This verification link has expired");
        setLoading(false);
        return;
      }

      // Get user profile and email
      const { data: { user: authUser } } = await supabase.auth.admin.getUserById(requestData.user_id);
      const { data: profileData } = await supabase
        .from("profiles")
        .select("full_name")
        .eq("id", requestData.user_id)
        .single();

      // Get item details based on type
      let itemDetails;
      if (requestData.request_type === "experience") {
        const { data: expData } = await supabase
          .from("experiences")
          .select("position, company_name, start_date, end_date, is_current, description")
          .eq("id", requestData.reference_id)
          .single();

        itemDetails = {
          title: expData?.position || "",
          organization: expData?.company_name || "",
          start_date: expData?.start_date || "",
          end_date: expData?.end_date,
          is_current: expData?.is_current || false,
          description: expData?.description,
        };
      } else {
        const { data: eduData } = await supabase
          .from("education")
          .select("degree, institution_name, start_date, end_date, is_current, description")
          .eq("id", requestData.reference_id)
          .single();

        itemDetails = {
          title: eduData?.degree || "",
          organization: eduData?.institution_name || "",
          start_date: eduData?.start_date || "",
          end_date: eduData?.end_date,
          is_current: eduData?.is_current || false,
          description: eduData?.description,
        };
      }

      setVerificationDetails({
        ...requestData,
        user_name: profileData?.full_name || "Unknown User",
        user_email: authUser?.email || "",
        item_details: itemDetails,
      });
    } catch (error) {
      console.error("Error loading verification details:", error);
      setError("Failed to load verification details");
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async () => {
    if (!verificationDetails) return;

    setProcessing(true);

    try {
      // Update verification request
      const { error: updateError } = await supabase
        .from("verification_requests")
        .update({
          status: "verified",
          verified_at: new Date().toISOString(),
          verified_by: verificationDetails.verifier_email,
        })
        .eq("id", verificationDetails.id);

      if (updateError) throw updateError;

      // Update the experience or education record
      const tableName = verificationDetails.request_type === "experience" ? "experiences" : "education";
      const { error: itemUpdateError } = await supabase
        .from(tableName)
        .update({
          verified: true,
          verified_by: verificationDetails.verifier_email,
          verified_at: new Date().toISOString(),
        })
        .eq("id", verificationDetails.reference_id);

      if (itemUpdateError) throw itemUpdateError;

      // Add to verification history
      await supabase.from("verification_history").insert({
        verification_request_id: verificationDetails.id,
        action: "verified",
        actor_email: verificationDetails.verifier_email,
        notes: "Verified successfully",
      });

      // Send notification email to user
      try {
        await supabase.functions.invoke("send-verification-notification", {
          body: {
            userEmail: verificationDetails.user_email,
            userName: verificationDetails.user_name,
            requestType: verificationDetails.request_type,
            itemDetails: {
              title: verificationDetails.item_details.title,
              organization: verificationDetails.item_details.organization,
            },
            status: "verified",
            verifiedBy: verificationDetails.verifier_email,
          },
        });
      } catch (emailError) {
        console.error("Error sending notification email:", emailError);
        // Continue even if email fails
      }

      router.push("/verification-success");
    } catch (error) {
      console.error("Error verifying:", error);
      alert("Failed to verify. Please try again.");
    } finally {
      setProcessing(false);
    }
  };

  const handleReject = async () => {
    if (!verificationDetails) return;
    if (!rejectionReason.trim()) {
      alert("Please provide a reason for rejection");
      return;
    }

    setProcessing(true);

    try {
      // Update verification request
      const { error: updateError } = await supabase
        .from("verification_requests")
        .update({
          status: "rejected",
          verified_at: new Date().toISOString(),
          verified_by: verificationDetails.verifier_email,
          rejection_reason: rejectionReason,
        })
        .eq("id", verificationDetails.id);

      if (updateError) throw updateError;

      // Add to verification history
      await supabase.from("verification_history").insert({
        verification_request_id: verificationDetails.id,
        action: "rejected",
        actor_email: verificationDetails.verifier_email,
        notes: rejectionReason,
      });

      // Send notification email to user
      try {
        await supabase.functions.invoke("send-verification-notification", {
          body: {
            userEmail: verificationDetails.user_email,
            userName: verificationDetails.user_name,
            requestType: verificationDetails.request_type,
            itemDetails: {
              title: verificationDetails.item_details.title,
              organization: verificationDetails.item_details.organization,
            },
            status: "rejected",
            verifiedBy: verificationDetails.verifier_email,
            rejectionReason: rejectionReason,
          },
        });
      } catch (emailError) {
        console.error("Error sending notification email:", emailError);
        // Continue even if email fails
      }

      router.push("/verification-rejected");
    } catch (error) {
      console.error("Error rejecting:", error);
      alert("Failed to reject. Please try again.");
    } finally {
      setProcessing(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#162f16] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading verification details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Verification Error</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  if (!verificationDetails) return null;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-[#162f16] text-white p-6">
            <h1 className="text-2xl font-bold mb-2">Verification Request</h1>
            <p className="text-gray-300">
              {verificationDetails.user_name} has requested verification of their{" "}
              {verificationDetails.request_type}
            </p>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* User Info */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Requester Information</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Name:</span>
                  <span className="text-gray-900 font-medium">{verificationDetails.user_name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Request Date:</span>
                  <span className="text-gray-900 font-medium">
                    {formatDate(verificationDetails.created_at)}
                  </span>
                </div>
              </div>
            </div>

            {/* Details to Verify */}
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">
                {verificationDetails.request_type === "experience" ? "Experience" : "Education"} Details
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm text-gray-600">
                    {verificationDetails.request_type === "experience" ? "Position:" : "Degree:"}
                  </label>
                  <p className="text-gray-900 font-medium">{verificationDetails.item_details.title}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">
                    {verificationDetails.request_type === "experience" ? "Company:" : "Institution:"}
                  </label>
                  <p className="text-gray-900 font-medium">
                    {verificationDetails.item_details.organization}
                  </p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Period:</label>
                  <p className="text-gray-900 font-medium">
                    {formatDate(verificationDetails.item_details.start_date)} -{" "}
                    {verificationDetails.item_details.is_current
                      ? "Present"
                      : formatDate(verificationDetails.item_details.end_date || "")}
                  </p>
                </div>
                {verificationDetails.item_details.description && (
                  <div>
                    <label className="text-sm text-gray-600">Description:</label>
                    <p className="text-gray-700 text-sm mt-1">
                      {verificationDetails.item_details.description}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Rejection Form */}
            {showRejectionForm && (
              <div className="border border-red-200 bg-red-50 rounded-lg p-4">
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Reason for Rejection *
                </label>
                <textarea
                  value={rejectionReason}
                  onChange={(e) => setRejectionReason(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Please provide a detailed reason for rejecting this verification..."
                />
              </div>
            )}

            {/* Info Box */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex gap-3">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <div className="text-sm text-blue-800">
                  <p className="font-medium mb-1">Please verify the following:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>The person worked/studied at your organization</li>
                    <li>The position/degree title is accurate</li>
                    <li>The dates are correct</li>
                    <li>All information matches your records</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              {!showRejectionForm ? (
                <>
                  <button
                    onClick={() => setShowRejectionForm(true)}
                    disabled={processing}
                    className="flex-1 px-6 py-3 border-2 border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition font-medium disabled:opacity-50"
                  >
                    Reject
                  </button>
                  <button
                    onClick={handleVerify}
                    disabled={processing}
                    className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium disabled:opacity-50"
                  >
                    {processing ? "Processing..." : "Verify & Approve"}
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setShowRejectionForm(false);
                      setRejectionReason("");
                    }}
                    disabled={processing}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium disabled:opacity-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleReject}
                    disabled={processing || !rejectionReason.trim()}
                    className="flex-1 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium disabled:opacity-50"
                  >
                    {processing ? "Processing..." : "Confirm Rejection"}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-sm text-gray-500 mt-6">
          This verification link will expire on {formatDate(verificationDetails.expires_at || "")}
        </p>
      </div>
    </div>
  );
}