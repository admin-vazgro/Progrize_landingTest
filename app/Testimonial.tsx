"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TestimonialSection() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-16">
          <p className="text-gray-400 uppercase tracking-widest text-xs mb-3">
            Testimonials
          </p>

          <h2 className="text-3xl md:text-5xl font-regular tracking-tight text-gray-900 leading-tight">
            What do you think about this ?
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl text-sm font-light">
            We&apos;re open to your suggestions and thoughts. Here&apos;s what people believe
            about Progrize — a platform designed to support your growth, career, and skills.
          </p>
        </div>

        {/* GRID */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              className="border border-gray-300 rounded-2xl p-6 bg-white shadow-sm"
            >
              <span className="px-4 py-1 bg-[#e1f28d] rounded-full text-xs font-semibold">
                Survey
              </span>

              {/* USER INFO */}
              <div className="flex items-center gap-3 mt-4">
                <Image
                  src={item.avatar}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                  alt={item.name}
                />
                <div>
                  <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                  <p className="text-xs text-gray-500">@ {item.role}</p>
                </div>
              </div>

              {/* REVIEW TEXT */}
              <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                {item.review}
              </p>

              <p className="mt-6 text-xs text-gray-700">
                From <span className="font-semibold">survey</span> form
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* REALISTIC TESTIMONIAL DATA */

const testimonials = [
  {
    name: "Sarah Khan",
    role: "Job Seeker",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Progrize feels like the platform we've all been waiting for. The mentorship feature alone can help thousands who struggle with career direction. If this launches, it will truly transform how people grow professionally."
  },
  {
    name: "John Stene",
    role: "Final-Year Student",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "This would be a game-changer. CV optimisation and targeted job referrals together can help students land interviews much faster. A platform like Progrize can save so much time and confusion during job search."
  },
  {
    name: "Riya Kapoor",
    role: "Graduate Student",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "Platforms that combine community, mentorship, and job tracking are rare. Progrize can help people stay consistent and focused in their journey. I can see this helping thousands build their careers in a structured way."
  },
  {
    name: "Alex Turner",
    role: "Career Switcher",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    review:
      "Switching careers is tough, but having a space like Progrize with mentors and supportive communities can reduce fear and guesswork. I wish this existed earlier. It will help many like me make confident career moves."
  },
  {
    name: "Meera Patel",
    role: "GRE Student",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    review:
      "I love how Progrize focuses on skill-building and real growth. Not just jobs — but progress. The workshops and discussion spaces would be a massive support for students preparing for higher studies or competitive exams."
  },
  {
    name: "Dev Sharma",
    role: "Engineering Student",
    avatar: "https://randomuser.me/api/portraits/men/25.jpg",
    review:
      "Finally, a platform that actually listens to what students need. Guidance, opportunities, and a strong professional network in one place. Progrize has huge potential to uplift careers everywhere."
  }
];