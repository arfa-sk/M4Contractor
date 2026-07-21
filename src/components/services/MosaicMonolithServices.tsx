"use client";

import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence, Variants } from "motion/react";
import styles from "./MosaicMonolithServices.module.css";
import { SERVICES_DATA, type ServiceItem } from "./serviceData";

// ── Types & Interfaces ──
export type { ServiceItem } from "./serviceData";

// ── Categories Filter Metadata ──
const CATEGORIES = [
  { key: "all", label: "All Capabilities", icon: "apps" },
  { key: "power", label: "Power & Grid", icon: "bolt" },
  { key: "protection", label: "Cathodic & Maintenance", icon: "shield" },
  { key: "telecom", label: "Telecom & OPGW", icon: "cable" },
  { key: "civil", label: "Civil & Security", icon: "construction" },
];

// ── Precision Animation Variants (Exact Specifications) ──
const cardAnimationVariants: Record<string, Variants> = {
  // Row 1: Left feature card gentle drop from top
  "cathodic-protection": {
    hidden: { opacity: 0, y: -50, x: 0 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  },
  // Row 1: Right card slide in from right with 0.12s delay
  "overhead-power-lines": {
    hidden: { opacity: 0, x: 60, y: 0 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.7, delay: 0.12, ease: "easeOut" }
    }
  },
  // Row 2: Left card slide from left
  "underground-power-lines": {
    hidden: { opacity: 0, x: -60, y: 0 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.7, delay: 0.25, ease: "easeOut" }
    }
  },
  // Row 2: Right card slide from right (meeting in center simultaneously)
  "electrical-instrumentation-works": {
    hidden: { opacity: 0, x: 60, y: 0 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.7, delay: 0.25, ease: "easeOut" }
    }
  },
  "fiber-optic-opgw": {
    hidden: { opacity: 0, x: 60, y: 0 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.7, delay: 0.25, ease: "easeOut" }
    }
  },
  // Row 3: Cascading reveal (0.08s delay step)
  "well-pad-fencing": {
    hidden: { opacity: 0, y: 40, x: 0 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.7, delay: 0.4, ease: "easeOut" }
    }
  },
  "site-preparation-earthworks": {
    hidden: { opacity: 0, y: 40, x: 0 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.7, delay: 0.48, ease: "easeOut" }
    }
  },
  "pipeline-maintenance-repair": {
    hidden: { opacity: 0, y: 40, x: 0 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.7, delay: 0.56, ease: "easeOut" }
    }
  }
};

// Fallback variant for newly added services
const fallbackVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

