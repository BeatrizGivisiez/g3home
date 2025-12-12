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
      <div className="relative z-10 w-full h-full flex flex-col">
        {/* Compact Header */}
        <div className="flex items-center justify-between px-6 md:px-8 pt-3 pb-1">
          <div>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-background">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-primary hover:bg-accent transition-colors"
            aria-label="Fechar galeria"
          >
            <XIcon size={20} className="text-primary-foreground" weight="bold" />
          </button>
        </div>

        {/* Compact Info */}
        <div className="px-6 md:px-8 py-2">
          <p className="text-background/70 text-xs leading-snug mb-2">
            {project.description}
          </p>

          {/* Project Details - Compact Single Row */}
          <div className="flex items-center justify-between gap-3 text-xs flex-wrap">
            <div className="flex items-center gap-1.5">
              <MapPinIcon size={14} className="text-primary" />
              <span className="text-background">{project.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CalendarIcon size={14} className="text-primary" />
              <span className="text-background">{project.year}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <RulerIcon size={14} className="text-primary" />
              <span className="text-background">{project.area}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <HouseLineIcon size={14} className="text-primary" />
              <span className="text-background">{project.purpose}</span>
            </div>
          </div>
        </div>

        {/* Image Container */}
        <div className="flex-1 flex items-center justify-center px-4 md:px-8 pb-6">
            <div className="relative w-full max-w-7xl h-[70vh] md:h-[75vh] bg-muted/10 rounded-lg overflow-hidden flex items-center justify-center">
              <Image
                src={project.gallery[currentImageIndex]}
                alt={`${project.title} - Imagem ${currentImageIndex + 1}`}
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
        </div>

        {/* Side Navigation Arrows */}
        {currentImageIndex > 0 && (
          <button
            onClick={onPrevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-primary hover:bg-accent transition-all hover:scale-110 z-20"
            aria-label="Imagem anterior"
          >
            <CaretLeftIcon size={28} className="text-primary-foreground" weight="bold" />
          </button>
        )}
        
        {currentImageIndex < project.gallery.length - 1 && (
          <button
            onClick={onNextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-primary hover:bg-accent transition-all hover:scale-110 z-20"
            aria-label="Próxima imagem"
          >
            <CaretRightIcon size={28} className="text-primary-foreground" weight="bold" />
          </button>
        )}

        {/* Image Counter - Bottom Center */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-foreground/80 backdrop-blur-sm rounded-full">
          <div className="text-background font-medium text-sm">
            {currentImageIndex + 1} / {project.gallery.length}
          </div>
        </div>
      </div>
    </div>
  );
}
