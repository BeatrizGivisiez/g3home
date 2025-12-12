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
        <div className="flex-1 flex items-center justify-center px-6 md:px-8 pb-24">
            <div className="relative w-full max-w-7xl h-[75vh] bg-muted/10 rounded-lg overflow-hidden flex items-center justify-center">
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

        {/* Navigation Controls - Fixed Bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-foreground/90 to-transparent">
          <div className="flex items-center gap-4 max-w-7xl mx-auto">
              {/* Previous Button */}
              <button
                onClick={onPrevImage}
                disabled={currentImageIndex === 0}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-primary hover:bg-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0"
                aria-label="Imagem anterior"
              >
                <CaretLeftIcon size={20} className="text-primary-foreground" weight="bold" />
              </button>

              {/* Image Counter & Thumbnails */}
              <div className="flex-1 flex flex-col items-center gap-3">
                <div className="text-background/90 font-medium text-sm">
                  {currentImageIndex + 1} / {project.gallery.length}
                </div>
                
                {/* Thumbnail Navigation */}
                <div className="flex gap-2 overflow-x-auto scrollbar-hide">
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
                      className={`relative w-16 h-16 flex-shrink-0 rounded-sm overflow-hidden border-2 transition-all ${
                        index === currentImageIndex
                          ? "border-primary scale-105"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img}
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
                className="w-10 h-10 flex items-center justify-center rounded-full bg-primary hover:bg-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0"
                aria-label="Próxima imagem"
              >
                <CaretRightIcon size={20} className="text-primary-foreground" weight="bold" />
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}
