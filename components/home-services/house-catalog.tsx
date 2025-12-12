"use client";

import { useState, useMemo } from "react";
import { houseModels, HouseModel } from "./house-catalog-constants";
import Image from "next/image";
import {
  BedIcon,
  BathtubIcon,
  RulerIcon,
  HouseIcon,
  XIcon,
} from "@phosphor-icons/react/dist/ssr";

export default function HouseCatalog() {
  const [selectedTipologia, setSelectedTipologia] = useState<string | null>(
    null
  );
  const [selectedHouse, setSelectedHouse] = useState<HouseModel | null>(null);
  const [selectedWC, setSelectedWC] = useState<number | null>(null);
  const [selectedAreaMin, setSelectedAreaMin] = useState<number>(0);
  const [selectedAreaMax, setSelectedAreaMax] = useState<number>(403);

  // Get unique values for filters
  const tipologias = useMemo(() => {
    const unique = Array.from(new Set(houseModels.map((h) => h.tipologia)));
    return unique.sort();
  }, []);

  const wcOptions = useMemo(() => {
    const unique = Array.from(new Set(houseModels.map((h) => h.wc)));
    return unique.sort((a, b) => a - b);
  }, []);

  // Filter houses by all criteria
  const filteredHouses = useMemo(() => {
    let filtered = houseModels;

    // Filter by tipologia
    if (selectedTipologia) {
      filtered = filtered.filter((h) => h.tipologia === selectedTipologia);
    }

    // Filter by WC (single selection)
    if (selectedWC !== null) {
      filtered = filtered.filter((h) => h.wc === selectedWC);
    }

    // Filter by area (extracting number from string like "123m²")
    if (selectedAreaMin > 0 || selectedAreaMax < 403) {
      filtered = filtered.filter((h) => {
        const area = parseFloat(h.areaBrutaInterior.replace(/[^\d.]/g, ""));
        if (area < selectedAreaMin) return false;
        if (area > selectedAreaMax) return false;
        return true;
      });
    }

    return filtered;
  }, [selectedTipologia, selectedWC, selectedAreaMin, selectedAreaMax]);

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

      {/* Filters Bar */}
      <div className="mb-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          {/* Tipologia Filter */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold mb-3 uppercase tracking-wide">
              <BedIcon size={20} weight="duotone" />
              Tipologia
            </label>
            <select
              value={selectedTipologia || ""}
              onChange={(e) => setSelectedTipologia(e.target.value || null)}
              className="w-full px-4 py-3 border-2 border-border rounded-sm focus:outline-none focus:border-primary transition-colors bg-background cursor-pointer"
            >
              <option value="">Todas</option>
              {tipologias.map((tipologia) => (
                <option key={tipologia} value={tipologia}>
                  {tipologia}
                </option>
              ))}
            </select>
          </div>

          {/* WC Filter */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold mb-3 uppercase tracking-wide">
              <BathtubIcon size={20} weight="duotone" />
              WC
            </label>
            <div className="flex flex-wrap gap-2">
              {wcOptions.map((wc) => (
                <button
                  key={wc}
                  onClick={() => setSelectedWC(selectedWC === wc ? null : wc)}
                  className={`px-4 py-2 rounded-sm font-medium transition-all ${
                    selectedWC === wc
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  {wc}
                </button>
              ))}
            </div>
          </div>

          {/* Área Mínima */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold mb-3 uppercase tracking-wide">
              <RulerIcon size={20} weight="duotone" />
              Área Mín (m²)
            </label>
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium">0</span>
              <input
                type="range"
                min="0"
                max="403"
                step="5"
                value={selectedAreaMin}
                onChange={(e) => setSelectedAreaMin(Number(e.target.value))}
                className="flex-1 h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <span className="text-xs font-medium">403</span>
            </div>
            <div className="text-center mt-2 text-sm font-semibold">
              {selectedAreaMin}m²
            </div>
          </div>

          {/* Área Máxima */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold mb-3 uppercase tracking-wide">
              <RulerIcon size={20} weight="duotone" />
              Área Máx (m²)
            </label>
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium">0</span>
              <input
                type="range"
                min="0"
                max="403"
                step="5"
                value={selectedAreaMax}
                onChange={(e) => setSelectedAreaMax(Number(e.target.value))}
                className="flex-1 h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <span className="text-xs font-medium">403</span>
            </div>
            <div className="text-center mt-2 text-sm font-semibold">
              {selectedAreaMax}m²
            </div>
          </div>

          {/* Clear Filters Button */}
          <div className="flex items-end">
            <button
              onClick={() => {
                setSelectedTipologia(null);
                setSelectedWC(null);
                setSelectedAreaMin(0);
                setSelectedAreaMax(403);
              }}
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-sm font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap"
            >
              Limpar Filtros
            </button>
          </div>
        </div>
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
                      <BathtubIcon
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
                      <RulerIcon
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
              <XIcon size={24} className="text-background" weight="bold" />
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
                    ["Portland", "San Diego", "Viena", "Glasgow"].includes(
                      selectedHouse.name
                    )
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
                  <RulerIcon
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
                  <BathtubIcon
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
