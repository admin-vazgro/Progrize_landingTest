"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { SKILLS } from "@/lib/constants";

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

interface EditProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
  onSuccess: () => void;
}

export default function EditProjectModal({
  isOpen,
  onClose,
  project,
  onSuccess,
}: EditProjectModalProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    start_date: "",
    end_date: "",
    is_ongoing: false,
    project_url: "",
    associated_with: "",
    skills: [] as string[],
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [skillInput, setSkillInput] = useState("");
  const [filteredSkills, setFilteredSkills] = useState<string[]>([]);
  const [showSkillDropdown, setShowSkillDropdown] = useState(false);

  useEffect(() => {
    if (project) {
      setFormData({
        name: project.name || "",
        description: project.description || "",
        start_date: project.start_date || "",
        end_date: project.end_date || "",
        is_ongoing: project.is_ongoing || false,
        project_url: project.project_url || "",
        associated_with: project.associated_with || "",
        skills: project.skills || [],
      });
    }
  }, [project]);

  const validateDates = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    const today = new Date().toISOString().split("T")[0];

    if (formData.start_date > today) {
      newErrors.start_date = "Start date cannot be in the future";
    }

    if (!formData.is_ongoing && formData.end_date) {
      if (formData.end_date > today) {
        newErrors.end_date = "End date cannot be in the future";
      }
      if (formData.end_date < formData.start_date) {
        newErrors.end_date = "End date must be after start date";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateDates()) {
      return;
    }

    setLoading(true);

    try {
      const updateData = {
        name: formData.name,
        description: formData.description,
        start_date: formData.start_date,
        end_date: formData.is_ongoing ? null : formData.end_date || null,
        is_ongoing: formData.is_ongoing,
        project_url: formData.project_url,
        associated_with: formData.associated_with,
        skills: formData.skills,
      };

      const { error } = await supabase
        .from("projects")
        .update(updateData)
        .eq("id", project.id);

      if (error) throw error;

      onSuccess();
      onClose();
    } catch (error) {
      console.error("Error updating project:", error);
      alert("Failed to update project. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSkillInput = (value: string) => {
    setSkillInput(value);
    
    if (value.length > 0) {
      const filtered = SKILLS.filter(
        (skill) =>
          skill.toLowerCase().includes(value.toLowerCase()) &&
          !formData.skills.includes(skill)
      );
      setFilteredSkills(filtered);
      setShowSkillDropdown(true);
    } else {
      setShowSkillDropdown(false);
    }
  };

  const addSkill = (skill: string) => {
    if (!formData.skills.includes(skill)) {
      setFormData({ ...formData, skills: [...formData.skills, skill] });
    }
    setSkillInput("");
    setShowSkillDropdown(false);
  };

  const removeSkill = (skillToRemove: string) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((s) => s !== skillToRemove),
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Edit Project</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#162f16] focus:border-transparent"
                placeholder="e.g., E-commerce Platform"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description *
              </label>
              <textarea
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#162f16] focus:border-transparent"
                placeholder="Describe your project..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Associated With
              </label>
              <input
                type="text"
                value={formData.associated_with}
                onChange={(e) => setFormData({ ...formData, associated_with: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#162f16] focus:border-transparent"
                placeholder="e.g., Company name or organization"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Start Date *
                </label>
                <input
                  type="date"
                  required
                  value={formData.start_date}
                  onChange={(e) => setFormData({ ...formData, start_date: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#162f16] focus:border-transparent"
                />
                {errors.start_date && (
                  <p className="text-red-500 text-xs mt-1">{errors.start_date}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  End Date
                </label>
                <input
                  type="date"
                  disabled={formData.is_ongoing}
                  value={formData.end_date}
                  onChange={(e) => setFormData({ ...formData, end_date: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#162f16] focus:border-transparent disabled:bg-gray-100"
                />
                {errors.end_date && (
                  <p className="text-red-500 text-xs mt-1">{errors.end_date}</p>
                )}
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="is_ongoing"
                checked={formData.is_ongoing}
                onChange={(e) => setFormData({ ...formData, is_ongoing: e.target.checked, end_date: "" })}
                className="w-4 h-4 text-[#162f16] border-gray-300 rounded focus:ring-[#162f16]"
              />
              <label htmlFor="is_ongoing" className="ml-2 text-sm text-gray-700">
                This project is ongoing
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project URL
              </label>
              <input
                type="url"
                value={formData.project_url}
                onChange={(e) => setFormData({ ...formData, project_url: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#162f16] focus:border-transparent"
                placeholder="https://..."
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Skills
              </label>
              <input
                type="text"
                value={skillInput}
                onChange={(e) => handleSkillInput(e.target.value)}
                onFocus={() => skillInput && setShowSkillDropdown(true)}
                onBlur={() => setTimeout(() => setShowSkillDropdown(false), 200)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#162f16] focus:border-transparent"
                placeholder="Type to search skills..."
              />
              {showSkillDropdown && filteredSkills.length > 0 && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                  {filteredSkills.map((skill, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => addSkill(skill)}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              )}
              {formData.skills.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {formData.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#162f16] text-white rounded-full text-xs flex items-center gap-2"
                    >
                      {skill}
                      <button
                        type="button"
                        onClick={() => removeSkill(skill)}
                        className="hover:text-gray-300"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              )}
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
                type="submit"
                disabled={loading}
                className="flex-1 px-4 py-2 bg-[#162f16] text-white rounded-lg hover:bg-[#0f2310] transition disabled:opacity-50"
              >
                {loading ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}