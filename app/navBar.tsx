import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./NavBarLogo.module.css";
import MenuOverlay from "./menuOverlay";

const navLinks = [
  { href: "/", text: "Home" },
  { href: "/", text: "Story" },
  { href: "/", text: "Our work" },
  { href: "/", text: "Contact Us" },
];

const NavBar = () => {
  return (
    <nav className="py-6 px-4 sm:px-8">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div>
          <Link href="/">
            <Image
              src="/sorien2.svg"
              alt="Sorien Logo"
              width={120}
              height={30}
              className={`w-40 sm:w-48 h-auto ${styles.logoGlow}`}
            />
          </Link>
        </div>
        {/* Hamburger and mobile menu overlay */}
        <MenuOverlay navLinks={navLinks} />
        {/* Nav links */}
        <ul className="hidden sm:flex space-x-8 md:space-x-10">
          {navLinks.map((link) => (
            <li key={link.text}>
              <Link
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors text-base md:text-lg font-medium hover:scale-105 transform duration-200"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
