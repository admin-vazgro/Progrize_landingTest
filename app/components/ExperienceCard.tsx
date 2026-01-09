"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";
import EditExperienceModal from "./EditExperienceModal";
import VerificationBadge from "./VerificationBadge";
import RequestVerificationModal from "./RequestVerificationModal";

interface Experience {
  id: string;
  company_name: string;
  company_logo: string;
  position: string;
  location: string;
  start_date: string;
  end_date: string;
  is_current: boolean;
  description: string;
  hr_email?: string;
  verified?: boolean;
  verified_by?: string;
  verified_at?: string;
}

interface ExperienceCardProps {
  experience: Experience;
  isOwner: boolean;
  onUpdate: () => void;
  variant?: "full" | "compact";
}

export default function ExperienceCard({
  experience,
  isOwner,
  onUpdate,
  variant = "full",
}: ExperienceCardProps) {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [requestVerificationOpen, setRequestVerificationOpen] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState<string | null>(null);

  useEffect(() => {
    checkVerificationStatus();
  }, [experience.id]);

  const checkVerificationStatus = async () => {
    try {
      const { data, error } = await supabase
        .from("verification_requests")
        .select("status")
        .eq("reference_id", experience.id)
        .eq("request_type", "experience")
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      if (error && error.code !== "PGRST116") throw error;
      
      if (data) {
        setVerificationStatus(data.status);
      }
    } catch (error) {
      console.error("Error checking verification status:", error);
    }
  };

  const handleDelete = async () => {
    if (isDeleting) return;
    setIsDeleting(true);

    try {
      const { error } = await supabase
        .from("experiences")
        .delete()
        .eq("id", experience.id);

      if (error) throw error;

      onUpdate();
      setShowDeleteConfirm(false);
    } catch (error) {
      console.error("Error deleting experience:", error);
      alert("Failed to delete experience. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.getFullYear().toString();
  };

  const getVerificationStatusBadge = () => {
    if (experience.verified || verificationStatus === "verified") {
      return (
        <VerificationBadge
          verified={true}
          verifiedBy={experience.verified_by}
          verifiedAt={experience.verified_at}
          size="sm"
        />
      );
    }

    if (verificationStatus === "pending") {
      return (
        <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
          Pending Verification
        </span>
      );
    }

    if (verificationStatus === "rejected") {
      return (
        <span className="px-2 py-0.5 bg-red-100 text-red-700 rounded-full text-xs font-medium">
          Verification Rejected
        </span>
      );
    }

    return null;
  };

  const dateLabel = `${formatDate(experience.start_date)} - ${
    experience.is_current ? "Present" : formatDate(experience.end_date)
  }`;

  const fullCard = (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
      <div className="flex items-start gap-3 mb-3">
        {experience.company_logo ? (
          <Image
            src={experience.company_logo}
            alt={experience.company_name}
            width={40}
            height={40}
            className="rounded object-contain"
          />
        ) : (
          <div className="w-10 h-10 rounded bg-gray-200 flex items-center justify-center text-gray-600 text-xs font-semibold">
            {experience.company_name.substring(0, 2).toUpperCase()}
          </div>
        )}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-semibold text-gray-900 text-sm">{experience.position}</h4>
            {getVerificationStatusBadge()}
          </div>
          <p className="text-xs text-gray-600">{experience.company_name}</p>
          {experience.location && (
            <p className="text-xs text-gray-500">{experience.location}</p>
          )}
        </div>
        {isOwner && (
          <div className="relative">
            <button
              onClick={() => setShowDeleteConfirm(!showDeleteConfirm)}
              className="text-gray-400 hover:text-red-600 transition"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>

            {showDeleteConfirm && (
              <div className="absolute right-0 top-6 bg-white rounded-lg shadow-lg border border-gray-200 p-3 z-10 w-48">
                <p className="text-xs text-gray-700 mb-2">Delete this experience?</p>
                <div className="flex gap-2">
                  <button
                    onClick={handleDelete}
                    disabled={isDeleting}
                    className="flex-1 px-2 py-1 bg-red-600 text-white rounded text-xs font-medium hover:bg-red-700 transition disabled:opacity-50"
                  >
                    {isDeleting ? "..." : "Delete"}
                  </button>
                  <button
                    onClick={() => setShowDeleteConfirm(false)}
                    className="flex-1 px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium hover:bg-gray-200 transition"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <p className="text-xs text-gray-500 mb-2">{dateLabel}</p>
      {experience.description && (
        <p className="text-xs text-gray-700 mb-3 line-clamp-2">{experience.description}</p>
      )}
      {isOwner && (
        <div className="flex items-center gap-3">
          <button
            onClick={() => setEditModalOpen(true)}
            className="text-xs text-[#162f16] hover:underline"
          >
            Edit
          </button>
          {experience.hr_email &&
            !experience.verified &&
            verificationStatus !== "pending" &&
            verificationStatus !== "verified" && (
            <button
              onClick={() => setRequestVerificationOpen(true)}
              className="text-xs text-blue-600 hover:underline flex items-center gap-1"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Request Verification
            </button>
          )}
        </div>
      )}
    </div>
  );

  const compactCard = (
    <div className="border border-gray-200 rounded-xl p-4">
      <div className="flex items-start justify-between gap-3 mb-4">
        <div>{getVerificationStatusBadge()}</div>
        {isOwner && (
          <div className="relative">
            <button
              onClick={() => setShowDeleteConfirm(!showDeleteConfirm)}
              className="text-gray-400 hover:text-red-600 transition"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>

            {showDeleteConfirm && (
              <div className="absolute right-0 top-6 bg-white rounded-lg shadow-lg border border-gray-200 p-3 z-10 w-48">
                <p className="text-xs text-gray-700 mb-2">Delete this experience?</p>
                <div className="flex gap-2">
                  <button
                    onClick={handleDelete}
                    disabled={isDeleting}
                    className="flex-1 px-2 py-1 bg-red-600 text-white rounded text-xs font-medium hover:bg-red-700 transition disabled:opacity-50"
                  >
                    {isDeleting ? "..." : "Delete"}
                  </button>
                  <button
                    onClick={() => setShowDeleteConfirm(false)}
                    className="flex-1 px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium hover:bg-gray-200 transition"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="flex items-start gap-3 mb-3">
        {experience.company_logo ? (
          <Image
            src={experience.company_logo}
            alt={experience.company_name}
            width={44}
            height={44}
            className="w-11 h-11 rounded-full object-contain"
          />
        ) : (
          <div className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 text-xs font-semibold">
            {experience.company_name.substring(0, 2).toUpperCase()}
          </div>
        )}
      </div>

      <h4 className="font-semibold text-gray-900 text-sm mb-2">{experience.position}</h4>
      <p className="text-xs text-gray-600 mb-2">
        {experience.company_name}
        {experience.location ? ` || ${experience.location}` : ""}
      </p>
      <p className="text-xs text-gray-500 mb-3">{dateLabel}</p>
    </div>
  );

  return (
    <>
      {variant === "compact" ? compactCard : fullCard}

      <EditExperienceModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        experience={experience}
        onSuccess={onUpdate}
      />

      {experience.hr_email && (
        <RequestVerificationModal
          isOpen={requestVerificationOpen}
          onClose={() => setRequestVerificationOpen(false)}
          type="experience"
          referenceId={experience.id}
          verifierEmail={experience.hr_email}
          itemDetails={{
            title: experience.position,
            organization: experience.company_name,
            startDate: experience.start_date,
            endDate: experience.end_date,
            isCurrent: experience.is_current,
          }}
          onSuccess={() => {
            checkVerificationStatus();
            onUpdate();
          }}
        />
      )}
    </>
  );
}
