// @/components/ui/hamburger.tsx
"use client";

export interface HamburgerProps {
  onClick: () => void;
  isOpen: boolean;
}

export function Hamburger({ onClick, isOpen }: HamburgerProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      aria-label="Toggle menu"
      className="w-8 h-8 flex flex-col justify-center items-center cursor-pointer fixed top-7 right-5 z-50"
    >
      {/* Top bar */}
      <span
        className={`absolute block w-7 h-1 bg-white rounded transition-transform duration-300 ease-in-out ${
          isOpen ? "rotate-45 translate-y-0" : "-translate-y-2 rotate-0"
        }`}
      />

      {/* Middle bar */}
      <span
        className={`absolute block w-7 h-1 bg-white rounded transition-opacity duration-200 ease-in-out ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Bottom bar */}
      <span
        className={`absolute block w-7 h-1 bg-white rounded transition-transform duration-300 ease-in-out ${
          isOpen ? "-rotate-45 translate-y-0" : "translate-y-2 rotate-0"
        }`}
      />
    </button>
  );
}
