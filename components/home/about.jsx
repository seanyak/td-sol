// @/components/home/about.jsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function About() {
  return (
    <motion.section
      id="about"
      className="mb-20 sm:mb-28 w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div
        className="
          relative overflow-hidden
          mx-auto max-w-screen
          px-4 sm:px-6 lg:px-44
          py-12 md:py-20
          bg-[#305c78]
          lg:rounded-4xl rounded-tr-4xl rounded-bl-4xl
        "
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/TDSolar_panels-bg.jpg"
            alt="Residential solar installation background"
            fill
            priority={false}
            className="object-cover opacity-40"
          />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Copy */}
            <div className="text-center md:text-left text-[#faf4e7]">
              <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold font-excon tracking-tight text-[#f4f2ed]">
                About
              </h1>

              <p className="mt-6 md:hidden text-base sm:text-lg md:max-w-prose mx-auto md:mx-0">
                At TD Solar & Electric,
                <br />
                we help homeowners take control of their power—whether that means installing residential solar, upgrading electrical panels, or preparing your home with reliable backup energy systems. From clean energy solutions to everyday electrical work, we deliver safe, code-compliant results you can trust.
              </p>

              <p className="mt-6 hidden md:flex text-base sm:text-lg md:max-w-prose mx-auto md:mx-0">
                At TD Solar & Electric, we help homeowners take control of their power—whether that means installing residential solar, upgrading electrical panels, or preparing your home with reliable backup energy systems. From clean energy solutions to everyday electrical work, we deliver safe, code-compliant results you can trust.
              </p>

              <p className="mt-4 text-base sm:text-lg text-[#faf4e7] md:max-w-prose mx-auto md:mx-0">
                We specialize in residential projects and pride ourselves on clear communication, quality craftsmanship, and doing the job right the first time.
              </p>

              <p className="mt-4 text-base sm:text-lg">
                <strong className="text-[#f2e5cb]">
                  Power you can depend on. Service you can trust.
                </strong>
              </p>

              <div className="mt-8">
                <a
                  href="tel:9495565181"
                  className="
                    inline-flex items-center justify-center
                    rounded-full
                    bg-[#cde2f0]
                    px-5 py-3
                    text-black font-medium
                    hover:bg-[#305c78] hover:text-[#cde2f0]
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f2e5cb]
                  "
                >
                  CALL NOW
                </a>
              </div>
            </div>

            {/* Foreground image */}
            <div className="relative mx-auto w-full max-w-md md:max-w-none">
              <div className="relative aspect-4/3 bg-[#32373b] rounded-tr-[8rem] rounded-bl-[8rem]">
                <Image
                  src="/TDsolar_solar-roof-01.jpeg"
                  alt="Residential solar roof installation"
                  fill
                  className="object-cover rounded-tr-[4rem] rounded-bl-[4rem]"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
