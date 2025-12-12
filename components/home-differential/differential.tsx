"use client";

import { useEffect, useRef, useState } from "react";
import { features } from "./constants";
import { timelineSteps, lsfWallLayers } from "../home-services/constants";
import { useI18n } from "@/lib/i18n/context";

export default function DifferentialSection() {
  const { t } = useI18n();
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
            {t.differential.sectionTitle}
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground">
            {t.differential.sectionTitle}
          </h2>
          <div className="flex justify-center pt-4">
            <div className="w-16 h-1 bg-primary/60 rounded-full" />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isVisible = visibleCards.includes(feature.id);
            
            // Map features to translations
            const translations = [
              t.differential.engineering,
              t.differential.custom,
              t.differential.sustainability,
              t.differential.premium,
            ];
            const translation = translations[index];

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

                {/* Icon and Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Icon
                        size={24}
                        className="text-primary group-hover:text-primary-foreground transition-colors"
                        weight="duotone"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground line-accent">
                    {translation.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {translation.description}
                </p>

                {/* Hover line effect */}
                <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary via-primary to-transparent w-0 group-hover:w-full transition-all duration-300" />
              </div>
            );
          })}
        </div>

        {/* Timeline Section */}
        <div className="mt-24">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <p className="text-sm font-medium text-primary uppercase tracking-widest">
              {t.differential.processTitle}
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line - Hidden on mobile */}
            <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

            {/* Timeline Steps */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
              {timelineSteps.map((step, index) => {
                const Icon = step.icon;
                const translation = t.differential.timeline[index];
                return (
                  <div
                    key={step.id}
                    className="group relative flex flex-col items-center text-center"
                  >
                    {/* Icon Square */}
                    <div className="relative z-20 w-12 h-12 rounded-sm bg-primary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-all duration-300">
                      <Icon
                        size={24}
                        className="text-primary-foreground group-hover:text-primary transition-colors"
                        weight="duotone"
                      />
                    </div>

                    {/* Step Number */}
                    <span className="text-sm font-bold text-primary mb-2">
                      {step.number} {t.differential.stepLabel}
                    </span>

                    {/* Title */}
                    <h3 className="text-base font-semibold text-foreground mb-2 px-2">
                      {translation.title}
                    </h3>

                    {/* Description */}
                    {translation.description && (
                      <p className="text-sm text-muted-foreground px-2">
                        {translation.description}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* LSF Wall Section */}
        <div className="mt-24">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <p className="text-sm font-medium text-primary uppercase tracking-widest">
              {t.differential.lsfTitle}
            </p>
          </div>

          {/* LSF Wall Layers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lsfWallLayers.map((layer, index) => {
              const Icon = layer.icon;
              const translation = t.differential.lsf[index];
              return (
                <div
                  key={layer.id}
                  className="group relative p-6 bg-card rounded-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                >
                  {/* Number Badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-primary-foreground">
                      {layer.id}
                    </span>
                  </div>

                  {/* Icon and Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <Icon
                          size={24}
                          className="text-primary group-hover:text-primary-foreground transition-colors"
                          weight="duotone"
                        />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground line-accent">
                      {translation.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {translation.description}
                  </p>

                  {/* Hover line effect */}
                  <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary via-primary to-transparent w-0 group-hover:w-full transition-all duration-300" />
                </div>
              );
            })}
          </div>
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
