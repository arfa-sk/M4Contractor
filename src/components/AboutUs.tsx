"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll } from "motion/react";
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
    description: "M4 was established in Al Khobar, Saudi Arabia, with a focus on supplying top-tier engineering solutions to the Kingdom's rising industrial and energy sectors.",
  },
  {
    year: "2018",
    title: "Key Accreditations",
    description: "Expanded our technical capacity, securing critical certifications and safety accreditations, including HCIS compliance for security perimeter installations.",
  },
  {
    year: "2026",
    title: "Executing Vision 2030",
    description: "Leading key utility, power distribution, and cathodic protection projects supporting the Kingdom's industrial growth infrastructure.",
  },
];

// FAST Animation Variants for optimized, snappy scrolling
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 150, damping: 20 }
  }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardEntrance = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 200, damping: 20 }
  }
};

const ThemeSection = ({ theme, className, style, children }: { theme: "light" | "dark", className?: string, style?: React.CSSProperties, children?: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (theme === "dark") {
            document.body.style.setProperty("--body-bg", "#111315");
            document.body.style.setProperty("--body-text", "#ffffff");
            document.body.style.backgroundColor = "#111315";
            document.body.style.color = "#ffffff";
            document.body.style.transition = "background-color 0.6s ease, color 0.6s ease";
          } else {
            document.body.style.setProperty("--body-bg", "#ffffff");
            document.body.style.setProperty("--body-text", "#1a1c1c");
            document.body.style.backgroundColor = "#ffffff";
            document.body.style.color = "#1a1c1c";
            document.body.style.transition = "background-color 0.6s ease, color 0.6s ease";
          }
        }
      },
      { rootMargin: "-50% 0px -49% 0px" } 
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [theme]);

  return <div ref={ref} className={className} style={style}>{children}</div>;
};

