// @/components/shared/rightnav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { Linx } from "@/constants";

interface RightNavProps {
  closeNavOnLinkClick: () => void; // Close navigation explicitly
  isOpen: boolean;                 // Controls appearance
}

const RightNav = ({ closeNavOnLinkClick, isOpen }: RightNavProps) => {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ x: 320, opacity: 0 }}
      animate={{ x: isOpen ? 0 : 320, opacity: isOpen ? 1 : 0 }}
      transition={{ type: "tween", duration: 0.25 }}
      className="fixed top-0 right-0 w-64 h-full bg-[#0b131a] text-white p-4 shadow-2xl z-50"
      aria-hidden={!isOpen}
    >
      {/* Close (X) button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => console.log("hover started: close")}
        onClick={closeNavOnLinkClick}
        type="button"
        aria-label="Close menu"
        className="w-10 h-10 grid place-items-center absolute top-3 right-3"
      >
        <span className="relative block w-8 h-8">
          {/* bars */}
          <span
            className={`absolute left-0 top-1/2 h-[0.22rem] w-7 -translate-y-1/2 rounded bg-white transition-transform duration-200 ${
              isOpen ? "rotate-45 translate-y-0" : "rotate-0 -translate-y-2"
            }`}
          />
          <span
            className={`absolute left-0 top-1/2 h-[0.22rem] w-7 -translate-y-1/2 rounded bg-white transition-all duration-200 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 top-1/2 h-[0.22rem] w-7 -translate-y-1/2 rounded bg-white transition-transform duration-200 ${
              isOpen ? "-rotate-45 translate-y-0" : "rotate-0 translate-y-2"
            }`}
          />
        </span>
      </motion.button>

      {/* Nav links (mapped) */}
      <ul className="nav-linx space-y-1 pt-16 pr-3 text-right">
        {Linx.map(({ link, url }) => {
          const isActive =
            pathname === url || (url !== "/" && pathname?.startsWith(url));

          return (
            <li key={url}>
              <Link href={url} onClick={closeNavOnLinkClick} className="block">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => console.log(`hover started: ${link}`)}
                  className={`w-full text-right py-3 transition-colors hover:text-[#305c78] ${
                    isActive ? "text-white/90" : "text-white/70"
                  }`}
                >
                  <h3 className="text-base">{link}</h3>
                </motion.button>
              </Link>
            </li>
          );
        })}
        <li className="flex justify-end pt-4">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="callButton text-[#002035] hover:text-[#f4f2ed] bg-[#cde2f0] hover:bg-[#305c78] px-4 py-2 rounded-4xl w-fit text-right"
          >
            <Link href="tel:9495565181">
              <h6>CALL NOW</h6>
            </Link>
          </motion.div>
        </li>
      </ul>
    </motion.nav>
  );
};

export default RightNav;
