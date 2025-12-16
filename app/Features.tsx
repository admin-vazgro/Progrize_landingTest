"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import screen from "../public/screen.svg";

export default function CommunitySection() {
  return (
    <section className="relative w-full py-24 md:py-36 ">

      {/* TEXT HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto px-6"
      >
        <p className="text-gray-400 uppercase tracking-widest text-xs mb-3">
          # Our Community
        </p>

        <h2 className="text-3xl md:text-5xl font-regular tracking-tighter text-gray-900 leading-tight">
          A Professional Community Built for Growth
        </h2>

        <p className="mt-4 text-gray-600  font-light ">
          Connect, collaborate, and grow with peers, mentors, recruiters, and alumni.
          From events to mentorships, the Progrize Community is where careers progress together.
        </p>
      </motion.div>

      {/* MAIN WRAPPER */}
      <div className="relative mt-20 max-w-5xl mx-auto justify-center px-4">

        {/* BACKGROUND IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative w-full mx-auto drop-shadow-xl justify-center"
        >
          <Image
            src={screen}
            width={800}
            height={1000}
            alt="Community Dashboard"
            className="w-auto h-auto mx-auto rounded-2xl object-cover"
          />
        </motion.div>

        {/* FLOATING CARDS */}
        {floatingCards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
            className={`
              hidden md:flex absolute bg-white rounded-2xl p-6 shadow-xl w-64
              ${card.position}
            `}
          >
            <div>
              <p className="font-medium">{card.title}</p>
              <p className="text-gray-500 text-sm mt-2">{card.text}</p>
            </div>
          </motion.div>
        ))}

      </div>

      {/* MOBILE VERSION (STACKED CARDS) */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: {
            opacity: 1, y: 0,
            transition: { staggerChildren: 0.15 }
          }
        }}
        className="mt-16 md:hidden flex flex-col gap-6 px-6"
      >
        {floatingCards.map((card, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
            className="bg-white rounded-2xl p-6 shadow-md"
          >
            <p className="font-medium">{card.title}</p>
            <p className="text-gray-500 text-sm mt-2">{card.text}</p>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}

/* CARD DATA (clean & reusable) */
const floatingCards = [
  {
    title: "Engage in Meaningful Discussions",
    text: "Share ideas, ask questions, and explore topics that match your goals.",
    position: "top-[-40px] left-[-90px]",
  },
  {
    title: "Request or Offer Mentorship",
    text: "Helped 2k+ people land a job.",
    position: "top-[-40px] right-[-90px]",
  },
  {
    title: "Join Events & Workshops",
    text: "Discover webinars and meetups tailored to your interests.",
    position: "bottom-[-40px] left-[-90px]",
  },
  {
    title: "Create or Join Spaces",
    text: "Be part of private or public community groups.",
    position: "bottom-[-40px] right-[-90px]",
  },
];
