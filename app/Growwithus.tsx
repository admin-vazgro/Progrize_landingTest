
import Image from 'next/image'
import Proboy from '../public/progirl.webp'
import React, { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0 },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };


export default function Growwithus() {




    return (
        <>
            <motion.section initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center pb-32 border-b pt-32">

                <div className="col-span-2">
                    <motion.p variants={fadeUp} className="mt-3 pb-4 text-l md:text-l tracking-wider font-light text-gray-900"><span className="px-4 py-1 bg-[#e1f28d] rounded-full text-xs font-light">
                        Grow with us
                    </span></motion.p>
                    <motion.h1 variants={fadeUp} className="text-2xl tracking-tighter md:text-7xl font-regular  text-gray-900">
                        Your are not alone
                    </motion.h1>
                    <motion.p variants={fadeUp} className="mt-8 text-gray-600 font-light max-w-4xl">
                        Yes, we’re people just like you — we fought for jobs and eventually landed them. That’s why we created this platform: to help job seekers land their dream roles and build the skills they need to ace interviews. We’re just getting started, but our vision is to become a one-stop platform for all your job hunting needs</motion.p>

                    <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-4 item-center ">
                        <div>
                            <a href="#school" className="inline-flex items-center gap-2 px-5 item  py-3 bg-primary font-regular text-sm text-white rounded-md font-semibold hover:opacity-95">JOIN THE COMMUNITY</a>
                        </div>
                    </motion.div>
                </div>

                {/* Right column: illustrative card / app mock */}

            </motion.section>

        </>
    );
}