"use client";

import React, { useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import styles from "./NavBarLogo.module.css";

interface NavLink {
  href: string;
  text: string;
}

interface MenuOverlayProps {
  navLinks: NavLink[];
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ navLinks }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when clicking overlay
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setMenuOpen(false);
    }
  };

  return (
    <>
      {/* Hamburger for mobile */}
      <div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-300 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-labelledby="menuIconTitle"
          >
            <title id="menuIconTitle">Menu nawigacyjne</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* Mobile menu overlay */}
      {menuOpen &&
        typeof window !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[70] bg-black/20 backdrop-blur-sm flex justify-end transition-opacity duration-300"
            onClick={handleOverlayClick}
          >
            <div className="w-4/5 max-w-xs h-full bg-gray-950 shadow-2xl p-0 flex flex-col rounded-l-2xl transform translate-x-0 transition-transform duration-300 border-l border-white/20">
              {/* Logo and close button */}
              <div className="flex items-center justify-between px-6 pt-6 pb-2">
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  <Image
                    src="/logo-sorien-agencja-tworząca-strony-internetowe.svg"
                    alt="Sorien Logo"
                    width={90}
                    height={24}
                    className={`h-7 w-auto ${styles.logoGlow}`}
                  />
                </Link>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 hover:text-white focus:outline-none p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-labelledby="closeIconTitle"
                  >
                    <title id="closeIconTitle">Zamknij menu</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <nav className="flex flex-col space-y-6 mt-10 px-8">
                <ul className="flex flex-col space-y-6">
                  {navLinks.map((link) => (
                    <li key={link.text}>
                      <Link
                        href={link.href}
                        className="text-white text-xl font-semibold tracking-wide hover:text-blue-300 transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              {/* Contact email for mobile */}
              <div className="px-8 pb-6 mt-auto">
                <a
                  href="mailto:hello@sorien.pl"
                  className="block text-gray-400 text-sm text-center hover:text-blue-300 transition-colors"
                >
                  hello@sorien.pl
                </a>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default MenuOverlay;
