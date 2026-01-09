"use client";

import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter, useParams } from "next/navigation";
import type { User } from "@supabase/supabase-js";
import Image from "next/image";
import Navbar from "../../Navbar";
import EditProfileModal from "../../components/EditProfileModal";
import ExperienceCard from "../../components/ExperienceCard";
import EducationCard from "../../components/EducationCard";
import AddExperienceModal from "../../components/AddExperienceModal";
import AddEducationModal from "../../components/AddEducationModal";
import PostCard from "../../components/PostCard";

interface UserProfile {
  id: string;
  full_name: string;
  avatar_url: string;
  occupation: string;
  country: string;
  phone: string;
  phone_country_code: string;
  location: string;
  professional_summary: string;
  job_preferences: string[];
  skills: string[];
  preferred_countries: string[];
  social_links: {
    linkedin?: string;
    whatsapp?: string;
    meta?: string;
    instagram?: string;
  };
  accepting_referrals: boolean;
  followers_count: number;
  following_count: number;
  created_at: string;
}

interface Experience {
  id: string;
  company_name: string;
  company_logo: string;
  position: string;
  location: string;
  start_date: string;
  end_date: string;
  is_current: boolean;
  description: string;
}

interface Education {
  id: string;
  institution_name: string;
  institution_logo: string;
  degree: string;
  field_of_study: string;
  location: string;
  start_date: string;
  end_date: string;
  is_current: boolean;
  description: string;
}

interface PostLike {
  user_id: string;
}

interface PostEvent {
  id: string;
  event_date: string;
  location: string;
  meeting_link: string;
  going_count: number;
  interested_count: number;
  user_rsvp: string | null;
}

interface Post {
  id: string;
  post_type: string;
  title: string;
  content: string;
  tags: string[];
  likes_count: number;
  comments_count: number;
  created_at: string;
  user_id: string;
  post_likes?: PostLike[];
  events?: PostEvent[];
  user_name: string;
  user_avatar: string;
  user_occupation: string;
  is_liked: boolean;
  event?: PostEvent;
}

