"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Image from "next/image";
import CommentsSection from "./CommentsSection";

interface PostEvent {
  id: string;
  event_date: string;
  location: string;
  meeting_link: string;
  going_count: number;
  interested_count: number;
  user_rsvp: string | null;
}

interface PostCardProps {
  post: {
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
    event?: PostEvent;
  };
  currentUserId: string;
  onUpdate: () => void;
  compact?: boolean;
}

export default function PostCard({ post, currentUserId, onUpdate, compact = false }: PostCardProps) {
  const router = useRouter();
  const [showComments, setShowComments] = useState(false);
  const [isLiking, setIsLiking] = useState(false);
  const [isRSVPing, setIsRSVPing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [localLikesCount, setLocalLikesCount] = useState(post.likes_count);
  const [localIsLiked, setLocalIsLiked] = useState(post.is_liked);
  const [localCommentsCount, setLocalCommentsCount] = useState(post.comments_count);

  const isOwner = post.user_id === currentUserId;

  const notifyPostOwner = async (type: "like") => {
    if (post.user_id === currentUserId) return;
    const { error } = await supabase.from("notifications").insert({
      user_id: post.user_id,
      actor_id: currentUserId,
      type,
      entity_type: "post",
      entity_id: post.id,
      meta: {
        title: post.title,
      },
    });
    if (error) {
      console.error("Error creating notification:", error);
    }
  };

  const handleUserClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push(`/user/${post.user_id}`);
  };

  const handleLike = async () => {
    if (isLiking) return;
    setIsLiking(true);

    // Optimistic update
    const newIsLiked = !localIsLiked;
    const newLikesCount = newIsLiked ? localLikesCount + 1 : localLikesCount - 1;
    setLocalIsLiked(newIsLiked);
    setLocalLikesCount(newLikesCount);

    try {
      if (localIsLiked) {
        // Unlike
        await supabase
          .from("post_likes")
          .delete()
          .eq("post_id", post.id)
          .eq("user_id", currentUserId);

        await supabase.rpc("decrement_likes", { post_id: post.id });
      } else {
        // Like
        await supabase
          .from("post_likes")
          .insert({ post_id: post.id, user_id: currentUserId });

        await supabase.rpc("increment_likes", { post_id: post.id });
        await notifyPostOwner("like");
      }

      onUpdate();
    } catch (error) {
      console.error("Error toggling like:", error);
      // Revert on error
      setLocalIsLiked(!newIsLiked);
      setLocalLikesCount(localLikesCount);
    } finally {
      setIsLiking(false);
    }
  };

  const handleRSVP = async (status: "going" | "interested") => {
    if (isRSVPing || !post.event) return;
    setIsRSVPing(true);

    try {
      const eventId = post.event.id;

      if (post.event.user_rsvp === status) {
        // Remove RSVP
        await supabase
          .from("event_rsvps")
          .delete()
          .eq("event_id", eventId)
          .eq("user_id", currentUserId);

        // Decrement count
        const field = status === "going" ? "going_count" : "interested_count";
        await supabase
          .from("events")
          .update({ [field]: Math.max(0, post.event[field] - 1) })
          .eq("id", eventId);
      } else {
        // Add or update RSVP
        await supabase
          .from("event_rsvps")
          .upsert({
            event_id: eventId,
            user_id: currentUserId,
            status
          });

        // Update counts
        if (post.event.user_rsvp) {
          // Switching from one status to another
          const oldField = post.event.user_rsvp === "going" ? "going_count" : "interested_count";
          const newField = status === "going" ? "going_count" : "interested_count";
          
          await supabase
            .from("events")
            .update({
              [oldField]: Math.max(0, post.event[oldField] - 1),
              [newField]: post.event[newField] + 1
            })
            .eq("id", eventId);
        } else {
          // New RSVP
          const field = status === "going" ? "going_count" : "interested_count";
          await supabase
            .from("events")
            .update({ [field]: post.event[field] + 1 })
            .eq("id", eventId);
        }
      }

      onUpdate();
    } catch (error) {
      console.error("Error updating RSVP:", error);
    } finally {
      setIsRSVPing(false);
    }
  };

  const handleDelete = async () => {
    if (isDeleting) return;
    setIsDeleting(true);

    try {
      // Delete the post (cascade will handle related data)
      const { error } = await supabase
        .from("posts")
        .delete()
        .eq("id", post.id)
        .eq("user_id", currentUserId); // Extra safety check

      if (error) throw error;

      onUpdate();
      setShowDeleteConfirm(false);
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Failed to delete post. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };

  const handleCommentUpdate = () => {
    setLocalCommentsCount(prev => prev + 1);
    onUpdate();
  };

  const copyLink = () => {
    const url = `${window.location.origin}/community?post=${post.id}`;
    navigator.clipboard.writeText(url);
    alert("Link copied to clipboard!");
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);

    if (hours < 1) return "Just now";
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    return date.toLocaleDateString();
  };

  const getPostTypeColor = () => {
    switch (post.post_type) {
      case "discussion": return "bg-blue-100 text-blue-800";
      case "job_opportunity": return "bg-green-100 text-green-800";
      case "event": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 hover:shadow-md transition">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between mb-4">
        <div 
          className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition min-w-0"
          onClick={handleUserClick}
        >
          {post.user_avatar ? (
            <Image
              src={post.user_avatar}
              alt={post.user_name}
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-[#162f16] text-white flex items-center justify-center font-semibold">
              {post.user_name.charAt(0).toUpperCase()}
            </div>
          )}
          <div className="min-w-0">
            <p className="font-medium text-gray-900 text-xs hover:underline line-clamp-1">{post.user_name}</p>
            {post.user_occupation && (
              <p className="text-xs text-gray-600 line-clamp-1">{post.user_occupation}</p>
            )}
            <p className="text-xs text-gray-500">{formatDate(post.created_at)}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {isOwner && (
            <div className="relative">
              <button
                onClick={() => setShowDeleteConfirm(!showDeleteConfirm)}
                className="p-2 text-gray-400 hover:text-red-600 transition"
                aria-label="Delete post"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>

              {showDeleteConfirm && (
                <div className="absolute right-0 top-10 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-10 w-64">
                  <p className="text-sm text-gray-700 mb-3">Are you sure you want to delete this post?</p>
                  <div className="flex gap-2">
                    <button
                      onClick={handleDelete}
                      disabled={isDeleting}
                      className="flex-1 px-3 py-2 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700 transition disabled:opacity-50"
                    >
                      {isDeleting ? "Deleting..." : "Delete"}
                    </button>
                    <button
                      onClick={() => setShowDeleteConfirm(false)}
                      className="flex-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200 transition"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <h3
        className={`text-l sm:text-base font-regular text-gray-900 mb-2 ${
          compact ? "line-clamp-2" : ""
        }`}
      >
        {post.title}
      </h3>
      <p
        className={`text-xs sm:text-xs text-gray-700 mb-4 whitespace-pre-wrap break-words ${
          compact ? "line-clamp-3" : ""
        }`}
      >
        {post.content}
      </p>

      {/* Event Details */}
      {post.event && (
        <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-200">
          <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="font-medium">
              {new Date(post.event.event_date).toLocaleString()}
            </span>
          </div>
          
          {post.event.location && (
            <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{post.event.location}</span>
            </div>
          )}

          {post.event.meeting_link && (
            <a
              href={post.event.meeting_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#162f16] hover:underline mb-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span>Join Meeting</span>
            </a>
          )}

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleRSVP("going")}
              disabled={isRSVPing}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                post.event.user_rsvp === "going"
                  ? "bg-[#162f16] text-white"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              Going ({post.event.going_count})
            </button>
            <button
              onClick={() => handleRSVP("interested")}
              disabled={isRSVPing}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                post.event.user_rsvp === "interested"
                  ? "bg-[#162f16] text-white"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              Interested ({post.event.interested_count})
            </button>
          </div>
        </div>
      )}

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag: string, index: number) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-gray-200">
        <button
          onClick={handleLike}
          disabled={isLiking}
          className="flex items-center gap-2 text-gray-600 hover:text-[#162f16] transition"
        >
          <svg
            className={`w-5 h-5 ${localIsLiked ? "fill-[#162f16] text-[#162f16]" : "fill-none"}`}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <span className="text-sm font-medium">{localLikesCount}</span>
        </button>

        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center gap-2 text-gray-600 hover:text-[#162f16] transition"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <span className="text-sm font-medium">{localCommentsCount}</span>
        </button>

        <button
          onClick={copyLink}
          className="flex items-center gap-2 text-gray-600 hover:text-[#162f16] transition"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>
          <span className="text-sm font-medium">Share</span>
        </button>
      </div>

      {/* Comments Section */}
      {showComments && (
        <CommentsSection
          postId={post.id}
          currentUserId={currentUserId}
          onUpdate={handleCommentUpdate}
        />
      )}
    </div>
  );
}
