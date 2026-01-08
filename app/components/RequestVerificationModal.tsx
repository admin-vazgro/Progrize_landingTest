"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

interface RequestVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "experience" | "education";
  referenceId: string;
  verifierEmail: string;
  itemDetails: {
    title: string; // Position or Degree
    organization: string; // Company or Institution
    startDate: string;
    endDate?: string;
    isCurrent: boolean;
  };
  onSuccess: () => void;
}

export default function RequestVerificationModal({
  isOpen,
  onClose,
  type,
  referenceId,
  verifierEmail,
  itemDetails,
  onSuccess,
}: RequestVerificationModalProps) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSendRequest = async () => {
    if (!verifierEmail) {
      alert("No verifier email provided. Please add an HR/Admin email first.");
      return;
    }

    setLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("User not authenticated");

      // Get user profile for name
      const { data: profileData } = await supabase
        .from("profiles")
        .select("full_name")
        .eq("id", user.id)
        .single();

      const userName = profileData?.full_name || "User";
      const userEmail = user.email || "";

      // Generate verification token
      const { data: tokenData, error: tokenError } = await supabase
        .rpc("generate_verification_token");

      if (tokenError) throw tokenError;

      const verificationToken = tokenData;

      // Create verification request
      const basePayload = {
        user_id: user.id,
        request_type: type,
        reference_id: referenceId,
        verifier_email: verifierEmail,
        verification_token: verificationToken,
        status: "pending",
      };

      const extendedPayload = {
        ...basePayload,
        user_name: userName,
        user_email: userEmail,
        ...(message.trim() ? { message: message.trim() } : {}),
      };

      let requestData;
      let requestError;

      ({ data: requestData, error: requestError } = await supabase
        .from("verification_requests")
        .insert(extendedPayload)
        .select()
        .single());

      if (requestError) {
        const errorMessage = (requestError as { message?: string })?.message || "";
        const isMissingExtendedColumn =
          (errorMessage.includes("message") ||
            errorMessage.includes("user_email") ||
            errorMessage.includes("user_name")) &&
          errorMessage.includes("column");

        if (isMissingExtendedColumn) {
          ({ data: requestData, error: requestError } = await supabase
            .from("verification_requests")
            .insert(basePayload)
            .select()
            .single());
        }
      }

      if (requestError) throw requestError;

      // Call edge function to send verification email
      const { data: emailData, error: emailError } = await supabase.functions.invoke(
        "send-verification-email",
        {
          body: {
            verificationRequestId: requestData.id,
            verifierEmail: verifierEmail,
            userName: userName,
            message: message.trim() || undefined,
            requestType: type,
            itemDetails: itemDetails,
            verificationToken: verificationToken,
          },
        }
      );

      if (emailError) {
        console.error("Error sending email:", emailError);
        // Still show success even if email fails - the request is created
        alert(`Verification request created successfully. However, there was an issue sending the email. Please contact support if the verifier doesn't receive it.`);
      } else {
        alert(`Verification request sent to ${verifierEmail}. They will receive an email with instructions.`);
      }

      onSuccess();
      onClose();
    } catch (error) {
      const details = {
        message: (error as { message?: string })?.message,
        code: (error as { code?: string })?.code,
        details: (error as { details?: string })?.details,
        hint: (error as { hint?: string })?.hint,
      };
      console.error("Error sending verification request:", error, details);
      const fallback = "Failed to send verification request. Please try again.";
      alert(details.message ? `${fallback}\n${details.message}` : fallback);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-lg w-full">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Request Verification</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                {type === "experience" ? "Experience Details" : "Education Details"}
              </h3>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-gray-600">
                    {type === "experience" ? "Position:" : "Degree:"}
                  </span>
                  <span className="ml-2 text-gray-900 font-medium">{itemDetails.title}</span>
                </div>
                <div>
                  <span className="text-gray-600">
                    {type === "experience" ? "Company:" : "Institution:"}
                  </span>
                  <span className="ml-2 text-gray-900 font-medium">{itemDetails.organization}</span>
                </div>
                <div>
                  <span className="text-gray-600">Period:</span>
                  <span className="ml-2 text-gray-900 font-medium">
                    {formatDate(itemDetails.startDate)} - {itemDetails.isCurrent ? "Present" : formatDate(itemDetails.endDate || "")}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Verifier Email
              </label>
              <input
                type="email"
                value={verifierEmail}
                disabled
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
              />
              <p className="text-xs text-gray-500 mt-1">
                {type === "experience" 
                  ? "This email was provided as your HR contact" 
                  : "This email was provided as your institution admin contact"}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Message (Optional)
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#162f16] focus:border-transparent"
                placeholder="Add any additional context for the verifier..."
              />
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex gap-3">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <div className="text-sm text-blue-800">
                  <p className="font-medium mb-1">What happens next?</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>An email will be sent to {verifierEmail}</li>
                    <li>They can verify or reject your {type} details</li>
                    <li>You&apos;ll be notified of their decision</li>
                    <li>A verification badge will appear if approved</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSendRequest}
                disabled={loading}
                className="flex-1 px-4 py-2 bg-[#162f16] text-white rounded-lg hover:bg-[#0f2310] transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Request"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
