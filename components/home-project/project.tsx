"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import {
  ArrowSquareOutIcon,
  CaretRightIcon,
  MapPinIcon,
  CalendarIcon,
  RulerIcon,
  HouseLineIcon,
} from "@phosphor-icons/react/dist/ssr";
import { projects } from "./constants";
import type { Project } from "./constants";
import ProjectGalleryModal from "./project-gallery-modal";
import { useI18n } from "@/lib/i18n/context";

export default function ProjectSection() {
  const { t } = useI18n();
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [filter, setFilter] = useState<"Todos" | "Madeira" | "Aço">("Todos");

  const filteredProjects = useMemo(() => {
    if (filter === "Todos") return projects;
    return projects.filter((project) => project.constructionSystem === filter);
  }, [filter]);

  const openGallery = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (
      selectedProject &&
      currentImageIndex < selectedProject.gallery.length - 1
    ) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <section id="projects" className="relative py-24 px-6 bg-muted/20">
      {/* Decorative line */}
      <div className="absolute top-1/2 right-1/4 w-0.5 h-32 bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-medium text-primary uppercase tracking-widest">
            {t.projects.subtitle}
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground">
            {t.projects.title}{" "}
            <span className="text-primary italic">{t.projects.titleHighlight}</span>
          </h2>
          <div className="flex justify-center pt-4">
            <div className="w-16 h-1 bg-primary/60 rounded-full" />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {filteredProjects.length === 1 && <div className="hidden md:block" />}
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => openGallery(project)}
              className="group fade-in-up cursor-pointer"
            >
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-accent">
                  {project.title}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {project.description}
                </p>
                {/* Project Details */}
                <div className="grid grid-cols-4 gap-3 pt-2">
                  {/* Localização */}
                  <div className="flex items-start gap-2 col-span-3">
                    <MapPinIcon
                      size={16}
                      className="text-primary flex-shrink-0 mt-0.5"
                    />
                    <div>
                      <p className="text-xs text-muted-foreground">
                        {t.projects.location}
                      </p>
                      <p className="text-sm font-medium text-foreground">
                        {project.location}
                      </p>
                    </div>
                  </div>
                  {/* Área */}
                  <div className="flex items-start gap-2 col-span-1">
                    <RulerIcon
                      size={16}
                      className="text-primary flex-shrink-0 mt-0.5"
                    />
                    <div>
                      <p className="text-xs text-muted-foreground">{t.projects.area}</p>
                      <p className="text-sm font-medium text-foreground">
                        {project.area}
                      </p>
                    </div>
                  </div>
                  {/* Finalidade */}
                  <div className="flex items-start gap-2 col-span-3">
                    <HouseLineIcon
                      size={16}
                      className="text-primary flex-shrink-0 mt-0.5"
                    />
                    <div>
                      <p className="text-xs text-muted-foreground">
                        {t.projects.purpose}
                      </p>
                      <p className="text-sm font-medium text-foreground">
                        {project.purpose}
                      </p>
                    </div>
                  </div>
                  {/* Ano */}
                  <div className="flex items-start gap-2 col-span-1">
                    <CalendarIcon
                      size={16}
                      className="text-primary flex-shrink-0 mt-0.5"
                    />
                    <div>
                      <p className="text-xs text-muted-foreground">{t.projects.year}</p>
                      <p className="text-sm font-medium text-foreground">
                        {project.year}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden rounded-sm mb-6 bg-muted/50">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Material Ribbon - Diagonal */}
                  <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
                    <div className="absolute top-6 -right-8 w-40 bg-primary text-primary-foreground text-center py-2 shadow-lg transform rotate-45 origin-center">
                      <span className="text-xs font-bold tracking-wider uppercase">
                        {project.constructionSystem === "Aço"
                          ? "LSF"
                          : project.constructionSystem}
                      </span>
                    </div>
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowSquareOutIcon
                        size={32}
                        className="text-primary-foreground"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Filter Buttons */}
        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-12">
          <button
            onClick={() => setFilter("Todos")}
            className={`px-8 py-4 border-2 rounded-sm font-semibold text-base transition-all duration-300 ${
              filter === "Todos"
                ? "bg-primary text-primary-foreground border-primary"
                : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            }`}
          >
            Todos os Projectos
          </button>
          <button
            onClick={() => setFilter("Madeira")}
            className={`px-8 py-4 border-2 rounded-sm font-semibold text-base transition-all duration-300 ${
              filter === "Madeira"
                ? "bg-primary text-primary-foreground border-primary"
                : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            }`}
          >
            Projectos Madeira
          </button>
          <button
            onClick={() => setFilter("Aço")}
            className={`px-8 py-4 border-2 rounded-sm font-semibold text-base transition-all duration-300 ${
              filter === "Aço"
                ? "bg-primary text-primary-foreground border-primary"
                : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            }`}
          >
            Projectos com LSF
          </button>
        </div> */}
      </div>

      {/* Gallery Modal */}
      {selectedProject && (
        <ProjectGalleryModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={closeGallery}
          currentImageIndex={currentImageIndex}
          onNextImage={nextImage}
          onPrevImage={prevImage}
        />
      )}
    </section>
  );
}
