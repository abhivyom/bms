"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  ShieldCheck,
  Globe,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Users,
  Compass,
} from "lucide-react";
import Image from "next/image";
import { coreValues } from "@/data/schoolData";

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  ShieldCheck,
  Globe,
  Sparkles,
};

export default function AboutSection() {
  return (
    <section id="about" className="py-28 bg-white relative overflow-hidden">
      {/* Decorative background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-800 text-xs font-bold tracking-widest uppercase mb-4">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            <span>About Our School &bull; Heritage &amp; Philosophy</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#060E1A] font-serif-title tracking-tight leading-tight mb-6">
            A Legacy of Rigor, Cultivating Leaders for a Complex World
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed font-sans">
            Founded in 1988, BMSS International Academy was created with a transformative
            conviction: that world-class academic scholarship must be intimately bound
            with timeless ethical integrity, aesthetic sensibility, and humane service.
          </p>
        </div>

        {/* Two-Column Grid: Image Mosaic & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Column: Visual Composition with Layered Badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <div className="relative h-[420px] sm:h-[480px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
                  alt="BMSS Scholars collaborating in the grand quadrangle"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060E1A]/80 via-transparent to-transparent" />
              </div>

              {/* Floating Quote in image */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-amber-200">
                <p className="text-sm italic text-slate-800 font-serif-title leading-relaxed">
                  &ldquo;We cultivate thinkers who lead not by dominance, but by deep
                  understanding, moral poise, and creative resilience.&rdquo;
                </p>
                <div className="mt-2 text-[11px] font-bold text-amber-700 tracking-wider uppercase font-sans">
                  The BMSS Founding Charter
                </div>
              </div>
            </div>

            {/* Overlapping Floating Milestone Card */}
            <div className="hidden sm:flex absolute -top-6 -right-6 p-5 rounded-2xl bg-[#0A192F] text-white shadow-2xl border border-amber-400/30 flex-col items-center justify-center text-center max-w-[160px]">
              <span className="text-3xl font-extrabold text-amber-400 font-serif-title">
                36+
              </span>
              <span className="text-xs font-semibold tracking-wide uppercase text-slate-200 mt-1">
                Years of Distinctive Excellence
              </span>
            </div>
          </div>

          {/* Right Column: In-depth narrative & feature pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div className="prose prose-slate max-w-none text-slate-600 space-y-4 leading-relaxed font-sans">
              <p>
                Over three and a half decades, BMSS has evolved from a visionary day school
                into an internationally acclaimed pre-university citadel. Situated across
                a tranquil 45-acre sanctuary, the academy provides students with the
                space to breathe, contemplate, innovate, and test their limits.
              </p>
              <p>
                Our dual Cambridge International and CBSE curriculum guarantees that every
                student develops analytical mastery in the sciences, conceptual command
                in mathematics, eloquence in the humanities, and expressive grace in the
                fine arts.
              </p>
            </div>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                "Dual CAIE & CBSE Global Accreditations",
                "100% University Placement Record",
                "Dedicated Oxbridge & Ivy Advisory Cell",
                "Faculty Mentorship Ratio of 12:1",
                "Over 40 Co-curricular Societies",
                "Zero Carbon Eco-Campus Recognition",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-800 font-sans">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Vision & Mission Badges */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">
                  Our Vision
                </h4>
                <p className="text-xs text-slate-600 leading-normal">
                  To be the global benchmark for transformative secondary education,
                  graduating visionary thinkers who elevate humanity.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">
                  Our Mission
                </h4>
                <p className="text-xs text-slate-600 leading-normal">
                  Nurturing intellectual fearlessness, empathetic character, and global
                  fluency through rigorous multidisciplinary scholarship.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Quadrant */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#060E1A] font-serif-title">
              Our Non-Negotiable Core Values
            </h3>
            <p className="text-sm text-slate-500 mt-2 font-sans">
              The four unshakeable pillars underpinning every lecture, lab experiment, and
              athletic competition at BMSS.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const IconComp = iconMap[val.icon] || GraduationCap;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-400 hover:bg-white hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center mb-5 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2 font-serif-title group-hover:text-amber-800 transition-colors">
                    {val.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {val.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