export default function AboutUs() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  useEffect(() => {
    // Set initial background to white
    document.body.style.setProperty("--body-bg", "#ffffff");
    document.body.style.setProperty("--body-text", "#1a1c1c");
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#1a1c1c";

    return () => {
      document.body.style.removeProperty("--body-bg");
      document.body.style.removeProperty("--body-text");
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
      document.body.style.transition = "";
    };
  }, []);

  return (
    <div className={styles.aboutPage}>
      <ThemeSection theme="light">
        {/* Hero Section */}
        <section className={styles.hero}>
          <motion.div
            className={styles.heroBg}
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')",
            }}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1.05, opacity: 1 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
          />
          <div className={styles.heroOverlay} />
          
          <motion.div 
            className={styles.heroContent}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 className={`display-lg ${styles.heroTitle} ${styles.heroHighlight}`} variants={fadeInUp}>
              About M4
            </motion.h1>
            <motion.p className={`body-lg ${styles.heroDesc}`} variants={fadeInUp}>
              M4 is a Saudi-owned construction and infrastructure company built for the demands of the Kingdom's energy and industrial sector. Led by engineers and technical specialists with decades of combined experience, we bring proven expertise to every project we undertake. Where others promise, M4 executes — safely, on schedule, and to specification.
            </motion.p>
          </motion.div>
        </section>

        {/* About M4 Introductory Section */}
        <motion.section 
          className={styles.standardSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className={styles.standardGrid}>
            <motion.div className={styles.standardImageWrap} variants={fadeInUp}>
              <div
                className={styles.standardImage}
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop')",
                }}
              />
              <div className={styles.standardBadge}>M4</div>
            </motion.div>

            <motion.div className={styles.standardContent} variants={staggerContainer}>
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
                    <span className={`material-symbols-outlined ${styles.standardCardIcon}`}>
                      {item.icon}
                    </span>
                    <div>
                      <h4 className={`headline-lg ${styles.standardCardTitle}`}>{item.title}</h4>
                      <p className="body-md" style={{ color: "var(--body-text)", opacity: 0.7, marginTop: "4px", transition: "color 0.6s ease" }}>
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Aramco Certification Section (Redesigned) */}
        <motion.section 
          className={styles.aramcoSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className={styles.aramcoContainer}>
            <div className={styles.aramcoContent}>
              <motion.div className={styles.aramcoLogo} variants={fadeInUp}>
                <img src="/Saudi-Aramco-Logo.jpg" alt="Saudi Aramco Logo" />
              </motion.div>
              <motion.h2 className={`headline-lg ${styles.aramcoTitle}`} variants={fadeInUp}>
                Official Registered Supplier
              </motion.h2>
              <motion.p className={styles.aramcoDesc} variants={fadeInUp}>
                M4 Contracting Establishment is officially registered in the Saudi Aramco Supplier Management System. We are fully qualified to respond to requests for proposals and execute service contracts across all relevant standards.
              </motion.p>
              
              <motion.div className={styles.aramcoDetails} variants={fadeInUp}>
                <div className={styles.aramcoItem}>
                  <div className={styles.aramcoLabel}>Vendor Code</div>
                  <div className={styles.aramcoValue}>10117640</div>
                </div>
                <div className={styles.aramcoItem}>
                  <div className={styles.aramcoLabel}>CR Number</div>
                  <div className={styles.aramcoValue}>2056105742</div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className={styles.aramcoImageWrapper}
              variants={fadeInUp}
              whileHover={{ scale: 1.03, rotateY: 5, rotateX: -5 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <div className={styles.aramcoImageGlow} />
              <img 
                src="/aramco-certificate.png" 
                alt="Aramco Certificate" 
                className={styles.aramcoImage} 
              />
            </motion.div>
          </div>
        </motion.section>
      </ThemeSection>

      <ThemeSection theme="dark">
        <StatsMarquee />
      </ThemeSection>

      <div>
        <section className={styles.visionMissionSection}>
          <motion.div 
            className={styles.visionMissionGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Vision Card - Dark */}
            <ThemeSection theme="dark">
              <motion.div className={styles.vmCard} variants={fadeInUp}>
                <div className={styles.vmImageContainer}>
                  <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="Our Vision" className={styles.vmImage} />
                </div>
                <div className={styles.vmContentBox}>
                  <div className={styles.vmBadge}>Our Vision</div>
                  <p className={styles.vmText}>
                    To be as the most innovative construction, supply companies and delivering excellence in every project we undertake in Saudi Arabia. M4 Contracting aims to lead the industry through professionalism, advanced technology, and sustainable practices. Our vision is to contribute to the Kingdom's growth by providing reliable services that set new benchmarks for quality, safety, and client satisfaction. We aspire to build long-term partnerships and a lasting legacy of integrity, reliability, and progress within the construction and industrial sectors of Saudi Arabia.
                  </p>
                </div>
              </motion.div>
            </ThemeSection>

            {/* Mission Card - Reversed - Dark */}
            <ThemeSection theme="dark">
              <motion.div className={`${styles.vmCard} ${styles.reverse}`} variants={fadeInUp}>
                <div className={styles.vmImageContainer}>
                  <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop" alt="Our Mission" className={styles.vmImage} />
                </div>
                <div className={styles.vmContentBox}>
                  <div className={styles.vmBadge}>Our Mission</div>
                  <p className={styles.vmText}>
                    Our mission is to provide high-quality, cost-effective construction and supply solutions that exceed client expectations. We strive to ensure every project is delivered with safety, efficiency, and precision. By combining skilled manpower, modern equipment, and a commitment to continuous improvement, M4 Contracting aims to enhance customer value and strengthen its position in the Saudi market. We are dedicated to fostering teamwork, embracing innovation, and maintaining transparency in all our operations while contributing to the Kingdom's development through sustainable and responsible business practices.
                  </p>
                </div>
              </motion.div>
            </ThemeSection>
          </motion.div>
        </section>

        {/* Services Hover Slider Showcase */}
        <ThemeSection theme="dark">
          <div id="services-slider-section">
            <HoverSliderServices />
          </div>
        </ThemeSection>
      </div>

      {/* Saudi Milestones Timeline */}
      <ThemeSection theme="light">
        <section className={styles.timelineSection}>
          <motion.div 
            className={styles.timelineHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <span className={`label-bold ${styles.timelineLabel}`}>Our Journey</span>
            <h2 className={`headline-xl ${styles.timelineTitle}`}>Milestones of Progress</h2>
          </motion.div>

          <div className={styles.timeline} ref={timelineRef}>
            <div className={styles.timelineTrack} />
            <motion.div className={styles.timelineFill} style={{ scaleY: scrollYProgress }} />
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
                      visible: { scale: 1, transition: { type: "spring", stiffness: 300, damping: 15, delay: 0.1 } }
                    }}
                  />
                </div>
                <motion.div 
                  className={styles.timelineContent}
                  variants={{
                    hidden: { opacity: 0, x: 40 },
                    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
                  }}
                >
                  <span className={styles.timelineYear}>{item.year}</span>
                  <h3 className={`headline-lg ${styles.timelineItemTitle}`}>{item.title}</h3>
                  <p className={`body-md ${styles.timelineItemDesc}`}>{item.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>
      </ThemeSection>
    </div>
  );
}
