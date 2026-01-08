"use client";

import { useState } from "react";

interface Project {
  id: string;
  name: string;
  description: string;
  start_date: string;
  end_date: string | null;
  is_ongoing: boolean;
  project_url: string;
  associated_with: string;
  skills: string[];
}

interface ProjectCardProps {
  project: Project;
  onEdit: (project: Project) => void;
  onDelete: (id: string) => void;
}

export default function ProjectCard({
  project,
  onEdit,
  onDelete,
}: ProjectCardProps) {
  const [showMenu, setShowMenu] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
  };

  const getDuration = () => {
    const start = new Date(project.start_date);
    const end = project.is_ongoing ? new Date() : new Date(project.end_date || "");
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
          <h4 className="font-semibold text-gray-900">{project.name}</h4>
          {project.associated_with && (
            <p className="text-sm text-gray-600 mt-1">{project.associated_with}</p>
          )}
          <p className="text-xs text-gray-500 mt-1">
            {formatDate(project.start_date)} - {project.is_ongoing ? "Present" : formatDate(project.end_date || "")} • {getDuration()}
          </p>
          <p className="text-sm text-gray-700 mt-2 leading-relaxed">
            {project.description}
          </p>
          {project.project_url && (
            <a
              href={project.project_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#162f16] hover:underline mt-2 inline-block"
            >
              View project →
            </a>
          )}
          {project.skills && project.skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {project.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
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
                  onEdit(project);
                  setShowMenu(false);
                }}
                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  if (confirm("Are you sure you want to delete this project?")) {
                    onDelete(project.id);
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