// components/about-aero/why.tsx
import React from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";
import Image from "next/image";

export default function Why() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 w-full min-h-screen md:pt-44">
      <section className="flex flex-col pt-7 px-7 md:pl-24">
        <h1 className="md:pl-36 py-7 font-bold text-5xl text-amber-300">
          Why $HSKN?
        </h1>
        <p className="md:pl-36 pb-7 font-bold text-white">
          $HSKN is a unique token, being from the MemePin sector. This means that you will enjoy:
        </p>
        <ul className="md:pl-36 pb-3 text-3xl text-white">
          <li className="py-3 flex flex-row">
            <FaArrowAltCircleRight className="text-amber-300" />
            <h2 className="px-4 -mt-1">Passive Rewards</h2>
          </li>
          <li className="py-3 flex flex-row">
            <FaArrowAltCircleRight className="text-amber-300" />
            <h2 className="px-4 -mt-1">Scalability</h2>
          </li>
          <li className="py-3 flex flex-row">
            <FaArrowAltCircleRight className="text-amber-300" />
            <h2 className="px-4 -mt-1">Real World Utility</h2>
          </li>
        </ul>
      </section>

      <section className="flex pb-14 md:pb-20">
        <div className="relative mx-auto w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
          <Image
            src="/HSKN_head.png"
            alt="HSKN head logo"
            fill
            priority
            className="object-contain"
            sizes="(max-width: 640px) 14rem,
                   (max-width: 768px) 18rem,
                   (max-width: 1024px) 20rem,
                   24rem"
          />
        </div>
      </section>
    </div>
  );
}
