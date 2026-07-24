import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/contact/ContactForm";
import styles from "./page.module.css";

export const metadata = {
  title: "Contact Us | M4 Contractor",
  description: "Get in touch with M4 Contractor for your next energy, infrastructure, or building project.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
