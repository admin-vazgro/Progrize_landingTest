"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface UserProfile {
  id: string;
  professional_summary: string | null;
  phone: string | null;
  location: string | null;
  job_preferences: string[] | null;
  skills: string[] | null;
  preferred_countries: string[] | null;
  social_links:
    | {
        linkedin?: string | null;
        whatsapp?: string | null;
        meta?: string | null;
        instagram?: string | null;
      }
    | null;
}

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile?: UserProfile | null; // ✅ can be undefined while loading
  onSuccess: () => void;
}

type FormData = {
  professional_summary: string;
  phone: string;
  location: string;
  job_preferences: string[];
  skills: string[];
  preferred_countries: string[];
  social_links: {
    linkedin: string;
    whatsapp: string;
    meta: string;
    instagram: string;
  };
};

const EMPTY_FORM: FormData = {
  professional_summary: "",
  phone: "",
  location: "",
  job_preferences: [],
  skills: [],
  preferred_countries: [],
  social_links: {
    linkedin: "",
    whatsapp: "",
    meta: "",
    instagram: "",
  },
};

export default function EditProfileModal({
  isOpen,
  onClose,
  profile,
  onSuccess,
}: EditProfileModalProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);

  const [newJobPref, setNewJobPref] = useState("");
  const [newSkill, setNewSkill] = useState("");
  const [newCountry, setNewCountry] = useState("");

  useEffect(() => {
    if (!profile) {
      setFormData(EMPTY_FORM);
      return;
    }

    setFormData({
      professional_summary: profile.professional_summary ?? "",
      phone: profile.phone ?? "",
      location: profile.location ?? "",
      job_preferences: profile.job_preferences ?? [],
      skills: profile.skills ?? [],
      preferred_countries: profile.preferred_countries ?? [],
      social_links: {
        linkedin: profile.social_links?.linkedin ?? "",
        whatsapp: profile.social_links?.whatsapp ?? "",
        meta: profile.social_links?.meta ?? "",
        instagram: profile.social_links?.instagram ?? "",
      },
    });
  }, [profile]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!profile?.id) return;

    setLoading(true);
    try {
      const { error } = await supabase
        .from("profiles")
        .update({
          professional_summary: formData.professional_summary,
          phone: formData.phone,
          location: formData.location,
          job_preferences: formData.job_preferences,
          skills: formData.skills,
          preferred_countries: formData.preferred_countries,
          social_links: formData.social_links,
        })
        .eq("id", profile.id);

      if (error) throw error;

      onSuccess();
      onClose();
    } catch (err) {
      console.error("Error updating profile:", err);
      alert("Failed to update profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const addJobPreference = () => {
    const value = newJobPref.trim();
    if (!value) return;

    setFormData((prev) => {
      if (prev.job_preferences.some((j) => j.toLowerCase() === value.toLowerCase()))
        return prev;
      return { ...prev, job_preferences: [...prev.job_preferences, value] };
    });

    setNewJobPref("");
  };

  const removeJobPreference = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      job_preferences: prev.job_preferences.filter((_, i) => i !== index),
    }));
  };

  const addSkill = () => {
    const value = newSkill.trim();
    if (!value) return;

    setFormData((prev) => {
      if (prev.skills.some((s) => s.toLowerCase() === value.toLowerCase())) return prev;
      return { ...prev, skills: [...prev.skills, value] };
    });

    setNewSkill("");
  };

  const removeSkill = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }));
  };

  const addCountry = () => {
    const value = newCountry.trim();
    if (!value) return;

    setFormData((prev) => {
      if (
        prev.preferred_countries.some((c) => c.toLowerCase() === value.toLowerCase())
      )
        return prev;
      return {
        ...prev,
        preferred_countries: [...prev.preferred_countries, value],
      };
    });

    setNewCountry("");
  };

  const removeCountry = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      preferred_countries: prev.preferred_countries.filter((_, i) => i !== index),
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Edit Profile</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Professional Summary */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Professional Summary
            </label>
            <textarea
              value={formData.professional_summary}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, professional_summary: e.target.value }))
              }
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
              placeholder="Tell us about your professional background..."
            />
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
                placeholder="+44 7768188691"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, location: e.target.value }))
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
                placeholder="London"
              />
            </div>
          </div>

          {/* Job Preferences */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Job Preferences
            </label>

            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={newJobPref}
                onChange={(e) => setNewJobPref(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addJobPreference();
                  }
                }}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
                placeholder="e.g., Senior Product Designer"
              />
              <button
                type="button"
                onClick={addJobPreference}
                className="px-4 py-2 bg-[#162f16] text-white rounded-lg text-sm font-medium hover:bg-[#0f2310] transition"
              >
                Add
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {formData.job_preferences.map((job, index) => (
                <span
                  key={`${job}-${index}`}
                  className="px-3 py-1 bg-[#d4af37] text-[#162f16] rounded-full text-xs font-medium flex items-center gap-2"
                >
                  {job}
                  <button
                    type="button"
                    onClick={() => removeJobPreference(index)}
                    className="hover:text-red-600"
                    aria-label={`Remove ${job}`}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Skills</label>

            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addSkill();
                  }
                }}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
                placeholder="e.g., Illustrator"
              />
              <button
                type="button"
                onClick={addSkill}
                className="px-4 py-2 bg-[#162f16] text-white rounded-lg text-sm font-medium hover:bg-[#0f2310] transition"
              >
                Add
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {formData.skills.map((skill, index) => (
                <span
                  key={`${skill}-${index}`}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium flex items-center gap-2"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => removeSkill(index)}
                    className="hover:text-red-600"
                    aria-label={`Remove ${skill}`}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Preferred Countries */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Countries
            </label>

            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={newCountry}
                onChange={(e) => setNewCountry(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addCountry();
                  }
                }}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
                placeholder="e.g., United Kingdom"
              />
              <button
                type="button"
                onClick={addCountry}
                className="px-4 py-2 bg-[#162f16] text-white rounded-lg text-sm font-medium hover:bg-[#0f2310] transition"
              >
                Add
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {formData.preferred_countries.map((country, index) => (
                <span
                  key={`${country}-${index}`}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium flex items-center gap-2"
                >
                  {country}
                  <button
                    type="button"
                    onClick={() => removeCountry(index)}
                    className="hover:text-red-600"
                    aria-label={`Remove ${country}`}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Social Links
            </label>

            <div className="space-y-3">
              <input
                type="url"
                value={formData.social_links.linkedin}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    social_links: { ...prev.social_links, linkedin: e.target.value },
                  }))
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
                placeholder="LinkedIn URL"
              />

              <input
                type="tel"
                value={formData.social_links.whatsapp}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    social_links: { ...prev.social_links, whatsapp: e.target.value },
                  }))
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
                placeholder="WhatsApp Number (e.g., 447768188691)"
              />

              <input
                type="url"
                value={formData.social_links.meta}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    social_links: { ...prev.social_links, meta: e.target.value },
                  }))
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
                placeholder="Facebook/Meta URL"
              />

              <input
                type="url"
                value={formData.social_links.instagram}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    social_links: { ...prev.social_links, instagram: e.target.value },
                  }))
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
                placeholder="Instagram URL"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              disabled={loading || !profile?.id}
              className="flex-1 px-4 py-2 bg-[#162f16] text-white rounded-lg font-medium hover:bg-[#0f2310] transition disabled:opacity-50"
            >
              {loading ? "Saving..." : "Save Changes"}
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
