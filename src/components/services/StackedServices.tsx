"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import styles from "./StackedServices.module.css";
import { SERVICES_DATA, type ServiceItem } from "./serviceData";

export default function StackedServices() {
  const topRef = useRef<HTMLDivElement>(null);
  const midRef = useRef<HTMLDivElement>(null);
  const botRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === topRef.current) {
              document.body.style.backgroundColor = "#ffffff";
            } else if (entry.target === botRef.current) {
              document.body.style.backgroundColor = "#1a1a1a";
            }
          }
        });
      },
      { threshold: 0, rootMargin: "-40% 0px -40% 0px" }
    );

    if (topRef.current) observer.observe(topRef.current);
    if (botRef.current) observer.observe(botRef.current);

    return () => observer.disconnect();
  }, []);

  // Split the data into the two requested groups (first 4, last 4)
  const topGroup = SERVICES_DATA.slice(0, 4);
  const botGroup = SERVICES_DATA.slice(4, 8);

  const renderServiceCard = (service: ServiceItem, globalIndex: number) => {
    const isReverse = globalIndex % 2 !== 0;
    const initialX = isReverse ? 150 : -150;

    return (
      <motion.div
        key={service.id}
        id={service.id}
        className={`${styles.serviceCard} ${isReverse ? styles.reverse : ''}`}
        initial={{ opacity: 0, x: initialX }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ margin: "-100px" }}
      >
        <div className={styles.imageSection}>
          <img src={service.imageUrl} alt={service.title} className={styles.serviceImage} />
        </div>
        <div className={styles.textSection}>
          <h3 className={styles.title}>
            {service.title.split(' ').map((word, i, arr) => {
              if (i === arr.length - 1) {
                return <span key={i} className={styles.titleHighlight}>{word}</span>;
              }
              return <span key={i}>{word} </span>;
            })}
          </h3>
          <p className={styles.description}>{service.description}</p>
          <div className={styles.featuresList}>
            {service.features.map((feature, idx) => (
              <div key={idx} className={styles.featureItem}>
                <span className="material-symbols-outlined">check_circle</span>
                {feature}
              </div>
            ))}
          </div>
          <div className={styles.buttonGroup}>
            <button className={styles.btnPrimary}>Request Quote</button>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section style={{ backgroundColor: 'transparent', transition: 'background-color 0.8s ease' }}>
      <div className={styles.container}>

        <div className={styles.sectionHeader}>
          <div>
            <span className={`label-bold ${styles.sectionLabel}`}>
              What We Do
            </span>
            <h2 className={`headline-xl ${styles.sectionTitle}`}>
              Our Services
            </h2>
          </div>
        </div>

        {/* Top Group: Background should be White */}
        <div ref={topRef} className={styles.serviceGroup}>
          {topGroup.map((s, i) => renderServiceCard(s, i))}
        </div>

        {/* Bottom Group: Background should be Black */}
        <div ref={botRef} className={styles.serviceGroup}>
          {botGroup.map((s, i) => renderServiceCard(s, i + 4))}
        </div>

      </div>
    </section>
  );
}
