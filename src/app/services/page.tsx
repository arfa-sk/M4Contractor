"use client";

import { Suspense } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StackedServices from "@/components/services/StackedServices";

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }
  }
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* White Services Hero Section */}
        <motion.section className={styles.hero} initial="hidden" animate="visible" variants={staggerContainer}>
          <div className={styles.heroContainer}>
            {/* Left Content */}
            <motion.div className={styles.heroLeft} variants={fadeInUp}>
              <div className={styles.heroLabelRow}>
                <span className={`label-bold ${styles.heroLabelText}`}>WHAT WE DO</span>
              </div>

              <h1 className={`display-lg ${styles.heroTitle}`}>
                <span className={styles.heroTitleDark}>EXCEPTIONAL</span><br />
                <span className={styles.heroTitleOrange}>SERVICES.</span>
              </h1>

              <p className={`body-lg ${styles.heroDesc}`}>
                From initial blueprints to the final touch, we provide comprehensive contracting solutions that deliver better results, maximum reliability, and superior quality across all sectors.
              </p>

              <div className={styles.heroBtns}>
                <Link href="/about">
                  <button className={`label-bold ${styles.btnPrimary}`}>
                    ABOUT US <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className={styles.trustBadges}>
                <div className={styles.statBox}>
                  <span className={`material-symbols-outlined ${styles.statIcon}`}>shield_person</span>
                  <div className={styles.statNumber}>ARAMCO</div>
                  <div className={styles.statLabel}>APPROVED</div>
                </div>
                <div className={styles.statBox}>
                  <span className={`material-symbols-outlined ${styles.statIcon}`}>architecture</span>
                  <div className={styles.statNumber}>500+</div>
                  <div className={styles.statLabel}>PROJECTS</div>
                </div>
                <div className={styles.statBox}>
                  <span className={`material-symbols-outlined ${styles.statIcon}`}>military_tech</span>
                  <div className={styles.statNumber}>15+</div>
                  <div className={styles.statLabel}>YEARS EXPERIENCE</div>
                </div>
                <div className={styles.statBox}>
                  <span className={`material-symbols-outlined ${styles.statIcon}`}>verified</span>
                  <div className={styles.statNumber}>ISO</div>
                  <div className={styles.statLabel}>CERTIFIED</div>
                </div>
              </div>
            </motion.div>

            {/* Right Image Content */}
            <motion.div className={styles.heroRight} variants={fadeInUp}>
              <div className={styles.heroImageWrapper}>
                <img src="/hero-new.png" alt="Construction Progress" className={styles.heroMainImage} />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Stacked Services Section */}
        <Suspense fallback={null}>
          <StackedServices />
        </Suspense>

      </main>

      <Footer />
    </>
  );
}
