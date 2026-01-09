"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { COUNTRIES, CITIES, SKILLS, COUNTRY_CODES, MIN_SUMMARY_CHARS } from "@/lib/constants";

interface UserProfile {
  id: string;
  full_name: string;
  occupation: string;
  country: string;
  professional_summary: string;
  phone: string;
  phone_country_code: string;
  location: string;
  skills: string[];
  preferred_countries: string[];
  social_links: {
    linkedin?: string;
    whatsapp?: string;
    meta?: string;
    instagram?: string;
  };
}

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserProfile;
  onSuccess: () => void;
  onAddExperience?: () => void;
  onAddEducation?: () => void;
  onAddCertification?: () => void;
  onAddVolunteering?: () => void;
  onAddProject?: () => void;
  onAddPublication?: () => void;
}

export default function EditProfileModal({
  isOpen,
  onClose,
  profile,
  onSuccess,
  onAddExperience,
  onAddEducation,
  onAddCertification,
  onAddVolunteering,
  onAddProject,
  onAddPublication,
}: EditProfileModalProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    occupation: "",
    country: "",
    professional_summary: "",
    phone: "",
    phone_country_code: "+44",
    location: "",
    skills: [] as string[],
    preferred_countries: [] as string[],
    social_links: {
      linkedin: "",
      whatsapp: "",
      meta: "",
      instagram: ""
    }
  });
  const [newSkill, setNewSkill] = useState("");
  const [newCountry, setNewCountry] = useState("");
  const [filteredSkills, setFilteredSkills] = useState<string[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<string[]>([]);
  const [filteredLocations, setFilteredLocations] = useState<string[]>([]);
  const [showSkillDropdown, setShowSkillDropdown] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (profile) {
      setFormData({
        full_name: profile.full_name || "",
        occupation: profile.occupation || "",
        country: profile.country || "",
        professional_summary: profile.professional_summary || "",
        phone: profile.phone || "",
        phone_country_code: profile.phone_country_code || "+44",
        location: profile.location || "",
        skills: profile.skills || [],
        preferred_countries: profile.preferred_countries || [],
        social_links: {
          linkedin: profile.social_links?.linkedin ?? "",
          whatsapp: profile.social_links?.whatsapp ?? "",
          meta: profile.social_links?.meta ?? "",
          instagram: profile.social_links?.instagram ?? "",
        },
      });
    }
  }, [profile]);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    // Validate professional summary
    if (formData.professional_summary.trim().length < MIN_SUMMARY_CHARS) {
      newErrors.professional_summary = `Professional summary must be at least ${MIN_SUMMARY_CHARS} characters`;
    }

    // Validate phone number
    if (formData.phone && !/^\d{7,15}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase
        .from("profiles")
        .update({
          full_name: formData.full_name,
          occupation: formData.occupation,
          country: formData.country,
          professional_summary: formData.professional_summary,
          phone: formData.phone,
          phone_country_code: formData.phone_country_code,
          location: formData.location,
          skills: formData.skills,
          preferred_countries: formData.preferred_countries,
          social_links: formData.social_links
        })
        .eq("id", profile.id);

      if (error) throw error;

      onSuccess();
      onClose();
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSkillInput = (value: string) => {
    setNewSkill(value);
    if (value.trim()) {
      const filtered = SKILLS.filter(skill =>
        skill.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 10);
      setFilteredSkills(filtered);
      setShowSkillDropdown(true);
    } else {
      setShowSkillDropdown(false);
    }
  };

  const addSkill = (skill: string) => {
    if (skill.trim() && !formData.skills.includes(skill.trim())) {
      // Validate that it's a real skill from the list
      const isValidSkill = SKILLS.some(s => s.toLowerCase() === skill.toLowerCase());
      if (!isValidSkill) {
        alert("Please select a skill from the dropdown list");
        return;
      }
      setFormData({
        ...formData,
        skills: [...formData.skills, skill.trim()]
      });
      setNewSkill("");
      setShowSkillDropdown(false);
    }
  };

  const removeSkill = (index: number) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((_, i) => i !== index)
    });
  };

  const handleCountryInput = (value: string) => {
    setNewCountry(value);
    if (value.trim()) {
      const filtered = COUNTRIES.filter(country =>
        country.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 10);
      setFilteredCountries(filtered);
      setShowCountryDropdown(true);
    } else {
      setShowCountryDropdown(false);
    }
  };

  const addCountry = (country: string) => {
    if (country.trim() && !formData.preferred_countries.includes(country.trim())) {
      setFormData({
        ...formData,
        preferred_countries: [...formData.preferred_countries, country.trim()]
      });
      setNewCountry("");
      setShowCountryDropdown(false);
    }
  };

  const removeCountry = (index: number) => {
    setFormData({
      ...formData,
      preferred_countries: formData.preferred_countries.filter((_, i) => i !== index)
    });
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

  const addSectionActions = [
    { label: "Experience", onClick: onAddExperience },
    { label: "Education", onClick: onAddEducation },
    { label: "Certification", onClick: onAddCertification },
    { label: "Volunteering", onClick: onAddVolunteering },
    { label: "Project", onClick: onAddProject },
    { label: "Publication", onClick: onAddPublication },
  ].filter((section) => section.onClick);

  const handleAddSection = (onClick?: () => void) => {
    if (!onClick) return;
    onClose();
    onClick();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Edit Profile</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Professional Summary */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Professional Summary *
              <span className="text-xs text-gray-500 ml-2">
                (Minimum {MIN_SUMMARY_CHARS} characters)
              </span>
            </label>
            <textarea
              value={formData.professional_summary}
              onChange={(e) => setFormData({ ...formData, professional_summary: e.target.value })}
              rows={4}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm ${errors.professional_summary ? "border-red-500" : "border-gray-300"
                }`}
              placeholder="Tell us about your professional background..."
            />
            <div className="flex justify-between mt-1">
              {errors.professional_summary && (
                <p className="text-xs text-red-500">{errors.professional_summary}</p>
              )}
              <p className="text-xs text-gray-500 ml-auto">
                {formData.professional_summary.length} / {MIN_SUMMARY_CHARS}
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full name
              </label>
              <input
                type="text"
                value={formData.full_name}
                onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
                placeholder="Rohith Nair"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Occupation
              </label>
              <input
                type="text"
                value={formData.occupation}
                onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
                placeholder="Product Designer"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country
              </label>
              <input
                type="text"
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
                placeholder="United Kingdom"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              <div className="flex gap-2">
                <select
                  value={formData.phone_country_code}
                  onChange={(e) => setFormData({ ...formData, phone_country_code: e.target.value })}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
                >
                  {COUNTRY_CODES.map((item, index) => (
                    <option key={`${item.code}-${index}`} value={item.code}>
                      {item.flag} {item.code}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm ${errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                  placeholder="7768188691"
                />
              </div>
              {errors.phone && (
                <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
              )}
            </div>
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
          </div>

          {/* Skills */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Skills
            </label>
            <div className="relative">
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => handleSkillInput(e.target.value)}
                  onFocus={() => newSkill && setShowSkillDropdown(true)}
                  onBlur={() => setTimeout(() => setShowSkillDropdown(false), 200)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
                  placeholder="Start typing skill name..."
                />
                <button
                  type="button"
                  onClick={() => addSkill(newSkill)}
                  className="px-4 py-2 bg-[#162f16] text-white rounded-lg text-sm font-medium hover:bg-[#0f2310] transition"
                >
                  Add
                </button>
              </div>
              {showSkillDropdown && filteredSkills.length > 0 && (
                <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
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
            <div className="flex flex-wrap gap-2">
              {formData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium flex items-center gap-2"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => removeSkill(index)}
                    className="hover:text-red-600"
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
            <div className="relative">
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={newCountry}
                  onChange={(e) => handleCountryInput(e.target.value)}
                  onFocus={() => newCountry && setShowCountryDropdown(true)}
                  onBlur={() => setTimeout(() => setShowCountryDropdown(false), 200)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
                  placeholder="Start typing country name..."
                />
                <button
                  type="button"
                  onClick={() => addCountry(newCountry)}
                  className="px-4 py-2 bg-[#162f16] text-white rounded-lg text-sm font-medium hover:bg-[#0f2310] transition"
                >
                  Add
                </button>
              </div>
              {showCountryDropdown && filteredCountries.length > 0 && (
                <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                  {filteredCountries.map((country) => (
                    <button
                      key={country}
                      type="button"
                      onClick={() => addCountry(country)}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                    >
                      {country}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.preferred_countries.map((country, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium flex items-center gap-2"
                >
                  {country}
                  <button
                    type="button"
                    onClick={() => removeCountry(index)}
                    className="hover:text-red-600"
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
                onChange={(e) => setFormData({
                  ...formData,
                  social_links: { ...formData.social_links, linkedin: e.target.value }
                })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
                placeholder="LinkedIn URL"
              />
              <input
                type="tel"
                value={formData.social_links.whatsapp}
                onChange={(e) => setFormData({
                  ...formData,
                  social_links: { ...formData.social_links, whatsapp: e.target.value }
                })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
                placeholder="WhatsApp Number (e.g., 447768188691)"
              />
              <input
                type="url"
                value={formData.social_links.meta}
                onChange={(e) => setFormData({
                  ...formData,
                  social_links: { ...formData.social_links, meta: e.target.value }
                })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
                placeholder="Facebook/Meta URL"
              />
              <input
                type="url"
                value={formData.social_links.instagram}
                onChange={(e) => setFormData({
                  ...formData,
                  social_links: { ...formData.social_links, instagram: e.target.value }
                })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
                placeholder="Instagram URL"
              />
            </div>
          </div>

          {addSectionActions.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Add to profile
                </label>
                <span className="text-xs text-gray-500">Create new sections</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {addSectionActions.map((section) => (
                  <button
                    key={section.label}
                    type="button"
                    onClick={() => handleAddSection(section.onClick)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:border-[#162f16] hover:text-[#162f16] transition"
                  >
                    + {section.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              disabled={loading}
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
