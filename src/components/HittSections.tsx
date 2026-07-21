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
  const carouselRef = useRef<HTMLDivElement>(null);
  const marketsRef = useRef<HTMLElement>(null);
  const belongRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [marketsInView, setMarketsInView] = useState(false);
  const [belongInView, setBelongInView] = useState(false);

  const scrollLeft = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth } = carouselRef.current;
      if (scrollLeft <= 0) {
        carouselRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
      } else {
        carouselRef.current.scrollBy({ left: -370, behavior: 'smooth' });
      }
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        carouselRef.current.scrollBy({ left: 370, behavior: 'smooth' });
      }
    }
  };

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
          setInView(true);
          document.body.style.backgroundColor = "#1a1a1a"; // Deep Charcoal
          document.body.style.color = "#ffffff";
          document.body.style.transition = "background-color 0.8s ease, color 0.8s ease";
        } else {
          document.body.style.backgroundColor = "#ffffff";
          document.body.style.color = "var(--on-background)";
        }
      },
      { threshold: 0.3 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    const handleScroll = () => {
      if (experienceRef.current) {
        const deg = window.scrollY * 0.25;
        experienceRef.current.style.setProperty('--scroll-deg', `${deg}deg`);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Set initial background to white since the first section is white
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#000000";

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
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
            <h2>Industries We Serve</h2>
            <p>
              Delivering specialized construction and engineering excellence across the Kingdom's most critical sectors.
            </p>
          </div>

          <div className={styles.carouselWrapper}>
            <button className={`${styles.carouselBtn} ${styles.btnPrev}`} onClick={scrollLeft}>
              {/* Left Arrow Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            </button>
            
            <div className={styles.carousel} ref={carouselRef}>
              <Slide title="Oil & Gas" category="Industry" img="/quality system.png" />
              <Slide title="Power & Utilities" category="Industry" img="/solar system.png" />
              <Slide title="Industrial Facilities" category="Industry" img="/design and the structure of the company.png" />
              <Slide title="Petrochemical" category="Industry" img="/equipment supply.png" />
              <Slide title="Water Infrastructure" category="Industry" img="/maintanice .png" />
              <Slide title="Government Projects" category="Industry" img="/hec approved system.png" />
            </div>
            
            <button className={`${styles.carouselBtn} ${styles.btnNext}`} onClick={scrollRight}>
              {/* Right Arrow Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2: The Experience */}
      <section className={`${styles.experienceSection} ${inView ? styles.inView : ""}`} ref={experienceRef}>
        <h2 className={styles.experienceTitle}>
          The M4 Experience,<br />
          Built on <span className={styles.experienceTitleHighlight}>Trust</span>
        </h2>

        <div className={styles.experienceGraphic}>
          <div className={styles.circleWireframe}></div>
          <img
            src="/visison.png"
            alt="Construction details"
            className={styles.experienceImg}
          />
          <div className={styles.experienceText}>
            <h3><span className={styles.textAccent}>Why</span> M4 Contractor?</h3>
            <div className={styles.featureList}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}><span className="material-symbols-outlined">verified</span></div>
                <div className={styles.featureContent}>
                  <h4>Proven Execution</h4>
                  <p>A decade-plus track record delivering complex power, corrosion protection, and infrastructure projects across the Kingdom.</p>
                </div>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}><span className="material-symbols-outlined">health_and_safety</span></div>
                <div className={styles.featureContent}>
                  <h4>Uncompromising Safety</h4>
                  <p>Every project executed under strict HSE protocols, with zero tolerance for shortcuts.</p>
                </div>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}><span className="material-symbols-outlined">engineering</span></div>
                <div className={styles.featureContent}>
                  <h4>Technical Depth</h4>
                  <p>An experienced team of certified engineers and technicians, not subcontracted guesswork.</p>
                </div>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}><span className="material-symbols-outlined">insights</span></div>
                <div className={styles.featureContent}>
                  <h4>Modern Methods</h4>
                  <p>Equipment and processes aligned with the highest international standards.</p>
                </div>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}><span className="material-symbols-outlined">rocket_launch</span></div>
                <div className={styles.featureContent}>
                  <h4>Built for Vision 2030</h4>
                  <p>Positioned as a long-term infrastructure partner for the Kingdom's energy and industrial future.</p>
                </div>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}><span className="material-symbols-outlined">gavel</span></div>
                <div className={styles.featureContent}>
                  <h4>Accountability</h4>
                  <p>Clear project ownership from initial design through final commissioning.</p>
                </div>
              </div>
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
