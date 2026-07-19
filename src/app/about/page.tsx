import Navbar from "@/components/Navbar";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
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
      <Footer />
    </>
  );
}
