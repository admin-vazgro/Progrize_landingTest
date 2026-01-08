"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { CERTIFICATION_ORGANIZATIONS } from "@/lib/constants";

interface Certification {
  id: string;
  name: string;
  issuing_organization: string;
  issue_date: string;
  expiration_date: string | null;
  credential_id: string;
  credential_url: string;
  does_not_expire: boolean;
}

interface EditCertificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  certification: Certification;
  onSuccess: () => void;
}

export default function EditCertificationModal({
  isOpen,
  onClose,
  certification,
  onSuccess,
}: EditCertificationModalProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    issuing_organization: "",
    issue_date: "",
    expiration_date: "",
    credential_id: "",
    credential_url: "",
    does_not_expire: false,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [filteredOrgs, setFilteredOrgs] = useState<string[]>([]);
  const [showOrgDropdown, setShowOrgDropdown] = useState(false);

  useEffect(() => {
    if (certification) {
      setFormData({
        name: certification.name || "",
        issuing_organization: certification.issuing_organization || "",
        issue_date: certification.issue_date || "",
        expiration_date: certification.expiration_date || "",
        credential_id: certification.credential_id || "",
        credential_url: certification.credential_url || "",
        does_not_expire: certification.does_not_expire || false,
      });
    }
  }, [certification]);

  const validateDates = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    const today = new Date().toISOString().split("T")[0];

    if (formData.issue_date > today) {
      newErrors.issue_date = "Issue date cannot be in the future";
    }

    if (!formData.does_not_expire && formData.expiration_date) {
      if (formData.expiration_date < formData.issue_date) {
        newErrors.expiration_date = "Expiration date must be after issue date";
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
        issuing_organization: formData.issuing_organization,
        issue_date: formData.issue_date,
        expiration_date: formData.does_not_expire ? null : formData.expiration_date || null,
        credential_id: formData.credential_id,
        credential_url: formData.credential_url,
        does_not_expire: formData.does_not_expire,
      };

      const { error } = await supabase
        .from("certifications")
        .update(updateData)
        .eq("id", certification.id);

      if (error) throw error;

      onSuccess();
      onClose();
    } catch (error) {
      console.error("Error updating certification:", error);
      alert("Failed to update certification. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleOrgInput = (value: string) => {
    setFormData({ ...formData, issuing_organization: value });
    
    if (value.length > 0) {
      const filtered = CERTIFICATION_ORGANIZATIONS.filter((org) =>
        org.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredOrgs(filtered);
      setShowOrgDropdown(true);
    } else {
      setShowOrgDropdown(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Edit Certification</h2>
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
                Certification Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#162f16] focus:border-transparent"
                placeholder="e.g., AWS Certified Solutions Architect"
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Issuing Organization *
              </label>
              <input
                type="text"
                required
                value={formData.issuing_organization}
                onChange={(e) => handleOrgInput(e.target.value)}
                onFocus={() => formData.issuing_organization && setShowOrgDropdown(true)}
                onBlur={() => setTimeout(() => setShowOrgDropdown(false), 200)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#162f16] focus:border-transparent"
                placeholder="e.g., Amazon Web Services"
              />
              {showOrgDropdown && filteredOrgs.length > 0 && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                  {filteredOrgs.map((org, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, issuing_organization: org });
                        setShowOrgDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                    >
                      {org}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Issue Date *
                </label>
                <input
                  type="date"
                  required
                  value={formData.issue_date}
                  onChange={(e) => setFormData({ ...formData, issue_date: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#162f16] focus:border-transparent"
                />
                {errors.issue_date && (
                  <p className="text-red-500 text-xs mt-1">{errors.issue_date}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Expiration Date
                </label>
                <input
                  type="date"
                  disabled={formData.does_not_expire}
                  value={formData.expiration_date}
                  onChange={(e) => setFormData({ ...formData, expiration_date: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#162f16] focus:border-transparent disabled:bg-gray-100"
                />
                {errors.expiration_date && (
                  <p className="text-red-500 text-xs mt-1">{errors.expiration_date}</p>
                )}
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="does_not_expire"
                checked={formData.does_not_expire}
                onChange={(e) => setFormData({ ...formData, does_not_expire: e.target.checked, expiration_date: "" })}
                className="w-4 h-4 text-[#162f16] border-gray-300 rounded focus:ring-[#162f16]"
              />
              <label htmlFor="does_not_expire" className="ml-2 text-sm text-gray-700">
                This certification does not expire
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Credential ID
              </label>
              <input
                type="text"
                value={formData.credential_id}
                onChange={(e) => setFormData({ ...formData, credential_id: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#162f16] focus:border-transparent"
                placeholder="e.g., ABC123XYZ"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Credential URL
              </label>
              <input
                type="url"
                value={formData.credential_url}
                onChange={(e) => setFormData({ ...formData, credential_url: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#162f16] focus:border-transparent"
                placeholder="https://..."
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