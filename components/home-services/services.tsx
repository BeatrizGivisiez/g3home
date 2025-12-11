"use client";

import { timelineSteps, lsfWallLayers } from "./constants";
import HouseCatalog from "./house-catalog";

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 px-6 bg-muted/20">
      {/* Decorative line */}
      <div className="absolute top-1/4 left-1/4 w-0.5 h-24 bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0" />

      <div className="max-w-6xl mx-auto space-y-24">
        {/* Timeline Section */}
        <div>
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <p className="text-sm font-medium text-primary uppercase tracking-widest">
              Como Funciona
            </p>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground">
              Mapa do{" "}
              <span className="text-primary italic">Processo de Compra</span>
            </h2>
            <div className="flex justify-center pt-4">
              <div className="w-16 h-1 bg-primary/60 rounded-full" />
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line - Hidden on mobile */}
            <div className="hidden md:block absolute top-[4.5rem] left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

            {/* Timeline Steps */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
              {timelineSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.id} className="relative flex flex-col items-center text-center">
                    {/* Icon Circle */}
                    <div className="relative z-10 w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-4 shadow-lg">
                      <Icon size={32} className="text-primary-foreground" weight="duotone" />
                    </div>

                    {/* Step Number */}
                    <span className="text-sm font-bold text-primary mb-2">
                      {step.number} Etapa
                    </span>

                    {/* Title */}
                    <h3 className="text-base font-semibold text-foreground mb-2 px-2">
                      {step.title}
                    </h3>

                    {/* Description */}
                    {step.description && (
                      <p className="text-sm text-muted-foreground px-2">
                        {step.description}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* LSF Wall Section */}
        <div>
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <p className="text-sm font-medium text-primary uppercase tracking-widest">
              Tecnologia Construtiva
            </p>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground">
              Paredes{" "}
              <span className="text-primary italic">Aço Leve (LSF)</span>
            </h2>
            <div className="flex justify-center pt-4">
              <div className="w-16 h-1 bg-primary/60 rounded-full" />
            </div>
          </div>

          {/* LSF Wall Layers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lsfWallLayers.map((layer, index) => {
              const Icon = layer.icon;
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
                      {layer.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {layer.description}
                  </p>

                  {/* Hover line effect */}
                  <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary via-primary to-transparent w-0 group-hover:w-full transition-all duration-300" />
                </div>
              );
            })}
          </div>
        </div>

        {/* House Catalog Section */}
        <div className="pt-12">
          <HouseCatalog />
        </div>
      </div>
    </section>
  );
}
