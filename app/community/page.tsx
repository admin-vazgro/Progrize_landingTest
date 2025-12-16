"use client";

import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import type { User } from "@supabase/supabase-js";
import Navbar from "../Navbar";
import CreatePostModal from "../components/CreatePostModal";
import PostCard from "../components/PostCard";
import CreateEventModal from "../components/CreateEventModal";

type PostType = "all" | "discussion" | "job_opportunity" | "event";
type SortType = "latest" | "top";

interface PostLike {
  user_id: string;
}

interface EventData {
  id: string;
  event_date: string;
  location: string;
  meeting_link: string;
  going_count: number;
  interested_count: number;
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
  user_name: string;
  user_avatar: string;
  user_occupation: string;
  is_liked: boolean;
  post_likes?: PostLike[];
  events?: EventData[];
  event?: {
    id: string;
    event_date: string;
    location: string;
    meeting_link: string;
    going_count: number;
    interested_count: number;
    user_rsvp: string | null;
  };
}

export default function CommunityPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [createPostOpen, setCreatePostOpen] = useState(false);
  const [createEventOpen, setCreateEventOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"feed" | "events">("feed");
  const [postTypeFilter, setPostTypeFilter] = useState<PostType>("all");
  const [sortBy, setSortBy] = useState<SortType>("latest");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const checkAuth = useCallback(async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      router.push("/");
      return;
    }
    setUser(user);
    setLoading(false);
  }, [router]);

  const loadPosts = useCallback(async () => {
    if (!user) return;

    try {
      // Build query based on sort
      let query = supabase
        .from("posts")
        .select(`
          *,
          post_likes!left(user_id),
          events!left(*)
        `);

      if (sortBy === "latest") {
        query = query.order("created_at", { ascending: false });
      } else {
        query = query.order("likes_count", { ascending: false });
      }

      const { data, error } = await query;

      if (error) throw error;

      // Get user profile data for each post
      const postsWithUsers = await Promise.all(
        (data || []).map(async (post) => {
          // Get profile data from profiles table
          const { data: profileData } = await supabase
            .from("profiles")
            .select("full_name, avatar_url, occupation")
            .eq("id", post.user_id)
            .single();

          const isLiked = post.post_likes?.some((like: PostLike) => like.user_id === user?.id) || false;
          
          let eventData = null;
          if (post.post_type === "event" && post.events && post.events.length > 0) {
            const event = post.events[0];
            // Get user's RSVP status
            const { data: rsvpData } = await supabase
              .from("event_rsvps")
              .select("status")
              .eq("event_id", event.id)
              .eq("user_id", user?.id)
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
      console.error("Error loading posts:", error);
    }
  }, [user, sortBy]);

  const filterPosts = useCallback(() => {
    let filtered = [...posts];

    // Filter by tab
    if (activeTab === "events") {
      filtered = filtered.filter(p => p.post_type === "event");
    }

    // Filter by post type
    if (postTypeFilter !== "all") {
      filtered = filtered.filter(p => p.post_type === postTypeFilter);
    }

    // Filter by tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter(p => 
        p.tags && p.tags.some(tag => selectedTags.includes(tag))
      );
    }

    setFilteredPosts(filtered);
  }, [posts, activeTab, postTypeFilter, selectedTags]);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  useEffect(() => {
    filterPosts();
  }, [filterPosts]);

  const handleAuthClick = () => {
    router.push("/");
  };

  const getAllTags = () => {
    const tags = new Set<string>();
    posts.forEach(post => {
      if (post.tags) {
        post.tags.forEach(tag => tags.add(tag));
      }
    });
    return Array.from(tags);
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onAuthClick={handleAuthClick} />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-regular text-gray-900 mb-2">Community</h1>
          <p className="text-gray-600">Connect, share, and grow with fellow professionals</p>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-4 mb-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab("feed")}
            className={`pb-3 px-4 font-medium transition ${
              activeTab === "feed"
                ? "text-[#162f16] border-b-2 border-[#162f16]"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Live Feed
          </button>
          <button
            onClick={() => setActiveTab("events")}
            className={`pb-3 px-4 font-medium transition ${
              activeTab === "events"
                ? "text-[#162f16] border-b-2 border-[#162f16]"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Events
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar - Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 border border-gray-200 sticky top-6">
              <h3 className="font-semibold text-gray-900 mb-4">Filters</h3>

              {/* Post Type Filter */}
              <div className="mb-6">
                <p className="text-sm text-gray-700 mb-2 font-medium">Post Type</p>
                <div className="space-y-2">
                  {["all", "discussion", "job_opportunity", "event"].map((type) => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="postType"
                        checked={postTypeFilter === type}
                        onChange={() => setPostTypeFilter(type as PostType)}
                        className="w-4 h-4 text-[#162f16]"
                      />
                      <span className="text-sm text-gray-700 capitalize">
                        {type.replace("_", " ")}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Tags Filter */}
              <div>
                <p className="text-sm text-gray-700 mb-2 font-medium">Tags</p>
                <div className="flex flex-wrap gap-2">
                  {getAllTags().map((tag) => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition ${
                        selectedTags.includes(tag)
                          ? "bg-[#162f16] text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Action Bar */}
            <div className="bg-white rounded-xl p-4 mb-6 border border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setCreatePostOpen(true)}
                  className="px-4 py-2 bg-[#162f16] text-white rounded-md text-sm font-medium hover:bg-[#0f2310] transition"
                >
                  Create Post
                </button>
                {activeTab === "events" && (
                  <button
                    onClick={() => setCreateEventOpen(true)}
                    className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-50 transition"
                  >
                    Create Event
                  </button>
                )}
              </div>

              {/* Sort */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortType)}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#162f16]"
                >
                  <option value="latest">Latest</option>
                  <option value="top">Top</option>
                </select>
              </div>
            </div>

            {/* Posts Feed */}
            <div className="space-y-4">
              {filteredPosts.length === 0 ? (
                <div className="bg-white rounded-xl p-12 text-center border border-gray-200">
                  <p className="text-gray-600">No posts found. Be the first to post!</p>
                </div>
              ) : (
                filteredPosts.map((post) => (
                  <PostCard
                    key={post.id}
                    post={post}
                    currentUserId={user?.id || ""}
                    onUpdate={loadPosts}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <CreatePostModal
        isOpen={createPostOpen}
        onClose={() => setCreatePostOpen(false)}
        onSuccess={loadPosts}
        userId={user?.id || ""}
      />

      <CreateEventModal
        isOpen={createEventOpen}
        onClose={() => setCreateEventOpen(false)}
        onSuccess={loadPosts}
        userId={user?.id || ""}
      />
    </div>
  );
}