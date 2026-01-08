"use client";

import { useState, useEffect, useRef } from "react";
import { supabase } from "@/lib/supabase";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: "sign_in" | "sign_up";
  onAuthSuccess?: () => void;
}

export default function AuthModal({ isOpen, onClose, mode, onAuthSuccess }: AuthModalProps) {
  const [view, setView] = useState<"sign_in" | "sign_up">(mode);
  const [showPassword, setShowPassword] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setView(mode);
    setShowPassword(false);
  }, [mode]);

  useEffect(() => {
    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN') {
        // Close modal and trigger success callback
        onClose();
        if (onAuthSuccess) {
          onAuthSuccess();
        }
      }
    });

    return () => subscription.unsubscribe();
  }, [onClose, onAuthSuccess]);

  useEffect(() => {
    if (!isOpen || view !== "sign_in") return;

    const applyVisibility = () => {
      const input = containerRef.current?.querySelector<HTMLInputElement>("#password");
      if (!input) return;
      const desiredType = showPassword ? "text" : "password";
      if (input.type !== desiredType) {
        input.type = desiredType;
      }
      if ("webkitTextSecurity" in input.style) {
        const desiredSecurity = showPassword ? "none" : "disc";
        if (input.style.webkitTextSecurity !== desiredSecurity) {
          input.style.webkitTextSecurity = desiredSecurity;
        }
      }
    };

    applyVisibility();

    const observer = new MutationObserver(() => {
      applyVisibility();
    });

    if (containerRef.current) {
      observer.observe(containerRef.current, {
        subtree: true,
        childList: true,
      });
    }

    return () => observer.disconnect();
  }, [isOpen, showPassword, view]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div
        ref={containerRef}
        className="relative w-full max-w-5xl mx-4 bg-white rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-gray-400 hover:text-gray-600 transition"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div
            className="relative hidden lg:flex items-end min-h-[560px]"
            style={{
              backgroundImage: "url(/signin.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/30 to-transparent" />
            <div className="relative p-10 text-white">
              <p className="text-5xl font-light tracking-tighter">Welcome to</p>
              <p className="text-8xl font-regular  tracking-tighter">Progrize</p>
              
            </div>
          </div>

          <div className="p-8 lg:p-12">
            {/* Header */}
            <div className="mb-6 text-center">
              <h2 className="text-3xl font-semibold text-gray-900">
                {view === "sign_in" ? "Sign In" : "Sign Up"}
              </h2>
              <p className="text-sm text-gray-600 mt-1">Career to the next level</p>
            </div>

            {/* Auth UI */}
            <Auth
              supabaseClient={supabase}
              view={view}
              appearance={{
                theme: ThemeSupa,
                variables: {
                  default: {
                    colors: {
                      brand: "#14351b",
                      brandAccent: "#0f2a14",
                    },
                  },
                },
                className: {
                  container: "auth-container",
                  button: "auth-button",
                  input: "auth-input",
                },
              }}
              providers={["google"]}
              redirectTo={`${window.location.origin}/auth/callback`}
              onlyThirdPartyProviders={false}
              magicLink={false}
            />


            {/* Toggle View */}
            <div className="mt-6 text-center text-sm">
              {view === "sign_in" ? (
                <p className="text-gray-600">
                  Don&apos;t have an account?{" "}
                  <button
                    onClick={() => setView("sign_up")}
                    className="text-[#14351b] font-semibold hover:underline"
                  >
                    Sign Up
                  </button>
                </p>
              ) : (
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <button
                    onClick={() => setView("sign_in")}
                    className="text-[#14351b] font-semibold hover:underline"
                  >
                    Sign In
                  </button>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
