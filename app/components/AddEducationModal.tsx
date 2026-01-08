"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { DEGREES, FIELDS_OF_STUDY, INSTITUTIONS, CITIES } from "@/lib/constants";

interface AddEducationModalProps {
  isOpen: boolean;
  onClose: () => void;
  userId: string;
  onSuccess: () => void;
}

export default function AddEducationModal({ isOpen, onClose, userId, onSuccess }: AddEducationModalProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    institution_name: "",
    degree: "",
    field_of_study: "",
    location: "",
    start_date: "",
    end_date: "",
    is_current: false,
    description: "",
    admin_email: ""
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [filteredDegrees, setFilteredDegrees] = useState<string[]>([]);
  const [filteredFields, setFilteredFields] = useState<string[]>([]);
  const [filteredInstitutions, setFilteredInstitutions] = useState<string[]>([]);
  const [filteredLocations, setFilteredLocations] = useState<string[]>([]);
  const [showDegreeDropdown, setShowDegreeDropdown] = useState(false);
  const [showFieldDropdown, setShowFieldDropdown] = useState(false);
  const [showInstitutionDropdown, setShowInstitutionDropdown] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showAddInstitution, setShowAddInstitution] = useState(false);

  const validateDates = () => {
    const newErrors: { [key: string]: string } = {};
    const today = new Date();
    const startDate = new Date(formData.start_date);
    const endDate = formData.end_date ? new Date(formData.end_date) : null;

    // Check if start date is in the future
    if (startDate > today) {
      newErrors.start_date = "Start date cannot be in the future";
    }

    // Check if end date is before start date
    if (endDate && endDate < startDate) {
      newErrors.end_date = "End date cannot be before start date";
    }

    // Check if end date is in the future (unless it's current)
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
        .from("education")
        .insert({
          user_id: userId,
          institution_name: formData.institution_name,
          institution_logo: "",
          degree: formData.degree,
          field_of_study: formData.field_of_study,
          location: formData.location,
          start_date: formData.start_date,
          end_date: formData.is_current ? null : formData.end_date,
          is_current: formData.is_current,
          description: formData.description,
          admin_email: formData.admin_email,
          verified: false
        });

      if (error) throw error;

      // TODO: Send verification email to institution admin
      if (formData.admin_email) {
        console.log("Sending verification email to:", formData.admin_email);
        // This will be implemented with AI automation later
      }

      onSuccess();
      onClose();
      setFormData({
        institution_name: "",
        degree: "",
        field_of_study: "",
        location: "",
        start_date: "",
        end_date: "",
        is_current: false,
        description: "",
        admin_email: ""
      });
      setErrors({});
    } catch (error) {
      console.error("Error adding education:", error);
      alert("Failed to add education. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDegreeInput = (value: string) => {
    setFormData({ ...formData, degree: value });
    if (value.trim()) {
      const filtered = DEGREES.filter(degree => 
        degree.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 10);
      setFilteredDegrees(filtered);
      setShowDegreeDropdown(true);
    } else {
      setShowDegreeDropdown(false);
    }
  };

  const selectDegree = (degree: string) => {
    setFormData({ ...formData, degree });
    setShowDegreeDropdown(false);
  };

  const handleFieldInput = (value: string) => {
    setFormData({ ...formData, field_of_study: value });
    if (value.trim()) {
      const filtered = FIELDS_OF_STUDY.filter(field => 
        field.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 10);
      setFilteredFields(filtered);
      setShowFieldDropdown(true);
    } else {
      setShowFieldDropdown(false);
    }
  };

  const selectField = (field: string) => {
    setFormData({ ...formData, field_of_study: field });
    setShowFieldDropdown(false);
  };

  const handleInstitutionInput = (value: string) => {
    setFormData({ ...formData, institution_name: value });
    if (value.trim()) {
      const filtered = INSTITUTIONS.filter(institution => 
        institution.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 10);
      setFilteredInstitutions(filtered);
      setShowInstitutionDropdown(true);
      setShowAddInstitution(filtered.length === 0 || !filtered.some(i => i.toLowerCase() === value.toLowerCase()));
    } else {
      setShowInstitutionDropdown(false);
      setShowAddInstitution(false);
    }
  };

  const selectInstitution = (institution: string) => {
    setFormData({ ...formData, institution_name: institution });
    setShowInstitutionDropdown(false);
    setShowAddInstitution(false);
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
          <h2 className="text-xl font-semibold text-gray-900">Add Education</h2>
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
          {/* Degree */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Degree *
            </label>
            <input
              type="text"
              required
              value={formData.degree}
              onChange={(e) => handleDegreeInput(e.target.value)}
              onFocus={() => formData.degree && setShowDegreeDropdown(true)}
              onBlur={() => setTimeout(() => setShowDegreeDropdown(false), 200)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
              placeholder="Start typing degree..."
            />
            {showDegreeDropdown && filteredDegrees.length > 0 && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                {filteredDegrees.map((degree) => (
                  <button
                    key={degree}
                    type="button"
                    onClick={() => selectDegree(degree)}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    {degree}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Institution Name */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Institution Name *
            </label>
            <input
              type="text"
              required
              value={formData.institution_name}
              onChange={(e) => handleInstitutionInput(e.target.value)}
              onFocus={() => formData.institution_name && setShowInstitutionDropdown(true)}
              onBlur={() => setTimeout(() => setShowInstitutionDropdown(false), 200)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
              placeholder="Start typing institution name..."
            />
            {showInstitutionDropdown && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                {filteredInstitutions.map((institution) => (
                  <button
                    key={institution}
                    type="button"
                    onClick={() => selectInstitution(institution)}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    {institution}
                  </button>
                ))}
                {showAddInstitution && (
                  <button
                    type="button"
                    onClick={() => {
                      setShowInstitutionDropdown(false);
                      setShowAddInstitution(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-[#162f16] font-medium border-t border-gray-200"
                  >
                    + Add &quot;{formData.institution_name}&quot;
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Field of Study */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Field of Study *
            </label>
            <input
              type="text"
              required
              value={formData.field_of_study}
              onChange={(e) => handleFieldInput(e.target.value)}
              onFocus={() => formData.field_of_study && setShowFieldDropdown(true)}
              onBlur={() => setTimeout(() => setShowFieldDropdown(false), 200)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
              placeholder="Start typing field of study..."
            />
            {showFieldDropdown && filteredFields.length > 0 && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                {filteredFields.map((field) => (
                  <button
                    key={field}
                    type="button"
                    onClick={() => selectField(field)}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    {field}
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
              id="is_current_edu"
              checked={formData.is_current}
              onChange={(e) => setFormData({ ...formData, is_current: e.target.checked, end_date: "" })}
              className="w-4 h-4 text-[#162f16] border-gray-300 rounded focus:ring-[#162f16]"
            />
            <label htmlFor="is_current_edu" className="text-sm text-gray-700">
              I currently study here
            </label>
          </div>

          {/* Admin Email for Verification */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Admin/University Email (Optional)
              <span className="text-xs text-gray-500 ml-2">For verification badge</span>
            </label>
            <input
              type="email"
              value={formData.admin_email}
              onChange={(e) => setFormData({ ...formData, admin_email: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
              placeholder="admin@university.edu"
            />
            <p className="text-xs text-gray-500 mt-1">
              We&apos;ll send a verification request to confirm your enrollment
            </p>
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
              placeholder="Describe your studies and achievements..."
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-4 py-2 bg-[#162f16] text-white rounded-lg font-medium hover:bg-[#0f2310] transition disabled:opacity-50"
            >
              {loading ? "Adding..." : "Add Education"}
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