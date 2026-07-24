"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";

export default function ContactForm() {
  const [result, setResult] = useState<string>("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");
    
    const formData = new FormData(event.currentTarget);
    
    // Web3Forms Public Access Key (User must replace this with their own from web3forms.com)
    // It's completely free and sends directly to their email without any backend!
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        (event.target as HTMLFormElement).reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.log("Error", error);
      setResult("Something went wrong!");
    }
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        
        {/* Left Side: Contact Information */}
        <motion.div 
          className={styles.infoCol}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.title}>
            Let's <span className={styles.highlight}>Connect.</span>
          </h1>
          <p className={styles.description}>
            Ready to start your next big project? Get in touch with M4 Contractor. We deliver integrated solutions across energy, infrastructure, and buildings in Saudi Arabia and beyond.
          </p>

          <div className={styles.contactDetails}>
            <div className={styles.detailItem}>
              <span className="material-symbols-outlined" style={{ color: "#f14d2a", fontSize: "28px" }}>location_on</span>
              <div>
                <h4 className={styles.detailTitle}>Headquarters</h4>
                <p className={styles.detailText}>Saudi Arabia</p>
              </div>
            </div>

            <div className={styles.detailItem}>
              <span className="material-symbols-outlined" style={{ color: "#f14d2a", fontSize: "28px" }}>mail</span>
              <div>
                <h4 className={styles.detailTitle}>Email Us</h4>
                <p className={styles.detailText}>info@m4contractor.com</p>
              </div>
            </div>

            <div className={styles.detailItem}>
              <span className="material-symbols-outlined" style={{ color: "#f14d2a", fontSize: "28px" }}>call</span>
              <div>
                <h4 className={styles.detailTitle}>Call Us</h4>
                <p className={styles.detailText}>+966 XX XXX XXXX</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: The Form */}
        <motion.div 
          className={styles.formCol}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form className={styles.form} onSubmit={onSubmit}>
            <input type="hidden" name="subject" value="New Inquiry from M4 Contractor Website" />
            <input type="checkbox" name="botcheck" id="" style={{ display: "none" }} />
            
            <div className={styles.formGrid}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">Full Name *</label>
                <input type="text" id="name" name="name" required placeholder="John Doe" />
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="company">Company Name</label>
                <input type="text" id="company" name="company" placeholder="ABC Corp" />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" name="email" required placeholder="john@example.com" />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="+966 5X XXX XXXX" />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="service">Required Service / Inquiry *</label>
              <textarea 
                id="service" 
                name="service" 
                required 
                rows={5} 
                placeholder="Tell us what you need..."
              ></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Send Message
            </button>

            {result && <p className={styles.resultMessage}>{result}</p>}
          </form>
        </motion.div>

      </div>
    </section>
  );
}
