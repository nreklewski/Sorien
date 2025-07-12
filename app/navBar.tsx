import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./NavBarLogo.module.css";

const NavBar = () => {
  return (
    <nav>
      <div className=" border-b-1 flex row justify-between items-center">
        <div>
          <Link href="/">
            <Image
              src="/sorien2.svg"
              alt="Sorien Logo"
              width={96}
              height={24}
              className={`w-40 h-auto ${styles.logoGlow}`}
            />
          </Link>
        </div>
        <div className="flex space-x-8 mr-4">
          <Link
            href="/"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="/"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Story
          </Link>
          <Link
            href="/"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Our work
          </Link>
          <Link
            href="/"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
