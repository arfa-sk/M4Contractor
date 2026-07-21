"use client";

import React from "react";
import { motion } from "motion/react";
import styles from "./MissionVision.module.css";

export default function MissionVision() {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        
        {/* Top Left: Mission */}
        <motion.div 
          className={styles.missionBlock}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>Our Mission</h2>
          <p className={styles.description}>
            To deliver projects in partnership with our clients: Safer, with zero loss time injuries. Better, with zero quality rejections. And faster, by always meeting deadlines.
          </p>
        </motion.div>

        {/* Center: Clipped Image */}
        <motion.div 
          className={styles.imageCenter}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div 
            className={styles.clippedImage}
            style={{ backgroundImage: "url('/custruction.png')" }} // High quality placeholder
          />
        </motion.div>

        {/* Bottom Right: Vision */}
        <motion.div 
          className={styles.visionBlock}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className={styles.title}>Vision</h2>
          <p className={styles.description}>
            To be the premier integrated project solutions provider across the energy, infrastructure, and buildings sectors, entrusted to transform ambitious visions into reality in Saudi Arabia and beyond.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
