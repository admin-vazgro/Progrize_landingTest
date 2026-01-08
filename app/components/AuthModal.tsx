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
        className="relative w-full max-w-md mx-4 bg-white rounded-2xl shadow-2xl p-8"
      >
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
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            {view === "sign_in" ? "Welcome Back" : "Create Account"}
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            {view === "sign_in" 
              ? "Sign in to access your Progrize account" 
              : "Join Progrize and start your career journey"}
          </p>
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
                  brand: '#000000',
                  brandAccent: '#333333',
                },
              },
            },
            className: {
              container: 'auth-container',
              button: 'auth-button',
              input: 'auth-input',
            },
          }}
          providers={['google', 'github']}
          redirectTo={`${window.location.origin}/auth/callback`}
          onlyThirdPartyProviders={false}
          magicLink={false}
        />

        {view === "sign_in" && (
          <div className="mt-4 flex items-center justify-between text-sm">
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="text-gray-600 hover:text-gray-900 transition"
            >
              {showPassword ? "Hide password" : "Show password"}
            </button>
          </div>
        )}

        {/* Toggle View */}
        <div className="mt-6 text-center text-sm">
          {view === "sign_in" ? (
            <p className="text-gray-600">
              Don&apos;t have an account?{" "}
              <button
                onClick={() => setView("sign_up")}
                className="text-primary font-semibold hover:underline"
              >
                Sign Up
              </button>
            </p>
          ) : (
            <p className="text-gray-600">
              Already have an account?{" "}
              <button
                onClick={() => setView("sign_in")}
                className="text-primary font-semibold hover:underline"
              >
                Sign In
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
