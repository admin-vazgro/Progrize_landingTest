"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { SKILLS } from "@/lib/constants";

interface AddProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  userId: string;
  onSuccess: () => void;
}

export default function AddProjectModal({ isOpen, onClose, userId, onSuccess }: AddProjectModalProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    start_date: "",
    end_date: "",
    is_ongoing: false,
    project_url: "",
    associated_with: "",
    skills: [] as string[]
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [skillInput, setSkillInput] = useState("");
  const [filteredSkills, setFilteredSkills] = useState<string[]>([]);
  const [showSkillDropdown, setShowSkillDropdown] = useState(false);

  const validateDates = () => {
    const newErrors: { [key: string]: string } = {};
    const today = new Date();
    const startDate = new Date(formData.start_date);
    const endDate = formData.end_date ? new Date(formData.end_date) : null;

    if (startDate > today) {
      newErrors.start_date = "Start date cannot be in the future";
    }

    if (endDate && endDate < startDate) {
      newErrors.end_date = "End date cannot be before start date";
    }

    if (endDate && endDate > today && !formData.is_ongoing) {
      newErrors.end_date = "End date cannot be in the future";
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
      const { error } = await supabase
        .from("projects")
        .insert({
          user_id: userId,
          name: formData.name,
          description: formData.description,
          start_date: formData.start_date,
          end_date: formData.is_ongoing ? null : formData.end_date,
          is_ongoing: formData.is_ongoing,
          project_url: formData.project_url,
          associated_with: formData.associated_with,
          skills: formData.skills
        });

      if (error) throw error;

      onSuccess();
      onClose();
      setFormData({
        name: "",
        description: "",
        start_date: "",
        end_date: "",
        is_ongoing: false,
        project_url: "",
        associated_with: "",
        skills: []
      });
      setErrors({});
    } catch (error) {
      console.error("Error adding project:", error);
      alert("Failed to add project. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSkillInput = (value: string) => {
    setSkillInput(value);
    if (value.trim()) {
      const filtered = SKILLS.filter(skill => 
        skill.toLowerCase().includes(value.toLowerCase()) &&
        !formData.skills.includes(skill)
      ).slice(0, 10);
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
      skills: formData.skills.filter(skill => skill !== skillToRemove)
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Add Project</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Project Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
              placeholder="e.g., E-commerce Platform"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
              placeholder="Describe your project..."
            />
          </div>

          {/* Associated With */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Associated With
            </label>
            <input
              type="text"
              value={formData.associated_with}
              onChange={(e) => setFormData({ ...formData, associated_with: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
              placeholder="e.g., Company name or organization"
            />
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Start Date *
              </label>
              <input
                type="date"
                required
                value={formData.start_date}
                onChange={(e) => setFormData({ ...formData, start_date: e.target.value })}
                max={new Date().toISOString().split('T')[0]}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm ${
                  errors.start_date ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.start_date && (
                <p className="text-xs text-red-500 mt-1">{errors.start_date}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                End Date
              </label>
              <input
                type="date"
                value={formData.end_date}
                onChange={(e) => setFormData({ ...formData, end_date: e.target.value })}
                disabled={formData.is_ongoing}
                max={new Date().toISOString().split('T')[0]}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm disabled:bg-gray-100 ${
                  errors.end_date ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.end_date && (
                <p className="text-xs text-red-500 mt-1">{errors.end_date}</p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="is_ongoing"
              checked={formData.is_ongoing}
              onChange={(e) => setFormData({ ...formData, is_ongoing: e.target.checked, end_date: "" })}
              className="w-4 h-4 text-[#162f16] border-gray-300 rounded focus:ring-[#162f16]"
            />
            <label htmlFor="is_ongoing" className="text-sm text-gray-700">
              This project is ongoing
            </label>
          </div>

          {/* Project URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project URL
            </label>
            <input
              type="url"
              value={formData.project_url}
              onChange={(e) => setFormData({ ...formData, project_url: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
              placeholder="https://..."
            />
          </div>

          {/* Skills */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Skills Used
            </label>
            <input
              type="text"
              value={skillInput}
              onChange={(e) => handleSkillInput(e.target.value)}
              onFocus={() => skillInput && setShowSkillDropdown(true)}
              onBlur={() => setTimeout(() => setShowSkillDropdown(false), 200)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
              placeholder="Start typing to add skills..."
            />
            {showSkillDropdown && filteredSkills.length > 0 && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                {filteredSkills.map((skill) => (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => addSkill(skill)}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    {skill}
                  </button>
                ))}
              </div>
            )}
          </div>

          {formData.skills.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {formData.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => removeSkill(skill)}
                    className="hover:text-red-600"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-4 py-2 bg-[#162f16] text-white rounded-lg font-medium hover:bg-[#0f2310] transition disabled:opacity-50"
            >
              {loading ? "Adding..." : "Add Project"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}