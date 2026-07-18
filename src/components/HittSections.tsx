"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./HittSections.module.css";

const Slide = ({ title, category, img }: { title: string; category: string; img: string }) => (
  <div className={styles.carouselCard}>
    <img src={img} alt={title} />
    <div className={styles.carouselCardOverlay}>
      <p className={styles.carouselCardCategory}>{category}</p>
      <h3 className={styles.carouselCardTitle}>{title}</h3>
    </div>
  </div>
);

export default function HittSections() {
  const experienceRef = useRef<HTMLElement>(null);
  const marketsRef = useRef<HTMLElement>(null);
  const belongRef = useRef<HTMLElement>(null);
  const [marketsInView, setMarketsInView] = useState(false);
  const [belongInView, setBelongInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === marketsRef.current) {
            setMarketsInView(entry.isIntersecting);
          } else if (entry.target === belongRef.current) {
            setBelongInView(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.05 }
    );

    if (marketsRef.current) observer.observe(marketsRef.current);
    if (belongRef.current) observer.observe(belongRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // This effect creates a smooth body background transition
    // It changes body to black when the middle Experience section is intersecting
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.body.style.backgroundColor = "#121416"; // Black
          document.body.style.color = "#ffffff";
          document.body.style.transition = "background-color 0.8s ease, color 0.8s ease";
        } else {
          document.body.style.backgroundColor = "#ffffff"; // White
          document.body.style.color = "#000000";
        }
      },
      { threshold: 0.2 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    // Set initial background to white since the first section is white
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#000000";

    return () => {
      observer.disconnect();
      // Clean up inline styles
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
      document.body.style.transition = "";
    };
  }, []);

  return (
    <div className={styles.hittWrapper}>
      {/* SECTION 1: Markets & Practices */}
      <section className={`${styles.marketsSection} ${marketsInView ? styles.inView : ""}`} ref={marketsRef}>
        <div className={styles.giantBgText}>Expertise Our Expertise Our Expertise Our Expertise Our</div>

        <div className={styles.marketsContent}>
          <div className={styles.marketsText}>
            <h2>Markets and Practices</h2>
            <p>
              Whether renovating an existing space or building from the ground up,
              delivering the vision of our clients and design partners is our passion.
            </p>
          </div>

          <div className={styles.carousel}>
            <button className={`${styles.carouselBtn} ${styles.btnPrev}`}>
              {/* Left Arrow Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            </button>

            <Slide title="Core & Shell" category="Practice" img="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" />
            <Slide title="Industrial" category="Market" img="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop" />
            <Slide title="Healthcare" category="Market" img="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop" />

            <button className={`${styles.carouselBtn} ${styles.btnNext}`}>
              {/* Right Arrow Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2: The Experience */}
      <section className={styles.experienceSection} ref={experienceRef}>
        <h2 className={styles.experienceTitle}>
          The M4 Experience,<br />
          Built on <span className={styles.experienceTitleHighlight}>Trust</span>
        </h2>

        <div className={styles.experienceGraphic}>
          {/* Left Column: Image Wrapper & Animated Ring */}
          <div className={styles.imageWrapper}>
            <div className={styles.ringContainer}>
              <svg viewBox="0 0 400 400" className={styles.animatedRingSvg}>
                <circle
                  cx="200"
                  cy="200"
                  r="190"
                  className={styles.outlineCircle}
                  stroke="rgba(255, 255, 255, 0.08)"
                  strokeWidth="1.5"
                  strokeDasharray="1134 60"
                  strokeDashoffset="30"
                  fill="none"
                />
                <g className={styles.rotatingGroup}>
                  <circle
                    cx="200"
                    cy="200"
                    r="190"
                    stroke="#F15A24"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray="120 1073.8"
                    fill="none"
                    filter="url(#orangeGlow)"
                  />
                  <defs>
                    <filter id="orangeGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                </g>
              </svg>
            </div>

            <img
              src="/assets/16,9/Gemini_Generated_Image_abszudabszudabsz.png"
              alt="M4 Construction details"
              className={styles.experienceImg}
            />
          </div>

          {/* Right Column: Paragraph content & Badge */}
          <div className={styles.textWrapper}>
            <p className={styles.experienceText}>
              Our success is built on a foundation of reliability, relationships,
              ingenuity, and proven outcomes. We have a passion for elevating the
              business of building and ensuring an exceptional experience for every client.
            </p>
            <div className={styles.trustBadge}>
              TRUST. BUILT
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Here You Belong */}
      <section className={`${styles.belongSection} ${belongInView ? styles.inView : ""}`} ref={belongRef}>
        <div className={styles.belongBgText}>Here You Belong Here You Belong Here You Belong Here You Belong</div>
        <img
          src="/team-cutout.png"
          alt="Our Team"
          className={styles.belongImg}
          style={{
            maskImage: 'linear-gradient(to top, transparent 0%, black 20%)',
            WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 20%)'
          }}
        />
      </section>
    </div>
  );
}
