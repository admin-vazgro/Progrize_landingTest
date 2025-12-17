"use client";

import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import type { User } from "@supabase/supabase-js";
import Navbar from "../Navbar";
import CreatePostModal from "../components/CreatePostModal";
import PostCard from "../components/PostCard";
import CreateEventModal from "../components/CreateEventModal";
import EventCard from "../components/EventCard";
import EventDetailModal from "../components/EventDetailModal";

type PostType = "all" | "discussion" | "job_opportunity" | "event";
type SortType = "latest" | "top";

interface PostLike {
  user_id: string;
}

interface EventData {
  id: string;
  post_id: string;
  event_date: string;
  location: string;
  meeting_link: string;
  going_count: number;
  interested_count: number;
  likes_count: number;
  comments_count: number;
  user_rsvp: string | null;
  event_image: string | null;
  title: string;
  content: string;
  user_id: string;
  user_name: string;
  user_avatar: string;
  attendees: Array<{ avatar_url: string; full_name: string }>;
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
  const [events, setEvents] = useState<EventData[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [createPostOpen, setCreatePostOpen] = useState(false);
  const [createEventOpen, setCreateEventOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"feed" | "events">("feed");
  const [postTypeFilter, setPostTypeFilter] = useState<PostType>("all");
  const [sortBy, setSortBy] = useState<SortType>("latest");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

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

      const postsWithUsers = await Promise.all(
        (data || []).map(async (post) => {
          const { data: profileData } = await supabase
            .from("profiles")
            .select("full_name, avatar_url, occupation")
            .eq("id", post.user_id)
            .single();

          const isLiked = post.post_likes?.some((like: PostLike) => like.user_id === user?.id) || false;
          
          let eventData = null;
          if (post.post_type === "event" && post.events && post.events.length > 0) {
            const event = post.events[0];
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

  const loadEvents = useCallback(async () => {
    if (!user) return;

    try {
      let query = supabase
        .from("events")
        .select(`
          *,
          posts!inner(*)
        `);

      if (sortBy === "latest") {
        query = query.order("event_date", { ascending: false });
      } else {
        query = query.order("going_count", { ascending: false });
      }

      const { data, error } = await query;

      if (error) throw error;

      const eventsWithDetails = await Promise.all(
        (data || []).map(async (event) => {
          const post = event.posts;
          
          // Get host profile
          const { data: profileData } = await supabase
            .from("profiles")
            .select("full_name, avatar_url")
            .eq("id", post.user_id)
            .single();

          // Get user's RSVP status
          const { data: rsvpData } = await supabase
            .from("event_rsvps")
            .select("status")
            .eq("event_id", event.id)
            .eq("user_id", user?.id)
            .single();

          // Get attendees for avatars
          const { data: attendeesData } = await supabase
            .from("event_rsvps")
            .select("user_id")
            .eq("event_id", event.id)
            .eq("status", "going")
            .limit(5);

          const attendees = await Promise.all(
            (attendeesData || []).map(async (rsvp) => {
              const { data: profile } = await supabase
                .from("profiles")
                .select("full_name, avatar_url")
                .eq("id", rsvp.user_id)
                .single();
              return profile;
            })
          );

          return {
            ...event,
            post_id: post.id,
            title: post.title,
            content: post.content,
            event_image: post.event_image,
            user_id: post.user_id,
            user_name: profileData?.full_name || "User",
            user_avatar: profileData?.avatar_url || "",
            user_rsvp: rsvpData?.status || null,
            attendees: attendees.filter(Boolean)
          };
        })
      );

      setEvents(eventsWithDetails);
    } catch (error) {
      console.error("Error loading events:", error);
    }
  }, [user, sortBy]);

  const filterPosts = useCallback(() => {
    let filtered = [...posts];

    if (activeTab === "events") {
      filtered = filtered.filter(p => p.post_type === "event");
    }

    if (postTypeFilter !== "all") {
      filtered = filtered.filter(p => p.post_type === postTypeFilter);
    }

    if (selectedTags.length > 0) {
      filtered = filtered.filter(p => 
        p.tags && p.tags.some(tag => selectedTags.includes(tag))
      );
    }

    if (searchQuery.trim()) {
      filtered = filtered.filter(p =>
        p.tags && p.tags.some(tag => 
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }

    setFilteredPosts(filtered);
  }, [posts, activeTab, postTypeFilter, selectedTags, searchQuery]);

  const filterEvents = useCallback(() => {
    let filtered = [...events];

    if (searchQuery.trim()) {
      filtered = filtered.filter(e =>
        e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.content.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [events, searchQuery]);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    loadPosts();
    loadEvents();
  }, [loadPosts, loadEvents]);

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

  const getTopHashtags = () => {
    const tagCounts = new Map<string, number>();
    posts.forEach(post => {
      if (post.tags) {
        post.tags.forEach(tag => {
          tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
        });
      }
    });
    return Array.from(tagCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
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

  const filteredEventsData = filterEvents();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onAuthClick={handleAuthClick} />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-regular text-gray-900 mb-2">
            Welcome Back, {user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'User'}👋
          </h1>
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
            <div className="bg-white rounded-xl p-6 border border-gray-200 sticky top-6 space-y-6">
              {/* Search Tags */}
              <div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search tags (#JLUX)"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
                />
              </div>

              {activeTab === "feed" && (
                <>
                  {/* Post Type Filter */}
                  <div>
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
                </>
              )}

              {/* Top Hashtags */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">🔥</span>
                  <p className="text-sm text-gray-700 font-medium">Top Hashtag</p>
                </div>
                <div className="space-y-2">
                  {getTopHashtags().map(([tag, count]) => (
                    <div key={tag} className="flex items-center justify-between">
                      <button
                        onClick={() => toggleTag(tag)}
                        className="text-sm text-gray-700 hover:text-[#162f16] transition"
                      >
                        #{tag}
                      </button>
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                        {count}
                      </span>
                    </div>
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

            {/* Content Feed */}
            {activeTab === "feed" ? (
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
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredEventsData.length === 0 ? (
                  <div className="col-span-2 bg-white rounded-xl p-12 text-center border border-gray-200">
                    <p className="text-gray-600">No events found. Create the first event!</p>
                  </div>
                ) : (
                  filteredEventsData.map((event) => (
                    <EventCard
                      key={event.id}
                      event={event}
                      currentUserId={user?.id || ""}
                      onUpdate={loadEvents}
                      onOpenDetail={setSelectedEventId}
                    />
                  ))
                )}
              </div>
            )}
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
        onSuccess={() => {
          loadPosts();
          loadEvents();
        }}
        userId={user?.id || ""}
      />

      <EventDetailModal
        eventId={selectedEventId}
        currentUserId={user?.id || ""}
        onClose={() => setSelectedEventId(null)}
        onUpdate={() => {
          loadPosts();
          loadEvents();
        }}
      />
    </div>
  );
}