export default function UserProfilePage() {
  const router = useRouter();
  const params = useParams();
  const userId = params.userId as string;
  
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [education, setEducation] = useState<Education[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [isFollowing, setIsFollowing] = useState(false);
  const [followLoading, setFollowLoading] = useState(false);
  const [editProfileOpen, setEditProfileOpen] = useState(false);
  const [addExperienceOpen, setAddExperienceOpen] = useState(false);
  const [addEducationOpen, setAddEducationOpen] = useState(false);

  const isOwner = currentUser?.id === userId;

  const loadUserProfile = useCallback(async () => {
    try {
      // Get current user
      const { data: { user } } = await supabase.auth.getUser();
      setCurrentUser(user);

      // Load user profile
      const { data: profileData, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .single();

      if (profileError) throw profileError;
      let nextProfile = profileData as UserProfile;

      // Refresh follow counts from follow table
      const [{ count: followersCount, error: followersCountError }, { count: followingCount, error: followingCountError }] =
        await Promise.all([
          supabase
            .from("profile_follows")
            .select("id", { count: "exact", head: true })
            .eq("following_id", userId),
          supabase
            .from("profile_follows")
            .select("id", { count: "exact", head: true })
            .eq("follower_id", userId),
        ]);

      if (!followersCountError && !followingCountError) {
        nextProfile = {
          ...nextProfile,
          followers_count: followersCount ?? nextProfile.followers_count ?? 0,
          following_count: followingCount ?? nextProfile.following_count ?? 0,
        };
      }

      setProfile(nextProfile);

      // Load experiences
      const { data: experiencesData, error: experiencesError } = await supabase
        .from("experiences")
        .select("*")
        .eq("user_id", userId)
        .order("start_date", { ascending: false });

      if (experiencesError) throw experiencesError;
      setExperiences(experiencesData || []);

      // Load education
      const { data: educationData, error: educationError } = await supabase
        .from("education")
        .select("*")
        .eq("user_id", userId)
        .order("start_date", { ascending: false });

      if (educationError) throw educationError;
      setEducation(educationData || []);

      // Load posts
      const { data: postsData, error: postsError } = await supabase
        .from("posts")
        .select(`
          *,
          post_likes!left(user_id),
          events!left(*)
        `)
        .eq("user_id", userId)
        .order("created_at", { ascending: false });

      if (postsError) throw postsError;

      const postsWithUsers = (postsData || []).map((post) => {
        const isLiked =
          post.post_likes?.some((like: PostLike) => like.user_id === user?.id) ||
          false;

        let eventData: PostEvent | undefined;
        if (post.post_type === "event" && post.events && post.events.length > 0) {
          eventData = post.events[0];
        }

        return {
          ...post,
          user_name: profileData?.full_name || "User",
          user_avatar: profileData?.avatar_url || "",
          user_occupation: profileData?.occupation || "",
          is_liked: isLiked,
          event: eventData,
        };
      });

      setPosts(postsWithUsers);
    } catch (error) {
      console.error("Error loading user profile:", error);
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    loadUserProfile();
  }, [loadUserProfile]);

  useEffect(() => {
    if (!currentUser || isOwner) {
      setIsFollowing(false);
      return;
    }

    const loadFollowStatus = async () => {
      const { data, error } = await supabase
        .from("profile_follows")
        .select("id")
        .eq("follower_id", currentUser.id)
        .eq("following_id", userId)
        .maybeSingle();

      if (!error) {
        setIsFollowing(!!data);
      }
    };

    loadFollowStatus();
  }, [currentUser, isOwner, userId]);

  const handleAuthClick = () => {
    router.push("/");
  };

  const handleToggleFollow = async () => {
    if (!currentUser) {
      handleAuthClick();
      return;
    }
    if (isOwner || followLoading) return;

    setFollowLoading(true);
    try {
      if (isFollowing) {
        const { error: deleteError } = await supabase
          .from("profile_follows")
          .delete()
          .eq("follower_id", currentUser.id)
          .eq("following_id", userId);

        if (deleteError) throw deleteError;

        const { error: countError } = await supabase.rpc("decrement_follow_counts", {
          follower_id: currentUser.id,
          following_id: userId,
        });
        if (countError) throw countError;

        setIsFollowing(false);
        setProfile((prev) =>
          prev ? { ...prev, followers_count: Math.max(0, prev.followers_count - 1) } : prev
        );
      } else {
        const { error: insertError } = await supabase
          .from("profile_follows")
          .insert({ follower_id: currentUser.id, following_id: userId });

        if (insertError) throw insertError;

        const { error: countError } = await supabase.rpc("increment_follow_counts", {
          follower_id: currentUser.id,
          following_id: userId,
        });
        if (countError) throw countError;

        setIsFollowing(true);
        setProfile((prev) =>
          prev ? { ...prev, followers_count: prev.followers_count + 1 } : prev
        );

        const { error: notificationError } = await supabase
          .from("notifications")
          .insert({
            user_id: userId,
            actor_id: currentUser.id,
            type: "follow",
            entity_type: "profile",
            entity_id: userId,
            meta: {},
          });
        if (notificationError) {
          console.warn("Failed to create follow notification:", notificationError);
        }
      }
    } catch (error) {
      console.error("Error updating follow status:", error);
      alert("Failed to update follow status. Please try again.");
    } finally {
      setFollowLoading(false);
    }
  };

  const handleToggleReferrals = async () => {
    if (!isOwner) return;
    
    try {
      const newValue = !profile?.accepting_referrals;
      await supabase
        .from("profiles")
        .update({ accepting_referrals: newValue })
        .eq("id", userId);
      
      loadUserProfile();
    } catch (error) {
      console.error("Error toggling referrals:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">User not found</p>
      </div>
    );
  }

  const activityLimit = 2;
  const visiblePosts = posts.slice(0, activityLimit);
  const hasActivity = posts.length > 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onAuthClick={handleAuthClick} />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-3 space-y-6">
            {/* Profile Card */}
            <div className="bg-[#162f16] rounded-2xl p-6 text-white">
              <div className="flex justify-center mb-4">
                {profile.avatar_url ? (
                  <div className="w-32 h-32 rounded-full border-4 border-[#d4af37] overflow-hidden aspect-square">
                    <Image
                      src={profile.avatar_url}
                      alt={profile.full_name}
                      width={128}
                      height={128}
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                ) : (
                  <div className="w-32 h-32 rounded-full border-4 border-[#d4af37] bg-[#2a4a2a] flex items-center justify-center text-4xl font-semibold">
                    {profile.full_name.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
              
              <h2 className="text-xl font-semibold text-center mb-2">{profile.full_name}</h2>
              <p className="text-sm text-center text-gray-300 mb-1">{profile.occupation || "Professional"}</p>
              <p className="text-sm text-center text-gray-300 mb-1">{profile.country || "Location"}</p>
              {profile.location && (
                <p className="text-xs text-center text-gray-400 mb-1">{profile.location}</p>
              )}
              {profile.phone && (
                <p className="text-xs text-center text-gray-400">{profile.phone}</p>
              )}
            </div>

            {/* Referrals */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Referrals</h3>
              <p className="text-sm text-gray-600 mb-4">Let us help other to get job</p>
              
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-700">Accepting referrals</span>
                <button
                  onClick={handleToggleReferrals}
                  disabled={!isOwner}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                    profile.accepting_referrals ? "bg-[#162f16]" : "bg-gray-300"
                  } ${!isOwner ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                      profile.accepting_referrals ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
              
              <p className="text-xs text-gray-500">
                Your profile will be visible to other users for asking referrals
              </p>
            </div>

            {/* Community */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-sm text-gray-600 mb-4">Networking is the key to success</p>
              
              <div className="flex gap-4 mb-4">
                <div className="flex-1 text-center">
                  <div className="w-16 h-16 rounded-3xl bg-[#f0fa95] text-[#162f16] flex items-center justify-center font-bold text-lg mx-auto mb-2">
                    {profile.followers_count}
                  </div>
                  <p className="text-xs text-gray-600">Followers</p>
                </div>
                <div className="flex-1 text-center">
                  <div className="w-16 h-16 rounded-3xl bg-[#f0fa95] text-[#162f16] flex items-center justify-center font-bold text-lg mx-auto mb-2">
                    {profile.following_count}
                  </div>
                  <p className="text-xs text-gray-600">Following</p>
                </div>
              </div>
              
              {isOwner ? (
                <button
                  onClick={() => router.push("/community")}
                  className="w-full px-4 py-2 bg-[#162f16] text-white rounded-lg text-sm font-medium hover:bg-[#0f2310] transition"
                >
                  View Community
                </button>
              ) : (
                <button
                  onClick={handleToggleFollow}
                  disabled={followLoading}
                  className={`w-full px-4 py-2 rounded-lg text-sm font-medium transition ${
                    isFollowing
                      ? "border border-gray-300 text-gray-700 hover:bg-gray-100"
                      : "bg-[#162f16] text-white hover:bg-[#0f2310]"
                  } ${followLoading ? "opacity-60 cursor-not-allowed" : ""}`}
                >
                  {isFollowing ? "Unfollow" : "Follow"}
                </button>
              )}
            </div>

            {/* Public Profiles */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Public profiles</h3>
              <p className="text-sm text-gray-600 mb-4">Networking is the key to success</p>
              
              <div className="flex gap-3">
                {profile.social_links?.linkedin && (
                  <a href={profile.social_links.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                )}
                {profile.social_links?.whatsapp && (
                  <a href={`https://wa.me/${profile.social_links.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                  </a>
                )}
                {profile.social_links?.meta && (
                  <a href={profile.social_links.meta} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/></svg>
                  </a>
                )}
                {profile.social_links?.instagram && (
                  <a href={profile.social_links.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-6 space-y-6">
            {hasActivity && (
              <div className="bg-white rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Activity</h3>
                    <p className="text-sm text-gray-500">Recent posts</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {visiblePosts.map((post) => (
                    <PostCard
                      key={post.id}
                      post={post}
                      currentUserId={currentUser?.id || ""}
                      onUpdate={loadUserProfile}
                      compact
                    />
                  ))}
                </div>

                {posts.length > activityLimit && (
                  <div className="mt-4 flex justify-center">
                    <button
                      onClick={() => router.push(`/activity/${userId}`)}
                      className="text-sm text-[#162f16] hover:underline"
                    >
                      Show all posts →
                    </button>
                  </div>
                )}
              </div>
            )}
            {/* About You */}
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-lg font-semibold text-gray-900">About</h3>
                {isOwner && (
                  <button
                    onClick={() => setEditProfileOpen(true)}
                    className="text-sm text-[#162f16] hover:underline"
                  >
                    Edit
                  </button>
                )}
              </div>
              <p className="text-sm text-gray-600 mb-3">Professional Summary</p>
              <p className="text-xs text-gray-700 leading-relaxed">
                {profile.professional_summary || "No professional summary added yet."}
              </p>
            </div>

            {/* Experiences */}
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Experiences</h3>
                {isOwner && (
                  <button
                    onClick={() => setAddExperienceOpen(true)}
                    className="text-sm text-[#162f16] hover:underline"
                  >
                    + Add
                  </button>
                )}
              </div>
              
              {experiences.length === 0 ? (
                <p className="text-sm text-gray-500 text-center py-8">No experiences added yet.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {experiences.map((exp) => (
                    <ExperienceCard
                      key={exp.id}
                      experience={exp}
                      isOwner={isOwner}
                      onUpdate={loadUserProfile}
                      variant={isOwner ? "full" : "compact"}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Education */}
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Education</h3>
                {isOwner && (
                  <button
                    onClick={() => setAddEducationOpen(true)}
                    className="text-sm text-[#162f16] hover:underline"
                  >
                    + Add
                  </button>
                )}
              </div>
              
              {education.length === 0 ? (
                <p className="text-sm text-gray-500 text-center py-8">No education added yet.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {education.map((edu) => (
                    <EducationCard
                      key={edu.id}
                      education={edu}
                      isOwner={isOwner}
                      onUpdate={loadUserProfile}
                      variant={isOwner ? "full" : "compact"}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-3 space-y-6">
            {/* Interested Job */}
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-gray-900">Interested job</h3>
                {isOwner && (
                  <button
                    onClick={() => setEditProfileOpen(true)}
                    className="text-sm text-[#162f16] hover:underline"
                  >
                    Edit
                  </button>
                )}
              </div>
              <p className="text-sm text-gray-600 mb-3">Job Preference</p>
              
              {profile.job_preferences && profile.job_preferences.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {profile.job_preferences.map((job, index) => (
                    <span
                      key={index}
                      className="px-3 py-3 bg-[#f0fa95] text-[#162f16] rounded-xl text-xs font-medium"
                    >
                      {job}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500">No job preferences added yet.</p>
              )}
            </div>

            {/* Skills */}
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-gray-900">Skills</h3>
                {isOwner && (
                  <button
                    onClick={() => setEditProfileOpen(true)}
                    className="text-sm text-[#162f16] hover:underline"
                  >
                    Edit
                  </button>
                )}
              </div>
              <p className="text-sm text-gray-600 mb-3">Top skills</p>
              
              {profile.skills && profile.skills.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium flex items-center gap-2"
                    >
                      <span className="w-6 h-6 bg-[#162f16] text-white rounded flex items-center justify-center text-xs">
                        {skill.substring(0, 2).toUpperCase()}
                      </span>
                      {skill}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500">No skills added yet.</p>
              )}
            </div>

            {/* Preferred Countries */}
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-gray-900">Preferred Countries</h3>
                {isOwner && (
                  <button
                    onClick={() => setEditProfileOpen(true)}
                    className="text-sm text-[#162f16] hover:underline"
                  >
                    Edit
                  </button>
                )}
              </div>
                <p className="text-sm text-gray-600 mb-3">Countries you prefer to work in</p>              
              {profile.preferred_countries && profile.preferred_countries.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {profile.preferred_countries.map((country, index) => (
                    <span
                      key={index}
                      className="px-3 py-3 bg-gray-100 text-gray-700 rounded-xl text-xs font-medium"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500">No preferred countries added yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <EditProfileModal
        isOpen={editProfileOpen}
        onClose={() => setEditProfileOpen(false)}
        profile={profile}
        onSuccess={loadUserProfile}
      />

      <AddExperienceModal
        isOpen={addExperienceOpen}
        onClose={() => setAddExperienceOpen(false)}
        userId={userId}
        onSuccess={loadUserProfile}
      />

      <AddEducationModal
        isOpen={addEducationOpen}
        onClose={() => setAddEducationOpen(false)}
        userId={userId}
        onSuccess={loadUserProfile}
      />
    </div>
  );
}
