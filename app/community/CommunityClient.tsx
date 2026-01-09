"use client";

import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter, useSearchParams } from "next/navigation";
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
  tags: string[];
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

export default function CommunityClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);
  const [events, setEvents] = useState<EventData[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [createPostOpen, setCreatePostOpen] = useState(false);
  const [createEventOpen, setCreateEventOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [targetPostId, setTargetPostId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"feed" | "events">("feed");
  const [postTypeFilter, setPostTypeFilter] = useState<PostType>("all");
  const [sortBy, setSortBy] = useState<SortType>("latest");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedEventLocations, setSelectedEventLocations] = useState<string[]>([]);
  const [selectedEventThemes, setSelectedEventThemes] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [profileDetails, setProfileDetails] = useState<{
    full_name: string | null;
    avatar_url: string | null;
    occupation: string | null;
    location: string | null;
    professional_summary: string | null;
    skills: string[] | null;
    feed_preferences: string[] | null;
  } | null>(null);
  const [feedPreferences, setFeedPreferences] = useState<string[]>([]);
  const [preferenceInput, setPreferenceInput] = useState("");
  const [isEditingPreferences, setIsEditingPreferences] = useState(false);
  const [savingPreferences, setSavingPreferences] = useState(false);

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
          
          const { data: profileData } = await supabase
            .from("profiles")
            .select("full_name, avatar_url")
            .eq("id", post.user_id)
            .single();

          const { data: rsvpData } = await supabase
            .from("event_rsvps")
            .select("status")
            .eq("event_id", event.id)
            .eq("user_id", user?.id)
            .single();

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
            tags: post.tags || [],
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
    const normalizedPreferences = feedPreferences.map((pref) => pref.toLowerCase());

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

    if (normalizedPreferences.length > 0) {
      filtered = filtered.filter((post) => {
        const roleMatch = normalizedPreferences.some((pref) =>
          post.user_occupation?.toLowerCase().includes(pref)
        );
        const titleMatch = normalizedPreferences.some((pref) =>
          post.title?.toLowerCase().includes(pref)
        );
        const contentMatch = normalizedPreferences.some((pref) =>
          post.content?.toLowerCase().includes(pref)
        );
        const tagMatch = post.tags?.some((tag) =>
          normalizedPreferences.some((pref) => tag.toLowerCase().includes(pref))
        );
        return Boolean(roleMatch || titleMatch || contentMatch || tagMatch);
      });
    }

    setFilteredPosts(filtered);
  }, [posts, activeTab, postTypeFilter, selectedTags, searchQuery, feedPreferences]);

  const filterEvents = useCallback(() => {
    let filtered = [...events];

    if (searchQuery.trim()) {
      filtered = filtered.filter(e =>
        e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.content.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedEventLocations.length > 0) {
      filtered = filtered.filter((event) =>
        selectedEventLocations.some((location) =>
          event.location?.toLowerCase().includes(location.toLowerCase())
        )
      );
    }

    if (selectedEventThemes.length > 0) {
      filtered = filtered.filter((event) =>
        event.tags?.some((tag) =>
          selectedEventThemes.some((theme) => tag.toLowerCase().includes(theme.toLowerCase()))
        )
      );
    }

    return filtered;
  }, [events, searchQuery, selectedEventLocations, selectedEventThemes]);

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

  useEffect(() => {
    const postId = searchParams.get("post");
    const eventId = searchParams.get("event");

    if (eventId) {
      setActiveTab("events");
      setSelectedEventId(eventId);
    }

    if (postId) {
      setActiveTab("feed");
      setTargetPostId(postId);
    }
  }, [searchParams]);

  useEffect(() => {
    if (!targetPostId || activeTab !== "feed") return;
    const target = document.querySelector(`[data-post-id="${targetPostId}"]`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [targetPostId, activeTab, filteredPosts]);

  useEffect(() => {
    if (!user) {
      setProfileDetails(null);
      return;
    }

    const loadProfileDetails = async () => {
      const { data } = await supabase
        .from("profiles")
        .select("full_name, avatar_url, occupation, location, professional_summary, skills, feed_preferences")
        .eq("id", user.id)
        .maybeSingle();

      setProfileDetails(data ?? null);
      setFeedPreferences(data?.feed_preferences || []);
    };

    loadProfileDetails();
  }, [user]);

  const handleAuthClick = () => {
    router.push("/");
  };

  const savePreferences = async (nextPreferences: string[]) => {
    if (!user) return;
    setSavingPreferences(true);
    try {
      const { error } = await supabase
        .from("profiles")
        .update({ feed_preferences: nextPreferences })
        .eq("id", user.id);

      if (error) throw error;
      setFeedPreferences(nextPreferences);
    } catch (error) {
      console.error("Error updating feed preferences:", error);
      alert("Failed to update preferences. Please try again.");
    } finally {
      setSavingPreferences(false);
    }
  };

  const handleAddPreference = async () => {
    const value = preferenceInput.trim();
    if (!value) return;
    if (feedPreferences.some((pref) => pref.toLowerCase() === value.toLowerCase())) {
      setPreferenceInput("");
      return;
    }
    const nextPreferences = [...feedPreferences, value];
    setPreferenceInput("");
    await savePreferences(nextPreferences);
  };

  const handleRemovePreference = async (value: string) => {
    const nextPreferences = feedPreferences.filter((pref) => pref !== value);
    await savePreferences(nextPreferences);
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

  const getEventLocations = () =>
    Array.from(new Set(events.map((event) => event.location).filter(Boolean))) as string[];

  const getEventThemes = () => {
    const themes = new Set<string>();
    events.forEach((event) => {
      event.tags?.forEach((tag) => themes.add(tag));
    });
    return Array.from(themes).slice(0, 8);
  };

  const toggleEventLocation = (value: string) => {
    setSelectedEventLocations((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const toggleEventTheme = (value: string) => {
    setSelectedEventThemes((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
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

  const displayName =
    profileDetails?.full_name ||
    user?.user_metadata?.full_name ||
    user?.email?.split("@")[0] ||
    "User";
  const completionScore = (() => {
    if (!profileDetails) return 0;
    const fields = [
      profileDetails.full_name,
      profileDetails.occupation,
      profileDetails.location,
      profileDetails.professional_summary,
      profileDetails.skills && profileDetails.skills.length > 0 ? "yes" : "",
    ];
    const filled = fields.filter(Boolean).length;
    return Math.round((filled / fields.length) * 100);
  })();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onAuthClick={handleAuthClick} />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-regular text-gray-900 mb-1">
            Welcome Back, {displayName}👋
          </h1>
          <p className="text-gray-600">Let's collaborate and network.</p>
        </div>

        <div className="flex items-center gap-6 mb-8 border-b border-gray-200">
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

        <div className="grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)_280px] gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 sticky top-6 space-y-6">
              <div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search tags (#JLUX)"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
                />
              </div>

              {activeTab === "feed" ? (
                <>
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
              ) : (
                <>
                  <div>
                    <p className="text-sm text-gray-700 mb-2 font-medium">Location</p>
                    <div className="space-y-2">
                      {getEventLocations().map((location) => (
                        <label key={location} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedEventLocations.includes(location)}
                            onChange={() => toggleEventLocation(location)}
                            className="w-4 h-4 text-[#162f16]"
                          />
                          <span className="text-sm text-gray-700">{location}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-700 mb-2 font-medium">Theme</p>
                    <div className="space-y-2">
                      {getEventThemes().map((theme) => (
                        <label key={theme} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedEventThemes.includes(theme)}
                            onChange={() => toggleEventTheme(theme)}
                            className="w-4 h-4 text-[#162f16]"
                          />
                          <span className="text-sm text-gray-700">{theme}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </>
              )}

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

          <div className="lg:col-span-1">
            {activeTab === "feed" ? (
              <div className="bg-white rounded-xl p-4 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  {profileDetails?.avatar_url ? (
                    <img
                      src={profileDetails.avatar_url}
                      alt={displayName}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-[#162f16] text-white flex items-center justify-center text-sm font-semibold">
                      {displayName.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <button
                    onClick={() => setCreatePostOpen(true)}
                    className="flex-1 text-left px-4 py-2 rounded-lg bg-gray-50 text-sm text-gray-500 hover:bg-gray-100 transition"
                  >
                    What's on your mind
                  </button>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    { label: "Discussion", type: "discussion" },
                    { label: "Job Opportunity", type: "job_opportunity" },
                    { label: "Events", type: "event" },
                    { label: "Mentorship Offer", type: "discussion" },
                    { label: "Coaching", type: "discussion" },
                  ].map((pill) => (
                    <button
                      key={pill.label}
                      onClick={() => setPostTypeFilter(pill.type as PostType)}
                      className="px-3 py-1 rounded-full text-xs bg-[#e8f5e8] text-[#162f16] hover:bg-[#dff0df] transition"
                    >
                      {pill.label}
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-gray-500">
                    <button className="hover:text-[#162f16]" aria-label="Add image">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h18M3 19h18M5 5v14M19 5v14" />
                      </svg>
                    </button>
                    <button className="hover:text-[#162f16]" aria-label="Add link">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 015.657 5.656l-3 3a4 4 0 01-5.657-5.656m-1.414 1.414a4 4 0 00-5.657-5.656l-3 3a4 4 0 005.657 5.656" />
                      </svg>
                    </button>
                    <button className="hover:text-[#162f16]" aria-label="Add location">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 0c-4.418 0-8 2.239-8 5v3h16v-3c0-2.761-3.582-5-8-5z" />
                      </svg>
                    </button>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-400">Draft</span>
                    <button
                      onClick={() => setCreatePostOpen(true)}
                      className="px-4 py-2 bg-[#162f16] text-white rounded-md text-sm font-medium hover:bg-[#0f2310] transition flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12h16m0 0l-6-6m6 6l-6 6" />
                      </svg>
                      Post
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl p-4 mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-1">
                  Welcome Back, {displayName}👋
                </h2>
                <p className="text-sm text-gray-500 mb-4">Create an event post.</p>
                <button
                  onClick={() => setCreateEventOpen(true)}
                  className="px-4 py-2 bg-[#162f16] text-white rounded-md text-sm font-medium hover:bg-[#0f2310] transition"
                >
                  Create Event
                </button>
              </div>
            )}

            <div className="flex items-center justify-end mb-4">
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

            {activeTab === "feed" ? (
              <div className="space-y-4">
                {filteredPosts.length === 0 ? (
                  <div className="bg-white rounded-xl p-12 text-center">
                    <p className="text-gray-600">No posts found. Be the first to post!</p>
                  </div>
                ) : (
                  filteredPosts.map((post) => (
                    <div key={post.id} data-post-id={post.id}>
                      <PostCard
                        post={post}
                        currentUserId={user?.id || ""}
                        onUpdate={loadPosts}
                      />
                    </div>
                  ))
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredEventsData.length === 0 ? (
                  <div className="col-span-2 bg-white rounded-xl p-12 text-center">
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

          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              <div className="bg-[#162f16] rounded-2xl p-6 text-white">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full border-2 border-[#d4af37] overflow-hidden mb-4">
                    {profileDetails?.avatar_url ? (
                      <img
                        src={profileDetails.avatar_url}
                        alt={displayName}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#2a4a2a] flex items-center justify-center text-2xl font-semibold">
                        {displayName.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold">{displayName}</h3>
                  <p className="text-sm text-gray-300">
                    {profileDetails?.occupation || "Professional"}
                  </p>
                  <p className="text-xs text-gray-400">
                    {profileDetails?.location || "Location"}
                  </p>
                  <div className="w-full mt-6">
                    <div className="flex items-center justify-between text-xs text-gray-300 mb-2">
                      <span>Profile completion</span>
                      <span>{completionScore}%</span>
                    </div>
                    <div className="w-full h-2 bg-[#234323] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#d4af37]"
                        style={{ width: `${completionScore}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-semibold text-gray-900">Feed Preference</h4>
                  <button
                    onClick={() => setIsEditingPreferences((prev) => !prev)}
                    className="text-xs text-[#162f16] hover:underline"
                  >
                    {isEditingPreferences ? "Done" : "Edit"}
                  </button>
                </div>
                <p className="text-xs text-gray-500 mb-4">
                  Select what you want to explore
                </p>

                {isEditingPreferences && (
                  <div className="flex gap-2 mb-3">
                    <input
                      type="text"
                      value={preferenceInput}
                      onChange={(e) => setPreferenceInput(e.target.value)}
                      placeholder="Add a tag, role, or company"
                      className="flex-1 px-3 py-2 rounded-lg bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#162f16]"
                    />
                    <button
                      onClick={handleAddPreference}
                      disabled={savingPreferences}
                      className="px-3 py-2 bg-[#162f16] text-white rounded-lg text-xs font-medium hover:bg-[#0f2310] transition disabled:opacity-50"
                    >
                      Add
                    </button>
                  </div>
                )}

                {feedPreferences.length === 0 ? (
                  <p className="text-xs text-gray-400">
                    No preferences yet.
                  </p>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {feedPreferences.map((pref) => (
                      <span
                        key={pref}
                        className="px-3 py-1 rounded-full text-xs bg-[#e8f5e8] text-[#162f16] flex items-center gap-1"
                      >
                        {pref}
                        {isEditingPreferences && (
                          <button
                            onClick={() => handleRemovePreference(pref)}
                            className="text-[#162f16] hover:text-red-600"
                            aria-label={`Remove ${pref}`}
                          >
                            ×
                          </button>
                        )}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

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
