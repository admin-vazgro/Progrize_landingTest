"use client";

import { useState } from "react";

interface Certification {
  id: string;
  name: string;
  issuing_organization: string;
  issue_date: string;
  expiration_date: string | null;
  credential_id: string;
  credential_url: string;
  does_not_expire: boolean;
}

interface CertificationCardProps {
  certification: Certification;
  onEdit: (certification: Certification) => void;
  onDelete: (id: string) => void;
}

export default function CertificationCard({
  certification,
  onEdit,
  onDelete,
}: CertificationCardProps) {
  const [showMenu, setShowMenu] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
  };

  const isExpired = () => {
    if (certification.does_not_expire || !certification.expiration_date) {
      return false;
    }
    return new Date(certification.expiration_date) < new Date();
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition relative">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h4 className="font-semibold text-gray-900">{certification.name}</h4>
            {isExpired() && (
              <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs rounded">
                Expired
              </span>
            )}
          </div>
          <p className="text-sm text-gray-600 mt-1">{certification.issuing_organization}</p>
          <p className="text-xs text-gray-500 mt-1">
            Issued {formatDate(certification.issue_date)}
            {certification.does_not_expire ? (
              <span className="ml-1">• No Expiration Date</span>
            ) : certification.expiration_date ? (
              <span className="ml-1">• Expires {formatDate(certification.expiration_date)}</span>
            ) : null}
          </p>
          {certification.credential_id && (
            <p className="text-xs text-gray-500 mt-1">
              Credential ID: {certification.credential_id}
            </p>
          )}
          {certification.credential_url && (
            <a
              href={certification.credential_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#162f16] hover:underline mt-1 inline-block"
            >
              Show credential →
            </a>
          )}
        </div>

        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </button>

          {showMenu && (
            <div className="absolute right-0 mt-1 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              <button
                onClick={() => {
                  onEdit(certification);
                  setShowMenu(false);
                }}
                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  if (confirm("Are you sure you want to delete this certification?")) {
                    onDelete(certification.id);
                  }
                  setShowMenu(false);
                }}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}