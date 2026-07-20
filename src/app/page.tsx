"use client";

import { motion } from "motion/react";
import styles from "./page.module.css";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HittSections from "@/components/HittSections";

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }
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

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero Section */}
        <motion.section className={styles.hero} initial="hidden" animate="visible" variants={staggerContainer}>
          <div className={styles.heroBg}>
            <div
              className={styles.heroImg}
              style={{
                backgroundImage: "url('/hero.png')",
              }}
            ></div>
            <div className={styles.heroOverlay}></div>
          </div>
          <motion.div className={styles.heroContent} variants={fadeInUp}>
            <div className={styles.heroText}>
              <h1 className={`display-lg ${styles.heroTitle}`}>
                Structural Precision.<br />
                <span className={styles.heroTitleHighlight}>
                  Modern Excellence.
                </span>
              </h1>
              <p className={`body-lg ${styles.heroDesc}`}>
                Delivering high-end commercial and residential construction
                projects with meticulous attention to detail and unwavering
                commitment to quality.
              </p>
              <div className={styles.heroBtns}>
                <button className={`label-bold ${styles.heroBtnPrimary}`}>
                  REQUEST QUOTE
                </button>
                <button className={`label-bold ${styles.heroBtnSecondary}`}>
                  View Gallery
                </button>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <HittSections />

        {/* Our Expertise Section */}
        <motion.section className={styles.section} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <motion.div className={styles.sectionHeader} variants={fadeInUp}>
            <div>
              <span className={`label-bold ${styles.sectionLabel}`}>
                What We Do
              </span>
              <h2 className={`headline-xl ${styles.sectionTitle}`}>
                Services
              </h2>
            </div>
            <p className={`body-md ${styles.sectionDesc}`}>
              From initial blueprints to the final touch, we provide
              comprehensive contracting services that redefine architectural
              boundaries.
            </p>
          </motion.div>
          <div className={styles.grid3}>
            {/* Service 1 */}
            <motion.div className={styles.expertiseCard} variants={cardEntrance} whileHover={{ y: -5 }}>
              <img src="/design and the structure of the company.png" alt="LV/MV Overhead Power Line Construction" />
              <div className={styles.expertiseContent}>
                <h3 className={styles.expertiseTitle}>LV/MV Overhead Power Line Construction</h3>
                <ul className={styles.expertiseList}>
                  <li className={styles.expertiseListItem}>
                    <span className="material-symbols-outlined">done_all</span>
                    Transmission & Distribution
                  </li>
                  <li className={styles.expertiseListItem}>
                    <span className="material-symbols-outlined">done_all</span>
                    Pole Installation & Stringing
                  </li>
                  <li className={styles.expertiseListItem}>
                    <span className="material-symbols-outlined">done_all</span>
                    Substation Integration
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Service 2 */}
            <motion.div className={styles.expertiseCard} variants={cardEntrance} whileHover={{ y: -5 }}>
              <img src="/quality system.png" alt="Underground Power Line Construction" />
              <div className={styles.expertiseContent}>
                <h3 className={styles.expertiseTitle}>Underground Power Line Construction</h3>
                <ul className={styles.expertiseList}>
                  <li className={styles.expertiseListItem}>
                    <span className="material-symbols-outlined">done_all</span>
                    Trenching & Duct Banks
                  </li>
                  <li className={styles.expertiseListItem}>
                    <span className="material-symbols-outlined">done_all</span>
                    Cable Pulling & Splicing
                  </li>
                  <li className={styles.expertiseListItem}>
                    <span className="material-symbols-outlined">done_all</span>
                    Testing & Commissioning
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Service 3 */}
            <motion.div className={styles.expertiseCard} variants={cardEntrance} whileHover={{ y: -5 }}>
              <img src="/maintanice .png" alt="Cathodic Protection Systems" />
              <div className={styles.expertiseContent}>
                <h3 className={styles.expertiseTitle}>Cathodic Protection Systems</h3>
                <ul className={styles.expertiseList}>
                  <li className={styles.expertiseListItem}>
                    <span className="material-symbols-outlined">done_all</span>
                    Corrosion Prevention
                  </li>
                  <li className={styles.expertiseListItem}>
                    <span className="material-symbols-outlined">done_all</span>
                    Anode Bed Installation
                  </li>
                  <li className={styles.expertiseListItem}>
                    <span className="material-symbols-outlined">done_all</span>
                    System Monitoring
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          <motion.div style={{ display: 'flex', justifyContent: 'center', marginTop: '64px' }} variants={fadeInUp}>
            <a href="/services" className={styles.heroBtnPrimary}>
              View All Services
            </a>
          </motion.div>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section className={styles.splitSection} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <div className={styles.section}>
            <div className={styles.splitLayout}>
              <motion.div className={styles.splitHalf} variants={fadeInUp}>
                <div className={styles.imgBox}>
                  <div className={styles.imgBoxInner}>
                    <div
                      className={styles.heroImg}
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD08_qhawn8wdzuo71yCxpsc4Mv1FaMDBt1JSMmAFL-5jHJxXCBVi9yb2FurS2Uw5691Yf_GsrhB1OkpfcbLggpt5Kebvf_AEH-C0SAxRd8IW1Dxdt4s3czntQfayg4FTq5ZSX7E9iS_nDFLk5OSLgC-KWcyhiIVLatnMxeqs_5Knp0XbTd4Z7x6ZdbCjEn9HsEmvC71Bn-yRuW5TP4whvtf-uprJuGApNsFMCuAY_SshndP1SH4r9OmixE56dwVwVD4vVxCVlNuHXF')",
                      }}
                    ></div>
                  </div>
                  <div className={styles.imgBoxDeco}></div>
                </div>
              </motion.div>
              <motion.div className={styles.splitHalf} variants={staggerContainer}>
                <motion.span className={`label-bold ${styles.sectionLabel}`} variants={fadeInUp}>
                  Core Values
                </motion.span>
                <motion.h2 className={`headline-xl ${styles.sectionTitle}`} variants={fadeInUp}>
                  Why Choose M4 Contractor?
                </motion.h2>
                <div className={styles.valueList}>
                  <motion.div className={styles.valueItem} variants={fadeInUp}>
                    <div className={styles.valueIcon}>
                      <span className="material-symbols-outlined">precision_manufacturing</span>
                    </div>
                    <div>
                      <h4 className={`headline-lg ${styles.valueTitle}`}>
                        Unmatched Precision
                      </h4>
                      <p className="body-md" style={{ color: 'var(--secondary)' }}>
                        We believe that every millimeter matters. Our
                        engineering-first approach ensures that structural
                        integrity is never compromised for aesthetic.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div className={styles.valueItem} variants={fadeInUp}>
                    <div className={styles.valueIcon}>
                      <span className="material-symbols-outlined">verified</span>
                    </div>
                    <div>
                      <h4 className={`headline-lg ${styles.valueTitle}`}>
                        Proven Reliability
                      </h4>
                      <p className="body-md" style={{ color: 'var(--secondary)' }}>
                        With a track record of on-time and on-budget delivery,
                        we are the trusted partner for complex developments
                        across the region.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div className={styles.valueItem} variants={fadeInUp}>
                    <div className={styles.valueIcon}>
                      <span className="material-symbols-outlined">handshake</span>
                    </div>
                    <div>
                      <h4 className={`headline-lg ${styles.valueTitle}`}>
                        Total Transparency
                      </h4>
                      <p className="body-md" style={{ color: 'var(--secondary)' }}>
                        We maintain open communication lines, providing
                        real-time progress tracking and clear documentation
                        throughout the build lifecycle.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Recent Projects */}
        <motion.section className={styles.section} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <motion.div style={{ textAlign: 'center', marginBottom: '64px' }} variants={fadeInUp}>
            <span className={`label-bold ${styles.sectionLabel}`}>Portfolio</span>
            <h2 className={`headline-xl ${styles.sectionTitle}`}>
              Recent Projects
            </h2>
          </motion.div>
          <div className={styles.grid3}>
            {/* Project 1 */}
            <motion.div className={styles.projectCard} variants={cardEntrance} whileHover={{ y: -5 }}>
              <div className={styles.projectImgWrap}>
                <div
                  className={styles.projectImg}
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCiHCiGFBEZzWUi9de-cTykxhU2rI31YeyNPxNyMMq_VeTVscO4O4X9zyvYpD1GWlADoNbmQEuzU7Ni24YKkEKQo2p7N4OPBptPUHDX01_WC8rQLSn216xiynOwL3FTBcyNoPQNxwwikGfK_rZwHwYawmzC2XWkv2RlqpJnlPhZTQ0ELBQXy7UcY1JGNsXu10b7WFoICkm0A__jFFpypQlws4n5Z4tubCu_c7FKm_CqF0eVRsjjmFhxWzBdu_THka0MrXAeqv5Im4Jr')",
                  }}
                ></div>
                <div className={`label-bold ${styles.projectTag}`}>COMMERCIAL</div>
              </div>
              <div className={styles.projectContent}>
                <h4 className={`headline-lg ${styles.projectTitle}`}>
                  The Nexus Hub
                </h4>
                <p className={`body-md ${styles.projectDesc}`}>
                  A 50,000 sq ft futuristic office complex featuring
                  sustainable design and cutting-edge structural steelwork.
                </p>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{ width: '100%' }}></div>
                </div>
                <div className={`label-bold ${styles.projectStatus}`}>
                  <span className={styles.statusLabel}>Status</span>
                  <span className={styles.statusValue}>COMPLETED</span>
                </div>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div className={styles.projectCard} variants={cardEntrance} whileHover={{ y: -5 }}>
              <div className={styles.projectImgWrap}>
                <div
                  className={styles.projectImg}
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBvHVFXs7e5uNS2ooHcdvHI0eEAKOVbEUkEQF45ab0kEX8ozGlPkjNnvY4SFc-rRHk2exct8VYtCGXSaxuePti7X-gMSvDQSunXVFVTlc4ZsJlrTv8sBEYQH6cKiLu5LWhCq6vrj4Tv3NoRf-qBC7vMy8cv6S43xOniQYmC11mzff4Fuc8ikgZW-RGjj4KVOGbpBP-NbmU3JNoP6UCEhbWht21UeNY77hHix9PdSdVq5s5UeVw3xOZVkBu2DnJXqDSt294m1iIRfZtb')",
                  }}
                ></div>
                <div className={`label-bold ${styles.projectTag}`}>RESIDENTIAL</div>
              </div>
              <div className={styles.projectContent}>
                <h4 className={`headline-lg ${styles.projectTitle}`}>
                  Azure Heights
                </h4>
                <p className={`body-md ${styles.projectDesc}`}>
                  High-end residential development focusing on geometric
                  precision and premium material sourcing.
                </p>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{ width: '85%' }}></div>
                </div>
                <div className={`label-bold ${styles.projectStatus}`}>
                  <span className={styles.statusLabel}>Status</span>
                  <span className={styles.statusValue}>85% COMPLETE</span>
                </div>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div className={styles.projectCard} variants={cardEntrance} whileHover={{ y: -5 }}>
              <div className={styles.projectImgWrap}>
                <div
                  className={styles.projectImg}
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAmb2UTkRVgVQkG01NoEK9pMvSRXFfFZeQcrjBb16KYbRZqlMqWg0092PQIm_XQx0TRy-rw80GxOeAtxbSlsW2eGrC_Q2VdPVL4Qveopes2WwVgj2NinKbWqraCOIDFL2HP80VYpa06W_wIk7l7AHqar_FZQBQV93lTBia2Q0sm10PVrxUUDAPv1R7IPKLbPU0cU3B7ZXsccUNEWDUiBrUK6mCnBx2OJzF1qV-AHiCjt1Fl3lCWfzpiWmHioX4w3utr-8GK4T-3JqCg')",
                  }}
                ></div>
                <div className={`label-bold ${styles.projectTag}`}>RENOVATION</div>
              </div>
              <div className={styles.projectContent}>
                <h4 className={`headline-lg ${styles.projectTitle}`}>
                  Station Yard
                </h4>
                <p className={`body-md ${styles.projectDesc}`}>
                  Industrial warehouse conversion involving complex structural
                  retrofitting and modern architectural upgrades.
                </p>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{ width: '100%' }}></div>
                </div>
                <div className={`label-bold ${styles.projectStatus}`}>
                  <span className={styles.statusLabel}>Status</span>
                  <span className={styles.statusValue}>COMPLETED</span>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div className={styles.centerBtn} variants={fadeInUp}>
            <button className="btn-secondary label-bold">
              Browse All Projects
            </button>
          </motion.div>
        </motion.section>

        {/* CTA Section */}
        <motion.section className={styles.ctaSection} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <motion.div className={styles.ctaContent} variants={fadeInUp}>
            <h2 className={`headline-xl ${styles.ctaTitle}`}>
              Powering Your Next Project?
            </h2>
            <p className={`body-lg ${styles.ctaDesc}`}>
              Connect with our specialized engineering team to discuss your infrastructure, power distribution, and protection needs.<br /><br />
              <strong>Location:</strong> King Abdulaziz Rd, Almadinah, Abqaiq, 33261, Kingdom of Saudi Arabia<br />
              <strong>Tel:</strong> 013 565 1449
            </p>
            <button className={`label-bold ${styles.heroBtnPrimary}`}>
              REQUEST QUOTE
            </button>
          </motion.div>
          <motion.div className={styles.ctaMapContainer} variants={fadeInUp}>
            <iframe
              src="https://www.google.com/maps?q=King+Abdulaziz+Rd,+Almadinah,+Abqaiq,+33261,+Saudi+Arabia&output=embed"
              className={styles.ctaMap}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </motion.section>
      </main>

      <Footer />
    </>
  );
}
