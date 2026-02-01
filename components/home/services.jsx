"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { services } from "@/constants";

export default function Services() {
  return (
    <motion.section
      id="services"
      className="
        relative overflow-hidden
        mb-20 sm:mb-28 mx-auto max-w-screen
        px-6 py-16
        text-[#faf4e7]
        bg-[#001420]
        lg:rounded-4xl rounded-tr-4xl rounded-bl-4xl
      "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/TDSolar_panel_bg.png"
          alt="Residential solar panels background"
          fill
          priority
          className="object-cover opacity-29"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-center text-3xl sm:text-4xl md:text-7xl font-bold tracking-tight mb-10">
          Residential
          <br />
          Solar & Electrical Services
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="
                flex flex-col items-center
                
                rounded-2xl
                shadow-md
                sm:p-8 lg:p-12
                hover:scale-105
                transition duration-300
                w-full max-w-sm
                hover:text-[#cde2f0]
              "
            >
              {service.img ? (
                <div className="relative w-full aspect-square max-w-60 sm:max-w-[280px] lg:max-w-[320px] mb-4">
                  <Image
                    src={service.img}
                    alt={service.brief}
                    fill
                    className="object-cover rounded-full border-2 border-[#cde2f0] p-3 hover:bg-[#305c78]"
                    sizes="
                      (max-width: 768px) 60vw,
                      (max-width: 1200px) 40vw,
                      25vw
                    "
                  />
                </div>
              ) : (
                <div className="w-20 h-20 mb-4 flex items-center justify-center bg-white/10 rounded-lg text-white/50 text-sm">
                  No Image
                </div>
              )}

              <h5 className="text-xl font-semibold text-center text-white hover:text-[#cde2f0]">
                {service.brief}
              </h5>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
