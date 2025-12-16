"use client";

import Image from 'next/image'
import Proboy from '../public/proboy.webp'
import React, { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0 },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

export default function Navbar() {

    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (!fullName.trim()) {
            setMessage("Please enter your full name.");
            return;
        }
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            setMessage("Please enter a valid email address.");
            return;
        }

        setLoading(true);
        setMessage("");

        const res = await fetch("/api/send-curiosity", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ fullName, email }),
        });

        setLoading(false);

        if (res.ok) {
            setMessage("🎉 Your curiosity is now submitted!");
            setFullName("");
            setEmail("");
        } else {
            setMessage("❌ Something went wrong. Try again.");
        }
    }

    return (
        <>
            <motion.section
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={stagger}
                className="grid grid-cols-1 lg:grid-cols-3 gap-0 md:gap-10 items-center pb-12 border-b"
            >

                {/* LEFT COLUMN — EXACTLY SAME */}
                <div className="col-span-2">
                    <motion.p variants={fadeUp} className="mt-3 pb-4 text-l md:text-l font-light text-gray-600">
                        ✌️ Grow your career. Build your team.
                    </motion.p>

                    <motion.h1 variants={fadeUp} className="text-4xl tracking-tighter md:text-8xl font-regular text-gray-900">
                        Career.Simplified
                    </motion.h1>

                    <motion.p variants={fadeUp} className="mt-8 text-gray-600 font-light max-w-xl">
                        Progrize is your all-in-one career platform — discover jobs, mentorship,
                        referrals, and growth opportunities. For professionals and organisations.
                    </motion.p>

                    <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-4 item-center ">
                        <div>
                            <a href="./upcoming" className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-sm text-white rounded-md font-semibold hover:opacity-95">
                                PROGRIZE SCHOOL
                            </a>
                            <a href="./upcoming" className="inline-flex mt-4 md:ml-4 items-center gap-2 px-5 py-3 border border-gray-200 text-sm rounded-md hover:bg-gray-50">
                                PROGRIZE APP <span className="text-sm">Upcoming</span>
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* RIGHT COLUMN — UPDATED FORM */}
                <motion.div variants={fadeUp} id='curiosity' className="mt-8 pt-6 px-6 rounded-xl border  border-gray-300">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="mt-1 text-xl md:text-3xl tracking-tight font-regular">Join the curiosity</div>
                            <div className="text-sm font-light tracking-wide text-muted pt-2">
                                Your AI-Powered career assistant
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-1 gap-3 item-center">

                        {/* FULL NAME */}
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="Enter your full name"
                            className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none text-sm tracking-wide bg-transparent focus:ring-2 focus:ring-accent"
                        />

                        {/* EMAIL */}
                        <input
                            aria-label="Email for join the curiosity"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email id"
                            className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none text-sm tracking-wide bg-transparent focus:ring-2 focus:ring-accent"
                        />

                        {/* SUBMIT */}
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="px-8 py-3 mt-6 rounded-md bg-primary text-white font-semibold text-sm hover:opacity-95"
                                disabled={loading}
                            >
                                {loading ? "Submitting..." : "SUBMIT"}
                            </button>
                        </div>

                        {/* MESSAGE */}
                        {message && (
                            <p className="text-center text-sm mt-2 text-gray-700">
                                {message}
                            </p>
                        )}

                        {/* IMAGE */}
                        <div className="flex justify-center mt-2">
                            <Image
                                src={Proboy}
                                width={100}
                                height={50}
                                alt="Mascot"
                            />
                        </div>

                    </form>
                </motion.div>

            </motion.section>
        </>
    );
}
