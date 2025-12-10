"use client";

import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import { partners } from "./constants";

export default function PartnersSection() {
  return (
    <section
      id="partners"
      className="py-24 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-medium text-primary uppercase tracking-widest">
            Parceiros do Grupo G3
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground">
            Excelência em diferentes{" "}
            <span className="text-primary italic">setores</span>
          </h2>
          <div className="flex justify-center pt-4">
            <div className="w-16 h-1 bg-primary/60 rounded-full" />
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <a
              key={partner.domain}
              href={`https://${partner.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative bg-card rounded-lg p-8 hover-lift border border-border hover:border-primary/40 transition-all duration-500 h-full flex flex-col items-center text-center">
                {/* Logo and Name - Side by side like menu */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-500">
                    <span className="text-primary-foreground font-montserrat font-extrabold text-2xl">
                      G3
                    </span>
                  </div>
                  <span className="font-montserrat text-4xl font-extrabold text-foreground">
                    {partner.name}
                  </span>
                </div>

                {/* Domain with external link icon */}
                <p className="text-primary font-medium text-base mb-4 group-hover:text-accent transition-colors duration-300 flex items-center gap-2">
                  {partner.domain}
                  <ArrowSquareOut
                    size={18}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    weight="bold"
                  />
                </p>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {partner.description}
                </p>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </a>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16 fade-in-up">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada parceiro mantém a identidade G3 de qualidade e compromisso
          </p>
        </div>
      </div>
    </section>
  );
}
