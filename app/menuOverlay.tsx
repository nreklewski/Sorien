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
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle menu opening with animation
  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  // Trigger animation after menu is rendered
  React.useEffect(() => {
    if (menuOpen) {
      // Small delay to ensure DOM is updated
      const timer = setTimeout(() => {
        setIsAnimating(true);
      }, 10);
      return () => clearTimeout(timer);
    }
  }, [menuOpen]);

  // Handle menu closing with animation
  const handleMenuClose = () => {
    setIsAnimating(false);
    // Wait for animation to complete before removing from DOM
    setTimeout(() => {
      setMenuOpen(false);
    }, 300);
  };

  // Close menu when clicking overlay
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleMenuClose();
    }
  };

  return (
    <>
      {/* Hamburger for mobile */}
      <div>
        <button
          onClick={menuOpen ? handleMenuClose : handleMenuOpen}
          className="text-gray-300 focus:outline-none cursor-pointer p-2 rounded-lg hover:bg-white/10 transition-all duration-200 hover:scale-105"
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8 transition-transform duration-200 hover:rotate-12"
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
            className={`fixed inset-0 z-[70] bg-black/20 backdrop-blur-sm flex justify-end transition-opacity duration-300 ${
              isAnimating ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={handleOverlayClick}
          >
            <div className={`w-4/5 max-w-xs h-full bg-gray-950 shadow-2xl p-0 flex flex-col rounded-l-2xl border-l border-white/20 transition-transform duration-300 ease-out ${
              isAnimating ? 'translate-x-0' : 'translate-x-full'
            }`}>
              {/* Logo and close button */}
              <div className="flex items-center justify-between px-6 pt-6 pb-2">
                <Link href="/" onClick={handleMenuClose}>
                  <Image
                    src="/logo-sorien-agencja-tworząca-strony-internetowe.svg"
                    alt="Sorien Logo"
                    width={90}
                    height={24}
                    className={`h-7 w-auto ${styles.logoGlow}`}
                  />
                </Link>
                <button
                  onClick={handleMenuClose}
                  className="text-gray-300 hover:text-white focus:outline-none p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 hover:scale-110"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-8 h-8 transition-transform duration-200 hover:rotate-90"
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
              <nav className="flex flex-col space-y-3 mt-8 px-8">
                <ul className="flex flex-col space-y-3">
                  {navLinks.map((link, index) => (
                    <li key={link.text} className="relative overflow-hidden">
                      <Link
                        href={link.href}
                        className="group relative text-white text-xl font-semibold tracking-wide block py-3 px-4 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                        onClick={handleMenuClose}
                        style={{
                          animationDelay: `${index * 0.1}s`
                        }}
                      >
                        {/* Animated background gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Animated underline */}
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-500 ease-out"></div>
                        
                        {/* Text with glow effect */}
                        <span className="relative z-10 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-purple-300 group-hover:bg-clip-text transition-all duration-300">
                          {link.text}
                        </span>
                        
                        {/* Hover sparkle effect */}
                        <div className="absolute top-1/2 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                        <div className="absolute top-1/2 right-4 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              {/* Contact email for mobile */}
              <div className="px-8 pb-6 mt-auto">
                <a
                  href="mailto:hello@sorien.pl"
                  className="block text-gray-400 text-sm text-center hover:text-blue-300 transition-colors duration-200"
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
