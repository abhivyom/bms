"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  HeartHandshake,
  Palette,
  Trees,
  BookOpenCheck,
  Cpu,
  Compass,
  Microscope,
  Languages,
  Trophy,
  Award,
  Briefcase,
  Flame,
} from "lucide-react";
import Image from "next/image";
import { academicPrograms, AcademicLevel } from "@/data/schoolData";

const iconLibrary: Record<string, React.ElementType> = {
  HeartHandshake,
  Palette,
  Trees,
  BookOpenCheck,
  Cpu,
  Compass,
  Microscope,
  Languages,
  Trophy,
  Award,
  Briefcase,
  Flame,
};

interface AcademicProgramsProps {
  onOpenAdmissionModal: () => void;
}

export default function AcademicPrograms({ onOpenAdmissionModal }: AcademicProgramsProps) {
  const [activeTab, setActiveTab] = useState<string>(academicPrograms[0].id);

  const currentProgram =
    academicPrograms.find((p) => p.id === activeTab) || academicPrograms[0];

  return (
    <section id="academics" className="py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold tracking-widest uppercase mb-4">
            <GraduationCap className="w-3.5 h-3.5 text-amber-700" />
            <span>Academic Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#060E1A] font-serif-title tracking-tight leading-tight mb-6">
            Progressive Curricula Tailored to Every Stage of Human Growth
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            Our multi-tiered pedagogical framework ensures seamless academic continuity,
            progressing from play-based inquiry to university-level research.
          </p>
        </div>

        {/* Tab Navigation Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-14">
          {academicPrograms.map((program) => {
            const isActive = program.id === activeTab;
            return (
              <button
                key={program.id}
                onClick={() => setActiveTab(program.id)}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer flex items-center gap-2 font-sans ${
                  isActive
                    ? "bg-[#060E1A] text-white shadow-xl shadow-[#060E1A]/20 scale-105 border-b-2 border-amber-400"
                    : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 shadow-sm"
                }`}
              >
                <span>{program.title}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                    isActive
                      ? "bg-amber-400 text-slate-950"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {program.grades}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProgram.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl border border-slate-200/80"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Visual & Badges */}
              <div className="lg:col-span-5 relative">
                <div className="relative h-[340px] sm:h-[420px] rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                  <Image
                    src={currentProgram.image}
                    alt={currentProgram.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060E1A]/80 via-transparent to-transparent" />

                  {/* Overlaid Badge */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#060E1A]/90 backdrop-blur-md border border-amber-400/30 text-white">
                    <div className="flex items-center justify-between text-xs text-amber-300 font-semibold mb-1">
                      <span>{currentProgram.ageGroup}</span>
                      <span>{currentProgram.grades}</span>
                    </div>
                    <div className="text-sm font-bold text-slate-100 font-serif-title">
                      {currentProgram.curriculum}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Detailed Program Overview */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-bold text-amber-600 tracking-wider uppercase font-sans">
                    {currentProgram.subtitle}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-[#060E1A] font-serif-title mt-1 mb-4">
                    {currentProgram.title}
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed font-sans">
                    {currentProgram.overview}
                  </p>
                </div>

                {/* Key Highlights Checklist */}
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                    Curriculum Benchmarks:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentProgram.highlights.map((item) => (
                      <div key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-medium text-slate-700">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specialized Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                  {currentProgram.features.map((feat) => {
                    const IconComp = iconLibrary[feat.iconName] || BookOpen;
                    return (
                      <div
                        key={feat.title}
                        className="p-3.5 rounded-xl bg-slate-50 border border-slate-200"
                      >
                        <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-amber-700 flex items-center justify-center mb-2">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <h5 className="text-xs font-bold text-slate-900 mb-1">
                          {feat.title}
                        </h5>
                        <p className="text-[11px] text-slate-500 leading-snug">
                          {feat.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom CTA for program */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={onOpenAdmissionModal}
                    className="px-6 py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-300 to-amber-500 hover:from-amber-400 hover:to-amber-600 shadow-md transition-all flex items-center gap-2 cursor-pointer font-sans"
                  >
                    <span>Inquire About {currentProgram.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href="#contact"
                    className="text-xs font-semibold text-slate-600 hover:text-slate-900 underline underline-offset-4"
                  >
                    Download Detailed Academic Syllabus &rarr;
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

