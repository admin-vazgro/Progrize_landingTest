
import Image from 'next/image'
import Proboy from '../public/progirl.webp'
import React, { useState } from "react";
import { motion } from "framer-motion";
import Schoolimage from '../public/progrizeschool.webp'

const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0 },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };


export default function School() {




    return (
        <>
            <motion.section initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 lg:grid-cols-3 gap-0 md:gap-10 items-center pb-32 border-b pt-32">

                <motion.div variants={fadeUp} className="mt-8 rounded-xl">
                    <div className="w-auto">
                        <Image
                            src={Schoolimage}
                            width={1300}
                            height={900}
                            alt="Picture of the author"
                            className="w-full h-200 "
                        />
                    </div>

                </motion.div>
                <div className="col-span-2">
                    <motion.p variants={fadeUp} className="mt-3 pb-4 text-l md:text-l tracking-wider font-light text-gray-400">[01] PROGRIZE SCHOOL</motion.p>
                    <motion.h1 variants={fadeUp} className="text-2xl tracking-tighter md:text-7xl font-regular  text-gray-900">
                        Learn Faster. Grow Smarter.
                    </motion.h1>
                    <motion.p variants={fadeUp} className="mt-8 text-gray-600 font-light max-w-xl">
                        Learn the most in-demand skills through expert-led crash courses and 1-on-1 mentorship sessions — personalized by AI to accelerate your career growth.                    </motion.p>

                    <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-4 item-center ">
                        <div>
                            <a href="#school" className="inline-flex items-center gap-2 px-5 item  py-3 bg-primary font-regular text-sm text-white rounded-md font-semibold hover:opacity-95">PROGRIZE SCHOOL</a>
                        </div>
                    </motion.div>
                </div>

                {/* Right column: illustrative card / app mock */}

            </motion.section>

        </>
    );
}