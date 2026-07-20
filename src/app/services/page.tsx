"use client";

import { motion } from "motion/react";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
                <div className={styles.orangeLine}></div>
                <span className={`label-bold ${styles.heroLabelText}`}>BUILDING THE FUTURE</span>
              </div>

              <h1 className={`display-lg ${styles.heroTitle}`}>
                <span className={styles.heroTitleDark}>STRUCTURAL</span><br />
                <span className={styles.heroTitleOrange}>PRECISION.</span>
              </h1>

              <p className={`body-lg ${styles.heroDesc}`}>
                Delivering high-end commercial and residential construction projects with meticulous attention to detail and unwavering commitment to quality.
              </p>

              <div className={styles.heroBtns}>
                <button className={`label-bold ${styles.btnPrimary}`}>
                  REQUEST QUOTE <span className="material-symbols-outlined">arrow_forward</span>
                </button>
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

        {/* You can add more specific services content here later */}

      </main>

      <Footer />
    </>
  );
}
