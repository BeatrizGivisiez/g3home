"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowSquareOut, CaretRight } from "@phosphor-icons/react/dist/ssr";

const projects = [
  {
    id: 1,
    title: "Residência Lago",
    category: "Habitação Luxury",
    image: "/modern-luxury-house-with-wood-elements.jpg",
    description:
      "Projecto de habitação moderna com integração de elementos de madeira refinada.",
  },
  {
    id: 2,
    title: "Atelier Dourado",
    category: "Espaço Comercial",
    image: "/elegant-commercial-space-gold-accents.jpg",
    description:
      "Espaço comercial premium com acabamentos em tons dourados e marrom.",
  },
  {
    id: 3,
    title: "Villa Contemporânea",
    category: "Design Residencial",
    image: "/contemporary-villa-architecture-luxury.jpg",
    description:
      "Villa contemporânea que une tecnologia com design de interiores premium.",
  },
];

export default function ProjectSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-24 px-6 bg-muted/20">
      {/* Decorative line */}
      <div className="absolute top-1/2 right-1/4 w-0.5 h-32 bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-medium text-primary uppercase tracking-widest">
            Portfólio de Projectos
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground">
            Trabalhos que definem{" "}
            <span className="text-primary italic">tendências</span>
          </h2>
          <div className="flex justify-center pt-4">
            <div className="w-16 h-1 bg-primary/60 rounded-full" />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group fade-in-up cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden rounded-sm mb-6 bg-muted/50">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowSquareOut
                      size={32}
                      className="text-primary-foreground"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <p className="text-xs font-medium text-primary uppercase tracking-widest">
                  {project.category}
                </p>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-accent">
                  {project.title}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed pt-2">
                  {project.description}
                </p>
              </div>

              {/* Link Arrow */}
              <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-2">
                <span className="text-sm font-medium">Ver projecto</span>
                <CaretRight size={16} />
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <button className="group px-8 py-4 border-2 border-primary text-primary rounded-sm font-semibold text-base hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            Projectos com LSF
          </button>
          <button className="px-8 py-4 border-2 border-primary text-primary rounded-sm font-semibold text-base hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            Projectos Madeira
          </button>
        </div>
      </div>
    </section>
  );
}
