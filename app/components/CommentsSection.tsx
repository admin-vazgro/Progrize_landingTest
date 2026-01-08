"use client";

import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Comment {
  id: string;
  content: string;
  created_at: string;
  user_id: string;
  user_name: string;
  user_avatar: string;
}

interface CommentsSectionProps {
  postId: string;
  currentUserId: string;
  onUpdate: () => void;
}

export default function CommentsSection({ postId, currentUserId, onUpdate }: CommentsSectionProps) {
  const router = useRouter();
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(false);

  const loadComments = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from("comments")
        .select("*")
        .eq("post_id", postId)
        .order("created_at", { ascending: true });

      if (error) throw error;

      // Get user profile data for each comment from profiles table
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
  }, [postId]);

  useEffect(() => {
    loadComments();
  }, [loadComments]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newComment.trim()) return;

    setLoading(true);

    try {
      const { error } = await supabase
        .from("comments")
        .insert({
          post_id: postId,
          user_id: currentUserId,
          content: newComment.trim()
        });

      if (error) throw error;
      
      // Increment comments count
      await supabase.rpc("increment_comments", { post_id: postId });

      setNewComment("");
      await loadComments();
      onUpdate();
    } catch (error) {
      console.error("Error posting comment:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUserClick = (userId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    router.push(`/user/${userId}`);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (minutes < 1) return "Just now";
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  };

  return (
    <div className="mt-6 pt-6 border-t border-gray-200">
      {/* Comments List */}
      <div className="space-y-4 mb-4">
        {comments.length === 0 ? (
          <p className="text-sm text-gray-500 text-center py-4">No comments yet. Be the first to comment!</p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="flex gap-3">
              <div 
                className="cursor-pointer hover:opacity-80 transition"
                onClick={(e) => handleUserClick(comment.user_id, e)}
              >
                {comment.user_avatar ? (
                  <Image
                    src={comment.user_avatar}
                    alt={comment.user_name}
                    width={32}
                    height={32}
                    className="rounded-full object-cover"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-[#162f16] text-white flex items-center justify-center text-sm font-semibold">
                    {comment.user_name.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
              <div className="flex-1">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p 
                    className="font-medium text-sm text-gray-900 cursor-pointer hover:underline"
                    onClick={(e) => handleUserClick(comment.user_id, e)}
                  >
                    {comment.user_name}
                  </p>
                  <p className="text-sm text-gray-700 mt-1">{comment.content}</p>
                </div>
                <p className="text-xs text-gray-500 mt-1 ml-3">{formatDate(comment.created_at)}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Add Comment Form */}
      <form onSubmit={handleSubmit} className="flex gap-3">
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
  );
}