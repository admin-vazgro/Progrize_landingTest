"use client";
import instagram from "../public/Social/Instagram.svg"
import linkedin from "../public/Social/LinkedIn.svg"
import facebook from "../public/Social/Facebook.svg"
import white from "../public/whitelogo.svg"
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#0c331f] text-white pt-4 pb-10 rounded-t-[40px] mx-2 mt-32">
      {/* TOP MARQUEE TEXT */}
      <div className="overflow-hidden text-[70px] text-lime-300 font-medium tracking-tight border-b border-white/10 pb-8">
        <div className="marquee">
          <div className="marquee__inner">
            <span>* Progrize</span>
            <span>* Career</span>
            <span>* Rise</span>
            <span>* Jobs</span>

            {/* Duplicate for seamless loop */}
            <span>* Progrize</span>
            <span>* Career</span>
            <span>* Rise</span>
            <span>* Jobs</span>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-6 mt-14 grid grid-cols-1 md:grid-cols-4 gap-14">

        {/* LEFT BRAND SECTION */}
        <div>
          <Image alt="logo" className="mb-4" width={100} height={100} src={white}></Image>
          <p className="text-gray-300 text-sm font-light">A product by Vazgro</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-lg">
            <a href="https://www.linkedin.com/company/progrize-global" className="hover:text-gray-300 transition">
              <Image src={linkedin} alt="linkedIn"></Image>
            </a>
            <a href="./upcoming" className="hover:text-gray-300 transition">
              <Image src={facebook} alt="facebook"></Image>
            </a>
            <a href="https://www.instagram.com/progrize.global?igsh=MW91a2ppdGFxN3N5" className="hover:text-gray-300 transition">
              <Image src={instagram} alt="instagram"></Image>
            </a>
          </div>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="text-lg font-medium mb-5">Company</h4>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li><a href="./upcoming" className="hover:text-white transition">About</a></li>
            <li><a href="./upcoming" className="hover:text-white transition">Contact us</a></li>
            <li><a href="./upcoming" className="hover:text-white transition">Careers</a></li>
            <li><a href="./upcoming" className="hover:text-white transition">Culture</a></li>
            <li><a href="./upcoming" className="hover:text-white transition">Blog</a></li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h4 className="text-lg font-medium mb-5">Support</h4>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li><a href="./upcoming" className="hover:text-white transition">Getting started</a></li>
            <li><a href="./upcoming" className="hover:text-white transition">Help center</a></li>
            <li><a href="./upcoming" className="hover:text-white transition">Server status</a></li>
            <li><a href="./upcoming" className="hover:text-white transition">Report a bug</a></li>
            <li><a href="./upcoming" className="hover:text-white transition">Chat support</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-lg font-medium mb-5">Contacts us</h4>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li className="flex items-center gap-2">📧 Hello@progrize.com</li>
            <li className="flex items-center gap-2">📞 (+44)7717 820439</li>
            <li className="flex items-start gap-2">
              📍 Innovation Centre, Knowledge Gateway, Boundary Road, Colchester<br /> England, CO4 3ZQ
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM LINE */}
      <div className="border-t border-white/20 mt-12 pt-6 text-center text-gray-300 text-sm">
        Copyright © 2025 | 
        <a href="./upcoming" className="ml-2 hover:text-white">Terms and Conditions</a> | 
        <a href="./upcoming" className="ml-2 hover:text-white">Privacy Policy</a>
      </div>
    </footer>
  );
}