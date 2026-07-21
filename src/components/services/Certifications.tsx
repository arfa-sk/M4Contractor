"use client";

import { motion } from "motion/react";
import styles from "./Certifications.module.css";

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export default function Certifications() {
  return (
    <section className={styles.splitSection}>
      {/* Left Side: Massive Image */}
      <div className={styles.leftPane}>
        <img
          src="/aramco-certificate.png"
          alt="Aramco Certificate"
          className={styles.bgImage}
        />
        <div className={styles.imageOverlay}></div>
      </div>

      {/* Right Side: Clean Typography List */}
      <div className={styles.rightPane}>
        <div className={styles.contentWrapper}>

          <div className={styles.header}>
            <div className={styles.labelRow}>
              <span className={styles.sectionLabel}>Trust & Reliability</span>
            </div>
            <h2 className={styles.title}>
              Certifications & Compliance
            </h2>
          </div>

          <motion.div
            className={styles.listContainer}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >

            {/* Item 1 */}
            <motion.div className={styles.listItem} variants={itemVariants}>
              <div className={styles.itemHeader}>
                <span className={styles.bullet}></span>
                <h3 className={styles.itemTitle}>Saudi Aramco Approved</h3>
              </div>
              <p className={styles.itemDesc}>
                Approved Vendor under the Saudi Aramco Supplier Management System.
              </p>
              <span className={styles.itemCode}>Vendor Code No. 10117640</span>
            </motion.div>

            {/* Item 2 */}
            <motion.div className={styles.listItem} variants={itemVariants}>
              <div className={styles.itemHeader}>
                <span className={styles.bullet}></span>
                <h3 className={styles.itemTitle}>Ministry of Interior</h3>
              </div>
              <p className={styles.itemDesc}>
                Licensed for General Security, Installation and Maintenance of Safety Devices.
              </p>
              <span className={styles.itemCode}>License No. 2699000010</span>
            </motion.div>

            {/* Item 3 */}
            <motion.div className={styles.listItem} variants={itemVariants}>
              <div className={styles.itemHeader}>
                <span className={styles.bullet}></span>
                <h3 className={styles.itemTitle}>HCIS Compliant</h3>
              </div>
              <p className={styles.itemDesc}>
                Certified for advanced Perimeter Fencing and Security System Installations.
              </p>
            </motion.div>

            {/* Item 4 */}
            <motion.div className={styles.listItem} variants={itemVariants}>
              <div className={styles.itemHeader}>
                <span className={styles.bullet}></span>
                <h3 className={styles.itemTitle}>Saudi Vision 2030</h3>
              </div>
              <p className={styles.itemDesc}>
                Full compliance with industrial development frameworks and national standards.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
