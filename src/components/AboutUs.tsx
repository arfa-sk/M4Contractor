"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import styles from "./AboutUs.module.css";
import HoverSliderServices from "./HoverSliderServices";
import StatsMarquee from "./StatsMarquee";

const standards = [
  {
    icon: "health_and_safety",
    title: "Safety First",
    description: "Rigorous zero-incident site protocols conforming to the highest local safety guidelines.",
  },
  {
    icon: "verified",
    title: "Uncompromising Execution",
    description: "Delivering strictly on schedule, to specification, and within budget.",
  },
];

const milestones = [
  {
    year: "2012",
    title: "Strategic Founding",
    description:
      "M4 was established in Al Khobar, Saudi Arabia, with a focus on supplying top-tier engineering solutions to the Kingdom's rising industrial and energy sectors.",
  },
  {
    year: "2018",
    title: "Key Accreditations",
    description:
      "Expanded our technical capacity, securing critical certifications and safety accreditations, including HCIS compliance for security perimeter installations.",
  },
  {
    year: "2026",
    title: "Executing Vision 2030",
    description:
      "Leading key utility, power distribution, and cathodic protection projects supporting the Kingdom's industrial growth infrastructure.",
  },
];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }
  }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardEntrance = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }
  }
};

export default function AboutUs() {
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.body.style.backgroundColor = "#121416";
          document.body.style.color = "#ffffff";
          document.body.style.transition = "background-color 0.8s ease, color 0.8s ease";
        } else {
          document.body.style.backgroundColor = "#ffffff";
          document.body.style.color = "#000000";
        }
      },
      { threshold: 0.2 }
    );

    const target = observerRef.current;
    if (target) {
      observer.observe(target);
    }

    // Set initial background to white
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#000000";

    return () => {
      observer.disconnect();
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
      document.body.style.transition = "";
    };
  }, []);

  const handleScrollToServices = () => {
    const servicesSection = document.getElementById("services-slider-section");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroBg}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')",
          }}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
        <div className={styles.heroOverlay} />
        
        <motion.div 
          className={styles.heroContent}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.span className={`label-bold ${styles.heroLabel}`} variants={fadeInUp}>
            Kingdom of Saudi Arabia
          </motion.span>
          <motion.h1 className={`display-lg ${styles.heroTitle}`} variants={fadeInUp}>
            Building the Future on a{" "}
            <span className={styles.heroHighlight}>Foundation of Excellence.</span>
          </motion.h1>
          <motion.p className={`body-lg ${styles.heroDesc}`} variants={fadeInUp}>
            M4 is a Saudi-owned construction and infrastructure company built for the demands of the Kingdom's energy and industrial sector.
          </motion.p>
          <motion.div className={styles.heroBtns} variants={fadeInUp}>
            <motion.button 
              className={`label-bold ${styles.btnPrimary}`}
              onClick={handleScrollToServices}
              whileHover={{ scale: 1.05, backgroundColor: "var(--deep-charcoal)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Our Capabilities
              <span className="material-symbols-outlined">arrow_forward</span>
            </motion.button>
            <motion.a 
              href="mailto:info@m4contractor.com" 
              className={`label-bold ${styles.btnSecondary}`}
              whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "var(--deep-charcoal)", borderColor: "#ffffff" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Partner With Us
            </motion.a>
          </motion.div>
        </motion.div>

      </section>

      {/* About M4 Introductory Section (Reveal on scroll) */}
      <motion.section 
        className={styles.standardSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className={styles.standardGrid}>
          {/* Image Fade Up */}
          <motion.div 
            className={styles.standardImageWrap}
            variants={fadeInUp}
          >
            <div
              className={styles.standardImage}
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop')",
              }}
            />
            <div className={styles.standardBadge}>M4</div>
          </motion.div>

          {/* Text stagger entrance */}
          <motion.div 
            className={styles.standardContent}
            variants={staggerContainer}
          >
            <motion.span className={`label-bold ${styles.heroLabel}`} style={{ marginBottom: '8px' }} variants={fadeInUp}>
              Who Are We?
            </motion.span>
            <motion.h2 className={`headline-xl ${styles.standardTitle}`} variants={fadeInUp}>
              Where Others Promise, M4 Executes
            </motion.h2>
            <motion.p className={`body-lg ${styles.standardDesc}`} variants={fadeInUp}>
              Led by engineers and technical specialists with decades of combined experience, we bring proven expertise to every project we undertake. We focus on executing safely, on schedule, and to strict engineering specifications.
            </motion.p>

            <div className={styles.standardCards}>
              {standards.map((item) => (
                <motion.div 
                  key={item.title} 
                  className={styles.standardCard}
                  variants={cardEntrance}
                  whileHover={{ scale: 1.02, borderColor: "#f14d2a" }}
                  transition={{ duration: 0.2 }}
                >
                  <span
                    className={`material-symbols-outlined ${styles.standardCardIcon}`}
                  >
                    {item.icon}
                  </span>
                  <div>
                    <h4 className={`headline-lg ${styles.standardCardTitle}`}>
                      {item.title}
                    </h4>
                    <p className="body-md" style={{ color: "var(--secondary)", marginTop: "4px" }}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>


          </motion.div>
        </div>
      </motion.section>

      <div ref={observerRef}>
        <StatsMarquee />

        {/* Services Hover Slider Showcase (UNTOUCHED as requested) */}
        <div id="services-slider-section">
          <HoverSliderServices />
        </div>
      </div>

      {/* Saudi Milestones Timeline (Dynamic Scroll-Triggered Drawing) */}
      <section className={styles.timelineSection}>
        <motion.div 
          className={styles.timelineHeader}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <span className={`label-bold ${styles.timelineLabel}`}>
            Our Journey
          </span>
          <h2 className={`headline-xl ${styles.timelineTitle}`}>
            Milestones of Progress
          </h2>
        </motion.div>

        <div className={styles.timeline}>
          {milestones.map((item, index) => (
            <motion.div 
              key={item.year} 
              className={styles.timelineItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-150px" }}
              variants={staggerContainer}
            >
              <div className={styles.timelineMarker}>
                <motion.span 
                  className={styles.timelineDot} 
                  variants={{
                    hidden: { scale: 0 },
                    visible: { 
                      scale: 1, 
                      transition: { type: "spring", stiffness: 300, damping: 15, delay: 0.1 } 
                    }
                  }}
                />
                {index < milestones.length - 1 && (
                  <motion.span 
                    className={styles.timelineLine} 
                    style={{ originY: 0 }}
                    variants={{
                      hidden: { scaleY: 0 },
                      visible: { 
                        scaleY: 1, 
                        transition: { duration: 0.8, ease: "easeInOut", delay: 0.2 } 
                      }
                    }}
                  />
                )}
              </div>
              <motion.div 
                className={styles.timelineContent}
                variants={{
                  hidden: { opacity: 0, x: 40 },
                  visible: { 
                    opacity: 1, 
                    x: 0, 
                    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } 
                  }
                }}
              >
                <span className={styles.timelineYear}>{item.year}</span>
                <h3 className={`headline-lg ${styles.timelineItemTitle}`}>
                  {item.title}
                </h3>
                <p className={`body-md ${styles.timelineItemDesc}`}>
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section (Reveal on Scroll) */}
      <motion.section 
        className={styles.ctaSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 className={`headline-xl ${styles.ctaTitle}`} variants={fadeInUp}>
          Ready to execute your next project?
        </motion.h2>
        <motion.p className={`body-lg ${styles.ctaDesc}`} variants={fadeInUp}>
          Partner with our team of technical specialists and engineers to deliver infrastructure solutions of uncompromising quality.
        </motion.p>
        <motion.a 
          href="mailto:info@m4contractor.com" 
          className={`label-bold ${styles.btnPrimary} ${styles.ctaBtn}`} 
          variants={fadeInUp}
          whileHover={{ scale: 1.05, backgroundColor: "#1a1a1a" }}
          whileTap={{ scale: 0.98 }}
        >
          Start a Project
        </motion.a>
      </motion.section>
    </div>
  );
}
