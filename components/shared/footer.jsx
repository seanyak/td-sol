"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { exLinx } from "@/constants";

export default function Footer() {
  return (
    <footer className="w-full py-10 bg-[#001420] border-t border-white/10">
      {/* Flex container that switches layout based on screen size */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-screen mx-auto px-6 gap-6">
        {/* Company name */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log("hover started!")}
          className="w-64 h-64 relative"
        >
          <Link href="/">
            <Image src="/TD_solar_icon.png" fill alt="TD Solar & Electric" className="object-fit"/>
          </Link>
        </motion.div>
        <div className="flex-col">
        <h1 className="text-4xl sm:text-5xl text-[#f4f2ed] tracking-tight text-left md:text-left">
          TD Solar & Electric
        </h1>
        <h6 className="text-[#f4f2ed] text-left pl-3">                
          <Link href="tel:9495565181" className="hover:text-[#cde2f0]">Phone: (949) 556-5181</Link>
        </h6>
        <h6 className="text-[#f4f2ed] text-left pl-3">                
          <Link href="mailto:info@tdsolarelectric.com" className="hover:text-[#cde2f0]">Email: info@tdsolarelectric.com</Link>
        </h6>
        </div>
        <div className="flex-col md:w-32">
        <h5 className="text-4xl sm:text-5xl text-[#f4f2ed] tracking-tight text-left md:text-left">
          Complete Power Solutions for Your Home.
        </h5>
        </div>
        {/* exLinx social icons */}
        <div className="flex items-center justify-center gap-6">
          {exLinx.map((social, index) => (
            <Link
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-[#f4f2ed]/70 hover:text-[#cde2f0] transition duration-300 text-2xl"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <p className="text-sm text-white/50 text-center mt-6">
        © {new Date().getFullYear()} TD Solar & Electric. All rights reserved.
      </p>
    </footer>
  );
}
