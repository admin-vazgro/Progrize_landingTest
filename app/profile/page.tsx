"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import type { User } from "@supabase/supabase-js";
import Image from "next/image";
import Navbar from "../Navbar"
import Footer from "../Footer";

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [country, setCountry] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check authentication and load profile
    const loadProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push("/");
        return;
      }
      setUser(user);
      
      // Load profile data from profiles table
      const { data: profile } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (profile) {
        setFirstName(profile.first_name || "");
        setLastName(profile.last_name || "");
        setOccupation(profile.occupation || "");
        setCountry(profile.country || "");
        setAvatarUrl(profile.avatar_url || "");
      }
      
      setLoading(false);
    };

    loadProfile();
  }, [router]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0 || !user) {
      return;
    }

    const file = e.target.files[0];
    setUploading(true);

    try {
      // Create a unique file name
      const fileExt = file.name.split(".").pop();
      const fileName = `${user.id}-${Math.random()}.${fileExt}`;
      const filePath = `avatars/${fileName}`;

      // Upload to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from("profile-pictures")
        .upload(filePath, file, { upsert: true });

      if (uploadError) throw uploadError;

      // Get public URL
      const { data } = supabase.storage
        .from("profile-pictures")
        .getPublicUrl(filePath);

      const publicUrl = data.publicUrl;
      setAvatarUrl(publicUrl);

      // Update profiles table
      await supabase
        .from("profiles")
        .upsert({
          id: user.id,
          avatar_url: publicUrl,
          updated_at: new Date().toISOString()
        });

      setMessage("Profile picture updated successfully!");
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      console.error("Error uploading image:", error);
      setMessage("Error uploading image. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage("");

    try {
      if (!user) return;

      // Update profiles table
      const { error } = await supabase
        .from("profiles")
        .upsert({
          id: user.id,
          first_name: firstName,
          last_name: lastName,
          full_name: `${firstName} ${lastName}`,
          occupation: occupation || null,
          country: country || null,
          avatar_url: avatarUrl,
          updated_at: new Date().toISOString()
        });

      if (error) throw error;

      setMessage("Profile updated successfully!");
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      console.error("Error updating profile:", error);
      setMessage("Error updating profile. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  const onAuthClick = async () => {
  await supabase.auth.signOut();
  router.push("/");
};
  return (
    <div>
      <Navbar  onAuthClick={onAuthClick}/>
    <div className="min-h-screen bg-gray-50">
    
   

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Form */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-regular text-gray-900 mb-2">
              Hey {firstName || "User"} !
            </h1>
            <p className="text-gray-600 text-sm mb-8 max-w-2xl">
              Progrize is your all-in-one career platform — discover jobs, mentorship, referrals, and growth opportunities. For professionals and organisations.
            </p>

            <div className="flex items-start gap-6 mb-8">
              {/* Profile Picture */}
              <div className="flex flex-col items-center gap-3">
                {avatarUrl ? (
                  <Image
                    src={avatarUrl}
                    alt="Profile"
                    width={120}
                    height={120}
                    className="rounded-2xl object-cover max-h-120"
                  />
                ) : (
                  <div className="w-[120px] h-[120px] rounded-2xl bg-gray-200 flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                )}
                <label className="px-6 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50 cursor-pointer transition">
                  {uploading ? "Uploading..." : "Upload"}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    disabled={uploading}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Form Fields */}
              <form onSubmit={handleSave} className="flex-1 space-y-6">
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
                      placeholder="Rohith Nair"
                      className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none text-sm bg-white focus:ring-2 focus:ring-primary"
                      required
                    />
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Reghu"
                      className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none text-sm bg-white focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                </div>

                {/* Occupation and Country */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      What&apos;s your occupation or industry ?
                    </label>
                    <input
                      type="text"
                      value={occupation}
                      onChange={(e) => setOccupation(e.target.value)}
                      placeholder="Product Designer"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none text-sm bg-white focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Your country?
                    </label>
                    <input
                      type="text"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      placeholder="United Kingdom"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none text-sm bg-white focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                {/* Success/Error Message */}
                {message && (
                  <p className={`text-sm ${message.includes("Error") ? "text-red-600" : "text-green-600"}`}>
                    {message}
                  </p>
                )}

                {/* Save Button */}
                <button
                  type="submit"
                  disabled={saving}
                  className="px-8 py-3 bg-[#162f16] text-white rounded-md text-sm font-semibold hover:bg-[#0f2310] transition disabled:opacity-50"
                >
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column - Communities */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Your Communities
              </h3>
              <div className="space-y-3">
                <div className="text-gray-700 text-sm">
                  # Product Designers
                </div>
                <div className="text-gray-700 text-sm">
                  # jobhubters
                </div>
                <div className="text-gray-700 text-sm">
                  # Uk jobs
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <Footer/>
    </div>
    </div>
   
  );
}