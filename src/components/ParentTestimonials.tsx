"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, HeartHandshake } from "lucide-react";
import Image from "next/image";
import { testimonials } from "@/data/schoolData";

export default function ParentTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-28 bg-[#050D1A] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Community Voices</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif-title tracking-tight leading-tight mb-6">
            Reflections From Our Discerning Family Community
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed font-sans">
            Hear directly from diplomats, surgeons, corporate leaders, and scientists whose
            children have realized their fullest potential at BMSS Academy.
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 sm:p-14 rounded-3xl bg-[#091528] border border-amber-500/30 shadow-2xl backdrop-blur-md">
            <Quote className="absolute top-8 right-8 sm:top-12 sm:right-12 w-16 h-16 sm:w-20 sm:h-20 text-amber-500/10 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                {/* Star Rating */}
                <div className="flex items-center gap-1.5">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-amber-400 fill-amber-400"
                    />
                  ))}
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-widest ml-3">
                    {current.year}
                  </span>
                </div>

                {/* Quote Body */}
                <p className="text-lg sm:text-2xl text-slate-100 font-serif-title italic leading-relaxed">
                  &ldquo;{current.quote}&rdquo;
                </p>

                {/* Parent Profile */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-amber-400/60 shadow-lg">
                    <Image
                      src={current.avatar}
                      alt={current.parentName}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white font-serif-title">
                      {current.parentName}
                    </h4>
                    <p className="text-xs text-amber-300/90 font-medium">
                      {current.designation}
                    </p>
                    <p className="text-[11px] text-slate-400 font-sans mt-0.5">
                      {current.studentInfo}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-800/80">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      i === currentIndex
                        ? "w-8 bg-amber-400"
                        : "w-2 bg-slate-700 hover:bg-slate-500"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors border border-slate-700 cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-full bg-amber-400 text-slate-950 hover:bg-amber-300 transition-colors cursor-pointer font-bold"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

