"use client";

import { useEffect, useRef, useState } from "react";
import { features } from "./constants";

export default function DifferentialSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = Number.parseInt(entry.target.id);
            setVisibleCards((prev) => [...prev, cardId]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll("[data-feature-card]");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section
      id="differential"
      ref={sectionRef}
      className="relative py-24 px-6 bg-background"
    >
      {/* Decorative line */}
      <div className="absolute top-0 left-1/4 w-0.5 h-16 bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-medium text-primary uppercase tracking-widest">
            Nosso Diferencial
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground">
            O que nos torna <span className="text-primary italic">único</span>
          </h2>
          <div className="flex justify-center pt-4">
            <div className="w-16 h-1 bg-primary/60 rounded-full" />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isVisible = visibleCards.includes(feature.id);

            return (
              <div
                key={feature.id}
                id={feature.id.toString()}
                data-feature-card
                className={`group relative p-8 bg-card rounded-sm border border-border/50 hover:border-primary/30 transition-all duration-500 ${
                  isVisible ? "fade-in-up" : "opacity-0"
                }`}
                style={{
                  animation: isVisible
                    ? `fadeInUp 0.7s ease-out ${index * 0.1}s forwards`
                    : "none",
                }}
              >
                {/* Decorative accent */}
                <div className="absolute -top-1 -right-1 w-8 h-8 bg-primary/10 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-sm flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Icon
                      size={28}
                      className="text-primary group-hover:text-primary-foreground transition-colors"
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3 line-accent">
                  {feature.title}
                </h3>
                <p className="text-foreground/60 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover line effect */}
                <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary via-primary to-transparent w-0 group-hover:w-full transition-all duration-300" />
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
