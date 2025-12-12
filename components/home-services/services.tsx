"use client";

import HouseCatalog from "./house-catalog";

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 px-6 bg-muted/20">
      {/* Decorative line */}
      <div className="absolute top-1/4 right-1/4 w-0.5 h-24 bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0" />

      <div className="max-w-6xl mx-auto">
        {/* House Catalog Section */}
        <HouseCatalog />
      </div>
    </section>
  );
}
