"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  Maximize2,
  X,
  Compass,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { studentLifeGallery, GalleryItem } from "@/data/schoolData";

export default function StudentLifeGallery() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filterTabs = ["All", "Campus Life", "Academics", "Athletics", "Arts"];

  const filteredGallery =
    activeFilter === "All"
      ? studentLifeGallery
      : studentLifeGallery.filter((item) => item.category === activeFilter);

  return (
    <section id="student-life" className="py-28 bg-[#060E1A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">
              <Camera className="w-3.5 h-3.5" />
              <span>Campus Pulse & Co-Curriculars</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif-title tracking-tight leading-tight">
              Life at BMSS: Where Passion Meets Purpose Every Day
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  activeFilter === tab
                    ? "bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-400/20"
                    : "bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredGallery.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                onClick={() => setActiveItem(item)}
                className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer bg-[#0A192F] border border-amber-500/20 hover:border-amber-400/60 shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060E1A] via-[#060E1A]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#060E1A]/85 backdrop-blur-md text-[10px] font-bold tracking-wider uppercase text-amber-400 border border-amber-500/30">
                  {item.category}
                </div>

                <div className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-4 h-4 text-amber-300" />
                </div>

                {/* Caption Text */}
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-base font-bold text-white font-serif-title mb-1.5 group-hover:text-amber-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-light line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Co-Curricular Guilds Ribbon */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { name: "Model UN", count: "140+ Delegates" },
            { name: "Robotics Guild", count: "VEX & FIRST" },
            { name: "Symphony Orchestra", count: "65 Musicians" },
            { name: "Equestrian Club", count: "Royal Stables" },
            { name: "Debate Union", count: "National Finalists" },
            { name: "Astronomy Society", count: "Observatory Access" },
          ].map((club) => (
            <div
              key={club.name}
              className="p-4 rounded-2xl bg-[#0B1A30] border border-slate-800 text-center hover:border-amber-400/50 transition-colors"
            >
              <h4 className="text-sm font-bold text-white font-serif-title">
                {club.name}
              </h4>
              <p className="text-[11px] text-amber-400 font-medium mt-0.5">
                {club.count}
              </p>
            </div>
          ))}
        </div>

        {/* Modal Preview */}
        {activeItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setActiveItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-[#091528] rounded-3xl border border-amber-500/40 overflow-hidden shadow-2xl text-white"
            >
              <div className="relative h-96 w-full">
                <Image
                  src={activeItem.image}
                  alt={activeItem.title}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => setActiveItem(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/70 text-white hover:text-amber-400 border border-slate-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8">
                <div className="inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase mb-2 border border-amber-500/30">
                  {activeItem.category}
                </div>
                <h3 className="text-2xl font-bold font-serif-title text-amber-200 mb-2">
                  {activeItem.title}
                </h3>
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  {activeItem.caption}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}

