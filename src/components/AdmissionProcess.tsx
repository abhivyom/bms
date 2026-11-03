"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Compass,
  Brain,
  CheckCircle2,
  Calendar,
  Download,
  GraduationCap,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { admissionSteps } from "@/data/schoolData";

const iconMap: Record<string, React.ElementType> = {
  FileText,
  Compass,
  Brain,
  CheckCircle2,
};

interface AdmissionProcessProps {
  onOpenAdmissionModal: () => void;
}

export default function AdmissionProcess({ onOpenAdmissionModal }: AdmissionProcessProps) {
  return (
    <section id="admissions" className="py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold tracking-widest uppercase mb-4">
            <GraduationCap className="w-3.5 h-3.5 text-amber-600" />
            <span>Admissions 2025–26</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#060E1A] font-serif-title tracking-tight leading-tight mb-6">
            A Transparent Four-Stage Journey to Enrollment
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            Our admissions committee seeks inquisitive minds, ethical character, and
            enthusiastic learners who will contribute vibrantly to our global scholar body.
          </p>
        </div>

        {/* 4-Step Pathway Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative mb-16">
          {admissionSteps.map((step, idx) => {
            const Icon = iconMap[step.icon] || FileText;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-amber-400 hover:bg-white hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold text-amber-600 font-serif-title">
                      {step.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-700 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <span className="inline-block text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 mb-3">
                    {step.timeline}
                  </span>

                  <h3 className="text-xl font-bold text-slate-900 font-serif-title mb-3 group-hover:text-amber-800 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-1.5 text-xs font-semibold text-amber-700">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Personalized Advisory</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Key Dates Banner & Action Callout */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#060E1A] text-white border border-amber-500/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Calendar className="w-4 h-4" />
              <span>Admissions Cycle Deadlines: Academic Year 2025–26</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif-title text-white">
              Early Round Applications Close December 15, 2025
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light max-w-xl">
              Limited seats allocated per grade. We encourage prospective families to schedule
              their campus discovery walkthrough early.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <button
              onClick={onOpenAdmissionModal}
              className="px-8 py-4 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-300 to-amber-500 hover:from-amber-400 hover:to-amber-600 shadow-xl transition-all cursor-pointer font-sans"
            >
              Start Online Application
            </button>

            <a
              href="#contact"
              className="px-6 py-4 rounded-xl text-xs font-semibold text-slate-200 hover:text-white border border-slate-700 hover:border-amber-400 bg-slate-800/80 transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-amber-400" />
              <span>Download 2025 Prospectus (PDF)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

