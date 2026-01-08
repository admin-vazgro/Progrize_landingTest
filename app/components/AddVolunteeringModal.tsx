"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { VOLUNTEER_CAUSES, CITIES } from "@/lib/constants";

interface AddVolunteeringModalProps {
  isOpen: boolean;
  onClose: () => void;
  userId: string;
  onSuccess: () => void;
}

export default function AddVolunteeringModal({ isOpen, onClose, userId, onSuccess }: AddVolunteeringModalProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    organization: "",
    role: "",
    cause: "",
    start_date: "",
    end_date: "",
    is_current: false,
    description: "",
    location: ""
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [filteredCauses, setFilteredCauses] = useState<string[]>([]);
  const [filteredLocations, setFilteredLocations] = useState<string[]>([]);
  const [showCauseDropdown, setShowCauseDropdown] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);

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

    if (endDate && endDate > today && !formData.is_current) {
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
        .from("volunteering")
        .insert({
          user_id: userId,
          organization: formData.organization,
          role: formData.role,
          cause: formData.cause,
          start_date: formData.start_date,
          end_date: formData.is_current ? null : formData.end_date,
          is_current: formData.is_current,
          description: formData.description,
          location: formData.location
        });

      if (error) throw error;

      onSuccess();
      onClose();
      setFormData({
        organization: "",
        role: "",
        cause: "",
        start_date: "",
        end_date: "",
        is_current: false,
        description: "",
        location: ""
      });
      setErrors({});
    } catch (error) {
      console.error("Error adding volunteering:", error);
      alert("Failed to add volunteering experience. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCauseInput = (value: string) => {
    setFormData({ ...formData, cause: value });
    if (value.trim()) {
      const filtered = VOLUNTEER_CAUSES.filter(cause => 
        cause.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 10);
      setFilteredCauses(filtered);
      setShowCauseDropdown(true);
    } else {
      setShowCauseDropdown(false);
    }
  };

  const selectCause = (cause: string) => {
    setFormData({ ...formData, cause });
    setShowCauseDropdown(false);
  };

  const handleLocationInput = (value: string) => {
    setFormData({ ...formData, location: value });
    if (value.trim()) {
      const filtered = CITIES.filter(city => 
        city.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 10);
      setFilteredLocations(filtered);
      setShowLocationDropdown(true);
    } else {
      setShowLocationDropdown(false);
    }
  };

  const selectLocation = (location: string) => {
    setFormData({ ...formData, location });
    setShowLocationDropdown(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Add Volunteering Experience</h2>
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
          {/* Organization */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Organization *
            </label>
            <input
              type="text"
              required
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
              placeholder="e.g., Red Cross"
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Role *
            </label>
            <input
              type="text"
              required
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
              placeholder="e.g., Volunteer Coordinator"
            />
          </div>

          {/* Cause */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cause
            </label>
            <input
              type="text"
              value={formData.cause}
              onChange={(e) => handleCauseInput(e.target.value)}
              onFocus={() => formData.cause && setShowCauseDropdown(true)}
              onBlur={() => setTimeout(() => setShowCauseDropdown(false), 200)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
              placeholder="Start typing cause..."
            />
            {showCauseDropdown && filteredCauses.length > 0 && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                {filteredCauses.map((cause) => (
                  <button
                    key={cause}
                    type="button"
                    onClick={() => selectCause(cause)}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    {cause}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Location */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => handleLocationInput(e.target.value)}
              onFocus={() => formData.location && setShowLocationDropdown(true)}
              onBlur={() => setTimeout(() => setShowLocationDropdown(false), 200)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
              placeholder="Start typing city name..."
            />
            {showLocationDropdown && filteredLocations.length > 0 && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                {filteredLocations.map((location) => (
                  <button
                    key={location}
                    type="button"
                    onClick={() => selectLocation(location)}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    {location}
                  </button>
                ))}
              </div>
            )}
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
                disabled={formData.is_current}
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
              id="is_current_volunteer"
              checked={formData.is_current}
              onChange={(e) => setFormData({ ...formData, is_current: e.target.checked, end_date: "" })}
              className="w-4 h-4 text-[#162f16] border-gray-300 rounded focus:ring-[#162f16]"
            />
            <label htmlFor="is_current_volunteer" className="text-sm text-gray-700">
              I currently volunteer here
            </label>
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
              placeholder="Describe your volunteer work..."
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-4 py-2 bg-[#162f16] text-white rounded-lg font-medium hover:bg-[#0f2310] transition disabled:opacity-50"
            >
              {loading ? "Adding..." : "Add Volunteering"}
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