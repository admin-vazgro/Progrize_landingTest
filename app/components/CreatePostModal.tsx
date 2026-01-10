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
  const [postType, setPostType] = useState<
    "discussion" | "job_opportunity" | "event" | "mentorship"
  >("discussion");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [intent, setIntent] = useState<"looking_for" | "providing">("looking_for");
  const [visibility, setVisibility] = useState<"public" | "followers" | "company">("public");
  const [visibilityOpen, setVisibilityOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const addTag = (value: string) => {
    const normalized = value.trim().replace(/^#/, "");
    if (!normalized) return;
    if (tags.some((tag) => tag.toLowerCase() === normalized.toLowerCase())) return;
    setTags((prev) => [...prev, normalized]);
  };

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
      const tagsArray = tags.map((tag) => tag.trim()).filter((tag) => tag.length > 0);

      const intentValue = postType === "job_opportunity" || postType === "mentorship" ? intent : null;

      const { data: postData, error: insertError } = await supabase
        .from("posts")
        .insert({
          user_id: userId,
          post_type: postType,
          intent: intentValue,
          visibility,
          title: title.trim(),
          content: content.trim(),
          tags: tagsArray,
          community_id: null // You can add community selection later
        })
        .select();

      if (insertError) throw insertError;

      if (postData && postData.length > 0) {
        const createdPost = postData[0];
        const { data: followerData } = await supabase
          .from("profile_follows")
          .select("follower_id")
          .eq("following_id", userId);

        if (followerData && followerData.length > 0) {
          const notifications = followerData.map((row) => ({
            user_id: row.follower_id,
            actor_id: userId,
            type: "follower_post",
            entity_type: "post",
            entity_id: createdPost.id,
            meta: { title: createdPost.title },
          }));

          const { error: notificationError } = await supabase.from("notifications").insert(notifications);
          if (notificationError) {
            console.error("Error creating notifications:", notificationError);
          }
        }
      }

      // Reset form
      setTitle("");
      setContent("");
      setTagInput("");
      setTags([]);
      setPostType("discussion");
      setIntent("looking_for");
      setVisibility("public");
      
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
            <div className="flex flex-wrap gap-3">
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
              <button
                type="button"
                onClick={() => setPostType("event")}
                className={`flex-1 px-4 py-3 rounded-lg border-2 text-sm font-medium transition ${
                  postType === "event"
                    ? "border-[#162f16] bg-[#162f16] text-white"
                    : "border-gray-300 text-gray-700 hover:border-gray-400"
                }`}
              >
                Event
              </button>
              <button
                type="button"
                onClick={() => setPostType("mentorship")}
                className={`flex-1 px-4 py-3 rounded-lg border-2 text-sm font-medium transition ${
                  postType === "mentorship"
                    ? "border-[#162f16] bg-[#162f16] text-white"
                    : "border-gray-300 text-gray-700 hover:border-gray-400"
                }`}
              >
                Mentorship
              </button>
            </div>
            {postType === "event" && (
              <p className="mt-2 text-xs text-gray-500">
                For full event details (date, location), use the Events tab.
              </p>
            )}
          </div>

          {/* Intent */}
          {(postType === "job_opportunity" || postType === "mentorship") && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Looking for / Providing
              </label>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setIntent("looking_for")}
                  className={`flex-1 px-4 py-3 rounded-lg border-2 text-sm font-medium transition ${
                    intent === "looking_for"
                      ? "border-[#162f16] bg-[#162f16] text-white"
                      : "border-gray-300 text-gray-700 hover:border-gray-400"
                  }`}
                >
                  Looking for
                </button>
                <button
                  type="button"
                  onClick={() => setIntent("providing")}
                  className={`flex-1 px-4 py-3 rounded-lg border-2 text-sm font-medium transition ${
                    intent === "providing"
                      ? "border-[#162f16] bg-[#162f16] text-white"
                      : "border-gray-300 text-gray-700 hover:border-gray-400"
                  }`}
                >
                  Providing
                </button>
              </div>
            </div>
          )}

          {/* Visibility */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Visibility
            </label>
            <button
              type="button"
              onClick={() => setVisibilityOpen((prev) => !prev)}
              className="w-full flex items-center justify-between rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-700 hover:border-gray-400"
            >
              <span className="flex items-center gap-2">
                <span className="text-base">🌍</span>
                {visibility === "public"
                  ? "Anyone"
                  : visibility === "followers"
                  ? "Followers"
                  : "My company"}
              </span>
              <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {visibilityOpen && (
              <div className="absolute z-10 mt-2 w-full rounded-xl border border-gray-200 bg-white p-3 shadow-lg">
                {[
                  { key: "public", title: "Anyone", subtitle: "Anyone on or off Progrize" },
                  { key: "followers", title: "Followers", subtitle: "Only your followers" },
                  { key: "company", title: "My company", subtitle: "People in your organization" },
                ].map((option) => (
                  <button
                    key={option.key}
                    type="button"
                    onClick={() => {
                      setVisibility(option.key as "public" | "followers" | "company");
                      setVisibilityOpen(false);
                    }}
                    className="flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-left hover:bg-gray-50"
                  >
                    <div>
                      <p className="text-sm font-medium text-gray-900">{option.title}</p>
                      <p className="text-xs text-gray-500">{option.subtitle}</p>
                    </div>
                    {visibility === option.key && (
                      <svg className="w-5 h-5 text-[#162f16]" viewBox="0 0 24 24" fill="none">
                        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
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
              Tags
            </label>
            <div className="flex flex-wrap gap-2 rounded-lg border border-gray-300 px-3 py-2 focus-within:ring-2 focus-within:ring-[#162f16]">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                >
                  #{tag}
                  <button
                    type="button"
                    onClick={() => setTags((prev) => prev.filter((item) => item !== tag))}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ×
                  </button>
                </span>
              ))}
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(event) => {
                  if (event.key === " " || event.key === "," || event.key === "Enter") {
                    event.preventDefault();
                    addTag(tagInput);
                    setTagInput("");
                  }
                }}
                onBlur={() => {
                  if (tagInput.trim()) {
                    addTag(tagInput);
                    setTagInput("");
                  }
                }}
                placeholder="Type and hit space"
                className="flex-1 min-w-[120px] border-0 px-1 py-1 text-sm focus:outline-none"
              />
            </div>
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
