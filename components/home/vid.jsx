// @/components/home/vid.jsx
"use client";

import React from "react";

export default function Vid() {
  return (
    <section className="w-screen md:max-w-3/4 py-10 sm:py-14 flex justify-center mx-auto">
      <div className="w-full px-3 sm:px-6 md:px-8 flex justify-center">
        {/* Responsive wrapper */}
        <div className="relative w-full aspect-video overflow-hidden rounded-2xl shadow-xl">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/pGyK2pWkt8c"
            title="Connecting the Disconnected: Restoring Hope with DePIN Connectivity"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
