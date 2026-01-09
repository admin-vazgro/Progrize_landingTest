"use client";

import { useEffect, useMemo, useState } from "react";
import Navbar from "../Navbar";

type TabKey = "profiles" | "posts" | "reports";

interface ProfileRow {
  id: string;
  full_name: string | null;
  occupation: string | null;
  location: string | null;
  followers_count: number | null;
  following_count: number | null;
  created_at: string;
  is_banned: boolean | null;
  is_flagged: boolean | null;
  posts_count: number;
}

interface PostRow {
  id: string;
  title: string;
  content: string;
  post_type: string;
  created_at: string;
  user_id: string;
  user_name: string;
  user_avatar: string;
  user_occupation: string;
}

interface ReportRow {
  id: string;
  reporter_id: string | null;
  target_user_id: string | null;
  target_post_id: string | null;
  target_post_title?: string | null;
  target_post_owner?: string | null;
  reason: string | null;
  status: string;
  created_at: string;
}

export default function AdminProgrizePage() {
  const [activeTab, setActiveTab] = useState<TabKey>("profiles");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [profiles, setProfiles] = useState<ProfileRow[]>([]);
  const [posts, setPosts] = useState<PostRow[]>([]);
  const [reports, setReports] = useState<ReportRow[]>([]);
  const [editingProfile, setEditingProfile] = useState<ProfileRow | null>(null);
  const [editForm, setEditForm] = useState({ full_name: "", occupation: "", location: "" });

  const queryParam = useMemo(() => searchQuery.trim(), [searchQuery]);

  const loadProfiles = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/adminprogrize/profiles?q=${encodeURIComponent(queryParam)}`);
      const json = await res.json();
      setProfiles(json.data || []);
    } finally {
      setLoading(false);
    }
  };

  const loadPosts = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/adminprogrize/posts?q=${encodeURIComponent(queryParam)}`);
      const json = await res.json();
      setPosts(json.data || []);
    } finally {
      setLoading(false);
    }
  };

  const loadReports = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/adminprogrize/reports`);
      const json = await res.json();
      setReports(json.data || []);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === "profiles") {
      loadProfiles();
    } else if (activeTab === "posts") {
      loadPosts();
    } else {
      loadReports();
    }
  }, [activeTab, queryParam]);

  const runAction = async (payload: Record<string, unknown>) => {
    await fetch("/api/adminprogrize/actions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  };

  const handleFlag = async (userId: string) => {
    const reason = window.prompt("Reason for flag (optional):") || "";
    await runAction({ action: "flag_user", userId, reason });
    await loadProfiles();
  };

  const handleBan = async (userId: string) => {
    const reason = window.prompt("Reason for ban (optional):") || "";
    await runAction({ action: "ban_user", userId, reason });
    await loadProfiles();
  };

  const handleReset = async (userId: string) => {
    await runAction({ action: "reset_user", userId });
    await loadProfiles();
  };

  const handleDeleteUser = async (userId: string) => {
    if (!window.confirm("Delete user and all their data?")) return;
    await runAction({ action: "delete_user", userId });
    await loadProfiles();
  };

  const handleDeletePost = async (postId: string) => {
    if (!window.confirm("Delete this post?")) return;
    await runAction({ action: "delete_post", postId });
    await loadPosts();
  };

  const handleDeleteReportedPost = async (postId: string) => {
    if (!window.confirm("Force remove this reported post?")) return;
    await runAction({ action: "delete_post", postId });
    await loadReports();
    await loadPosts();
  };

  const openEdit = (profile: ProfileRow) => {
    setEditingProfile(profile);
    setEditForm({
      full_name: profile.full_name || "",
      occupation: profile.occupation || "",
      location: profile.location || "",
    });
  };

  const saveEdit = async () => {
    if (!editingProfile) return;
    await runAction({
      action: "edit_user",
      userId: editingProfile.id,
      full_name: editForm.full_name,
      occupation: editForm.occupation,
      location: editForm.location,
    });
    setEditingProfile(null);
    await loadProfiles();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onAuthClick={() => {}} />

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-gray-900">Admin Panel</h1>
              <p className="text-sm text-gray-500">Monitor profiles, posts, and reports.</p>
            </div>
            <input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search profiles, posts, locations..."
              className="w-full max-w-sm px-4 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#162f16]"
            />
          </div>

          <div className="flex gap-4 border-b border-gray-200">
            {[
              { key: "profiles", label: "Profiles" },
              { key: "posts", label: "Posts" },
              { key: "reports", label: "Reports" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as TabKey)}
                className={`pb-3 text-sm font-medium transition ${
                  activeTab === tab.key
                    ? "text-[#162f16] border-b-2 border-[#162f16]"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {loading && <p className="text-sm text-gray-500">Loading...</p>}

          {!loading && activeTab === "profiles" && (
            <div className="space-y-4">
              {profiles.length === 0 ? (
                <p className="text-sm text-gray-500">No profiles found.</p>
              ) : (
                profiles.map((profile) => (
                  <div
                    key={profile.id}
                    className="bg-white rounded-xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                  >
                    <div>
                      <h3 className="text-base font-semibold text-gray-900">
                        {profile.full_name || "User"}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {profile.occupation || "Professional"} · {profile.location || "Location"}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        Posts: {profile.posts_count} · Followers: {profile.followers_count ?? 0} · Following:{" "}
                        {profile.following_count ?? 0}
                      </p>
                      <div className="flex gap-2 mt-2">
                        {profile.is_flagged && (
                          <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full text-xs">
                            Flagged
                          </span>
                        )}
                        {profile.is_banned && (
                          <span className="px-2 py-0.5 bg-red-100 text-red-700 rounded-full text-xs">
                            Banned
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => openEdit(profile)}
                        className="px-3 py-2 text-xs rounded-lg border border-gray-200 hover:border-[#162f16] hover:text-[#162f16] transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleFlag(profile.id)}
                        className="px-3 py-2 text-xs rounded-lg border border-yellow-200 text-yellow-700 hover:bg-yellow-50 transition"
                      >
                        Flag
                      </button>
                      <button
                        onClick={() => handleBan(profile.id)}
                        className="px-3 py-2 text-xs rounded-lg border border-red-200 text-red-700 hover:bg-red-50 transition"
                      >
                        Ban
                      </button>
                      <button
                        onClick={() => handleReset(profile.id)}
                        className="px-3 py-2 text-xs rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition"
                      >
                        Reset
                      </button>
                      <button
                        onClick={() => handleDeleteUser(profile.id)}
                        className="px-3 py-2 text-xs rounded-lg border border-gray-200 text-gray-600 hover:text-red-600 transition"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {!loading && activeTab === "posts" && (
            <div className="space-y-4">
              {posts.length === 0 ? (
                <p className="text-sm text-gray-500">No posts found.</p>
              ) : (
                posts.map((post) => (
                  <div key={post.id} className="bg-white rounded-xl p-5">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{post.title}</p>
                        <p className="text-xs text-gray-500">
                          {post.user_name} · {post.post_type} ·{" "}
                          {new Date(post.created_at).toLocaleDateString()}
                        </p>
                      </div>
                      <button
                        onClick={() => handleDeletePost(post.id)}
                        className="text-xs text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    </div>
                    <p className="text-sm text-gray-700 line-clamp-2">{post.content}</p>
                  </div>
                ))
              )}
            </div>
          )}

          {!loading && activeTab === "reports" && (
            <div className="space-y-4">
              {reports.length === 0 ? (
                <p className="text-sm text-gray-500">No reports yet.</p>
              ) : (
                reports.map((report) => (
                  <div key={report.id} className="bg-white rounded-xl p-5">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-gray-900">
                        Report {report.id.slice(0, 8)}
                      </p>
                      <span className="text-xs text-gray-500">{report.status}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Reporter: {report.reporter_id || "Unknown"} · Target user:{" "}
                      {report.target_user_id || "N/A"} · Target post: {report.target_post_id || "N/A"}
                    </p>
                    {report.target_post_title && (
                      <p className="text-sm text-gray-700 mt-3">
                        Post: <span className="font-semibold">{report.target_post_title}</span>
                      </p>
                    )}
                    <p className="text-sm text-gray-700 mt-3">{report.reason || "No reason provided."}</p>
                    {report.target_post_id && (
                      <div className="mt-4">
                        <button
                          onClick={() => handleDeleteReportedPost(report.target_post_id!)}
                          className="px-3 py-2 text-xs rounded-lg border border-red-200 text-red-700 hover:bg-red-50 transition"
                        >
                          Force Remove Post
                        </button>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>

      {editingProfile && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Edit Profile</h3>
            <div className="space-y-3">
              <input
                value={editForm.full_name}
                onChange={(event) => setEditForm({ ...editForm, full_name: event.target.value })}
                placeholder="Full name"
                className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm"
              />
              <input
                value={editForm.occupation}
                onChange={(event) => setEditForm({ ...editForm, occupation: event.target.value })}
                placeholder="Occupation"
                className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm"
              />
              <input
                value={editForm.location}
                onChange={(event) => setEditForm({ ...editForm, location: event.target.value })}
                placeholder="Location"
                className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm"
              />
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={saveEdit}
                className="flex-1 px-4 py-2 bg-[#162f16] text-white rounded-lg text-sm font-medium hover:bg-[#0f2310] transition"
              >
                Save
              </button>
              <button
                onClick={() => setEditingProfile(null)}
                className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
