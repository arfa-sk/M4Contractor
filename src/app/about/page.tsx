import Navbar from "@/components/Navbar";
import AboutUs from "@/components/AboutUs";
import styles from "../page.module.css";

export const metadata = {
  title: "About Us | M4 Contractor",
  description:
    "Who are we? Learn about M4 Contractor's legacy, standards, and milestones.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutUs />
      </main>
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
              <li>
                <a className={`label-bold ${styles.footerLink}`} href="/">
                  Home
                </a>
              </li>
              <li>
                <a className={`label-bold ${styles.footerLink}`} href="/about">
                  About
                </a>
              </li>
              <li>
                <a className={`label-bold ${styles.footerLink}`} href="#">
                  Project Gallery
                </a>
              </li>
              <li>
                <a className={`label-bold ${styles.footerLink}`} href="#">
                  Request Quote
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className={`label-bold ${styles.footerColTitle}`}>Legal</h5>
            <ul className={styles.footerLinks}>
              <li>
                <a className={`label-bold ${styles.footerLink}`} href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className={`label-bold ${styles.footerLink}`} href="#">
                  Terms of Service
                </a>
              </li>
              <li>
                <a className={`label-bold ${styles.footerLink}`} href="#">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className={`label-bold ${styles.footerColTitle}`}>Newsletter</h5>
            <p
              className={`body-md ${styles.footerDesc}`}
              style={{ marginBottom: "16px" }}
            >
              Stay updated with our latest architectural insights.
            </p>
            <div className={styles.footerInputGroup}>
              <input
                className={styles.footerInput}
                placeholder="Email Address"
                type="email"
              />
              <button className={`label-bold ${styles.subscribeBtn}`}>
                SUBSCRIBE
              </button>
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
