import styles from "./page.module.css";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import HittSections from "@/components/HittSections";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroBg}>
            <div
              className={styles.heroImg}
              style={{
                backgroundImage: "url('/hero.png')",
              }}
            ></div>
            <div className={styles.heroOverlay}></div>
          </div>
          <div className={styles.heroContent}>
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
          </div>
        </section>

        <HittSections />

        {/* Our Expertise Section */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div>
              <span className={`label-bold ${styles.sectionLabel}`}>
                What We Do
              </span>
              <h2 className={`headline-xl ${styles.sectionTitle}`}>
                Our Expertise
              </h2>
            </div>
            <p className={`body-md ${styles.sectionDesc}`}>
              From initial blueprints to the final touch, we provide
              comprehensive contracting services that redefine architectural
              boundaries.
            </p>
          </div>
          <div className={styles.grid3}>
            {/* Service 1 */}
            <div className={`${styles.card} ${styles.cardLow}`}>
              <div className={`${styles.cardIcon} ${styles.cardIconPrimary}`}>
                <span className="material-symbols-outlined" style={{ fontSize: '36px' }}>architecture</span>
              </div>
              <h3 className={`headline-lg ${styles.cardTitle}`}>
                Pre-Construction
              </h3>
              <ul className={styles.cardList}>
                <li className={styles.cardListItem}>
                  <span className={`material-symbols-outlined ${styles.cardIconPrimary}`}>check_circle</span>
                  <span className="label-bold">Feasibility Studies</span>
                </li>
                <li className={styles.cardListItem}>
                  <span className={`material-symbols-outlined ${styles.cardIconPrimary}`}>check_circle</span>
                  <span className="label-bold">Cost Estimation</span>
                </li>
                <li className={styles.cardListItem}>
                  <span className={`material-symbols-outlined ${styles.cardIconPrimary}`}>check_circle</span>
                  <span className="label-bold">Design Integration</span>
                </li>
              </ul>
            </div>
            {/* Service 2 */}
            <div className={`${styles.card} ${styles.cardInverse}`}>
              <div className={`${styles.cardIcon} ${styles.cardIconInverse}`}>
                <span className="material-symbols-outlined" style={{ fontSize: '36px' }}>construction</span>
              </div>
              <h3 className={`headline-lg ${styles.cardTitle} ${styles.cardTitleInverse}`}>
                General Contracting
              </h3>
              <ul className={styles.cardList}>
                <li className={styles.cardListItemInverse}>
                  <span className={`material-symbols-outlined ${styles.cardIconInverse}`}>check_circle</span>
                  <span className="label-bold">Project Management</span>
                </li>
                <li className={styles.cardListItemInverse}>
                  <span className={`material-symbols-outlined ${styles.cardIconInverse}`}>check_circle</span>
                  <span className="label-bold">Safety Compliance</span>
                </li>
                <li className={styles.cardListItemInverse}>
                  <span className={`material-symbols-outlined ${styles.cardIconInverse}`}>check_circle</span>
                  <span className="label-bold">Vendor Management</span>
                </li>
              </ul>
            </div>
            {/* Service 3 */}
            <div className={`${styles.card} ${styles.cardLow}`}>
              <div className={`${styles.cardIcon} ${styles.cardIconPrimary}`}>
                <span className="material-symbols-outlined" style={{ fontSize: '36px' }}>corporate_fare</span>
              </div>
              <h3 className={`headline-lg ${styles.cardTitle}`}>
                Post-Construction
              </h3>
              <ul className={styles.cardList}>
                <li className={styles.cardListItem}>
                  <span className={`material-symbols-outlined ${styles.cardIconPrimary}`}>check_circle</span>
                  <span className="label-bold">Quality Assurance</span>
                </li>
                <li className={styles.cardListItem}>
                  <span className={`material-symbols-outlined ${styles.cardIconPrimary}`}>check_circle</span>
                  <span className="label-bold">Facility Handover</span>
                </li>
                <li className={styles.cardListItem}>
                  <span className={`material-symbols-outlined ${styles.cardIconPrimary}`}>check_circle</span>
                  <span className="label-bold">Ongoing Support</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className={styles.splitSection}>
          <div className={styles.section}>
            <div className={styles.splitLayout}>
              <div className={styles.splitHalf}>
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
              </div>
              <div className={styles.splitHalf}>
                <span className={`label-bold ${styles.sectionLabel}`}>
                  Core Values
                </span>
                <h2 className={`headline-xl ${styles.sectionTitle}`}>
                  Why Choose M4 Contractor?
                </h2>
                <div className={styles.valueList}>
                  <div className={styles.valueItem}>
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
                  </div>
                  <div className={styles.valueItem}>
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
                  </div>
                  <div className={styles.valueItem}>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Projects */}
        <section className={styles.section}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span className={`label-bold ${styles.sectionLabel}`}>Portfolio</span>
            <h2 className={`headline-xl ${styles.sectionTitle}`}>
              Recent Projects
            </h2>
          </div>
          <div className={styles.grid3}>
            {/* Project 1 */}
            <div className={styles.projectCard}>
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
            </div>

            {/* Project 2 */}
            <div className={styles.projectCard}>
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
            </div>

            {/* Project 3 */}
            <div className={styles.projectCard}>
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
            </div>
          </div>
          <div className={styles.centerBtn}>
            <button className="btn-secondary label-bold">
              Browse All Projects
            </button>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <h2 className={`headline-xl ${styles.ctaTitle}`}>
            Ready to Build Your Vision?
          </h2>
          <p className={`body-lg ${styles.ctaDesc}`}>
            Consult with our expert project managers and architects to start
            your journey towards excellence.
          </p>
          <button className={`label-bold ${styles.heroBtnPrimary}`}>
            REQUEST QUOTE
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          <div>
            <span className={`display-lg ${styles.footerBrand}`}>
              M4 Contractor
            </span>
            <p className={`body-md ${styles.footerDesc}`}>
              Leading the industry in structural precision and architectural
              innovation.
            </p>
            <div className={styles.footerSocial}>
              <a className={styles.socialIcon} href="#">
                <span className="material-symbols-outlined">public</span>
              </a>
              <a className={styles.socialIcon} href="#">
                <span className="material-symbols-outlined">mail</span>
              </a>
            </div>
          </div>
          <div>
            <h5 className={`label-bold ${styles.footerColTitle}`}>Quick Links</h5>
            <ul className={styles.footerLinks}>
              <li><a className={`label-bold ${styles.footerLink}`} href="#">Home</a></li>
              <li><a className={`label-bold ${styles.footerLink}`} href="#">Our Expertise</a></li>
              <li><a className={`label-bold ${styles.footerLink}`} href="#">Project Gallery</a></li>
              <li><a className={`label-bold ${styles.footerLink}`} href="#">Request Quote</a></li>
            </ul>
          </div>
          <div>
            <h5 className={`label-bold ${styles.footerColTitle}`}>Legal</h5>
            <ul className={styles.footerLinks}>
              <li><a className={`label-bold ${styles.footerLink}`} href="#">Privacy Policy</a></li>
              <li><a className={`label-bold ${styles.footerLink}`} href="#">Terms of Service</a></li>
              <li><a className={`label-bold ${styles.footerLink}`} href="#">Careers</a></li>
            </ul>
          </div>
          <div>
            <h5 className={`label-bold ${styles.footerColTitle}`}>Newsletter</h5>
            <p className={`body-md ${styles.footerDesc}`} style={{ marginBottom: '16px' }}>
              Stay updated with our latest architectural insights.
            </p>
            <div className={styles.footerInputGroup}>
              <input className={styles.footerInput} placeholder="Email Address" type="email" />
              <button className={`label-bold ${styles.subscribeBtn}`}>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p className={`label-bold ${styles.copyright}`}>
            © 2024 M4 Contractor. All Rights Reserved. Built with Precision.
          </p>
        </div>
      </footer>
    </>
  );
}
