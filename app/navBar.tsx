import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./NavBarLogo.module.css";
import MenuOverlay from "./menuOverlay";

const navLinks = [
  { href: "/", text: "Strona Główna" },
  { href: "/wycena", text: "Otrzymaj Wycenę" },
  { href: "/strony-wizytowki", text: "Strony Wizytówki" },
  { href: "/sklepy-internetowe", text: "Sklepy Internetowe" },
  { href: "/systemy-firmowe", text: "Systemy Wewnętrzne" },
];

const NavBar = () => {
  return (
    <nav className="py-6 px-4 sm:px-8">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
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
    </nav>
  );
};

export default NavBar;
