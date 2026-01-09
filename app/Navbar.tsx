"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import type { User } from "@supabase/supabase-js";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import logo from "../public/logo.svg";

interface NavbarProps {
  onAuthClick: (mode: "sign_in" | "sign_up") => void;
}

export default function Navbar({ onAuthClick }: NavbarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Array<{
    id: string;
    user_id: string;
    actor_id: string | null;
    type: string;
    entity_type: string | null;
    entity_id: string | null;
    meta: Record<string, unknown>;
    created_at: string;
    read_at: string | null;
    actor_name?: string;
    actor_avatar?: string;
  }>>([]);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) {
      setNotifications([]);
      setUnreadCount(0);
      return;
    }

    const loadNotifications = async () => {
      const { data, error } = await supabase
        .from("notifications")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })
        .limit(10);

      if (error) {
        console.error("Error loading notifications:", error);
        return;
      }

      const items = data || [];
      const actorIds = Array.from(
        new Set(items.map((item) => item.actor_id).filter(Boolean))
      ) as string[];

      let profilesMap = new Map<string, { full_name: string; avatar_url: string }>();
      if (actorIds.length > 0) {
        const { data: profilesData } = await supabase
          .from("profiles")
          .select("id, full_name, avatar_url")
          .in("id", actorIds);

        (profilesData || []).forEach((profile) => {
          profilesMap.set(profile.id, {
            full_name: profile.full_name,
            avatar_url: profile.avatar_url,
          });
        });
      }

      const enriched = items.map((item) => {
        const actor = item.actor_id ? profilesMap.get(item.actor_id) : undefined;
        return {
          ...item,
          actor_name: actor?.full_name || "User",
          actor_avatar: actor?.avatar_url || "",
        };
      });

      setNotifications(enriched);
      setUnreadCount(enriched.filter((item) => !item.read_at).length);
    };

    loadNotifications();

    const channel = supabase
      .channel(`notifications-${user.id}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "notifications",
          filter: `user_id=eq.${user.id}`,
        },
        (payload) => {
          const newItem = payload.new as {
            id: string;
            user_id: string;
            actor_id: string | null;
            type: string;
            entity_type: string | null;
            entity_id: string | null;
            meta: Record<string, unknown>;
            created_at: string;
            read_at: string | null;
          };

          setNotifications((prev) => [newItem, ...prev].slice(0, 10));
          setUnreadCount((prev) => prev + 1);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setDropdownOpen(false);
    setNotificationsOpen(false);
    router.push("/");
  };

  const handleCommunityClick = () => {
    if (!user) {
      onAuthClick("sign_in");
    } else {
      router.push("/community");
    }
    setMobileMenuOpen(false);
  };

  const getUserName = () => {
    if (user?.user_metadata?.first_name) {
      return `${user.user_metadata.first_name} ${user.user_metadata.last_name || ""}`.trim();
    }
    if (user?.email) {
      return user.email.split("@")[0];
    }
    return "User";
  };

  const getAvatarUrl = () => {
    return user?.user_metadata?.avatar_url || "";
  };

  const getInitial = () => {
    if (user?.user_metadata?.first_name) {
      return user.user_metadata.first_name.charAt(0).toUpperCase();
    }
    if (user?.email) {
      return user.email.charAt(0).toUpperCase();
    }
    return "U";
  };

  const formatNotificationTime = (dateString: string) => {
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

  const getNotificationText = (notification: { type: string; meta: Record<string, unknown> }) => {
    const title = (notification.meta?.title as string) || "your post";
    switch (notification.type) {
      case "like":
        return `liked ${title}`;
      case "comment":
        return `commented on ${title}`;
      case "follow":
        return "started following you";
      case "follower_post":
        return `shared a post: ${title}`;
      default:
        return "sent you a notification";
    }
  };

  const markNotificationsRead = async () => {
    if (!user) return;
    await supabase
      .from("notifications")
      .update({ read_at: new Date().toISOString() })
      .eq("user_id", user.id)
      .is("read_at", null);
    setNotifications((prev) =>
      prev.map((item) => (item.read_at ? item : { ...item, read_at: new Date().toISOString() }))
    );
    setUnreadCount(0);
  };

  return (
    <header className="py-6 bg-white border-b border-gray-100 sticky top-0 z-40">
      <div className="container mx-auto flex items-center justify-between px-4">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link href="/">
            <Image src={logo} alt="Progrize logo" className="w-auto h-8" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 text-sm tracking-wider text-gray-600">
          <a href="#features" className="hover:text-[#162f16] transition">Features</a>
          <a href="#testimonials" className="hover:text-[#162f16] transition">Testimonials</a>
          <a href="/upcoming" className="hover:text-[#162f16] transition">Resources</a>
          <button
            onClick={handleCommunityClick}
            className={`hover:text-[#162f16] transition ${
              pathname === "/community" ? "text-[#162f16] font-semibold" : ""
            }`}
          >
            Community
          </button>
        </nav>

        {/* Desktop Auth Section */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4">
              <div className="relative">
                <button
                  onClick={async () => {
                    const nextOpen = !notificationsOpen;
                    setNotificationsOpen(nextOpen);
                    if (nextOpen) {
                      await markNotificationsRead();
                    }
                  }}
                  className="relative p-2 rounded-full hover:bg-gray-100 transition"
                  aria-label="Notifications"
                >
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0m6 0H9"
                    />
                  </svg>
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-full">
                      {unreadCount > 9 ? "9+" : unreadCount}
                    </span>
                  )}
                </button>

                {notificationsOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-semibold text-gray-900">Notifications</p>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.length === 0 ? (
                        <p className="px-4 py-6 text-sm text-gray-500 text-center">
                          No notifications yet.
                        </p>
                      ) : (
                        notifications.map((notification) => (
                          <button
                            key={notification.id}
                            onClick={() => {
                              setNotificationsOpen(false);
                              if (notification.entity_type === "post" && notification.entity_id) {
                                router.push(`/community?post=${notification.entity_id}`);
                              } else if (notification.type === "follow" && notification.actor_id) {
                                router.push(`/user/${notification.actor_id}`);
                              }
                            }}
                            className={`w-full px-4 py-3 flex gap-3 text-left hover:bg-gray-50 ${
                              notification.read_at ? "bg-white" : "bg-blue-50/40"
                            }`}
                          >
                            {notification.actor_avatar ? (
                              <Image
                                src={notification.actor_avatar}
                                alt={notification.actor_name || "User"}
                                width={36}
                                height={36}
                                className="w-9 h-9 rounded-full object-cover"
                              />
                            ) : (
                              <div className="w-9 h-9 rounded-full bg-[#162f16] text-white flex items-center justify-center text-xs font-semibold">
                                {(notification.actor_name || "U").charAt(0).toUpperCase()}
                              </div>
                            )}
                            <div className="flex-1">
                              <p className="text-sm text-gray-900">
                                <span className="font-semibold">
                                  {notification.actor_name || "User"}
                                </span>{" "}
                                {getNotificationText(notification)}
                              </p>
                              <p className="text-xs text-gray-500">
                                {formatNotificationTime(notification.created_at)}
                              </p>
                            </div>
                          </button>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-3 hover:opacity-80 transition"
                >
                  {getAvatarUrl() ? (
                    <Image
                      src={getAvatarUrl()}
                      alt="Profile"
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-[#162f16] text-white flex items-center justify-center font-semibold">
                      {getInitial()}
                    </div>
                  )}
                  <span className="text-gray-900 font-medium">
                    {getUserName()}
                  </span>
                  <svg
                    className={`w-4 h-4 text-gray-600 transition-transform ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <button
                      onClick={() => {
                        router.push("/profile");
                        setDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Profile
                    </button>
                    <button
                      onClick={() => {
                        router.push("/community");
                        setDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Community
                    </button>
                    <button
                      onClick={() => setDropdownOpen(false)}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Settings
                    </button>
                    <hr className="my-2 border-gray-200" />
                    <button
                      onClick={handleSignOut}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <>
              <button
                onClick={() => onAuthClick("sign_in")}
                className="px-4 py-2 text-gray-700 hover:text-gray-900 transition"
              >
                Sign In
              </button>
              <button
                onClick={() => onAuthClick("sign_up")}
                className="px-4 py-2 bg-[#162f16] text-white rounded-md hover:bg-[#0f2310] transition"
              >
                Sign Up
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Open menu"
          className="md:hidden p-2"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-4 px-6 py-4 bg-white border-t border-gray-200 text-sm tracking-wide">
          <a href="#features" className="py-2 hover:text-[#162f16]" onClick={() => setMobileMenuOpen(false)}>
            Features
          </a>
          <a href="#testimonials" className="py-2 hover:text-[#162f16]" onClick={() => setMobileMenuOpen(false)}>
            Testimonials
          </a>
          <a href="/upcoming" className="py-2 hover:text-[#162f16]" onClick={() => setMobileMenuOpen(false)}>
            Resources
          </a>
          <button
            onClick={handleCommunityClick}
            className="text-left py-2 hover:text-[#162f16]"
          >
            Community
          </button>
          
          {user ? (
            <>
              <button
                onClick={() => {
                  router.push("/profile");
                  setMobileMenuOpen(false);
                }}
                className="text-left py-2 hover:text-[#162f16]"
              >
                Profile
              </button>
              <button
                onClick={handleSignOut}
                className="text-left py-2 text-red-600 hover:text-red-700"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  onAuthClick("sign_in");
                  setMobileMenuOpen(false);
                }}
                className="text-left py-2 hover:text-[#162f16]"
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  onAuthClick("sign_up");
                  setMobileMenuOpen(false);
                }}
                className="mt-2 px-4 py-2 bg-[#162f16] text-white text-center rounded-md"
              >
                Sign Up
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
