import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative w-screen h-screen overflow-hidden shadow-2xl">
      {/* Fade overlay */}
      <div className="absolute shadow-2xl" />

      {/* Heading */}
        <h1 className="relative z-20 tracking-wide pt-28 md:pt-36 px-4 text-center text-white">
            Power Your Home with Confidence <br />
        </h1>
        <h4 className="italic relative z-20 tracking-wide py-16 md:py-24 px-4 text-center text-white">Solar. Electrical. Backup Power. Done Right.</h4>

      {/* Background image */}
      <Image
        src="/TD_solar-hero.png"
        alt="lightning caused blackout"
        fill
        priority
        className="object-cover -z-50 shadow-2xl"
      />
    </div>
  );
}
