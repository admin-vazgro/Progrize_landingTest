"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { CERTIFICATION_ORGANIZATIONS } from "@/lib/constants";

interface AddCertificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  userId: string;
  onSuccess: () => void;
}

export default function AddCertificationModal({ isOpen, onClose, userId, onSuccess }: AddCertificationModalProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    issuing_organization: "",
    issue_date: "",
    expiration_date: "",
    credential_id: "",
    credential_url: "",
    does_not_expire: false
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [filteredOrgs, setFilteredOrgs] = useState<string[]>([]);
  const [showOrgDropdown, setShowOrgDropdown] = useState(false);

  const validateDates = () => {
    const newErrors: { [key: string]: string } = {};
    const today = new Date();
    const issueDate = new Date(formData.issue_date);
    const expirationDate = formData.expiration_date ? new Date(formData.expiration_date) : null;

    if (issueDate > today) {
      newErrors.issue_date = "Issue date cannot be in the future";
    }

    if (expirationDate && expirationDate < issueDate) {
      newErrors.expiration_date = "Expiration date cannot be before issue date";
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
        .from("certifications")
        .insert({
          user_id: userId,
          name: formData.name,
          issuing_organization: formData.issuing_organization,
          issue_date: formData.issue_date,
          expiration_date: formData.does_not_expire ? null : formData.expiration_date,
          credential_id: formData.credential_id,
          credential_url: formData.credential_url,
          does_not_expire: formData.does_not_expire
        });

      if (error) throw error;

      onSuccess();
      onClose();
      setFormData({
        name: "",
        issuing_organization: "",
        issue_date: "",
        expiration_date: "",
        credential_id: "",
        credential_url: "",
        does_not_expire: false
      });
      setErrors({});
    } catch (error) {
      console.error("Error adding certification:", error);
      alert("Failed to add certification. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleOrgInput = (value: string) => {
    setFormData({ ...formData, issuing_organization: value });
    if (value.trim()) {
      const filtered = CERTIFICATION_ORGANIZATIONS.filter(org => 
        org.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 10);
      setFilteredOrgs(filtered);
      setShowOrgDropdown(true);
    } else {
      setShowOrgDropdown(false);
    }
  };

  const selectOrg = (org: string) => {
    setFormData({ ...formData, issuing_organization: org });
    setShowOrgDropdown(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Add License or Certification</h2>
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
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
              placeholder="e.g., AWS Certified Solutions Architect"
            />
          </div>

          {/* Issuing Organization */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Issuing Organization *
            </label>
            <input
              type="text"
              required
              value={formData.issuing_organization}
              onChange={(e) => handleOrgInput(e.target.value)}
              onFocus={() => formData.issuing_organization && setShowOrgDropdown(true)}
              onBlur={() => setTimeout(() => setShowOrgDropdown(false), 200)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
              placeholder="e.g., Amazon Web Services (AWS)"
            />
            {showOrgDropdown && filteredOrgs.length > 0 && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                {filteredOrgs.map((org) => (
                  <button
                    key={org}
                    type="button"
                    onClick={() => selectOrg(org)}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    {org}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Issue Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Issue Date *
            </label>
            <input
              type="date"
              required
              value={formData.issue_date}
              onChange={(e) => setFormData({ ...formData, issue_date: e.target.value })}
              max={new Date().toISOString().split('T')[0]}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm ${
                errors.issue_date ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.issue_date && (
              <p className="text-xs text-red-500 mt-1">{errors.issue_date}</p>
            )}
          </div>

          {/* Expiration Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expiration Date
            </label>
            <input
              type="date"
              value={formData.expiration_date}
              onChange={(e) => setFormData({ ...formData, expiration_date: e.target.value })}
              disabled={formData.does_not_expire}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm disabled:bg-gray-100 ${
                errors.expiration_date ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.expiration_date && (
              <p className="text-xs text-red-500 mt-1">{errors.expiration_date}</p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="does_not_expire"
              checked={formData.does_not_expire}
              onChange={(e) => setFormData({ ...formData, does_not_expire: e.target.checked, expiration_date: "" })}
              className="w-4 h-4 text-[#162f16] border-gray-300 rounded focus:ring-[#162f16]"
            />
            <label htmlFor="does_not_expire" className="text-sm text-gray-700">
              This credential does not expire
            </label>
          </div>

          {/* Credential ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Credential ID
            </label>
            <input
              type="text"
              value={formData.credential_id}
              onChange={(e) => setFormData({ ...formData, credential_id: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
              placeholder="e.g., ABC123XYZ"
            />
          </div>

          {/* Credential URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Credential URL
            </label>
            <input
              type="url"
              value={formData.credential_url}
              onChange={(e) => setFormData({ ...formData, credential_url: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
              placeholder="https://..."
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-4 py-2 bg-[#162f16] text-white rounded-lg font-medium hover:bg-[#0f2310] transition disabled:opacity-50"
            >
              {loading ? "Adding..." : "Add Certification"}
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