"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Sparkles,
  ArrowRight,
  Play,
  ShieldCheck,
  Award,
  ChevronDown,
  Globe2,
} from "lucide-react";
import Image from "next/image";
import StatsCounter from "./StatsCounter";
import { heroStats } from "@/data/schoolData";

interface HeroProps {
  onOpenAdmissionModal: () => void;
  onOpenVirtualTour: () => void;
}

export default function Hero({ onOpenAdmissionModal, onOpenVirtualTour }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-16 overflow-hidden bg-[#050D1A]">
      {/* Background Photography with Sophisticated Cinematic Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
          alt="BMSS Historic Collegiate Campus Quadrangle"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30 mix-blend-luminosity scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
        />
        {/* Navy & Gold Depth Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050D1A] via-[#050D1A]/80 to-[#050D1A]/60" />
        <div className="absolute inset-0 bg-radial-[circle_at_center] from-transparent via-[#050D1A]/50 to-[#050D1A]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12">
        <div className="max-w-4xl">
          {/* Prestige Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-md shadow-lg shadow-black/50"
          >
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Ranked #1 Day-cum-Boarding International Academy</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
          </motion.div>

          {/* Main Monumental Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white font-serif-title tracking-tight leading-[1.1] mb-6"
          >
            Inspiring Minds. <br />
            <span className="gold-gradient-text">Shaping Character.</span> <br />
            Igniting Brilliance.
          </motion.h1>

          {/* Subtitle / Value Proposition */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300 max-w-2xl font-light leading-relaxed mb-8"
          >
            A distinguished co-educational institution committed to academic mastery,
            moral leadership, and global readiness. Preparing visionary scholars for the
            world&apos;s most prestigious universities on an iconic 45-acre smart campus.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14"
          >
            <button
              onClick={onOpenAdmissionModal}
              className="px-8 py-4 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-600 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-3 font-sans group"
            >
              <GraduationCap className="w-5 h-5 text-slate-950" />
              <span>Apply for Admissions 2025–26</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenVirtualTour}
              className="px-7 py-4 rounded-xl text-sm font-semibold text-slate-100 hover:text-white bg-[#0A192F]/80 hover:bg-[#102A4E] border border-amber-500/25 hover:border-amber-400/60 backdrop-blur-md transition-all flex items-center justify-center gap-3 shadow-lg"
            >
              <div className="w-6 h-6 rounded-full bg-amber-400/20 flex items-center justify-center text-amber-300">
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </div>
              <span>Experience Campus Virtual Tour</span>
            </button>
          </motion.div>

          {/* Key Badges Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-wrap items-center gap-6 text-xs text-slate-400 border-t border-slate-800/80 pt-6"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Dual CAIE & CBSE Pathway</span>
            </div>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-amber-400" />
              <span>Global Alumni in 38+ Nations</span>
            </div>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Full STEM & Performing Arts Conservatory</span>
            </div>
          </motion.div>
        </div>

        {/* Animated Statistics Ribbon */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {heroStats.map((stat, idx) => (
            <StatsCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              description={stat.description}
              delay={0.15 * idx}
            />
          ))}
        </div>
      </div>

      {/* Downward indicator */}
      <div className="relative z-10 flex justify-center mt-6">
        <a
          href="#about"
          className="flex flex-col items-center text-slate-400 hover:text-amber-400 transition-colors text-xs font-medium tracking-widest uppercase gap-1"
        >
          <span>Explore Academy</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-amber-400" />
        </a>
      </div>
    </section>
  );
}

