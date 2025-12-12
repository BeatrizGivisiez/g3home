"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { HouseIcon, Ruler, Bathtub, X } from "@phosphor-icons/react/dist/ssr";
import { houseModels, HouseModel } from "./house-catalog-constants";

export default function HouseCatalog() {
  const [selectedTipologia, setSelectedTipologia] = useState<string | null>(
    null
  );
  const [selectedHouse, setSelectedHouse] = useState<HouseModel | null>(null);

  // Get unique tipologias for filters
  const tipologias = useMemo(() => {
    const unique = Array.from(new Set(houseModels.map((h) => h.tipologia)));
    return unique.sort();
  }, []);

  // Filter houses by selected tipologia
  const filteredHouses = useMemo(() => {
    if (!selectedTipologia) return houseModels;
    return houseModels.filter((h) => h.tipologia === selectedTipologia);
  }, [selectedTipologia]);

  return (
    <div>
      {/* Section Header */}
      <div className="text-center mb-12 space-y-4">
        <p className="text-sm font-medium text-primary uppercase tracking-widest">
          Catálogo de Modelos
        </p>
        <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground">
          Escolha o seu{" "}
          <span className="text-primary italic">modelo ideal</span>
        </h2>
        <div className="flex justify-center pt-4">
          <div className="w-16 h-1 bg-primary/60 rounded-full" />
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        <button
          onClick={() => setSelectedTipologia(null)}
          className={`px-6 py-3 rounded-sm font-semibold text-sm transition-all duration-300 ${
            selectedTipologia === null
              ? "bg-primary text-primary-foreground border-2 border-primary"
              : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          }`}
        >
          Todos
        </button>
        {tipologias.map((tipologia) => (
          <button
            key={tipologia}
            onClick={() => setSelectedTipologia(tipologia)}
            className={`px-6 py-3 rounded-sm font-semibold text-sm transition-all duration-300 ${
              selectedTipologia === tipologia
                ? "bg-primary text-primary-foreground border-2 border-primary"
                : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            }`}
          >
            {tipologia}
          </button>
        ))}
      </div>

      {/* Horizontal Scrollable Cards */}
      <div className="relative">
        {/* Gradient overlay on right to show more content */}
        <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-muted/20 to-transparent pointer-events-none z-10 hidden md:block" />

        <div className="overflow-x-auto scrollbar-hide pb-4">
          <div className="flex gap-6 px-2" style={{ width: "max-content" }}>
            {filteredHouses.map((house) => (
              <div
                key={house.id}
                onClick={() => setSelectedHouse(house)}
                className="group relative bg-card border border-border/50 rounded-sm overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-lg cursor-pointer"
                style={{ width: "320px", minWidth: "320px" }}
              >
                {/* Image */}
                <div className="relative h-48 bg-muted/50 overflow-hidden">
                  <Image
                    src={house.image}
                    alt={house.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Tipologia Badge */}
                  <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-sm text-xs font-bold">
                    {house.tipologia}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-4">
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground line-accent">
                    {house.name}
                  </h3>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {/* Área Bruta Interior */}
                    <div className="flex items-start gap-2">
                      <HouseIcon
                        size={18}
                        className="text-primary flex-shrink-0 mt-0.5"
                        weight="duotone"
                      />
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Área Bruta Interior
                        </p>
                        <p className="text-sm font-semibold text-foreground">
                          {house.areaBrutaInterior}
                        </p>
                      </div>
                    </div>

                    {/* WC */}
                    <div className="flex items-start gap-2">
                      <Bathtub
                        size={18}
                        className="text-primary flex-shrink-0 mt-0.5"
                        weight="duotone"
                      />
                      <div>
                        <p className="text-xs text-muted-foreground">WC</p>
                        <p className="text-sm font-semibold text-foreground">
                          {house.wc}
                        </p>
                      </div>
                    </div>

                    {/* Área Total */}
                    <div className="flex items-start gap-2 col-span-2">
                      <Ruler
                        size={18}
                        className="text-primary flex-shrink-0 mt-0.5"
                        weight="duotone"
                      />
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Área Total
                        </p>
                        <p className="text-sm font-semibold text-foreground">
                          {house.areaTotal}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover line effect */}
                <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary via-primary to-transparent w-0 group-hover:w-full transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint text */}
      <p className="text-center text-sm text-muted-foreground mt-4">
        Deslize para ver mais modelos →
      </p>

      {/* House Detail Modal */}
      {selectedHouse && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedHouse(null)}
        >
          <div
            className="bg-card rounded-sm max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedHouse(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-foreground/80 hover:bg-foreground flex items-center justify-center transition-colors"
            >
              <X size={24} className="text-background" weight="bold" />
            </button>

            {/* Modal Content */}
            <div className="p-8">
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-2">
                  <h2 className="text-3xl font-serif font-bold text-foreground">
                    {selectedHouse.name}
                  </h2>
                  <span className="px-3 py-1 bg-primary text-primary-foreground rounded-sm text-sm font-bold">
                    {selectedHouse.tipologia}
                  </span>
                </div>
              </div>

              {/* Image */}
              <div className="relative w-full h-[500px] mb-6 rounded-sm overflow-hidden bg-muted/50">
                <Image
                  src={selectedHouse.image}
                  alt={selectedHouse.name}
                  fill
                  className={`object-contain ${
                    // Rotate landscape-oriented floor plans
                    ["Portland", "San Diego", "Viena", "Glasgow"].includes(selectedHouse.name)
                      ? "rotate-90"
                      : ""
                  }`}
                />
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex items-start gap-3">
                  <HouseIcon
                    size={24}
                    className="text-primary flex-shrink-0 mt-1"
                    weight="duotone"
                  />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Área Bruta Interior
                    </p>
                    <p className="text-lg font-semibold text-foreground">
                      {selectedHouse.areaBrutaInterior}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Ruler
                    size={24}
                    className="text-primary flex-shrink-0 mt-1"
                    weight="duotone"
                  />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Área Total
                    </p>
                    <p className="text-lg font-semibold text-foreground">
                      {selectedHouse.areaTotal}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Bathtub
                    size={24}
                    className="text-primary flex-shrink-0 mt-1"
                    weight="duotone"
                  />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">WC</p>
                    <p className="text-lg font-semibold text-foreground">
                      {selectedHouse.wc}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <HouseIcon
                    size={24}
                    className="text-primary flex-shrink-0 mt-1"
                    weight="duotone"
                  />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Tipologia
                    </p>
                    <p className="text-lg font-semibold text-foreground">
                      {selectedHouse.tipologia}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
