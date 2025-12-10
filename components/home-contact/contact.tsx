"use client";

import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { contactContent, ctaButtons, contactInfo } from "./constants";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-foreground text-background overflow-hidden"
    >
      {/* Decorative background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255, 255, 255, 0.1) 10px,
            rgba(255, 255, 255, 0.1) 20px
          )`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        {/* Section Header */}
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-background text-balance">
            {contactContent.title}{" "}
            <span className="text-primary italic">
              {contactContent.titleHighlight}
            </span>
            ?
          </h2>
          <p className="text-lg text-background/80 max-w-2xl mx-auto leading-relaxed text-balance">
            {contactContent.description}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          {ctaButtons.map((button) => (
            <button
              key={button.label}
              className={`group px-8 py-4 rounded-sm font-semibold text-base transition-all duration-300 ${
                button.primary
                  ? "bg-primary text-primary-foreground hover:shadow-lg flex items-center gap-2"
                  : "border-2 border-background text-background hover:bg-background/10"
              }`}
            >
              {button.label}
              {button.primary && (
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              )}
            </button>
          ))}
        </div>

        {/* Contact Info */}
        <div className="pt-8 border-t border-background/20 mt-8 flex flex-col sm:flex-row justify-center gap-8 text-sm">
          <div>
            <p className="text-background/60 mb-1">{contactInfo.email.label}</p>
            <a
              href={contactInfo.email.href}
              className="font-semibold hover:text-primary transition-colors"
            >
              {contactInfo.email.value}
            </a>
          </div>
          <div>
            <p className="text-background/60 mb-1">{contactInfo.phone.label}</p>
            <a
              href={contactInfo.phone.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-primary transition-colors"
            >
              {contactInfo.phone.value}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
