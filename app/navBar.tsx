"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./NavBarLogo.module.css";
import MenuOverlay from "./menuOverlay";

const navLinks = [
  { href: "/", text: "Strona Główna" },
  { href: "/wycena", text: "Otrzymaj Wycenę" },
  { href: "/systemy-firmowe", text: "Systemy Wewnętrzne" },
  { href: "/strony-internetow", text: "Strony Internetowe" },
  { href: "/rozwiazania-ai-dla-firm", text: "Rozwiązania AI" },
];

const NavBar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 sm:top-4 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div
          className={
            `transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ` +
            `px-4 sm:px-8 ` +
            (isScrolled
              ? "py-0 rounded-full backdrop-blur-xl backdrop-saturate-150 bg-white/30 dark:bg-neutral-900/30 border border-white/50 dark:border-white/20 shadow-lg ring-1 ring-white/60/50 dark:ring-white/10"
              : "py-6 rounded-none backdrop-blur-0 bg-transparent border-transparent ring-0 shadow-none")
          }
        >
          <div className="flex justify-between items-center">
            <div>
              <Link href="/">
                <Image
                  src="/logo-sorien-agencja-tworząca-strony-internetowe.svg"
                  alt="Sorien Logo - tworzenie stron internetowych"
                  width={120}
                  height={30}
                  className={`w-40 sm:w-48 h-auto ${styles.logoGlow}`}
                />
              </Link>
            </div>
            {/* Hamburger and mobile menu overlay */}
            <MenuOverlay navLinks={navLinks} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
