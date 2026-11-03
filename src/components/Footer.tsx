"use client";

import Link from "next/link";
import {
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  ArrowRight,
  GraduationCap,
  Globe,
} from "lucide-react";
import { schoolInfo } from "@/data/schoolData";

interface FooterProps {
  onOpenAdmissionModal: () => void;
}

export default function Footer({ onOpenAdmissionModal }: FooterProps) {
  return (
    <footer className="bg-[#040810] text-slate-300 pt-20 pb-12 border-t border-amber-500/20 relative overflow-hidden">
      {/* Top subtle gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
          {/* Brand & Crest Pillar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 via-amber-600 to-[#102A4E] p-[1.5px] shadow-lg">
                <div className="w-full h-full bg-[#081325] rounded-[10px] flex items-center justify-center border border-amber-400/20">
                  <span className="font-crest text-amber-400 font-bold text-base tracking-wider">
                    BMSS
                  </span>
                </div>
              </div>
              <div>
                <span className="text-xl font-bold text-white font-serif-title block">
                  BMSS International Academy
                </span>
                <span className="text-xs text-amber-400 font-semibold tracking-wider uppercase">
                  Est. 1988 &bull; California Campus
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
              A citadel of classical scholarship and cutting-edge discovery. Dedicated to
              cultivating ethical intellect, creative resilience, and world-shaping leadership
              across generations.
            </p>

            <div className="p-4 rounded-xl bg-[#081325] border border-amber-500/20 text-xs text-amber-200/90 font-serif-title italic">
              &ldquo;{schoolInfo.mottoLatin}&rdquo; &mdash; {schoolInfo.mottoEnglish}
            </div>

            {/* Direct Contact info */}
            <div className="space-y-2 text-xs text-slate-400 pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{schoolInfo.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`tel:${schoolInfo.phone}`}
                  className="hover:text-amber-300 transition-colors"
                >
                  {schoolInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`mailto:${schoolInfo.admissionsEmail}`}
                  className="hover:text-amber-300 transition-colors"
                >
                  {schoolInfo.admissionsEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links: Academics */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-sans">
              Academics
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#academics" className="hover:text-amber-300 transition-colors">
                  Early Foundation (Ages 3–5)
                </a>
              </li>
              <li>
                <a href="#academics" className="hover:text-amber-300 transition-colors">
                  Primary Academy (Grades 1–5)
                </a>
              </li>
              <li>
                <a href="#academics" className="hover:text-amber-300 transition-colors">
                  Middle School (Grades 6–8)
                </a>
              </li>
              <li>
                <a href="#academics" className="hover:text-amber-300 transition-colors">
                  Senior High (Grades 9–12)
                </a>
              </li>
              <li>
                <a href="#academics" className="hover:text-amber-300 transition-colors">
                  Cambridge International
                </a>
              </li>
              <li>
                <a href="#academics" className="hover:text-amber-300 transition-colors">
                  CBSE Senior Secondary
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links: Admissions */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-sans">
              Admissions
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={onOpenAdmissionModal}
                  className="hover:text-amber-300 transition-colors text-left cursor-pointer"
                >
                  Apply for 2025–26
                </button>
              </li>
              <li>
                <a href="#admissions" className="hover:text-amber-300 transition-colors">
                  Admission Timeline
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-300 transition-colors">
                  Book Campus Walkthrough
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-300 transition-colors">
                  Scholarships & Bursaries
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-300 transition-colors">
                  International Student Visas
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-300 transition-colors">
                  Tuition & Fee Structure
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter & Governance */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-sans">
              The BMSS Academic Dispatch
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Receive quarterly educational insights, lecture series invitations, and admission
              cycle announcements directly from our Deanery.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you. You have been subscribed to the BMSS Academic Dispatch.");
              }}
              className="flex gap-2"
            >
              <input
                type="email"
                required
                placeholder="Enter parent email address"
                className="w-full px-4 py-2.5 rounded-xl bg-[#081325] border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs hover:bg-amber-300 transition-colors shrink-0 cursor-pointer"
              >
                Subscribe
              </button>
            </form>

            <div className="pt-3 border-t border-slate-800/80">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Accreditations & Affiliations
              </span>
              <div className="flex flex-wrap gap-2 text-[10px] text-amber-300/80">
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                  Cambridge International (CAIE)
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                  CBSE Board
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                  CIS Accredited
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                  IB World Candidate
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} BMSS International Academy. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-slate-300 transition-colors">
              Privacy Shield
            </a>
            <a href="#about" className="hover:text-slate-300 transition-colors">
              Terms of Enrollment
            </a>
            <a href="#about" className="hover:text-slate-300 transition-colors">
              Safeguarding Policy
            </a>
            <a href="#about" className="hover:text-slate-300 transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

