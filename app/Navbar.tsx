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

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setDropdownOpen(false);
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