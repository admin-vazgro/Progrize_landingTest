"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import type { User } from "@supabase/supabase-js";

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: User;
}

export default function OnboardingModal({ isOpen, onClose, user }: OnboardingModalProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [country, setCountry] = useState("");
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!firstName.trim() || !lastName.trim()) {
      setError("Please enter your first and last name");
      return;
    }

    setLoading(true);
    setError("");

    try {
      let avatarUrl = "";

      // Upload profile image if provided
      if (profileImage) {
        const fileExt = profileImage.name.split(".").pop();
        const fileName = `${user.id}-${Math.random()}.${fileExt}`;
        const filePath = `avatars/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from("profile-pictures")
          .upload(filePath, profileImage);

        if (uploadError) {
          console.error("Upload error:", uploadError);
        } else {
          const { data } = supabase.storage
            .from("profile-pictures")
            .getPublicUrl(filePath);
          avatarUrl = data.publicUrl;
        }
      }

      // Update user metadata
      const { error: updateError } = await supabase.auth.updateUser({
        data: {
          full_name: `${firstName} ${lastName}`,
          first_name: firstName,
          last_name: lastName,
          occupation: occupation || null,
          country: country || null,
          avatar_url: avatarUrl || null,
          onboarding_completed: true,
        }
      });

      if (updateError) throw updateError;

      onClose();
    } catch (err) {
      console.error("Onboarding error:", err);
      setError("Failed to save your information. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-lg mx-4 bg-white rounded-2xl shadow-2xl p-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-4xl font-regular text-gray-900 mb-2">
            Welcome !
          </h2>
          <p className="text-sm text-gray-600">
            Progrize is your all-in-one career platform — discover jobs, mentorship, referrals, and growth opportunities. For professionals and organisations.
          </p>
        </div>

        {/* Subtitle */}
        <h3 className="text-xl font-medium text-gray-900 mb-4">
          Let&apos;s set you up !
        </h3>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Fields */}
          <div>
            <label className="block text-sm text-gray-700 mb-2">
              What should we call you ?
            </label>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none text-sm bg-white focus:ring-2 focus:ring-primary"
                required
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none text-sm bg-white focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          </div>

          {/* Occupation */}
          <div>
            <label className="block text-sm text-gray-700 mb-2">
              What&apos;s your occupation or industry ?
            </label>
            <input
              type="text"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
              placeholder="Occupation"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none text-sm bg-white focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm text-gray-700 mb-2">
              Your country?
            </label>
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Country"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none text-sm bg-white focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Profile Picture */}
          <div>
            <label className="block text-sm text-gray-700 mb-2">
              If you want to look as beautiful among others, Please upload a profile picture. lol !
            </label>
            <div className="flex items-center gap-3">
              <label className="px-6 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50 cursor-pointer transition">
                UPLOAD an IMAGE
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
              {profileImage && (
                <span className="text-sm text-gray-600">{profileImage.name}</span>
              )}
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-sm text-red-600">{error}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-fit px-8 py-3 bg-[#162f16] text-white rounded-md text-sm font-semibold hover:bg-[#0f2310] transition disabled:opacity-50"
          >
            {loading ? "Saving..." : "LET'S GO"}
          </button>
        </form>
      </div>
    </div>
  );
}