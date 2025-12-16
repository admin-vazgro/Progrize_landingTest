"use client";

import { motion } from "framer-motion";

export default function JoinUsSection() {
  return (
    <section className="w-full py-24 bg-gradient-to-br from-gray-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center px-6"
      >
        <h2 className="text-4xl md:text-6xl font-regular tracking-tight text-gray-900 leading-tight">
          Ready to Join the Beta?
        </h2>

        <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto font-light">
          Be among the first to experience Progrize. We&apos;re building something special,
          and we&apos;d love for you to be part of it.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <a
            href="#beta"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg text-lg font-semibold hover:opacity-95 transition shadow-lg"
          >
            Join the Beta
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

        <p className="mt-6 text-sm text-gray-500">
          No credit card required • Early access perks • Free for 2 months
        </p>
      </motion.div>
    </section>
  );
}