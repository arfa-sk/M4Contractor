"use client";

import { motion, useAnimationControls } from "motion/react";
import { useEffect } from "react";
import styles from "./ClientsPartnersIndustries.module.css";

const logos = [
  { src: "/LOGOS/zamil offshore/idanY1Xj8f_logos.png", alt: "Zamil Offshore" },
  { src: "/LOGOS/TAQA LOGO/id8ndPXccL_1784290413061.png", alt: "TAQA" },
  { src: "/LOGOS/Kalpataru Projects International/KALPATARU PROJECTS INTERNATI Icon.png", alt: "Kalpataru Projects International" },
  { src: "/LOGOS/Sinopac Financial Holdings/Sinopac Financial Holdings Symbol PNG.png", alt: "Sinopac Financial Holdings" },
  { src: "/LOGOS/Gulf asia/download.png", alt: "Gulf Asia" },
  { src: "/LOGOS/Sinohydro Logo PNG Vector/sinohydro-logo-png_seeklogo-313083.png", alt: "Sinohydro" },
  { src: "/LOGOS/expertise and contracting/2191580.jpg", alt: "Expertise and Contracting" },
  { src: "/LOGOS/nassser .s.ak/NSH-Logo.webp", alt: "Nasser S. Al Hajri" },
  { src: "/LOGOS/eram holdings/idqGd_05Wq_logos.jpeg", alt: "Eram Holdings" },
  { src: "/LOGOS/nabatattsa/nabatattsa_logo.jpg", alt: "Nabatat" },
  { src: "/LOGOS/AlSukwaiket/Asset-1@4x.png", alt: "Al Sukwaiket" },
  { src: "/LOGOS/Al yamama/al-yamama-logo-png_seeklogo-387560.png", alt: "Al Yamama" },
  { src: "/LOGOS/MCCL/MCCL_LOGO_22FEB2020-removebg-preview.png", alt: "MCCL" },
  { src: "/LOGOS/Al-Sharif KEC LTD/alsharif_kec_logo.jpg", alt: "Al-Sharif KEC" },
  { src: "/LOGOS/Abaja contracting/abaja.jpg", alt: "Abaja Contracting" },
  { src: "/LOGOS/marineds/idNSkcyRiP_logos.png", alt: "Marineds" },
  { src: "/LOGOS/AL-Hajry Overseas/al_hajry_overseas_logo.jpg", alt: "Al-Hajry Overseas" },
  { src: "/LOGOS/larsenn & tubro/idUFBl7T_L_1784290583776.jpeg", alt: "Larsen & Toubro" },
];

const industries = [
  {
    title: "Oil & Gas",
    icon: "oil_barrel",
    description: "Reliable construction and integrity solutions for critical energy assets.",
  },
  {
    title: "Power & Utilities",
    icon: "bolt",
    description: "Power distribution and utility infrastructure built for dependable operation.",
  },
  {
    title: "Industrial Facilities",
    icon: "factory",
    description: "Technical execution for demanding industrial environments and facilities.",
  },
  {
    title: "Petrochemical",
    icon: "science",
    description: "Precision works supporting complex petrochemical plants and systems.",
  },
  {
    title: "Water Infrastructure",
    icon: "water_drop",
    description: "Infrastructure solutions that support resilient water networks and assets.",
  },
  {
    title: "Government Projects",
    icon: "account_balance",
    description: "Compliant delivery for public infrastructure and national development projects.",
  },
];

function LogoRow({ reverse = false, entranceDelay = 0 }: { reverse?: boolean; entranceDelay?: number }) {
  const marqueeControls = useAnimationControls();
  const marqueeAnimation = {
    x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
    transition: { duration: 40, repeat: Infinity, ease: "linear" as const },
  };

  useEffect(() => {
    marqueeControls.start(marqueeAnimation);
  }, [marqueeControls, reverse]);

  const logoSequence = (sequenceIndex: number) => (
    <div className={styles.logoSequence} key={`sequence-${sequenceIndex}`}>
      {logos.map((logo, index) => (
        <motion.div
          className={styles.logoCard}
          key={`${logo.alt}-${sequenceIndex}-${index}`}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.45,
            delay: index * 0.025,
            ease: "easeOut",
            scale: { type: "spring", stiffness: 300, damping: 20 },
            y: { type: "spring", stiffness: 300, damping: 20 }
          }}
          whileHover={{ scale: 1.08, y: -6 }}
        >
          <img src={logo.src} alt={logo.alt} />
        </motion.div>
      ))}
    </div>
  );

  return (
    <motion.div
      className={`${styles.logoRow} ${reverse ? styles.logoRowReverse : ""}`}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: entranceDelay, ease: "easeOut" }}
    >
      <motion.div
        className={styles.logoTrack}
        animate={marqueeControls}
        onHoverStart={() => marqueeControls.stop()}
        onHoverEnd={() => marqueeControls.start(marqueeAnimation)}
      >
        {logoSequence(0)}
        {logoSequence(1)}
      </motion.div>
    </motion.div>
  );
}

export default function ClientsPartnersIndustries() {
  return (
    <>
      <section
        className={styles.partnersSection}
        aria-labelledby="strategic-partners-title"
      >
        <div className={styles.sectionIntro}>
          <span className={styles.sectionLabel}>Trusted Collaborations</span>
          <h2 id="strategic-partners-title">Strategic Partners</h2>
          <p>Working alongside established organizations to deliver infrastructure with confidence.</p>
        </div>

        <div className={styles.marqueeGroup}>
          <LogoRow />
          <LogoRow reverse entranceDelay={0.15} />
        </div>
      </section>

      <section className={styles.industriesSection} aria-labelledby="industries-title">
        <div className={styles.sectionIntro}>
          <span className={styles.sectionLabel}>Sector Expertise</span>
          <h2 id="industries-title">Industries Served</h2>
          <p>Specialized execution across the Kingdom&apos;s most critical sectors.</p>
        </div>

        <div className={styles.industryGrid}>
          {industries.map((industry, index) => (
            <motion.article
              className={styles.industryCard}
              key={industry.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.06, ease: "easeOut" }}
              whileHover={{ y: -6, scale: 1.01 }}
            >
              <span className={`material-symbols-outlined ${styles.industryIcon}`}>{industry.icon}</span>
              <h3>{industry.title}</h3>
              <p>{industry.description}</p>
              <span className={`material-symbols-outlined ${styles.industryArrow}`}>arrow_forward</span>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