export default function MosaicMonolithServices() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [highlightedServiceId, setHighlightedServiceId] = useState<string | null>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const searchParams = useSearchParams();

  const filteredServices = SERVICES_DATA.filter((service) => {
    if (activeCategory === "all") return true;
    return service.category === activeCategory;
  });

  const row1Services = activeCategory === "all" && filteredServices.length > 1
    ? filteredServices.slice(0, 2)
    : filteredServices.slice(0, Math.min(filteredServices.length, 2));
  const row2Services = activeCategory === "all" && filteredServices.length > 2
    ? filteredServices.slice(2, 4)
    : [];
  const row3Services = activeCategory === "all" && filteredServices.length > 4
    ? filteredServices.slice(4, 7)
    : filteredServices.slice(Math.min(filteredServices.length, 2), filteredServices.length);
  const row4Service = activeCategory === "all" && filteredServices.length > 7
    ? filteredServices[7]
    : null;

  useEffect(() => {
    const serviceId = searchParams.get("service");
    if (!serviceId) return;

    const targetService = SERVICES_DATA.find((service) => service.id === serviceId);
    if (!targetService) return;

    const scrollToTarget = () => {
      const targetElement = cardRefs.current[serviceId];
      if (!targetElement) {
        window.requestAnimationFrame(scrollToTarget);
        return;
      }

      const navbarOffset = 120;
      const targetY = Math.max(targetElement.getBoundingClientRect().top + window.scrollY - navbarOffset, 0);
      const startY = window.scrollY;
      const duration = 900;
      const startTime = window.performance.now();

      const step = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 0.5 - 0.5 * Math.cos(progress * Math.PI);
        const currentY = startY + (targetY - startY) * eased;

        window.scrollTo(0, currentY);

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setHighlightedServiceId(serviceId);
          window.setTimeout(() => setHighlightedServiceId(null), 900);
        }
      };

      window.requestAnimationFrame(step);
    };

    const timer = window.setTimeout(scrollToTarget, 400);
    return () => window.clearTimeout(timer);
  }, [searchParams]);

  const renderServiceCard = (service: ServiceItem, variant: Variants, isHighlighted: boolean) => (
    <motion.div
      id={service.id}
      key={service.id}
      ref={(node) => {
        cardRefs.current[service.id] = node;
      }}
      layout
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{
        scale: 1.02,
        y: -4,
        transition: { duration: 0.25, ease: "easeOut" }
      }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
      className={`${styles.mosaicCard} ${styles[service.gridSpan]} ${isHighlighted ? styles.highlightedCard : ""}`}
    >
      {/* Image Background */}
      <div className={styles.cardImageWrap}>
        <img
          src={service.imageUrl}
          alt={service.title}
          className={styles.cardImage}
        />
        <div className={styles.cardGradientOverlay} />
      </div>

      {/* Card Content */}
      <div className={styles.cardContent}>
        <div className={styles.cardTopBar}>
          <div className={styles.iconBox}>
            <span className="material-symbols-outlined">{service.icon}</span>
          </div>
        </div>

        <div className={styles.cardBody}>
          <span className={styles.cardSubtitle}>{service.subtitle}</span>
          <h3 className={styles.cardTitle}>{service.title}</h3>
          <p className={styles.cardDesc}>{service.description}</p>

          {/* Features List */}
          <div className={styles.featuresList}>
            {service.features.map((feature, idx) => (
              <div key={idx} className={styles.featureItem}>
                <span className="material-symbols-outlined">check_circle</span>
                {feature}
              </div>
            ))}
          </div>

          {/* Footer Action */}
          <div className={styles.cardFooter}>
            <span className={styles.actionLink}>
              {service.actionText || "Learn More"}
            </span>
            <div className={styles.actionArrow}>
              <span className="material-symbols-outlined">arrow_forward</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className={styles.sectionWrapper} id="services-mosaic">
      <div className={styles.technicalBgPattern} />
      <div className={styles.bgGlow} />

      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className={styles.headerTagRow}>
            <div className={styles.tagLine} />
            <span className={styles.sectionLabel}>MOSAIC MONOLITH EDITION</span>
            <div className={styles.tagLine} />
          </div>

          <h2 className={styles.sectionTitle}>
            OUR CONTRACTING <span className={styles.titleOrange}>SERVICES</span>
          </h2>

          <p className={styles.sectionDesc}>
            Engineered precision and turnkey execution across high-voltage power distribution, cathodic corrosion protection, industrial communications, and heavy civil infrastructure.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          className={styles.filterBar}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          {CATEGORIES.map((cat) => {
            const count =
              cat.key === "all"
                ? SERVICES_DATA.length
                : SERVICES_DATA.filter((s) => s.category === cat.key).length;
            const isActive = activeCategory === cat.key;

            return (
              <button
                key={cat.key}
                className={`${styles.filterTab} ${isActive ? styles.filterTabActive : ""}`}
                onClick={() => setActiveCategory(cat.key)}
              >
                <span className="material-symbols-outlined">{cat.icon}</span>
                {cat.label}
                <span className={styles.filterCount}>{count}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Mosaic Grid with Explicit Rows */}
        <div className={styles.mosaicGrid}>
          <motion.div
            className={`${styles.gridRow} ${styles.rowOne}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <AnimatePresence mode="popLayout">
              {row1Services.map((service) => {
                const variant = cardAnimationVariants[service.id] || fallbackVariant;
                const isHighlighted = highlightedServiceId === service.id;
                return renderServiceCard(service, variant, isHighlighted);
              })}
            </AnimatePresence>
          </motion.div>

          {row2Services.length > 0 && (
            <motion.div
              className={`${styles.gridRow} ${styles.rowTwo}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <AnimatePresence mode="popLayout">
                {row2Services.map((service) => {
                  const variant = cardAnimationVariants[service.id] || fallbackVariant;
                  const isHighlighted = highlightedServiceId === service.id;
                  return renderServiceCard(service, variant, isHighlighted);
                })}
              </AnimatePresence>
            </motion.div>
          )}

          {row3Services.length > 0 && (
            <motion.div
              className={`${styles.gridRow} ${styles.rowThree}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <AnimatePresence mode="popLayout">
                {row3Services.map((service) => {
                  const variant = cardAnimationVariants[service.id] || fallbackVariant;
                  const isHighlighted = highlightedServiceId === service.id;
                  return renderServiceCard(service, variant, isHighlighted);
                })}
              </AnimatePresence>
            </motion.div>
          )}

          {row4Service && (
            <motion.div
              className={`${styles.gridRow} ${styles.rowFour}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {renderServiceCard(
                row4Service,
                cardAnimationVariants[row4Service.id] || fallbackVariant,
                highlightedServiceId === row4Service.id,
              )}
            </motion.div>
          )}
        </div>

        {/* Bottom Call to Action Banner */}
        <motion.div
          className={styles.bottomCtaBox}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className={styles.ctaText}>
            <h3>Need a Custom Industrial Solution?</h3>
            <p>
              Our Aramco-approved engineers are ready to evaluate your infrastructure requirements and deliver tailored solutions according to Saudi Arabian standards.
            </p>
          </div>
          <button className={styles.ctaBtn}>
            REQUEST TECHNICAL PROPOSAL
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
