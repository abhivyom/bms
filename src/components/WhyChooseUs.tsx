"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Cpu,
  Trophy,
  HeartHandshake,
  GraduationCap,
  Leaf,
  Globe2,
  CheckCircle,
} from "lucide-react";

export default function WhyChooseUs() {
  const differentiators = [
    {
      icon: GraduationCap,
      title: "Ivy League & Oxbridge Advisory",
      description:
        "Every senior scholar receives dedicated 1-on-1 mentorship from former admissions officers, ensuring early-action acceptances and competitive merit scholarships.",
      badge: "100% Top 100 Offers",
    },
    {
      icon: Cpu,
      title: "Frontier AI & Robotics Hub",
      description:
        "From autonomous drones to generative AI models and VEX robotics arenas, students engage with high-level industrial engineering from Middle School.",
      badge: "Industry Standard",
    },
    {
      icon: Trophy,
      title: "Olympic-Grade Athletic Facilities",
      description:
        "FINA regulation 50m aquatic center, IAAF certified 8-lane running track, FIFA turf pitches, and certified national coaches building champions.",
      badge: "National Champions",
    },
    {
      icon: HeartHandshake,
      title: "Intimate 12:1 Faculty Mentorship",
      description:
        "We maintain low classroom density to ensure every child's intellectual curiosities, emotional well-being, and individual passions are actively nurtured.",
      badge: "Personalized Focus",
    },
    {
      icon: Globe2,
      title: "Global Pedagogy & MUN Delegations",
      description:
        "Active exchanges with sister academies in Geneva, Oxford, and Tokyo, cultivating multicultural agility and diplomatic eloquence.",
      badge: "38+ Nationalities",
    },
    {
      icon: Leaf,
      title: "45-Acre Platinum Net-Zero Campus",
      description:
        "A pristine botanical sanctuary powered by 100% solar energy, zero single-use plastics, and organic farm-to-table dining facilities.",
      badge: "UNESCO Green Award",
    },
  ];

  return (
    <section id="why-choose-us" className="py-28 bg-[#060E1A] relative overflow-hidden">
      {/* Decorative Grid & Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>The BMSS Distinction</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif-title tracking-tight leading-tight mb-6">
            Why Discerning Families Entrust Us With Their Children&apos;s Future
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed font-sans">
            In an era of rapid technological disruption, BMSS blends classical scholarship
            with frontier innovation—equipping scholars to lead with character and competence.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((diff, idx) => {
            const Icon = diff.icon;
            return (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative p-8 rounded-3xl bg-[#0B1A30]/80 border border-amber-500/20 hover:border-amber-400/60 backdrop-blur-md transition-all duration-300 group hover:-translate-y-2 shadow-2xl shadow-black/50"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/15 text-amber-400 border border-amber-500/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-slate-950 transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-slate-800 text-amber-300 border border-amber-500/20">
                    {diff.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 font-serif-title group-hover:text-amber-200 transition-colors">
                  {diff.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-sans font-light">
                  {diff.description}
                </p>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-amber-400 group-hover:text-amber-300">
                  <CheckCircle className="w-4 h-4" />
                  <span>Standard at BMSS Academy</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

