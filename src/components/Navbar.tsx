"use client";

import styles from "./Navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className={styles.navWrapper}>
      <nav className={styles.navBar}>
        {/* Logo Section */}
        <Link href="/" className={styles.logoArea}>
          <img
            alt="M4 Contractor Logo"
            className={styles.logoImg}
            src="/M4 Contractor Logo (1).png"
          />
          <span className={styles.logoText}>M4 Contractor</span>
        </Link>

        {/* Navigation Links */}
        <div className={styles.navLinks}>
          <Link
            href="/"
            className={pathname === "/" ? styles.navLinkActive : styles.navLink}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={pathname === "/about" ? styles.navLinkActive : styles.navLink}
          >
            About
          </Link>
          <Link href="#" className={styles.navLink}>
            Services
          </Link>
          <Link href="#" className={styles.navLink}>
            Clients
          </Link>
          <Link href="#" className={styles.navLink}>
            Vision
          </Link>
          <Link href="#" className={styles.navLink}>
            Contact
          </Link>
        </div>

        {/* Actions Section */}
        <div className={styles.actions}>
          <button className={styles.ctaBtn}>
            REQUEST QUOTE
          </button>
        </div>
      </nav>
    </div>
  );
}
