const { fontFamily } = require('tailwindcss/defaultTheme')


/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"], // Enables dark mode using a class
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,css}",
    "./components/**/*.{js,ts,jsx,tsx,css}",
    "./app/**/*.{js,ts,jsx,tsx,css}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem", // Base padding for small devices
        sm: "1.5rem", // Slightly larger padding for small screens
        md: "2rem", // Default for medium screens and above
        lg: "2.5rem", // Increased padding for large screens
        xl: "3rem", // Further increased padding for extra-large screens
      },
      screens: {
        sm: "640px", // Small devices
        md: "768px", // Medium devices (tablets)
        lg: "1024px", // Large devices (desktops)
        xl: "1280px", // Extra large screens
        "2xl": "1400px",
      },
    },
    fontSize: {
      "heading1-bold": [
        "36px",
        {
          lineHeight: "140%",
          fontWeight: "700",
        },
      ],
      "heading1-semibold": [
        "36px",
        {
          lineHeight: "140%",
          fontWeight: "600",
        },
      ],
      "heading2-bold": [
        "30px",
        {
          lineHeight: "140%",
          fontWeight: "700",
        },
      ],
      "heading2-semibold": [
        "30px",
        {
          lineHeight: "140%",
          fontWeight: "600",
        },
      ],
      "heading3-bold": [
        "34px",
        {
          lineHeight: "140%",
          fontWeight: "800",
        },
      ],
      "heading4-medium": [
        "20px",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
      "body-bold": [
        "18px",
        {
          lineHeight: "140%",
          fontWeight: "700",
        },
      ],
      "body-semibold": [
        "18px",
        {
          lineHeight: "140%",
          fontWeight: "600",
        },
      ],
      "body-medium": [
        "18px",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
      "body-normal": [
        "18px",
        {
          lineHeight: "140%",
          fontWeight: "400",
        },
      ],
      "body1-bold": [
        "18px",
        {
          lineHeight: "140%",
          fontWeight: "700",
        },
      ],
      "base-regular": [
        "16px",
        {
          lineHeight: "140%",
          fontWeight: "400",
        },
      ],
      "base-medium": [
        "16px",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
      "base-semibold": [
        "16px",
        {
          lineHeight: "140%",
          fontWeight: "600",
        },
      ],
      "base1-semibold": [
        "16px",
        {
          lineHeight: "140%",
          fontWeight: "600",
        },
      ],
      "small-regular": [
        "14px",
        {
          lineHeight: "140%",
          fontWeight: "400",
        },
      ],
      "small-medium": [
        "14px",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
      "small-semibold": [
        "14px",
        {
          lineHeight: "140%",
          fontWeight: "600",
        },
      ],
      "subtle-medium": [
        "12px",
        {
          lineHeight: "16px",
          fontWeight: "500",
        },
      ],
      "subtle-semibold": [
        "12px",
        {
          lineHeight: "16px",
          fontWeight: "600",
        },
      ],
      "tiny-medium": [
        "10px",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
      "x-small-semibold": [
        "7px",
        {
          lineHeight: "9.318px",
          fontWeight: "600",
        },
      ],
    },
    extend: {
      fontFamily: {
        excon: ['var(--font-excon)', 'sans-serif'],
        switzer: ['var(--font-switzer)', 'sans-serif']
      },
      colors: {
        primary: "#24220d",
        onyx: "#32373b",
        space: "#4a5859",
        powder: "#afc2d5",
        columbia: "#bfd7ea",
        

        // Dark mode colors
        dark: {
          1: "#070808", // Darker background for dark mode
          2: "#0b0d0d",
          3: "#191b1e",
          4: "#1c1e21",
          5: "#24220d"
        },
        light: {
          1: "#f7f9fc", // Lighter background for light mode
          2: "#f4f6f9",
          3: "#e6e8e8",
          4: "#e2e3e3",
          5: "#fffde8"
        },
      },
      boxShadow: {
        "count-badge": "0px 0px 6px 2px rgba(219, 188, 159, 0.30)",
        "groups-sidebar": "-30px 0px 60px 0px rgba(28, 28, 31, 0.50)",
      },
      screens: {
        xs: "400px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
