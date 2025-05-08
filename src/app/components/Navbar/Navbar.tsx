"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Import icons from react-icons
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { SiShopee } from "react-icons/si";
import styles from "./Navbar.module.scss";

const navItems = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About", href: "/about" },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/buildstoremanila",
    external: true,
    icon: <FaFacebook />,
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/buildstoremanila/",
    external: true,
    icon: <FaInstagram />,
  },
  {
    id: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@buildstoremanila",
    external: true,
    icon: <FaTiktok />,
  },
  {
    id: "shopee",
    label: "Shopee",
    href: "https://shopee.ph/buildstoremanila",
    external: true,
    icon: <SiShopee />,
  },
  {
  id: "lazada",
  label: "Lazada",
  href: "https://www.lazada.com.ph/shop/build-store-manila", 
  external: true,
  icon: (
    <img
      src="/images/lazada.svg"
      alt="Lazada"
      className={styles.lazadaIcon}
      
      style={{ width: "1.5em", height: "1.5em", objectFit: "contain"
      }}
      /> 
    ),
  },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img
          src="/images/buildstore-logo.png"
          alt="Build Store Manila Logo"
          className={styles.logoImage}
        />
        <div className={styles.logoText}>Build Store Manila</div>
      </div>

      {/* Hamburger button for mobile */}
      <button
        className={styles.menuButton}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        ☰
      </button>

      {/* Navigation links */}
      <div className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
        {navItems.map(({ id, label, href, external, icon }) =>
          external ? (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              aria-label={label}
              title={label}
              onClick={() => setMenuOpen(false)} // close menu on click
            >
              <span className={styles.icon}>{icon}</span>
            </a>
          ) : (
            <Link
              key={id}
              href={href}
              className={`${styles.link} ${pathname === href ? styles.active : ""}`}
              onClick={() => setMenuOpen(false)} // close menu on click
            >
              {label}
            </Link>
          )
        )}
      </div>
    </nav>
  );
}
