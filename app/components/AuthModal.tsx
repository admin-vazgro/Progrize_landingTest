"use client";

import { useState, useEffect } from "react";
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

  useEffect(() => {
    setView(mode);
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md mx-4 bg-white rounded-2xl shadow-2xl p-8">
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