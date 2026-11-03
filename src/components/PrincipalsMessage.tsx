"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Quote, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { principalData } from "@/data/schoolData";

interface PrincipalsMessageProps {
  onOpenAdmissionModal: () => void;
}

export default function PrincipalsMessage({ onOpenAdmissionModal }: PrincipalsMessageProps) {
  return (
    <section id="principal" className="py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Principal Portrait & Formal Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 max-w-md mx-auto">
              <div className="relative h-[480px] sm:h-[540px] w-full">
                <Image
                  src={principalData.portrait}
                  alt={principalData.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060E1A] via-transparent to-transparent opacity-85" />
              </div>

              {/* Title Plate */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-amber-300 shadow-xl">
                <h3 className="text-xl font-bold text-slate-900 font-serif-title">
                  {principalData.name}
                </h3>
                <p className="text-xs font-bold text-amber-700 uppercase tracking-wider mt-0.5">
                  {principalData.title}
                </p>
                <p className="text-[11px] text-slate-500 font-medium mt-1 leading-snug">
                  {principalData.qualifications}
                </p>
                <div className="mt-2 pt-2 border-t border-slate-200 flex items-center gap-1.5 text-[11px] font-semibold text-slate-700">
                  <Award className="w-3.5 h-3.5 text-amber-600" />
                  <span>{principalData.honor}</span>
                </div>
              </div>
            </div>

            {/* Stately Crest Seal */}
            <div className="hidden sm:flex absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-[#060E1A] text-amber-400 border-2 border-amber-400/50 shadow-2xl items-center justify-center p-3 text-center">
              <div className="text-[9px] font-bold tracking-widest uppercase font-crest">
                Seal of Principal
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Letter */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-800 text-xs font-bold tracking-widest uppercase">
              <GraduationCap className="w-3.5 h-3.5 text-amber-600" />
              <span>Head of School Address</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#060E1A] font-serif-title tracking-tight leading-tight">
              &ldquo;Where Ancient Virtues Meet the Frontier Challenges of Tomorrow&rdquo;
            </h2>

            {/* Highlighted Quote Callout */}
            <div className="p-5 rounded-2xl bg-amber-50/70 border-l-4 border-amber-500 text-slate-800 italic font-serif-title text-base sm:text-lg leading-relaxed">
              {principalData.quote}
            </div>

            {/* Letter Paragraphs */}
            <div className="space-y-4 text-slate-600 font-sans leading-relaxed text-sm sm:text-base">
              {principalData.messageParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Signature & Credentials */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <div className="font-serif-title text-2xl font-bold text-slate-900 italic tracking-wider">
                  Alistair Sterling
                </div>
                <div className="text-xs text-slate-500 mt-1 font-medium">
                  Head of School &bull; BMSS International Academy
                </div>
              </div>

              <button
                onClick={onOpenAdmissionModal}
                className="px-6 py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-300 to-amber-500 hover:from-amber-400 hover:to-amber-600 shadow-md transition-all self-start sm:self-auto cursor-pointer"
              >
                Schedule Meeting with Leadership
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

