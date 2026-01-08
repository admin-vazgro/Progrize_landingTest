"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { JOB_TITLES, COMPANIES, CITIES } from "@/lib/constants";

interface AddExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  userId: string;
  onSuccess: () => void;
}

export default function AddExperienceModal({ isOpen, onClose, userId, onSuccess }: AddExperienceModalProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    company_name: "",
    position: "",
    location: "",
    start_date: "",
    end_date: "",
    is_current: false,
    description: "",
    hr_email: ""
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [filteredPositions, setFilteredPositions] = useState<string[]>([]);
  const [filteredCompanies, setFilteredCompanies] = useState<string[]>([]);
  const [filteredLocations, setFilteredLocations] = useState<string[]>([]);
  const [showPositionDropdown, setShowPositionDropdown] = useState(false);
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showAddCompany, setShowAddCompany] = useState(false);

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
        .from("experiences")
        .insert({
          user_id: userId,
          company_name: formData.company_name,
          company_logo: "",
          position: formData.position,
          location: formData.location,
          start_date: formData.start_date,
          end_date: formData.is_current ? null : formData.end_date,
          is_current: formData.is_current,
          description: formData.description,
          hr_email: formData.hr_email,
          verified: false
        });

      if (error) throw error;

      // TODO: Send verification email to HR
      if (formData.hr_email) {
        console.log("Sending verification email to:", formData.hr_email);
        // This will be implemented with AI automation later
      }

      onSuccess();
      onClose();
      setFormData({
        company_name: "",
        position: "",
        location: "",
        start_date: "",
        end_date: "",
        is_current: false,
        description: "",
        hr_email: ""
      });
      setErrors({});
    } catch (error) {
      console.error("Error adding experience:", error);
      alert("Failed to add experience. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handlePositionInput = (value: string) => {
    setFormData({ ...formData, position: value });
    if (value.trim()) {
      const filtered = JOB_TITLES.filter(title => 
        title.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 10);
      setFilteredPositions(filtered);
      setShowPositionDropdown(true);
    } else {
      setShowPositionDropdown(false);
    }
  };

  const selectPosition = (position: string) => {
    setFormData({ ...formData, position });
    setShowPositionDropdown(false);
  };

  const handleCompanyInput = (value: string) => {
    setFormData({ ...formData, company_name: value });
    if (value.trim()) {
      const filtered = COMPANIES.filter(company => 
        company.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 10);
      setFilteredCompanies(filtered);
      setShowCompanyDropdown(true);
      setShowAddCompany(filtered.length === 0 || !filtered.some(c => c.toLowerCase() === value.toLowerCase()));
    } else {
      setShowCompanyDropdown(false);
      setShowAddCompany(false);
    }
  };

  const selectCompany = (company: string) => {
    setFormData({ ...formData, company_name: company });
    setShowCompanyDropdown(false);
    setShowAddCompany(false);
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
          <h2 className="text-xl font-semibold text-gray-900">Add Experience</h2>
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
          {/* Position */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Position *
            </label>
            <input
              type="text"
              required
              value={formData.position}
              onChange={(e) => handlePositionInput(e.target.value)}
              onFocus={() => formData.position && setShowPositionDropdown(true)}
              onBlur={() => setTimeout(() => setShowPositionDropdown(false), 200)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
              placeholder="Start typing position..."
            />
            {showPositionDropdown && filteredPositions.length > 0 && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                {filteredPositions.map((position) => (
                  <button
                    key={position}
                    type="button"
                    onClick={() => selectPosition(position)}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    {position}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Company Name */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Name *
            </label>
            <input
              type="text"
              required
              value={formData.company_name}
              onChange={(e) => handleCompanyInput(e.target.value)}
              onFocus={() => formData.company_name && setShowCompanyDropdown(true)}
              onBlur={() => setTimeout(() => setShowCompanyDropdown(false), 200)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
              placeholder="Start typing company name..."
            />
            {showCompanyDropdown && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                {filteredCompanies.map((company) => (
                  <button
                    key={company}
                    type="button"
                    onClick={() => selectCompany(company)}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    {company}
                  </button>
                ))}
                {showAddCompany && (
                  <button
                    type="button"
                    onClick={() => {
                      setShowCompanyDropdown(false);
                      setShowAddCompany(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-[#162f16] font-medium border-t border-gray-200"
                  >
                    + Add &quot;{formData.company_name}&quot;
                  </button>
                )}
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
              id="is_current"
              checked={formData.is_current}
              onChange={(e) => setFormData({ ...formData, is_current: e.target.checked, end_date: "" })}
              className="w-4 h-4 text-[#162f16] border-gray-300 rounded focus:ring-[#162f16]"
            />
            <label htmlFor="is_current" className="text-sm text-gray-700">
              I currently work here
            </label>
          </div>

          {/* HR Email for Verification */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              HR/Company Email (Optional)
              <span className="text-xs text-gray-500 ml-2">For verification badge</span>
            </label>
            <input
              type="email"
              value={formData.hr_email}
              onChange={(e) => setFormData({ ...formData, hr_email: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
              placeholder="hr@company.com"
            />
            <p className="text-xs text-gray-500 mt-1">
              We&apos;ll send a verification request to confirm your employment
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
              placeholder="Describe your role and achievements..."
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-4 py-2 bg-[#162f16] text-white rounded-lg font-medium hover:bg-[#0f2310] transition disabled:opacity-50"
            >
              {loading ? "Adding..." : "Add Experience"}
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