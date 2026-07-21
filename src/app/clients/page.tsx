"use client";

import { motion } from "motion/react";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MissionVision from "@/components/clients/MissionVision";
import Certifications from "@/components/services/Certifications";

export default function ClientsPage() {
  return (
    <>
      <Navbar />

      <main className={styles.mainWrapper}>
        <section className={styles.heroSection}>
          {/* Dark Overlay with Diagonal Clip Path (Behind Image) */}
          <div className={styles.darkDiagonalOverlay} />

          {/* Background Image Layer (On top of diagonal, has transparent BG) */}
          <div 
            className={styles.heroBgImage} 
            style={{ backgroundImage: "url('/client.png')" }} 
          />

          {/* Content Layer */}
          <div className={styles.contentContainer}>
            <div className={styles.textContent}>
              <motion.h1 
                className={styles.heroTitle}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <span className={styles.titleDark}>PROVEN</span><br />
                <span className={styles.titleOrange}>EXCELLENCE.</span>
              </motion.h1>

              <motion.p 
                className={styles.heroDesc}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                Trusted by leading organizations to deliver high-impact industrial and commercial projects across the Kingdom.
              </motion.p>

              <motion.button 
                className={styles.ctaButton}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              >
                BECOME A CLIENT
              </motion.button>
            </div>

          </div>
        </section>

        {/* New Mission & Vision Section */}
        <MissionVision />

        {/* Certifications Section Moved Here */}
        <Certifications />
      </main>

      <Footer />
    </>
  );
}
