"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { VOLUNTEER_CAUSES, CITIES } from "@/lib/constants";

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

interface EditVolunteeringModalProps {
  isOpen: boolean;
  onClose: () => void;
  volunteering: Volunteering;
  onSuccess: () => void;
}

export default function EditVolunteeringModal({
  isOpen,
  onClose,
  volunteering,
  onSuccess,
}: EditVolunteeringModalProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    organization: "",
    role: "",
    cause: "",
    start_date: "",
    end_date: "",
    is_current: false,
    description: "",
    location: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [filteredCauses, setFilteredCauses] = useState<string[]>([]);
  const [filteredLocations, setFilteredLocations] = useState<string[]>([]);
  const [showCauseDropdown, setShowCauseDropdown] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);

  useEffect(() => {
    if (volunteering) {
      setFormData({
        organization: volunteering.organization || "",
        role: volunteering.role || "",
        cause: volunteering.cause || "",
        start_date: volunteering.start_date || "",
        end_date: volunteering.end_date || "",
        is_current: volunteering.is_current || false,
        description: volunteering.description || "",
        location: volunteering.location || "",
      });
    }
  }, [volunteering]);

  const validateDates = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    const today = new Date().toISOString().split("T")[0];

    if (formData.start_date > today) {
      newErrors.start_date = "Start date cannot be in the future";
    }

    if (!formData.is_current && formData.end_date) {
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
        organization: formData.organization,
        role: formData.role,
        cause: formData.cause,
        start_date: formData.start_date,
        end_date: formData.is_current ? null : formData.end_date || null,
        is_current: formData.is_current,
        description: formData.description,
        location: formData.location,
      };

      const { error } = await supabase
        .from("volunteering")
        .update(updateData)
        .eq("id", volunteering.id);

      if (error) throw error;

      onSuccess();
      onClose();
    } catch (error) {
      console.error("Error updating volunteering:", error);
      alert("Failed to update volunteering experience. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCauseInput = (value: string) => {
    setFormData({ ...formData, cause: value });
    
    if (value.length > 0) {
      const filtered = VOLUNTEER_CAUSES.filter((cause) =>
        cause.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCauses(filtered);
      setShowCauseDropdown(true);
    } else {
      setShowCauseDropdown(false);
    }
  };

  const handleLocationInput = (value: string) => {
    setFormData({ ...formData, location: value });
    
    if (value.length > 0) {
      const filtered = CITIES.filter((city) =>
        city.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredLocations(filtered);
      setShowLocationDropdown(true);
    } else {
      setShowLocationDropdown(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Edit Volunteering</h2>
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
                Organization *
              </label>
              <input
                type="text"
                required
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#162f16] focus:border-transparent"
                placeholder="e.g., Red Cross"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Role *
              </label>
              <input
                type="text"
                required
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#162f16] focus:border-transparent"
                placeholder="e.g., Volunteer Coordinator"
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cause *
              </label>
              <input
                type="text"
                required
                value={formData.cause}
                onChange={(e) => handleCauseInput(e.target.value)}
                onFocus={() => formData.cause && setShowCauseDropdown(true)}
                onBlur={() => setTimeout(() => setShowCauseDropdown(false), 200)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#162f16] focus:border-transparent"
                placeholder="e.g., Education"
              />
              {showCauseDropdown && filteredCauses.length > 0 && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                  {filteredCauses.map((cause, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, cause });
                        setShowCauseDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                    >
                      {cause}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location *
              </label>
              <input
                type="text"
                required
                value={formData.location}
                onChange={(e) => handleLocationInput(e.target.value)}
                onFocus={() => formData.location && setShowLocationDropdown(true)}
                onBlur={() => setTimeout(() => setShowLocationDropdown(false), 200)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#162f16] focus:border-transparent"
                placeholder="e.g., New York, NY"
              />
              {showLocationDropdown && filteredLocations.length > 0 && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                  {filteredLocations.map((location, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, location });
                        setShowLocationDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                    >
                      {location}
                    </button>
                  ))}
                </div>
              )}
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
                  disabled={formData.is_current}
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
                id="is_current"
                checked={formData.is_current}
                onChange={(e) => setFormData({ ...formData, is_current: e.target.checked, end_date: "" })}
                className="w-4 h-4 text-[#162f16] border-gray-300 rounded focus:ring-[#162f16]"
              />
              <label htmlFor="is_current" className="ml-2 text-sm text-gray-700">
                I currently volunteer here
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#162f16] focus:border-transparent"
                placeholder="Describe your volunteering experience..."
              />
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