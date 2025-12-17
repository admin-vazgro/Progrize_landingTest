"use client";

import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import Navbar from "../../Navbar";

interface UserProfile {
  id: string;
  full_name: string;
  first_name: string;
  last_name: string;
  avatar_url: string;
  occupation: string;
  country: string;
  created_at: string;
}

interface UserPost {
  id: string;
  title: string;
  content: string;
  post_type: string;
  created_at: string;
  likes_count: number;
  comments_count: number;
}

export default function UserProfilePage() {
  const router = useRouter();
  const params = useParams();
  const userId = params.userId as string;
  
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [posts, setPosts] = useState<UserPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"posts" | "events">("posts");

  const loadUserProfile = useCallback(async () => {
    try {
      // Load user profile
      const { data: profileData, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .single();

      if (profileError) throw profileError;
      setProfile(profileData);

      // Load user posts
      const { data: postsData, error: postsError } = await supabase
        .from("posts")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", { ascending: false });

      if (postsError) throw postsError;
      setPosts(postsData || []);
    } catch (error) {
      console.error("Error loading user profile:", error);
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    loadUserProfile();
  }, [loadUserProfile]);

  const handleAuthClick = () => {
    router.push("/");
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric"
    });
  };

  const getPostTypeColor = (type: string) => {
    switch (type) {
      case "discussion": return "bg-blue-100 text-blue-800";
      case "job_opportunity": return "bg-green-100 text-green-800";
      case "event": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
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

  const filteredPosts = activeTab === "posts" 
    ? posts.filter(p => p.post_type !== "event")
    : posts.filter(p => p.post_type === "event");

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onAuthClick={handleAuthClick} />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200 mb-6">
          <div className="flex items-start gap-6">
            {/* Avatar */}
            {profile.avatar_url ? (
              <Image
                src={profile.avatar_url}
                alt={profile.full_name}
                width={120}
                height={120}
                className="rounded-2xl object-cover"
              />
            ) : (
              <div className="w-[120px] h-[120px] rounded-2xl bg-[#162f16] text-white flex items-center justify-center text-4xl font-semibold">
                {profile.full_name.charAt(0).toUpperCase()}
              </div>
            )}

            {/* Profile Info */}
            <div className="flex-1">
              <h1 className="text-3xl font-semibold text-gray-900 mb-2">
                {profile.full_name}
              </h1>
              {profile.occupation && (
                <p className="text-lg text-gray-700 mb-2">{profile.occupation}</p>
              )}
              {profile.country && (
                <p className="text-sm text-gray-600 mb-4">{profile.country}</p>
              )}
              <p className="text-sm text-gray-500">
                Member since {formatDate(profile.created_at)}
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-6">
              <div className="text-center">
                <p className="text-2xl font-semibold text-gray-900">{posts.length}</p>
                <p className="text-sm text-gray-600">Posts</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-semibold text-gray-900">
                  {posts.reduce((sum, post) => sum + post.likes_count, 0)}
                </p>
                <p className="text-sm text-gray-600">Likes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-4 mb-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab("posts")}
            className={`pb-3 px-4 font-medium transition ${
              activeTab === "posts"
                ? "text-[#162f16] border-b-2 border-[#162f16]"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Posts ({posts.filter(p => p.post_type !== "event").length})
          </button>
          <button
            onClick={() => setActiveTab("events")}
            className={`pb-3 px-4 font-medium transition ${
              activeTab === "events"
                ? "text-[#162f16] border-b-2 border-[#162f16]"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Events ({posts.filter(p => p.post_type === "event").length})
          </button>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 gap-4">
          {filteredPosts.length === 0 ? (
            <div className="bg-white rounded-xl p-12 text-center border border-gray-200">
              <p className="text-gray-600">No {activeTab} yet</p>
            </div>
          ) : (
            filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition cursor-pointer"
                onClick={() => router.push("/community")}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 flex-1">
                    {post.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPostTypeColor(post.post_type)}`}>
                    {post.post_type.replace("_", " ")}
                  </span>
                </div>
                <p className="text-gray-700 mb-4 line-clamp-2">{post.content}</p>
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span>{post.likes_count}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>{post.comments_count}</span>
                  </div>
                  <span className="ml-auto text-xs">
                    {new Date(post.created_at).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}