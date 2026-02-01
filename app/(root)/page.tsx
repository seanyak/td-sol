'use client';

import Image from "next/image";
import { motion } from "motion/react"
import Hero from "@/components/home/hero"
import About from "@/components/home/about"
import Services from "@/components/home/services"
import Vid from "@/components/home/vid"
import ServiceArea from "@/components/home/service-area";
import Contact from "@/components/home/contact";
export default function Home() {
  return (
    <div className="flex-row w-screen min-h-screen items-center justify-center">
      <section className="hero">
        <Hero />
      </section>
      <main className="relative min-h-screen max-w-screen flex-col items-center justify-between py-4 pt-24 lg:px-16 px-8 sm:items-start">
        <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
          <About />
          <Services />
          <ServiceArea />
          <Contact />
        </div>
      </main>
    </div>
  );
}
