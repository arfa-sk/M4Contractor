"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import styles from "./StatsMarquee.module.css";

interface StatItem {
  value: string;
  label: string;
}

const STATS_DATA: StatItem[] = [
  { value: "15+", label: "Years of Experience" },
  { value: "250+", label: "Projects Completed" },
  { value: "100+", label: "Trusted Clients" },
  { value: "45", label: "Active Projects" },
  { value: "120", label: "Engineers" },
  { value: "35", label: "Industrial Partners" },
  { value: "18", label: "Regions Served" },
  { value: "500+", label: "Skilled Workforce" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "24/7", label: "Project Support" },
];

function Counter({ value, trigger }: { value: string; trigger: boolean }) {
  const [count, setCount] = useState(0);

  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return <>{value}</>;

  const target = parseInt(match[1], 10);
  const suffix = match[2];

  useEffect(() => {
    if (trigger) {
      let startTime: number | null = null;
      const duration = 2000; // 2 seconds

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easeProgress = progress * (2 - progress); // Ease out quad
        setCount(Math.floor(easeProgress * target));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }
  }, [trigger, target]);

  return (
    <>
      {trigger ? count : 0}
      {suffix}
    </>
  );
}

export default function StatsMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  // Trigger counting animation when the marquee container enters 10% of viewport
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section className={styles.statsMarqueeSection} ref={containerRef}>
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {/* Group 1 */}
          <div className={styles.marqueeGroup}>
            {STATS_DATA.map((stat, idx) => (
              <React.Fragment key={`g1-${idx}`}>
                <div className={styles.marqueeItem}>
                  <div className={styles.marqueeNumber}>
                    <Counter value={stat.value} trigger={isInView} />
                  </div>
                  <div className={styles.marqueeLabel}>{stat.label}</div>
                </div>
                <div className={styles.marqueeDivider} />
              </React.Fragment>
            ))}
          </div>
          {/* Group 2 (Duplicate for infinite seamless looping) */}
          <div className={styles.marqueeGroup}>
            {STATS_DATA.map((stat, idx) => (
              <React.Fragment key={`g2-${idx}`}>
                <div className={styles.marqueeItem}>
                  <div className={styles.marqueeNumber}>
                    <Counter value={stat.value} trigger={isInView} />
                  </div>
                  <div className={styles.marqueeLabel}>{stat.label}</div>
                </div>
                <div className={styles.marqueeDivider} />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
