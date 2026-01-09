"use client";

import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "../Navbar";
import EditProfileModal from "../components/EditProfileModal";
import ExperienceCard from "../components/ExperienceCard";
import EducationCard from "../components/EducationCard";
import AddExperienceModal from "../components/AddExperienceModal";
import AddEducationModal from "../components/AddEducationModal";
import CertificationCard from "../components/CertificationCard";
import AddCertificationModal from "../components/AddCertificationModal";
import VolunteeringCard from "../components/VolunteeringCard";
import AddVolunteeringModal from "../components/AddVolunteeringModal";
import ProjectCard from "../components/ProjectCard";
import AddProjectModal from "../components/AddProjectModal";
import PublicationCard from "../components/PublicationCard";
import AddPublicationModal from "../components/AddPublicationModal";
import PostCard from "../components/PostCard";

interface UserProfile {
  id: string;
  full_name: string;
  first_name: string;
  last_name: string;
  avatar_url: string;
  occupation: string;
  country: string;
  phone: string;
  phone_country_code: string; // ✅ ADD THIS
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

interface Volunteering {
  id: string;
  organization: string;
  role: string;
  cause: string;
  start_date: string;
  end_date: string | null;
  is_current: boolean;
  description: string;
  location: string;
}

interface Project {
  id: string;
  name: string;
  description: string;
  start_date: string;
  end_date: string | null;
  is_ongoing: boolean;
  project_url: string;
  associated_with: string;
  skills: string[];
}

interface Publication {
  id: string;
  title: string;
  publisher: string;
  publication_date: string;
  publication_url: string;
  description: string;
  authors: string[];
}

interface SuggestedProfile {
  id: string;
  full_name: string;
  avatar_url: string;
  occupation: string;
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

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<{ id: string; email?: string } | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [education, setEducation] = useState<Education[]>([]);
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [volunteering, setVolunteering] = useState<Volunteering[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [publications, setPublications] = useState<Publication[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [suggestions, setSuggestions] = useState<SuggestedProfile[]>([]);
  const [followingIds, setFollowingIds] = useState<Set<string>>(new Set());
  const [followLoadingId, setFollowLoadingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [editProfileOpen, setEditProfileOpen] = useState(false);
  const [addExperienceOpen, setAddExperienceOpen] = useState(false);
  const [addEducationOpen, setAddEducationOpen] = useState(false);
  const [addCertificationOpen, setAddCertificationOpen] = useState(false);
  const [addVolunteeringOpen, setAddVolunteeringOpen] = useState(false);
  const [addProjectOpen, setAddProjectOpen] = useState(false);
  const [addPublicationOpen, setAddPublicationOpen] = useState(false);

  const loadProfile = useCallback(async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        router.push("/");
        return;
      }

      setUser(user);

      // Load profile
      const { data: profileData, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (profileError) throw profileError;
      let nextProfile = profileData as UserProfile;

      // Refresh follow counts from follow table to keep them consistent
      const [{ count: followersCount, error: followersCountError }, { count: followingCount, error: followingCountError }] =
        await Promise.all([
          supabase
            .from("profile_follows")
            .select("id", { count: "exact", head: true })
            .eq("following_id", user.id),
          supabase
            .from("profile_follows")
            .select("id", { count: "exact", head: true })
            .eq("follower_id", user.id),
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
        .eq("user_id", user.id)
        .order("start_date", { ascending: false });

      if (experiencesError) throw experiencesError;
      setExperiences(experiencesData || []);

      // Load education
      const { data: educationData, error: educationError } = await supabase
        .from("education")
        .select("*")
        .eq("user_id", user.id)
        .order("start_date", { ascending: false });

      if (educationError) throw educationError;
      setEducation(educationData || []);

      // Load certifications
      const { data: certificationsData, error: certificationsError } = await supabase
        .from("certifications")
        .select("*")
        .eq("user_id", user.id)
        .order("issue_date", { ascending: false });

      if (certificationsError) throw certificationsError;
      setCertifications(certificationsData || []);

      // Load volunteering
      const { data: volunteeringData, error: volunteeringError } = await supabase
        .from("volunteering")
        .select("*")
        .eq("user_id", user.id)
        .order("start_date", { ascending: false });

      if (volunteeringError) throw volunteeringError;
      setVolunteering(volunteeringData || []);

      // Load projects
      const { data: projectsData, error: projectsError } = await supabase
        .from("projects")
        .select("*")
        .eq("user_id", user.id)
        .order("start_date", { ascending: false });

      if (projectsError) throw projectsError;
      setProjects(projectsData || []);

      // Load publications
      const { data: publicationsData, error: publicationsError } = await supabase
        .from("publications")
        .select("*")
        .eq("user_id", user.id)
        .order("publication_date", { ascending: false });

      if (publicationsError) throw publicationsError;
      setPublications(publicationsData || []);

      // Load suggestions
      let suggestionRows: SuggestedProfile[] = [];
      try {
        if (profileData.occupation) {
          const { data: suggestedData, error: suggestedError } = await supabase
            .from("profiles")
            .select("id, full_name, avatar_url, occupation")
            .neq("id", user.id)
            .ilike("occupation", `%${profileData.occupation}%`)
            .limit(5);

          if (suggestedError) {
            console.warn("Suggestion lookup failed:", suggestedError);
          } else {
            suggestionRows = suggestedData || [];
          }
        }

        if (suggestionRows.length === 0) {
          const { data: fallbackData, error: fallbackError } = await supabase
            .from("profiles")
            .select("id, full_name, avatar_url, occupation")
            .neq("id", user.id)
            .order("created_at", { ascending: false })
            .limit(5);

          if (fallbackError) {
            console.warn("Suggestion fallback failed:", fallbackError);
          } else {
            suggestionRows = fallbackData || [];
          }
        }
      } catch (error) {
        console.warn("Suggestion loading failed:", error);
      }

      setSuggestions(suggestionRows);

      if (suggestionRows.length > 0) {
        const { data: followData, error: followError } = await supabase
          .from("profile_follows")
          .select("following_id")
          .eq("follower_id", user.id)
          .in("following_id", suggestionRows.map((row) => row.id));

        if (followError) {
          console.warn("Follow lookup failed:", followError);
          setFollowingIds(new Set());
        } else {
          setFollowingIds(new Set((followData || []).map((row) => row.following_id)));
        }
      } else {
        setFollowingIds(new Set());
      }

      // Load posts
      const { data: postsData, error: postsError } = await supabase
        .from("posts")
        .select(`
          *,
          post_likes!left(user_id),
          events!left(*)
        `)
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (postsError) throw postsError;

      const postsWithUsers = await Promise.all(
        (postsData || []).map(async (post) => {
          const isLiked = post.post_likes?.some((like: PostLike) => like.user_id === user.id) || false;

          let eventData: PostEvent | undefined;
          if (post.post_type === "event" && post.events && post.events.length > 0) {
            const event = post.events[0];
            const { data: rsvpData } = await supabase
              .from("event_rsvps")
              .select("status")
              .eq("event_id", event.id)
              .eq("user_id", user.id)
              .single();

            eventData = {
              ...event,
              user_rsvp: rsvpData?.status || null
            };
          }

          return {
            ...post,
            user_name: profileData?.full_name || "User",
            user_avatar: profileData?.avatar_url || "",
            user_occupation: profileData?.occupation || "",
            is_liked: isLiked,
            event: eventData
          };
        })
      );

      setPosts(postsWithUsers);
    } catch (error) {
      console.error("Error loading profile:", error);
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    loadProfile();
  }, [loadProfile]);

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !user) return;

    setUploading(true);

    try {
      // Delete old avatar if exists
      if (profile?.avatar_url) {
        const oldPath = profile.avatar_url.split("/").pop();
        if (oldPath) {
          await supabase.storage
            .from("profile-pictures")
            .remove([`${user.id}/${oldPath}`]);
        }
      }

      // Upload new avatar
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `${user.id}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("profile-pictures")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from("profile-pictures")
        .getPublicUrl(filePath);

      // Update profile with new avatar URL
      const { error: updateError } = await supabase
        .from("profiles")
        .update({ avatar_url: publicUrl })
        .eq("id", user.id);

      if (updateError) throw updateError;

      // Reload profile
      await loadProfile();
      alert("Profile picture updated successfully!");
    } catch (error) {
      console.error("Error uploading avatar:", error);
      alert("Failed to upload profile picture. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleToggleReferrals = async () => {
    if (!user || !profile) return;
    
    try {
      const newValue = !profile.accepting_referrals;
      await supabase
        .from("profiles")
        .update({ accepting_referrals: newValue })
        .eq("id", user.id);
      
      await loadProfile();
    } catch (error) {
      console.error("Error toggling referrals:", error);
    }
  };

  const handleDeleteCertification = async (id: string) => {
    try {
      const { error } = await supabase
        .from("certifications")
        .delete()
        .eq("id", id);

      if (error) throw error;
      await loadProfile();
    } catch (error) {
      console.error("Error deleting certification:", error);
      alert("Failed to delete certification. Please try again.");
    }
  };

  const handleDeleteVolunteering = async (id: string) => {
    try {
      const { error } = await supabase
        .from("volunteering")
        .delete()
        .eq("id", id);

      if (error) throw error;
      await loadProfile();
    } catch (error) {
      console.error("Error deleting volunteering:", error);
      alert("Failed to delete volunteering experience. Please try again.");
    }
  };

  const handleDeleteProject = async (id: string) => {
    try {
      const { error } = await supabase
        .from("projects")
        .delete()
        .eq("id", id);

      if (error) throw error;
      await loadProfile();
    } catch (error) {
      console.error("Error deleting project:", error);
      alert("Failed to delete project. Please try again.");
    }
  };

  const handleDeletePublication = async (id: string) => {
    try {
      const { error } = await supabase
        .from("publications")
        .delete()
        .eq("id", id);

      if (error) throw error;
      await loadProfile();
    } catch (error) {
      console.error("Error deleting publication:", error);
      alert("Failed to delete publication. Please try again.");
    }
  };

  const handleToggleFollow = async (targetId: string) => {
    if (!user) return;
    if (targetId === user.id) {
      alert("You cannot follow yourself.");
      return;
    }
    const isFollowing = followingIds.has(targetId);
    setFollowLoadingId(targetId);

    try {
      if (isFollowing) {
        const { error } = await supabase
          .from("profile_follows")
          .delete()
          .eq("follower_id", user.id)
          .eq("following_id", targetId);

        if (error) throw error;
        const { error: countError } = await supabase.rpc("decrement_follow_counts", {
          follower_id: user.id,
          following_id: targetId,
        });

        if (countError) {
          console.warn("Follow count update failed:", countError);
        }
        setFollowingIds((prev) => {
          const next = new Set(prev);
          next.delete(targetId);
          return next;
        });
        setProfile((prev) =>
          prev
            ? { ...prev, following_count: Math.max(0, prev.following_count - 1) }
            : prev
        );
      } else {
        const { data: existingFollow, error: existingError } = await supabase
          .from("profile_follows")
          .select("id")
          .eq("follower_id", user.id)
          .eq("following_id", targetId)
          .maybeSingle();

        if (existingError) throw existingError;
        if (existingFollow) {
          setFollowingIds((prev) => new Set(prev).add(targetId));
          return;
        }

        const { error } = await supabase
          .from("profile_follows")
          .insert({ follower_id: user.id, following_id: targetId });

        if (error) throw error;
        const { error: notificationError } = await supabase.from("notifications").insert({
          user_id: targetId,
          actor_id: user.id,
          type: "follow",
          entity_type: "profile",
          entity_id: user.id,
        });
        if (notificationError) {
          console.error("Error creating notification:", notificationError);
        }
        const { error: countError } = await supabase.rpc("increment_follow_counts", {
          follower_id: user.id,
          following_id: targetId,
        });

        if (countError) {
          console.warn("Follow count update failed:", countError);
        }
        setFollowingIds((prev) => new Set(prev).add(targetId));
        setProfile((prev) =>
          prev ? { ...prev, following_count: prev.following_count + 1 } : prev
        );
      }
    } catch (error) {
      const details = {
        message: (error as { message?: string })?.message,
        code: (error as { code?: string })?.code,
        details: (error as { details?: string })?.details,
        hint: (error as { hint?: string })?.hint,
      };
      console.error("Error updating follow status:", error, details);
      const fallback = "Failed to update follow status. Please try again.";
      alert(details.message ? `${fallback}\n${details.message}` : fallback);
    } finally {
      setFollowLoadingId(null);
    }
  };

  const handleAuthClick = () => {
    router.push("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  if (!user || !profile) {
    return null;
  }

  const activityLimit = 2;
  const visiblePosts = posts.slice(0, activityLimit);
  const hasSummary = Boolean(profile.professional_summary?.trim());
  const hasExperiences = experiences.length > 0;
  const hasEducation = education.length > 0;
  const hasCertifications = certifications.length > 0;
  const hasVolunteering = volunteering.length > 0;
  const hasProjects = projects.length > 0;
  const hasPublications = publications.length > 0;
  const hasActivity = posts.length > 0;
  const hasJobPreferences = (profile.job_preferences || []).length > 0;
  const hasSkills = (profile.skills || []).length > 0;
  const hasPreferredCountries = (profile.preferred_countries || []).length > 0;
  const hasProfileContent =
    hasSummary ||
    hasExperiences ||
    hasEducation ||
    hasCertifications ||
    hasVolunteering ||
    hasProjects ||
    hasPublications ||
    hasJobPreferences ||
    hasSkills ||
    hasPreferredCountries;
  const isNewProfile = !hasProfileContent;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onAuthClick={handleAuthClick} />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-3 space-y-6">
            {/* Profile Card */}
            <div className="bg-[#162f16] rounded-2xl p-6 text-white">
              <div className="flex justify-center mb-4 relative">
                <label className="cursor-pointer">
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
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarUpload}
                    disabled={uploading}
                    className="hidden"
                  />
                </label>
              </div>
              
              <h2 className="text-xl font-semibold text-center mb-2">{profile.full_name}</h2>
              <p className="text-sm text-center text-gray-300 mb-1">{profile.occupation || "Professional"}</p>
              <p className="text-sm text-center text-gray-300 mb-1">{profile.country || "Location"}</p>
              {profile.location && (
                <p className="text-xs text-center text-gray-400">{profile.location}</p>
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
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                    profile.accepting_referrals ? "bg-[#162f16]" : "bg-gray-300"
                  } cursor-pointer`}
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
                  <div className="w-16 h-16 rounded-xl bg-[#f0fa95] text-[#162f16] flex items-center justify-center font-bold text-lg mx-auto mb-2">
                    {profile.followers_count}
                  </div>
                  <p className="text-xs text-gray-600">Followers</p>
                </div>
                <div className="flex-1 text-center">
                  <div className="w-16 h-16 rounded-xl bg-[#f0fa95] text-[#162f16] flex items-center justify-center font-bold text-lg mx-auto mb-2">
                    {profile.following_count}
                  </div>
                  <p className="text-xs text-gray-600">Following</p>
                </div>
              </div>
              
              <button
                onClick={() => router.push("/community")}
                className="w-full px-4 py-3 bg-[#162f16] text-white rounded-lg text-sm font-medium hover:bg-[#0f2310] transition"
              >
                View Community
              </button>
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
            {isNewProfile && (
              <div className="bg-white rounded-xl p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Get started</h3>
                  <p className="text-sm text-gray-600">
                    Add a few details so your profile feels complete and discoverable.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => setEditProfileOpen(true)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:border-[#162f16] hover:text-[#162f16] transition"
                  >
                    Add summary & skills
                  </button>
                  <button
                    onClick={() => setAddExperienceOpen(true)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:border-[#162f16] hover:text-[#162f16] transition"
                  >
                    Add experience
                  </button>
                  <button
                    onClick={() => setAddEducationOpen(true)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:border-[#162f16] hover:text-[#162f16] transition"
                  >
                    Add education
                  </button>
                  <button
                    onClick={() => setAddCertificationOpen(true)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:border-[#162f16] hover:text-[#162f16] transition"
                  >
                    Add certification
                  </button>
                  <button
                    onClick={() => setAddProjectOpen(true)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:border-[#162f16] hover:text-[#162f16] transition"
                  >
                    Add project
                  </button>
                  <button
                    onClick={() => setAddVolunteeringOpen(true)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:border-[#162f16] hover:text-[#162f16] transition"
                  >
                    Add volunteering
                  </button>
                  <button
                    onClick={() => setAddPublicationOpen(true)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:border-[#162f16] hover:text-[#162f16] transition"
                  >
                    Add publication
                  </button>
                </div>
              </div>
            )}
            {/* About You */}
            {hasSummary && (
              <div className="bg-white rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">About you</h3>
                  <button
                    onClick={() => setEditProfileOpen(true)}
                    className="text-sm text-[#162f16] hover:underline"
                  >
                    Edit
                  </button>
                </div>
                <p className="text-sm text-gray-600 mb-3">Professional Summary</p>
                <p className="text-xs text-gray-700 leading-relaxed">
                  {profile.professional_summary}
                </p>
              </div>
            )}

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
                      currentUserId={user.id}
                      onUpdate={loadProfile}
                      compact
                    />
                  ))}
                </div>

                {posts.length > activityLimit && (
                  <div className="mt-4 flex justify-center">
                    <button
                      onClick={() => router.push(`/activity/${user.id}`)}
                      className="text-sm text-[#162f16] hover:underline"
                    >
                      Show all posts →
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Experiences */}
            {hasExperiences && (
              <div className="bg-white rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Experiences</h3>
                  <button
                    onClick={() => setAddExperienceOpen(true)}
                    className="text-sm text-[#162f16] hover:underline"
                  >
                    + Add
                  </button>
                </div>
                <div className="space-y-4">
                  {experiences.map((exp) => (
                    <ExperienceCard
                      key={exp.id}
                      experience={exp}
                      isOwner={true}
                      onUpdate={loadProfile}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Education */}
            {hasEducation && (
              <div className="bg-white rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Education</h3>
                  <button
                    onClick={() => setAddEducationOpen(true)}
                    className="text-sm text-[#162f16] hover:underline"
                  >
                    + Add
                  </button>
                </div>
                <div className="space-y-4">
                  {education.map((edu) => (
                    <EducationCard
                      key={edu.id}
                      education={edu}
                      isOwner={true}
                      onUpdate={loadProfile}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Licenses & Certifications */}
            {hasCertifications && (
              <div className="bg-white rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Licenses & Certifications</h3>
                  <button
                    onClick={() => setAddCertificationOpen(true)}
                    className="text-sm text-[#162f16] hover:underline"
                  >
                    + Add
                  </button>
                </div>
                <div className="space-y-3">
                  {certifications.map((cert) => (
                    <CertificationCard
                      key={cert.id}
                      certification={cert}
                      onEdit={() => {}}
                      onDelete={handleDeleteCertification}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Volunteering */}
            {hasVolunteering && (
              <div className="bg-white rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Volunteering</h3>
                  <button
                    onClick={() => setAddVolunteeringOpen(true)}
                    className="text-sm text-[#162f16] hover:underline"
                  >
                    + Add
                  </button>
                </div>
                <div className="space-y-3">
                  {volunteering.map((vol) => (
                    <VolunteeringCard
                      key={vol.id}
                      volunteering={vol}
                      onEdit={() => {}}
                      onDelete={handleDeleteVolunteering}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Projects */}
            {hasProjects && (
              <div className="bg-white rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Projects</h3>
                  <button
                    onClick={() => setAddProjectOpen(true)}
                    className="text-sm text-[#162f16] hover:underline"
                  >
                    + Add
                  </button>
                </div>
                <div className="space-y-3">
                  {projects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onEdit={() => {}}
                      onDelete={handleDeleteProject}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Publications */}
            {hasPublications && (
              <div className="bg-white rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Publications</h3>
                  <button
                    onClick={() => setAddPublicationOpen(true)}
                    className="text-sm text-[#162f16] hover:underline"
                  >
                    + Add
                  </button>
                </div>
                <div className="space-y-3">
                  {publications.map((pub) => (
                    <PublicationCard
                      key={pub.id}
                      publication={pub}
                      onEdit={() => {}}
                      onDelete={handleDeletePublication}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-3 space-y-6">
            {/* Interested Job */}
            {hasJobPreferences && (
              <div className="bg-white rounded-xl p-6">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-gray-900">Interested job</h3>
                  <button
                    onClick={() => setEditProfileOpen(true)}
                    className="text-sm text-[#162f16] hover:underline"
                  >
                    Edit
                  </button>
                </div>
                <p className="text-sm text-gray-600 mb-2">Job Preference</p>
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
              </div>
            )}

            {/* Skills */}
            {hasSkills && (
              <div className="bg-white rounded-xl p-6">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-gray-900">Skills</h3>
                  <button
                    onClick={() => setEditProfileOpen(true)}
                    className="text-sm text-[#162f16] hover:underline"
                  >
                    Edit
                  </button>
                </div>
                <p className="text-sm text-gray-600 mb-2">Top skills</p>
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
              </div>
            )}

            {/* Preferred Countries */}
            {hasPreferredCountries && (
              <div className="bg-white rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Preferred Countries</h3>
                  <button
                    onClick={() => setEditProfileOpen(true)}
                    className="text-sm text-[#162f16] hover:underline"
                  >
                    Edit
                  </button>
                </div>
                <p className="text-sm text-gray-600 mb-3">Loreal Epsum</p>
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
              </div>
            )}

            {suggestions.length > 0 && (
              <div className="bg-white rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">More profiles for you</h3>
                </div>
                <div className="space-y-4">
                  {suggestions.map((suggestion) => {
                    const isFollowing = followingIds.has(suggestion.id);
                    const isLoading = followLoadingId === suggestion.id;

                    return (
                      <div
                        key={suggestion.id}
                        className="flex items-center justify-between gap-3"
                      >
                        <button
                          onClick={() => router.push(`/user/${suggestion.id}`)}
                          className="flex items-center gap-3 text-left min-w-0"
                        >
                          {suggestion.avatar_url ? (
                            <Image
                              src={suggestion.avatar_url}
                              alt={suggestion.full_name}
                              width={40}
                              height={40}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                          ) : (
                            <div className="w-10 h-10 rounded-full bg-[#162f16] text-white flex items-center justify-center font-semibold">
                              {suggestion.full_name?.charAt(0)?.toUpperCase() || "U"}
                            </div>
                          )}
                          <div className="min-w-0">
                            <p className="font-medium text-gray-900 line-clamp-1">
                              {suggestion.full_name || "User"}
                            </p>
                            <p className="text-xs text-gray-600 line-clamp-1">
                              {suggestion.occupation || "Professional"}
                            </p>
                          </div>
                        </button>

                        <button
                          onClick={() => handleToggleFollow(suggestion.id)}
                          disabled={isLoading}
                          className={`px-3 py-1.5 rounded-full text-xs font-medium border transition ${
                            isFollowing
                              ? "border-gray-300 text-gray-700 hover:bg-gray-100"
                              : "border-[#162f16] text-[#162f16] hover:bg-[#162f16] hover:text-white"
                          } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                        >
                          {isFollowing ? "Unfollow" : "Follow"}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modals */}
      <EditProfileModal
        isOpen={editProfileOpen}
        onClose={() => setEditProfileOpen(false)}
        profile={profile}
        onSuccess={loadProfile}
        onAddExperience={() => setAddExperienceOpen(true)}
        onAddEducation={() => setAddEducationOpen(true)}
        onAddCertification={() => setAddCertificationOpen(true)}
        onAddVolunteering={() => setAddVolunteeringOpen(true)}
        onAddProject={() => setAddProjectOpen(true)}
        onAddPublication={() => setAddPublicationOpen(true)}
      />

      <AddExperienceModal
        isOpen={addExperienceOpen}
        onClose={() => setAddExperienceOpen(false)}
        userId={user.id}
        onSuccess={loadProfile}
      />

      <AddEducationModal
        isOpen={addEducationOpen}
        onClose={() => setAddEducationOpen(false)}
        userId={user.id}
        onSuccess={loadProfile}
      />

      <AddCertificationModal
        isOpen={addCertificationOpen}
        onClose={() => setAddCertificationOpen(false)}
        userId={user.id}
        onSuccess={loadProfile}
      />

      <AddVolunteeringModal
        isOpen={addVolunteeringOpen}
        onClose={() => setAddVolunteeringOpen(false)}
        userId={user.id}
        onSuccess={loadProfile}
      />

      <AddProjectModal
        isOpen={addProjectOpen}
        onClose={() => setAddProjectOpen(false)}
        userId={user.id}
        onSuccess={loadProfile}
      />

      <AddPublicationModal
        isOpen={addPublicationOpen}
        onClose={() => setAddPublicationOpen(false)}
        userId={user.id}
        onSuccess={loadProfile}
      />
    </div>
  );
}
