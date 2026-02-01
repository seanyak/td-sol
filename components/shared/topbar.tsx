// @/components/shared/topbar.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import RightNav from "./rightnav";
import { Hamburger } from "../ui/hamburger";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { Linx } from "@/constants";

export default function Topbar() {
  const pathname = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleNav = () => setIsNavOpen((p) => !p);
  const closeNav = () => setIsNavOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeNav();
      }
    };
    if (isNavOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isNavOpen]);

  return (
    <section className="topbar fixed w-screen h-[90px] z-50 lg:grid grid-cols-2 bg-[#070808] bg-opacity-95">
      {/* Logo + Title */}
      <div className="col-span-1 flex flex-row p-2">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log("hover started!")}
          className="w-18 h-18 relative"
        >
          <Link href="/">
            <Image src="/TD_solar_icon.png" fill alt="TD Solar & Electric" />
          </Link>
        </motion.div>
        <Link href="/">
          <motion.h3
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
            className="pl-4 pt-2 hover:text-[#f2e5cb] text-2xl font-extrabold text-[#f4f2ed]"
          >
            TD Solar & Electric
          </motion.h3>
        </Link>
      </div>

      {/* Nav links mapped from constants with motion */}
      <nav className="nav-linx col-span-1 items-center justify-between font-mono lg:flex pt-1 pr-6 hidden textBase">
        {Linx.map(({ link, url }) => {
          const isActive =
            pathname === url || (url !== "/" && pathname?.startsWith(url));
          return (
            <Link key={url} href={url}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => console.log(`hover started: ${link}`)}
                className={`transition-colors hover:text-[#f2e5cb] ${
                  isActive ? "text-[#f4f2ed]/90" : "text-[#faf4e7]/70"
                }`}
              >
                {link}
              </motion.button>
            </Link>
          );
        })}
        <div className="text-[#002035] hover:text-[#f4f2ed] bg-[#cde2f0] hover:bg-[#305c78] p-2 rounded-4xl">
          <Link href="tel:9495565181">
            CALL NOW
          </Link>
        </div>
      </nav>

      {/* Mobile hamburger */}
      <div className="lg:hidden flex items-center justify-end">
        <Hamburger isOpen={isNavOpen} onClick={toggleNav} />
      </div>

      {/* Mobile drawer */}
      {isNavOpen && (
        <div ref={navRef}>
          <RightNav closeNavOnLinkClick={closeNav} isOpen={isNavOpen} />
        </div>
      )}
    </section>
  );
}
