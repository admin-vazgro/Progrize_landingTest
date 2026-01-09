"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import type { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import Navbar from "./Navbar";
import Hero from "./Hero";
import School from "./School";
import Tabs from "./Tabs";
import CommunitySection from "./Features";
import Growwithus from "./Growwithus";
import TestimonialSection from "./Testimonial";
import FAQSection from "./Faq";
import JoinUsSection from "./Joinwithus";
import Footer from "./Footer";
import AuthModal from "./components/AuthModal";
import OnboardingModal from "./components/OnboardingModal";

export default function Page() {
  const router = useRouter();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"sign_in" | "sign_up">("sign_in");
  const [onboardingModalOpen, setOnboardingModalOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

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
    if (user) {
      router.replace("/community");
    }
  }, [router, user]);

  const handleAuthClick = (mode: "sign_in" | "sign_up") => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const handleAuthSuccess = () => {
    // Check if user needs onboarding
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user && !user.user_metadata?.onboarding_completed) {
        // Show onboarding modal for first-time users
        setTimeout(() => {
          setOnboardingModalOpen(true);
        }, 500);
      }
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar onAuthClick={handleAuthClick} />

      <main className="container py-12">
        <Hero />
        <School />
        <Tabs />
        <CommunitySection />
        <Growwithus />
        <TestimonialSection />
        <FAQSection />
        <JoinUsSection />
       
      </main>
 <Footer />
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        mode={authMode}
        onAuthSuccess={handleAuthSuccess}
      />

      {user && (
        <OnboardingModal
          isOpen={onboardingModalOpen}
          onClose={() => setOnboardingModalOpen(false)}
          user={user}
        />
      )}
    </div>
  );
}
