"use client";

import { useEffect, useState } from "react";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { useI18n } from "@/lib/i18n/context";

export default function AboutSection() {
  const [mounted, setMounted] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen w-full overflow-hidden pt-16"
    >
      {/* Background com textura de madeira refinada */}
      <div
        className="absolute inset-0 wood-texture"
        style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(212, 120, 54, 0.08) 0%, transparent 50%),
            linear-gradient(45deg, rgba(139, 111, 71, 0.06) 0%, transparent 50%)
          `,
          background: `
            linear-gradient(135deg, rgba(212, 120, 54, 0.08) 0%, transparent 50%),
            linear-gradient(45deg, rgba(139, 111, 71, 0.06) 0%, transparent 50%),
            repeating-linear-gradient(
              90deg,
              rgba(101, 67, 33, 0.08) 0px,
              transparent 1px,
              transparent 3px,
              rgba(101, 67, 33, 0.04) 4px
            )
          `,
        }}
      />

      {/* Overlay translúcido */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/60" />

      {/* Conteúdo */}
      <div className="relative z-10 h-full min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl text-center space-y-8">
          {mounted && (
            <>
              {/* Subtitle */}
              <div className="fade-in-down">
                <p className="text-sm font-medium text-primary uppercase tracking-widest">
                  {t.hero.subtitle}
                </p>
              </div>

              {/* Main Title */}
              <h1 className="fade-in text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight text-balance">
                {t.hero.title}
                <br />
                <span className="text-primary">{t.hero.titleHighlight}</span>
              </h1>

              {/* Description */}
              <p className="fade-in-up text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed text-balance">
                {t.hero.description}
              </p>

              {/* CTA Buttons */}
              <div className="fade-in-up flex flex-col sm:flex-row gap-4 justify-center items-center sm:pt-8">
                <button className="group px-8 py-4 bg-primary text-primary-foreground rounded-sm font-semibold text-base hover-lift flex items-center gap-2">
                  {t.hero.ctaExplore}
                  <ArrowRightIcon
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
                <button className="px-8 py-4 border-2 border-primary text-primary rounded-sm font-semibold text-base hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  {t.hero.ctaQuote}
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
