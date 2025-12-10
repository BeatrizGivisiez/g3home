"use client";

import { useState, useEffect } from "react";
import Menu from "@/components/menu/menu";
import AboutSection from "@/components/home-about/about";
import DifferentialSection from "@/components/home-differential/differential";
import ProjectSection from "@/components/home-project/project";
import ContactSection from "@/components/home-contact/contact";
import Footer from "@/components/footer/footer";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Menu isScrolled={isScrolled} />
      <AboutSection />
      <DifferentialSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
