"use client";

import { useCallback, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Navbar from "../../Navbar";
import PostCard from "../../components/PostCard";

interface UserProfile {
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

export default function ActivityPage() {
  const router = useRouter();
  const params = useParams();
  const userId = params.userId as string;
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const loadActivity = useCallback(async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push("/");
        return;
      }
      setCurrentUserId(user.id);

      const { data: profileData, error: profileError } = await supabase
        .from("profiles")
        .select("full_name, avatar_url, occupation")
        .eq("id", userId)
        .single();

      if (profileError) throw profileError;
      setProfile(profileData);

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
      console.error("Error loading activity:", error);
    } finally {
      setLoading(false);
    }
  }, [router, userId]);

  useEffect(() => {
    loadActivity();
  }, [loadActivity]);

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

  if (!profile || !currentUserId) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onAuthClick={handleAuthClick} />

      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">All activity</h1>
            <p className="text-sm text-gray-600">{profile.full_name}'s posts</p>
          </div>
          <button
            onClick={() => router.back()}
            className="text-sm text-[#162f16] hover:underline"
          >
            Back
          </button>
        </div>

        {posts.length === 0 ? (
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <p className="text-sm text-gray-600">No posts yet.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                currentUserId={currentUserId}
                onUpdate={loadActivity}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
