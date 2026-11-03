"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Compass,
  Volume2,
  VolumeX,
  ChevronRight,
  ChevronLeft,
  MapPin,
  Sparkles,
  Calendar,
} from "lucide-react";
import Image from "next/image";

interface VirtualTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAdmissionModal: () => void;
}

const tourLocations = [
  {
    id: "quad",
    name: "The Great Quadrangle & Heritage Clocktower",
    desc: "The spiritual heart of BMSS Academy. Century-old oaks and classical Gothic-Renaissance architecture providing tranquil spaces for philosophical debate.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop",
    audioAmbient: "Birdsong & Cathedral Chimes",
    highlights: ["Historic 1988 Cornerstone", "Centenary Oak Grove", "Acoustic Reflection Walk"],
  },
  {
    id: "robotics",
    name: "The Da Vinci AI & Robotics Hangar",
    desc: "10,000 square feet of industrial innovation. Housing autonomous drone cages, NVIDIA AI computing clusters, and high-precision CNC routers.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop",
    audioAmbient: "High-tech Servo & Motor Humming",
    highlights: ["VEX Championship Arena", "12 Industrial 3D Printers", "LiDAR Testing Cell"],
  },
  {
    id: "aquatics",
    name: "FINA Olympic 50m Aquatic Complex",
    desc: "10-lane all-weather temperature-controlled Olympic racing pool with underwater motion-capture cameras and ozone purification.",
    image: "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?q=80&w=1200&auto=format&fit=crop",
    audioAmbient: "Crisp Water Lapping & Echoes",
    highlights: ["FINA Certified Timing", "Ozone Zero-Chemical Purification", "800-Seat Covered Gallery"],
  },
  {
    id: "library",
    name: "The Alexandria 4-Story Central Library",
    desc: "75,000 physical volumes, rare manuscript collections, and global digital journal databases in a serene, natural-light glass atrium.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop",
    audioAmbient: "Gentle Whisper of Pages & Chimes",
    highlights: ["JSTOR & Oxford Digital Access", "Silent Scholar Carrels", "Rare Manuscript Vault"],
  },
];

export default function VirtualTourModal({
  isOpen,
  onClose,
  onOpenAdmissionModal,
}: VirtualTourModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(false);

  if (!isOpen) return null;

  const current = tourLocations[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === tourLocations.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? tourLocations.length - 1 : prev - 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-5xl bg-[#060E1A] rounded-3xl border border-amber-500/40 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
      >
        {/* Top Bar */}
        <div className="p-4 sm:p-6 bg-[#081325] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center justify-center">
              <Compass className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white font-serif-title">
                  Interactive Campus 360° Walkthrough
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-400 text-slate-950 uppercase">
                  45-Acre Sanctuary
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Stop {currentIndex + 1} of {tourLocations.length} &bull; {current.name}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white border border-slate-700 flex items-center gap-1.5 text-xs font-medium cursor-pointer"
              title={soundEnabled ? "Mute ambient audio" : "Enable ambient audio"}
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="w-4 h-4 text-emerald-400" />
                  <span className="hidden sm:inline text-emerald-400 text-[11px]">Audio On</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-slate-500" />
                  <span className="hidden sm:inline text-slate-400 text-[11px]">Audio Off</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white border border-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Viewport & Scene */}
        <div className="relative flex-1 min-h-[380px] sm:min-h-[440px] bg-black">
          <Image
            src={current.image}
            alt={current.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060E1A] via-transparent to-black/30" />

          {/* Location Badges on Scene */}
          <div className="absolute top-6 left-6 px-3.5 py-1.5 rounded-full bg-[#060E1A]/85 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs font-semibold flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>{current.name}</span>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white border border-slate-700 backdrop-blur-md cursor-pointer transition-colors"
            aria-label="Previous stop"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white border border-slate-700 backdrop-blur-md cursor-pointer transition-colors"
            aria-label="Next stop"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scene Description Card */}
          <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#081325]/90 backdrop-blur-md border border-amber-500/30 text-white max-w-3xl">
            <h4 className="text-xl font-bold font-serif-title text-amber-200 mb-2">
              {current.name}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-4">
              {current.desc}
            </p>

            <div className="flex flex-wrap items-center gap-2">
              {current.highlights.map((h) => (
                <span
                  key={h}
                  className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-700 text-[11px] text-amber-300 font-medium"
                >
                  &bull; {h}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Tour Strip */}
        <div className="p-4 sm:p-5 bg-[#081325] border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            {tourLocations.map((loc, idx) => (
              <button
                key={loc.id}
                onClick={() => setCurrentIndex(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  currentIndex === idx
                    ? "bg-amber-400 text-slate-950 font-bold"
                    : "bg-slate-800 text-slate-300 hover:text-white"
                }`}
              >
                {loc.name.split(" ")[1] || loc.name.split(" ")[0]}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={() => {
                onClose();
                onOpenAdmissionModal();
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-300 to-amber-500 hover:from-amber-400 hover:to-amber-600 transition-all cursor-pointer font-sans"
            >
              Book In-Person Physical Tour &rarr;
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

