"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  userId: string;
}

export default function CreatePostModal({ isOpen, onClose, onSuccess, userId }: CreatePostModalProps) {
  const [postType, setPostType] = useState<"discussion" | "job_opportunity">("discussion");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim()) {
      setError("Please fill in all required fields");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const tagsArray = tags
        .split(",")
        .map(tag => tag.trim())
        .filter(tag => tag.length > 0);

      const { error: insertError } = await supabase
        .from("posts")
        .insert({
          user_id: userId,
          post_type: postType,
          title: title.trim(),
          content: content.trim(),
          tags: tagsArray,
          community_id: null // You can add community selection later
        });

      if (insertError) throw insertError;

      // Reset form
      setTitle("");
      setContent("");
      setTags("");
      setPostType("discussion");
      
      onSuccess();
      onClose();
    } catch (err) {
      console.error("Error creating post:", err);
      setError("Failed to create post. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl mx-4 bg-white rounded-2xl shadow-2xl p-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Create Post</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Post Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Post Type
            </label>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setPostType("discussion")}
                className={`flex-1 px-4 py-3 rounded-lg border-2 text-sm font-medium transition ${
                  postType === "discussion"
                    ? "border-[#162f16] bg-[#162f16] text-white"
                    : "border-gray-300 text-gray-700 hover:border-gray-400"
                }`}
              >
                Discussion
              </button>
              <button
                type="button"
                onClick={() => setPostType("job_opportunity")}
                className={`flex-1 px-4 py-3 rounded-lg border-2 text-sm font-medium transition ${
                  postType === "job_opportunity"
                    ? "border-[#162f16] bg-[#162f16] text-white"
                    : "border-gray-300 text-gray-700 hover:border-gray-400"
                }`}
              >
                Job Opportunity
              </button>
            </div>
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title *
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter a descriptive title"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#162f16]"
              required
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Content *
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Share your thoughts..."
              rows={6}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#162f16] resize-none"
              required
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tags (comma separated)
            </label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="e.g. design, career, remote"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#162f16]"
            />
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-sm text-red-600">{error}</p>
          )}

          {/* Actions */}
          <div className="flex items-center gap-3 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-[#162f16] text-white rounded-lg font-medium hover:bg-[#0f2310] transition disabled:opacity-50"
            >
              {loading ? "Posting..." : "Post"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}