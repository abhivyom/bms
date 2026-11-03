"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Medal, Star, Sparkles, CheckCircle2 } from "lucide-react";
import { achievements } from "@/data/schoolData";

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold tracking-widest uppercase mb-4">
            <Trophy className="w-3.5 h-3.5 text-amber-600" />
            <span>Distinctions & Accolades</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#060E1A] font-serif-title tracking-tight leading-tight mb-6">
            Recognized Globally for Scholastic and Institutional Supremacy
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            Consistently placed among the pinnacle of international schools worldwide, our
            students and faculty redefine standards across intellectual, athletic, and
            humanitarian spheres.
          </p>
        </div>

        {/* Timeline / Card Showcase */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-amber-400 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 group"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-700 border border-amber-300/40 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
                  <Award className="w-7 h-7" />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#060E1A] text-amber-400">
                      {item.year}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                      {item.category}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs font-bold text-amber-800">
                      {item.organization}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif-title group-hover:text-amber-800 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2 font-sans leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Award Badge Pill */}
              <div className="shrink-0 self-start md:self-center">
                <div className="px-4 py-2 rounded-xl bg-amber-100/70 border border-amber-300/80 text-amber-900 text-xs font-bold tracking-wide flex items-center gap-2">
                  <Medal className="w-4 h-4 text-amber-700" />
                  <span>{item.badge}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Matriculation Honors Ribbon */}
        <div className="mt-16 p-8 rounded-3xl bg-[#060E1A] text-white border border-amber-500/30 text-center max-w-5xl mx-auto shadow-2xl">
          <div className="flex flex-col sm:flex-row items-center justify-around gap-6">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-serif-title">
                100%
              </div>
              <p className="text-xs text-slate-300 uppercase tracking-wider mt-1">
                Top Tier University Acceptance
              </p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-slate-800" />
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-serif-title">
                $14.2 Million
              </div>
              <p className="text-xs text-slate-300 uppercase tracking-wider mt-1">
                Merit Scholarships Awarded (2024 Cohort)
              </p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-slate-800" />
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-serif-title">
                48 Offers
              </div>
              <p className="text-xs text-slate-300 uppercase tracking-wider mt-1">
                Ivy League, Oxbridge & Stanford
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

