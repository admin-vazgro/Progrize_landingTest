"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";
import EditExperienceModal from "./EditExperienceModal";

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
}

interface ExperienceCardProps {
  experience: Experience;
  isOwner: boolean;
  onUpdate: () => void;
}

export default function ExperienceCard({ experience, isOwner, onUpdate }: ExperienceCardProps) {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

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

  return (
    <>
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
            <h4 className="font-semibold text-gray-900 text-sm">{experience.position}</h4>
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
        <p className="text-xs text-gray-500 mb-2">
          {formatDate(experience.start_date)} - {experience.is_current ? "Present" : formatDate(experience.end_date)}
        </p>
        {isOwner && (
          <button
            onClick={() => setEditModalOpen(true)}
            className="text-xs text-[#162f16] hover:underline"
          >
            Edit
          </button>
        )}
      </div>

      <EditExperienceModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        experience={experience}
        onSuccess={onUpdate}
      />
    </>
  );
}