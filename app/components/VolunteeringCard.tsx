"use client";

import { useState } from "react";

interface Volunteering {
  id: string;
  organization: string;
  role: string;
  cause: string;
  start_date: string;
  end_date: string | null;
  is_current: boolean;
  description: string;
  location: string;
}

interface VolunteeringCardProps {
  volunteering: Volunteering;
  onEdit: (volunteering: Volunteering) => void;
  onDelete: (id: string) => void;
}

export default function VolunteeringCard({
  volunteering,
  onEdit,
  onDelete,
}: VolunteeringCardProps) {
  const [showMenu, setShowMenu] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
  };

  const getDuration = () => {
    const start = new Date(volunteering.start_date);
    const end = volunteering.is_current ? new Date() : new Date(volunteering.end_date || "");
    const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (years > 0 && remainingMonths > 0) {
      return `${years} yr${years > 1 ? "s" : ""} ${remainingMonths} mo${remainingMonths > 1 ? "s" : ""}`;
    } else if (years > 0) {
      return `${years} yr${years > 1 ? "s" : ""}`;
    } else {
      return `${remainingMonths} mo${remainingMonths > 1 ? "s" : ""}`;
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition relative">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900">{volunteering.role}</h4>
          <p className="text-sm text-gray-600 mt-1">{volunteering.organization}</p>
          <p className="text-xs text-gray-500 mt-1">
            <span className="inline-flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {volunteering.location}
            </span>
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {formatDate(volunteering.start_date)} - {volunteering.is_current ? "Present" : formatDate(volunteering.end_date || "")} • {getDuration()}
          </p>
          <p className="text-xs text-gray-600 mt-1">
            <span className="font-medium">Cause:</span> {volunteering.cause}
          </p>
          {volunteering.description && (
            <p className="text-sm text-gray-700 mt-2 leading-relaxed">
              {volunteering.description}
            </p>
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
                  onEdit(volunteering);
                  setShowMenu(false);
                }}
                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  if (confirm("Are you sure you want to delete this volunteering experience?")) {
                    onDelete(volunteering.id);
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