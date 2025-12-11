"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
  XIcon,
  CaretLeftIcon,
  CaretRightIcon,
  MapPinIcon,
  CalendarIcon,
  RulerIcon,
  HouseLineIcon,
} from "@phosphor-icons/react/dist/ssr";
import type { Project } from "./constants";

interface ProjectGalleryModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
  currentImageIndex: number;
  onNextImage: () => void;
  onPrevImage: () => void;
}

export default function ProjectGalleryModal({
  project,
  isOpen,
  onClose,
  currentImageIndex,
  onNextImage,
  onPrevImage,
}: ProjectGalleryModalProps) {
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Navigate with arrow keys
  useEffect(() => {
    const handleArrows = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") onPrevImage();
      if (e.key === "ArrowRight") onNextImage();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleArrows);
    }
    return () => window.removeEventListener("keydown", handleArrows);
  }, [isOpen, onNextImage, onPrevImage]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/95 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative z-10 w-full h-full flex flex-col overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 md:p-8 flex-shrink-0">
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-background">
              {project.title}
            </h3>
            <p className="text-sm text-background/70 mt-1">
              {project.category === "Aço" ? "LSF" : project.category}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-primary hover:bg-accent transition-colors flex-shrink-0"
            aria-label="Fechar galeria"
          >
            <XIcon size={24} className="text-primary-foreground" weight="bold" />
          </button>
        </div>

        {/* Project Info */}
        <div className="px-6 md:px-8 pb-6 flex-shrink-0">
          <p className="text-background/80 text-base leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex items-start gap-2 md:col-span-2">
              <MapPinIcon size={18} className="text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-background/60 uppercase tracking-wider">
                  Localização
                </p>
                <p className="text-sm font-medium text-background">
                  {project.location}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2 md:col-span-2">
              <CalendarIcon size={18} className="text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-background/60 uppercase tracking-wider">
                  Ano
                </p>
                <p className="text-sm font-medium text-background">{project.year}</p>
              </div>
            </div>
            <div className="flex items-start gap-2 md:col-span-1">
              <RulerIcon size={18} className="text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-background/60 uppercase tracking-wider">
                  Área
                </p>
                <p className="text-sm font-medium text-background">{project.area}</p>
              </div>
            </div>
            <div className="flex items-start gap-2 md:col-span-3">
              <HouseLineIcon size={18} className="text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-background/60 uppercase tracking-wider">
                  Finalidade
                </p>
                <p className="text-sm font-medium text-background">
                  {project.purpose}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-6 md:mx-8 h-px bg-background/20 mb-6" />

        {/* Image Container */}
        <div className="flex-1 flex items-center justify-center px-4 md:px-16 pb-24 min-h-[400px]">
          <div className="relative w-full max-w-6xl aspect-[16/10] bg-muted/10 rounded-lg overflow-hidden">
            <Image
              src={project.gallery[currentImageIndex] || "/placeholder.svg"}
              alt={`${project.title} - Imagem ${currentImageIndex + 1}`}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex items-center justify-between">
          {/* Previous Button */}
          <button
            onClick={onPrevImage}
            disabled={currentImageIndex === 0}
            className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-primary hover:bg-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Imagem anterior"
          >
            <CaretLeftIcon size={24} className="text-primary-foreground" weight="bold" />
          </button>

          {/* Image Counter & Thumbnails */}
          <div className="flex flex-col items-center gap-4">
            <div className="text-background/90 font-medium">
              {currentImageIndex + 1} / {project.gallery.length}
            </div>
            
            {/* Thumbnail Navigation */}
            <div className="flex gap-2 overflow-x-auto max-w-md">
              {project.gallery.map((img, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const diff = index - currentImageIndex;
                    if (diff > 0) {
                      for (let i = 0; i < diff; i++) onNextImage();
                    } else if (diff < 0) {
                      for (let i = 0; i < Math.abs(diff); i++) onPrevImage();
                    }
                  }}
                  className={`relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-sm overflow-hidden border-2 transition-all ${
                    index === currentImageIndex
                      ? "border-primary scale-110"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`Miniatura ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={onNextImage}
            disabled={currentImageIndex === project.gallery.length - 1}
            className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-primary hover:bg-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Próxima imagem"
          >
            <CaretRightIcon size={24} className="text-primary-foreground" weight="bold" />
          </button>
        </div>
      </div>
    </div>
  );
}
