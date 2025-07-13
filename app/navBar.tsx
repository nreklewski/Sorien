import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./NavBarLogo.module.css";

const NavBar = () => {
  return (
    <nav className="py-6 px-8">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div>
          <Link href="/">
            <Image
              src="/sorien2.svg"
              alt="Sorien Logo"
              width={120}
              height={30}
              className={`w-48 h-auto ${styles.logoGlow}`}
            />
          </Link>
        </div>
        <div className="flex space-x-10">
          <Link
            href="/"
            className="text-gray-300 hover:text-white transition-colors text-lg font-medium hover:scale-105 transform duration-200"
          >
            Home
          </Link>
          <Link
            href="/"
            className="text-gray-300 hover:text-white transition-colors text-lg font-medium hover:scale-105 transform duration-200"
          >
            Story
          </Link>
          <Link
            href="/"
            className="text-gray-300 hover:text-white transition-colors text-lg font-medium hover:scale-105 transform duration-200"
          >
            Our work
          </Link>
          <Link
            href="/"
            className="text-gray-300 hover:text-white transition-colors text-lg font-medium hover:scale-105 transform duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
