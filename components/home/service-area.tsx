// @/components/home/service-area.tsx
"use client";

import React from "react";
import Image from "next/image";
import { servicearea } from "@/constants";
import { motion } from "motion/react";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function ServiceArea() {
  return (
    <motion.section
      id="ServiceArea"
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
            src="/TDSolar_panels-01.png"
            alt="Residential solar installation background"
            fill
            priority={false}
            className="object-cover opacity-29"
          />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Copy */}
            <div className="text-center md:text-left text-[#faf4e7]">
              <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold font-excon tracking-tight text-[#f4f2ed]">
                Service Areas
              </h1>

              <p className="py-6 text-base sm:text-lg md:max-w-prose mx-auto md:mx-0">
                <strong className="text-[#f2e5cb]">
                  TD Solar & Electric proudly serves homeowners in:
                </strong>
              </p>

              {/* Service area list */}
              <ul className="flex flex-wrap justify-center md:justify-center gap-2 text-lg">
                {servicearea.map((location, index) => (
                  <motion.li
                    key={index}
                    className="
                      loc-data
                      bg-[#f4f2ed] hover:bg-[#cde2f0]
                      text-[#001420]
                      rounded-4xl
                      px-4 py-2
                      shadow-sm
                    "
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    whileHover={{ scale: 1.1 }}
                    viewport={{ once: true }}
                    custom={index}
                  >
                    {location}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Map */}
            <div className="relative mx-auto w-full max-w-md md:max-w-none">
              <div className="relative aspect-4/3 bg-[#32373b] rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="/maps/td-solar-service-area-map.html"
                  title="TD Solar & Electric Service Area"
                  className="
                    absolute inset-0 h-full w-full border-0
                    rounded-xl
                    pointer-events-none md:pointer-events-auto
                  "
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
