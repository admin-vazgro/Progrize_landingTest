"use client";

import { lazy, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from 'next/image'
import Proboy from '../public/mentorship.webp'
import Community from '../public/community.webp'
import Aiboy from '../public/ai.webp'
import Jobtracking from '../public/kutty.webp'
import kuttu from '../public/tracking.webp'
import aime from '../public/aivme.webp'
import team from '../public/team.webp'
import Org from '../public/communityOrg.webp'
import Lady from '../public/lady.webp'
import CV from "../public/cv.png"

export default function ProgrizeAppSection() {
  const [active, setActive] = useState<"pro" | "org">("pro");

  const fade = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.25 } },
  };

  return (
    <section className="container py-20">
      {/* HEADER */}
      <p className="text-gray-500 tracking-widest text-sm mb-6">[ 0 2 ] PROGRIZE APP</p>

      {/* TABS */}
      <div className="flex border-b border-gray-300 mb-10">
        <button
          onClick={() => setActive("pro")}
          className={`px-8 py-3 text-sm tracking-wide uppercase border-b-2 ${active === "pro"
              ? "border-black text-black"
              : "border-transparent text-gray-500 hover:text-black"
            }`}
        >
          FOR PROFESSIONALS
        </button>

        <button
          onClick={() => setActive("org")}
          className={`px-8 py-3 text-sm tracking-wide uppercase border-b-2 ${active === "org"
              ? "border-black text-black"
              : "border-transparent text-gray-500 hover:text-black"
            }`}
        >
          FOR ORGANISATIONS
        </button>
      </div>

      {/* CONTENT */}
      <AnimatePresence mode="wait">
        {active === "pro" && (
          <motion.div
            key="pro"
            variants={fade}
            initial="hidden"
            animate="show"
            exit="exit"
            // KEY CHANGE: Single grid container for all 6 items
            className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-fr"
          >

            {/* CARD 1 — CV OPTIMIZED (Stays standard size) */}
            <div className="border border-gray-300 rounded-2xl md:col-span-2 md:max-h-[220px]  p-6 bg-white md:flex  justify-between gap-6">
              <div className="max-h-32">
                <span className="px-4 py-1 bg-[#e1f28d] rounded-full text-xs font-regular">
                  Upcoming
                </span>
                <h3 className="mt-4 text-xl font-regular">AI-Optimised CVs</h3>
                <p className="text-gray-600 text-sm font-light tracking-wider mt-3 max-w-xs">
                  Beat ATS filters with AI-crafted and expert-reviewed CVs.
                </p>
              </div>
                <div className="w-full mt-6 md:mt-0 ">
                <Image
                  src={CV}
                  alt="Mentorship"
                  width={800}
                  height={800}
                  className="w-full max-h-72 md:max-h-44  object-cover rounded-xl"
                />
              </div>
            </div>

            {/* CARD 2 — MENTORSHIP (KEY: row-span-2) */}
            <div className="border border-gray-300 rounded-2xl p-6 bg-white flex flex-col md:row-span-2">
              <span className="px-4 py-1 bg-[#e1f28d] rounded-full w-24 text-xs font-regular">
                  Upcoming
                </span>
              <h3 className="mt-4 text-xl font-regular">Mentorship</h3>

              <p className="text-gray-600 text-sm font-light tracking-wide mt-3 max-w-xs">
                Learn from industry mentors to upskill and ace interviews.
              </p>

              {/* IMAGE WRAPPER */}
              <div className="w-full mt-6">
                <Image
                  src={Proboy}
                  alt="Mentorship"
                  width={800}
                  height={800}
                  className="w-full h-72 object-cover rounded-xl"
                />
              </div>
            </div>


            {/* CARD 3 — COMMUNITIES (KEY: row-span-2) */}
            <div className="border border-gray-300 rounded-2xl p-6 bg-white flex flex-col md:row-span-2">
              <span className="px-4 py-1 bg-[#e1f28d] w-24 rounded-full text-xs font-light">
                Upcoming
              </span>
              <h3 className="mt-4 text-xl font-regular">Communities</h3>
              <p className="text-gray-600 text-sm font-light tracking-wider mt-3 max-w-xs">
                Connect with peers, share insights, and grow together.
              </p>
               <div className="w-full mt-6">
                <Image
                  src={Community}
                  alt="Community"
                  width={800}
                  height={600}
                  className="w-full  h-72 object-cover rounded-xl"
                />
              </div>
            </div>

            {/* CARD 4 — PROFILE (Sits under CV Optimized) */}
           <div className="border border-gray-300 rounded-2xl md:col-span-2 md:max-h-[240px] p-6 bg-white md:flex  justify-between gap-6">
              <div>
                <span className="px-4 py-1 bg-[#e1f28d] rounded-full text-xs font-light">
                  Upcoming
                </span>
                <h3 className="mt-4 text-xl font-regular">Build a Standout Profile</h3>
                <p className="text-gray-600 font-light tracking-wider text-sm mt-3 max-w-xs">
                  Showcase your skills, projects, and achievements with a career profile that attracts recruiters.
                </p>
              </div>
              <div className="w-full md:w-52 mt-8 md:mt-0">
                <Image
                  src={Jobtracking}
                  alt="Community" 
                  width={800}
                  height={600}
                  className="rounded-xl"
                />
              </div>
            </div>

            {/* CARD 5 — JOB REFERRALS (Sits on the next row, automatically placed) */}
      <div className="border border-gray-300 rounded-2xl md:col-span-2 md:max-h-[240px] p-6 bg-white md:flex  justify-between gap-6">
         <div className="md:w-52  mb-8 md:mb-0">
                <Image
                  src={Aiboy}
                   width={800}
                  height={600}
                  alt="Community"
                  className="w-full h-auto  object-cover rounded-xl"
                />
              </div>
              <div>
                <span className="px-4 py-1 bg-[#e1f28d] rounded-full text-xs font-light">
                  Upcoming
                </span>
                <h3 className="mt-4 text-xl font-regular">Job Referrals</h3>
                <p className="text-gray-600 text-sm font-light tracking-wider mt-3 max-w-xs">
                  Stay organised with smart application tracking.
                </p>
              </div>
             
            </div>

            {/* CARD 6 — JOB TRACKING */}
       <div className="border border-gray-300 rounded-2xl md:col-span-2 md:max-h-[240px] p-6 bg-white md:flex  justify-between gap-6">
         <div className=" w-full md:w-64 mb-8 md:mb-0">
                <Image
                  src={kuttu}
                   width={800}
                  height={600}
                  alt="Community"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
              <div>
                <span className="px-4 py-1 bg-[#e1f28d] rounded-full text-xs font-light">
                  Upcoming
                </span>
                <h3 className="mt-4 text-xl font-regular">Job Tracking</h3>
                <p className="text-gray-600 text-sm mt-3 font-light tracking-wider max-w-xs">
                  Stay organised with smart application tracking.
                </p>
              </div>
             
            </div>

          </motion.div>
        )}

        {/* ---------------- ORGANISATIONS ---------------- */}
        {active === "org" && (
          <motion.div
            key="org"
            variants={fade}
            initial="hidden"
            animate="show"
            exit="exit"
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
             {/* CARD 1 — CShowcase Your Employer Brand */}
            <div className="border border-gray-300 rounded-2xl md:col-span-2 md:max-h-[220px] p-6 bg-white md:flex  justify-between gap-6">
              <div>
                <span className="px-4 py-1 bg-[#e1f28d] rounded-full text-xs font-regular">
                  Upcoming
                </span>
                <h3 className="mt-4 text-xl font-regular">Showcase Your Employer Brand</h3>
                <p className="text-gray-600 text-sm font-light tracking-wider mt-3 max-w-xs">
                  Build a branded company profile that highlights your culture, mission, and career opportunities.
                </p>
              </div>
            
            </div>

            {/* CARD 2 — Hire faster */}
            <div className="border border-gray-300 rounded-2xl p-6 bg-white flex flex-col md:row-span-2">
              <span className="px-4 py-1 bg-[#e1f28d] rounded-full w-24 text-xs font-regular">
                  Upcoming
                </span>
              <h3 className="mt-4 text-xl font-regular">Hire Faster with AI</h3>

              <p className="text-gray-600 text-sm font-light tracking-wide mt-3 max-w-xs">
                Post jobs, track applicants, and let AI-powered filters surface the most qualified candidates.
              </p>

              {/* IMAGE WRAPPER */}
              <div className="w-full mt-6">
                <Image
                  src={aime}
                  alt="Mentorship"
                  width={800}
                  height={800}
                  className="w-full h-72 object-cover rounded-xl"
                />
              </div>
            </div>


            {/* CARD 3 — Reach Verified Talent (KEY: row-span-2) */}
            <div className="border border-gray-300 rounded-2xl p-6 bg-white flex flex-col md:row-span-2">
              <span className="px-4 py-1 bg-[#e1f28d] w-24 rounded-full text-xs font-light">
                Upcoming
              </span>
              <h3 className="mt-4 text-xl font-regular">Reach Talent</h3>
              <p className="text-gray-600 text-sm font-light mt-3 max-w-xs">
                Connect with professionals who are mentored, trained, and project-ready for real workplace demands.
              </p>
               <div className="w-full mt-6">
                <Image
                  src={team}
                  alt="Community"
                  width={800}
                  height={600}
                  className="w-full h-44 h-72 object-cover rounded-xl"
                />
              </div>
            </div>

            {/* CARD 4 — Data-Driven Hiring Insights */}
           <div className="border border-gray-300 rounded-2xl md:col-span-2 md:max-h-[220px] p-6 bg-white md:flex  justify-between gap-6">
              <div>
                <span className="px-4 py-1 bg-[#e1f28d] rounded-full text-xs font-light">
                  Upcoming
                </span>
                <h3 className="mt-4 text-xl font-regular">Data-Driven Hiring Insights</h3>
                <p className="text-gray-600 font-light tracking-wider text-sm mt-3 max-w-xs">
                  Access real-time analytics on candidate quality, job performance, and sector skill trends.
                </p>
              </div>
              
            </div>

            {/* CARD 5 — Empower Recruiters & HR Teams */}
      <div className="border border-gray-300 rounded-2xl md:col-span-2 md:max-h-[240px] p-6 bg-white md:flex  justify-between gap-6">
         <div className="md:w-52  mb-8 md:mb-0">
                <Image
                  src={Lady}
                   width={800}
                  height={600}
                  alt="Community"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
              <div>
                <span className="px-4 py-1 bg-[#e1f28d] rounded-full text-xs font-light">
                  Upcoming
                </span>
                <h3 className="mt-4 text-xl font-regular">Empower Recruiters & HR Teams</h3>
                <p className="text-gray-600 text-sm font-light tracking-wider mt-3 max-w-xs">
                  Invite recruiters and admins, giving them the visibility and tools to manage hiring effectively.
                </p>
              </div>
             
            </div>

            {/* CARD 6 — Community-Driven Referrals */}
       <div className="border border-gray-300 rounded-2xl md:col-span-2 md:max-h-[240px] p-6 bg-white md:flex  justify-between gap-6">
         <div className=" w-full md:w-64 mb-8 md:mb-0">
                <Image
                  src={Org}
                   width={800}
                  height={600}
                  alt="Community"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
              <div>
                <span className="px-4 py-1 bg-[#e1f28d] rounded-full text-xs font-light">
                  Upcoming
                </span>
                <h3 className="mt-4 text-xl font-regular">Community-Driven Referrals</h3>
                <p className="text-gray-600 text-sm mt-3 font-light tracking-wider max-w-xs">
                 Leverage trusted referrals from mentors and professionals within the Progrize network.
                </p>
              </div>
             
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}