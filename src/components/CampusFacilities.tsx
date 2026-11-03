"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  CheckCircle,
  Eye,
  Maximize2,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { campusFacilities, FacilityItem } from "@/data/schoolData";

export default function CampusFacilities() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedFacility, setSelectedFacility] = useState<FacilityItem | null>(null);

  const categories = ["All", "Academics", "Sports", "Arts & Culture"];

  const filteredFacilities =
    activeCategory === "All"
      ? campusFacilities
      : campusFacilities.filter((f) => f.category === activeCategory);

  return (
    <section id="facilities" className="py-28 bg-[#050D1A] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">
              <Building2 className="w-3.5 h-3.5" />
              <span>Estate & Infrastructure</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif-title tracking-tight leading-tight">
              An Architectural Sanctuary Designed for Limitless Discovery
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-400/20"
                    : "bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredFacilities.map((facility, idx) => (
              <motion.div
                key={facility.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative rounded-3xl overflow-hidden bg-[#0A192F] border border-amber-500/20 hover:border-amber-400/60 shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
              >
                {/* Facility Image Container */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={facility.image}
                    alt={facility.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/30 to-transparent" />

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#060E1A]/85 backdrop-blur-md text-[10px] font-bold tracking-wider uppercase text-amber-400 border border-amber-500/30">
                    {facility.category}
                  </div>

                  <button
                    onClick={() => setSelectedFacility(facility)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-slate-200 hover:text-amber-400 border border-slate-700 backdrop-blur-md transition-colors cursor-pointer"
                    aria-label={`View ${facility.name} details`}
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 font-serif-title group-hover:text-amber-200 transition-colors">
                      {facility.name}
                    </h3>
                    <p className="text-xs text-slate-300 font-light leading-relaxed mb-4">
                      {facility.shortDesc}
                    </p>
                  </div>

                  {/* Specs Chips */}
                  <div className="space-y-2 pt-4 border-t border-slate-800">
                    {facility.specs.slice(0, 2).map((spec) => (
                      <div
                        key={spec}
                        className="flex items-center gap-2 text-[11px] text-amber-300/90 font-medium"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span className="truncate">{spec}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 pt-3">
                    <button
                      onClick={() => setSelectedFacility(facility)}
                      className="text-xs font-bold text-amber-400 group-hover:text-amber-300 flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Explore Technical Specs</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal for Detailed Facility Specs */}
        {selectedFacility && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-[#091528] rounded-3xl border border-amber-500/40 p-6 sm:p-8 shadow-2xl text-white overflow-hidden"
            >
              <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-6">
                <Image
                  src={selectedFacility.image}
                  alt={selectedFacility.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091528] to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 text-xs font-bold uppercase text-amber-400 border border-amber-500/40">
                  {selectedFacility.category}
                </span>
              </div>

              <h3 className="text-2xl font-bold font-serif-title text-amber-200 mb-2">
                {selectedFacility.name}
              </h3>
              <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                {selectedFacility.fullDesc}
              </p>

              <div className="bg-[#050D1A] rounded-2xl p-4 border border-slate-800 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                  Technical Specifications & Regulatory Approvals
                </h4>
                <div className="space-y-2">
                  {selectedFacility.specs.map((spec) => (
                    <div
                      key={spec}
                      className="flex items-center gap-2 text-xs text-slate-200"
                    >
                      <CheckCircle className="w-4 h-4 text-amber-400" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setSelectedFacility(null)}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold bg-amber-400 text-slate-950 hover:bg-amber-500 transition-colors cursor-pointer"
                >
                  Close Inspection
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}

