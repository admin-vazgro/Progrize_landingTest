"use client";

import { useState } from "react";

interface Publication {
  id: string;
  title: string;
  publisher: string;
  publication_date: string;
  publication_url: string;
  description: string;
  authors: string[];
}

interface PublicationCardProps {
  publication: Publication;
  onEdit: (publication: Publication) => void;
  onDelete: (id: string) => void;
}

export default function PublicationCard({
  publication,
  onEdit,
  onDelete,
}: PublicationCardProps) {
  const [showMenu, setShowMenu] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long" });
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition relative">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900">{publication.title}</h4>
          <p className="text-sm text-gray-600 mt-1">{publication.publisher}</p>
          <p className="text-xs text-gray-500 mt-1">
            Published {formatDate(publication.publication_date)}
          </p>
          {publication.authors && publication.authors.length > 0 && (
            <p className="text-xs text-gray-600 mt-1">
              <span className="font-medium">Authors:</span> {publication.authors.join(", ")}
            </p>
          )}
          {publication.description && (
            <p className="text-sm text-gray-700 mt-2 leading-relaxed">
              {publication.description}
            </p>
          )}
          {publication.publication_url && (
            <a
              href={publication.publication_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#162f16] hover:underline mt-2 inline-block"
            >
              View publication →
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
                  onEdit(publication);
                  setShowMenu(false);
                }}
                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  if (confirm("Are you sure you want to delete this publication?")) {
                    onDelete(publication.id);
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