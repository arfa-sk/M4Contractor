"use client";
import { useEffect, useRef } from "react";
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

  useEffect(() => {
    // This effect creates a smooth body background transition
    // It changes body to black when the middle Experience section is intersecting
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.body.style.backgroundColor = "#0f172a"; // Black
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
      <section className={styles.marketsSection}>
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
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            
            <Slide title="Core & Shell" category="Practice" img="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" />
            <Slide title="Industrial" category="Market" img="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop" />
            <Slide title="Healthcare" category="Market" img="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop" />
            
            <button className={`${styles.carouselBtn} ${styles.btnNext}`}>
              {/* Right Arrow Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
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
          <div className={styles.circleWireframe}></div>
          <img 
            src="https://images.unsplash.com/photo-1541888086925-ebcf0f0d5004?q=80&w=2070&auto=format&fit=crop" 
            alt="Construction details" 
            className={styles.experienceImg} 
          />
          <p className={styles.experienceText}>
            Our success is built on a foundation of reliability, relationships, 
            ingenuity, and proven outcomes. We have a passion for elevating the 
            business of building and ensuring an exceptional experience for every client.
          </p>
        </div>
      </section>

      {/* SECTION 3: Here You Belong */}
      <section className={styles.belongSection}>
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
