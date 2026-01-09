"use client";

import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";

interface EventComment {
  id: string;
  content: string;
  created_at: string;
  user_id: string;
  user_name: string;
  user_avatar: string;
}

interface Attendee {
  avatar_url: string;
  full_name: string;
}

interface EventDetail {
  id: string;
  post_id: string;
  event_date: string;
  location: string;
  meeting_link: string;
  going_count: number;
  interested_count: number;
  likes_count: number;
  comments_count: number;
  title: string;
  content: string;
  event_image: string | null;
  user_id: string;
  host_name: string;
  host_avatar: string;
  host_occupation: string;
  user_rsvp: string | null;
  attendees: Attendee[];
}

interface EventDetailModalProps {
  eventId: string | null;
  currentUserId: string;
  onClose: () => void;
  onUpdate: () => void;
}

export default function EventDetailModal({ eventId, currentUserId, onClose, onUpdate }: EventDetailModalProps) {
  const [event, setEvent] = useState<EventDetail | null>(null);
  const [comments, setComments] = useState<EventComment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isRSVPing, setIsRSVPing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [imageError, setImageError] = useState(false);

  const loadEventDetails = useCallback(async () => {
    if (!eventId) return;

    try {
      // Load event details
      const { data: eventData, error: eventError } = await supabase
        .from("events")
        .select(`
          *,
          posts!inner(*)
        `)
        .eq("id", eventId)
        .single();

      if (eventError) throw eventError;

      const post = eventData.posts as Record<string, unknown>;

      // Get host profile
      const { data: hostProfile } = await supabase
        .from("profiles")
        .select("full_name, avatar_url, occupation")
        .eq("id", post.user_id as string)
        .single();

      // Get user's RSVP status
      const { data: rsvpData } = await supabase
        .from("event_rsvps")
        .select("status")
        .eq("event_id", eventId)
        .eq("user_id", currentUserId)
        .single();

      // Get user's like status (event likes are stored in post_likes)
      const { data: likeData } = await supabase
        .from("post_likes")
        .select("id")
        .eq("post_id", post.id as string)
        .eq("user_id", currentUserId)
        .single();

      // Get attendees for avatars
      const { data: attendeesData } = await supabase
        .from("event_rsvps")
        .select("user_id")
        .eq("event_id", eventId)
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

      setEvent({
        ...eventData,
        post_id: post.id as string,
        title: post.title as string,
        content: post.content as string,
        event_image: (post.event_image as string) || null,
        user_id: post.user_id as string,
        host_name: hostProfile?.full_name || "User",
        host_avatar: hostProfile?.avatar_url || "",
        host_occupation: hostProfile?.occupation || "",
        user_rsvp: rsvpData?.status || null,
        attendees: attendees.filter((a): a is Attendee => a !== null)
      });

      setIsLiked(!!likeData);
    } catch (error) {
      const details = {
        message: (error as { message?: string })?.message,
        code: (error as { code?: string })?.code,
        hint: (error as { hint?: string })?.hint,
      };
      console.error("Error loading event details:", error, details);
    }
  }, [eventId, currentUserId]);

  const loadComments = useCallback(async () => {
    if (!eventId) return;

    try {
      const { data, error } = await supabase
        .from("event_comments")
        .select("*")
        .eq("event_id", eventId)
        .order("created_at", { ascending: true });

      if (error) throw error;

      // Get user profile data for each comment
      const commentsWithUsers = await Promise.all(
        (data || []).map(async (comment) => {
          const { data: profileData } = await supabase
            .from("profiles")
            .select("full_name, avatar_url")
            .eq("id", comment.user_id)
            .single();

          return {
            ...comment,
            user_name: profileData?.full_name || "User",
            user_avatar: profileData?.avatar_url || ""
          };
        })
      );

      setComments(commentsWithUsers);
    } catch (error) {
      console.error("Error loading comments:", error);
    }
  }, [eventId]);

  useEffect(() => {
    if (eventId) {
      loadEventDetails();
      loadComments();
    }
  }, [eventId, loadEventDetails, loadComments]);

  const handleLike = async () => {
    if (!eventId) return;

    try {
      if (isLiked) {
        // Unlike
        await supabase
          .from("post_likes")
          .delete()
          .eq("post_id", event.post_id)
          .eq("user_id", currentUserId);

        await supabase.rpc("decrement_likes", { post_id: event.post_id });
      } else {
        // Like
        await supabase
          .from("post_likes")
          .insert({ post_id: event.post_id, user_id: currentUserId });

        await supabase.rpc("increment_likes", { post_id: event.post_id });
      }

      setIsLiked(!isLiked);
      loadEventDetails();
      onUpdate();
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

  const handleRSVP = async (status: "going" | "interested") => {
    if (isRSVPing || !eventId || !event) return;
    setIsRSVPing(true);

    try {
      if (event.user_rsvp === status) {
        // Remove RSVP
        await supabase
          .from("event_rsvps")
          .delete()
          .eq("event_id", eventId)
          .eq("user_id", currentUserId);

        const field = status === "going" ? "going_count" : "interested_count";
        await supabase
          .from("events")
          .update({ [field]: Math.max(0, event[field] - 1) })
          .eq("id", eventId);
      } else {
        await supabase
          .from("event_rsvps")
          .upsert({
            event_id: eventId,
            user_id: currentUserId,
            status
          });

        if (event.user_rsvp) {
          const oldField = event.user_rsvp === "going" ? "going_count" : "interested_count";
          const newField = status === "going" ? "going_count" : "interested_count";
          
          await supabase
            .from("events")
            .update({
              [oldField]: Math.max(0, event[oldField] - 1),
              [newField]: event[newField] + 1
            })
            .eq("id", eventId);
        } else {
          const field = status === "going" ? "going_count" : "interested_count";
          await supabase
            .from("events")
            .update({ [field]: event[field] + 1 })
            .eq("id", eventId);
        }
      }

      loadEventDetails();
      onUpdate();
    } catch (error) {
      console.error("Error updating RSVP:", error);
    } finally {
      setIsRSVPing(false);
    }
  };

  const handleDelete = async () => {
    if (isDeleting || !event) return;
    setIsDeleting(true);

    try {
      // Delete the post (cascade will handle related data including the event)
      const { error } = await supabase
        .from("posts")
        .delete()
        .eq("id", event.post_id)
        .eq("user_id", currentUserId); // Extra safety check

      if (error) throw error;

      onUpdate();
      onClose();
    } catch (error) {
      console.error("Error deleting event:", error);
      alert("Failed to delete event. Please try again.");
    } finally {
      setIsDeleting(false);
      setShowDeleteConfirm(false);
    }
  };

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newComment.trim() || !eventId) return;

    setLoading(true);

    try {
      const { error } = await supabase
        .from("event_comments")
        .insert({
          event_id: eventId,
          user_id: currentUserId,
          content: newComment.trim()
        });

      if (error) throw error;

      await supabase.rpc("increment_event_comments", { event_id: eventId });

      setNewComment("");
      loadComments();
      loadEventDetails();
      onUpdate();
    } catch (error) {
      console.error("Error posting comment:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleShare = () => {
    const url = `${window.location.origin}/community?event=${eventId}`;
    navigator.clipboard.writeText(url);
    alert("Link copied to clipboard!");
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    });
  };

  const formatCommentDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      day: 'numeric',
      month: 'long',
      hour: 'numeric',
      minute: '2-digit'
    });
  };

  if (!eventId || !event) return null;

  const totalAttendees = event.going_count + event.interested_count;
  const isHost = event.user_id === currentUserId;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="relative w-full max-w-3xl mx-4 bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-600 transition bg-white rounded-full p-2"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Delete Button (only for host) */}
        {isHost && (
          <div className="absolute top-4 right-16 z-10">
            <button
              onClick={() => setShowDeleteConfirm(!showDeleteConfirm)}
              className="p-2 text-gray-400 hover:text-red-600 transition bg-white rounded-full"
              aria-label="Delete event"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>

            {showDeleteConfirm && (
              <div className="absolute right-0 top-12 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-20 w-64">
                <p className="text-sm text-gray-700 mb-3">Are you sure you want to delete this event?</p>
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

        {/* Event Image */}
        <div className="relative h-72 bg-gray-200 rounded-t-2xl overflow-hidden">
          {event.event_image && !imageError ? (
            <Image
              src={event.event_image}
              alt={event.title}
              fill
              className="object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#162f16] to-[#2a4a2a]">
              <svg className="w-24 h-24 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
        </div>

        <div className="p-8">
          {/* Event Header */}
          <div className="mb-6">
            <h2 className="text-3xl font-semibold text-gray-900 mb-2">{event.title}</h2>
            <p className="text-gray-600">{event.location || "Virtual Event"} || {formatDate(event.event_date)}</p>
          </div>

          {/* Attendees */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex -space-x-2">
              {event.attendees.slice(0, 3).map((attendee, index) => (
                attendee.avatar_url ? (
                  <Image
                    key={index}
                    src={attendee.avatar_url}
                    alt={attendee.full_name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                ) : (
                  <div 
                    key={index}
                    className="w-10 h-10 rounded-full border-2 border-white bg-[#162f16] text-white flex items-center justify-center text-sm font-semibold"
                  >
                    {attendee.full_name.charAt(0).toUpperCase()}
                  </div>
                )
              ))}
            </div>
            <span className="text-gray-700 font-medium">
              {totalAttendees > 0 ? `${totalAttendees} + Going` : "Be the first to join"}
            </span>
          </div>

          {/* Register Button */}
          {event.meeting_link && (
            <a
              href={event.meeting_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition mb-6"
            >
              Register here
            </a>
          )}

          {/* Description */}
          <p className="text-gray-700 mb-6 whitespace-pre-wrap">{event.content}</p>

          {/* Hosted By */}
          <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-200">
            <p className="text-sm text-gray-600 font-medium">Hosted by</p>
            {event.host_avatar ? (
              <Image
                src={event.host_avatar}
                alt={event.host_name}
                width={32}
                height={32}
                className="w-8 h-8 rounded-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-[#162f16] text-white flex items-center justify-center text-sm font-semibold">
                {event.host_name.charAt(0).toUpperCase()}
              </div>
            )}
            <div>
              <p className="text-sm font-medium text-gray-900">{event.host_name}</p>
              {event.host_occupation && (
                <p className="text-xs text-gray-600">{event.host_occupation}</p>
              )}
            </div>
          </div>

          {/* Likes */}
          <div className="flex items-center gap-2 mb-6">
            <button
              onClick={handleLike}
              className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition"
            >
              <svg
                className={`w-6 h-6 ${isLiked ? "fill-red-600 text-red-600" : "fill-none"}`}
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
              <span className="text-sm font-medium">{event.likes_count || 0}</span>
            </button>
          </div>

          {/* Comments Section */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Comments</h3>
            <div className="space-y-4 mb-4">
              {comments.length === 0 ? (
                <p className="text-sm text-gray-500 text-center py-4">No comments yet. Be the first to comment!</p>
              ) : (
                comments.map((comment) => (
                  <div key={comment.id} className="flex gap-3">
                    {comment.user_avatar ? (
                      <Image
                        src={comment.user_avatar}
                        alt={comment.user_name}
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-[#162f16] text-white flex items-center justify-center text-sm font-semibold">
                        {comment.user_name.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <div className="flex-1">
                      <p className="font-medium text-sm text-gray-900">{comment.user_name}</p>
                      <p className="text-xs text-gray-500 mb-2">{formatCommentDate(comment.created_at)}</p>
                      <p className="text-sm text-gray-700">{comment.content}</p>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Add Comment Form */}
            <form onSubmit={handleSubmitComment} className="flex gap-3">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write a comment..."
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
              />
              <button
                type="submit"
                disabled={loading || !newComment.trim()}
                className="px-4 py-2 bg-[#162f16] text-white rounded-lg text-sm font-medium hover:bg-[#0f2310] transition disabled:opacity-50"
              >
                {loading ? "Posting..." : "Post"}
              </button>
            </form>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-6 border-t border-gray-200">
            <button
              onClick={handleShare}
              className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition"
            >
              Share
            </button>
            <button
              onClick={() => handleRSVP("going")}
              disabled={isRSVPing}
              className={`flex-1 px-6 py-3 rounded-lg font-medium transition ${
                event.user_rsvp === "going"
                  ? "bg-[#162f16] text-white"
                  : "bg-[#162f16] text-white hover:bg-[#0f2310]"
              }`}
            >
              {event.user_rsvp === "going" ? "Going" : "I am going"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
