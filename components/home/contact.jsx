// @/components/home/contact.jsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-24 w-full"
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
          bg-[#001420]
          lg:rounded-4xl rounded-tr-4xl rounded-bl-4xl
        "
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/TDSolar_residential-solar-02.png"
            alt="Residential solar installation background"
            fill
            priority={false}
            className="object-cover opacity-29"
          />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-7xl pb-12 font-bold font-excon tracking-tight text-[#f4f2ed]">
            Let Us Power Your Next Project
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Copy */}
            <div className="text-center md:text-left text-[#faf4e7]">
              <p className="text-base sm:text-lg md:max-w-prose mx-auto md:mx-0">
                Have questions or ready to get started?
                <br />
                We’d love to hear from you.
              </p>

              <p className="mt-6 text-base sm:text-lg md:max-w-prose mx-auto md:mx-0">
                Whether you’re considering solar, need electrical repairs, or want to prepare your
                home with backup power,{" "}
                <strong className="text-[#f2e5cb]">TD Solar & Electric</strong> is here to help.
              </p>

              <p className="mt-6 text-base sm:text-lg md:max-w-prose mx-auto md:mx-0">
                <Link href="tel:9495565181" className="hover:text-[#cde2f0]">
                  Phone: (949) 556-5181
                </Link>
                <br />
                <Link
                  href="mailto:info@tdsolarelectric.com"
                  className="hover:text-[#cde2f0]"
                >
                  Email: info@tdsolarelectric.com
                </Link>
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
                  src="/TDSolar_residential.png"
                  alt="TD Solar & Electric residential solar installation"
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
