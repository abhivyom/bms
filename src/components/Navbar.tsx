"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Phone,
  Calendar,
  Sparkles,
  ChevronDown,
  GraduationCap,
  Shield,
  BookOpen,
  MapPin,
} from "lucide-react";
import { schoolInfo } from "@/data/schoolData";

interface NavbarProps {
  onOpenAdmissionModal: () => void;
}

export default function Navbar({ onOpenAdmissionModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Why BMSS", href: "#why-choose-us" },
    { label: "Academics", href: "#academics" },
    { label: "Campus", href: "#facilities" },
    { label: "Achievements", href: "#achievements" },
    { label: "Student Life", href: "#student-life" },
    { label: "Leadership", href: "#principal" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Admissions", href: "#admissions" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Banner Bar */}
      {announcementVisible && (
        <div className="bg-[#050D1A] border-b border-amber-500/20 text-slate-200 text-xs py-2 px-4 transition-all">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                <Sparkles className="w-3 h-3 mr-1 animate-pulse" /> ADMISSIONS 2025–26
              </span>
              <span className="hidden md:inline text-slate-300">
                Early decision applications now open for Cambridge & CBSE cohorts.
              </span>
              <button
                onClick={onOpenAdmissionModal}
                className="underline hover:text-amber-300 font-medium transition-colors ml-1 cursor-pointer"
              >
                Apply Online &rarr;
              </button>
            </div>

            <div className="flex items-center gap-4 text-[11px] text-slate-300">
              <a
                href={`tel:${schoolInfo.phone}`}
                className="flex items-center gap-1 hover:text-amber-300 transition-colors"
              >
                <Phone className="w-3 h-3 text-amber-400" />
                <span>{schoolInfo.phone}</span>
              </a>
              <span className="text-slate-600 hidden sm:inline">|</span>
              <span className="hidden sm:inline-flex items-center gap-1 text-slate-400">
                <MapPin className="w-3 h-3 text-amber-400" /> Academic Grove, CA
              </span>
              <button
                onClick={() => setAnnouncementVisible(false)}
                className="text-slate-500 hover:text-slate-300 ml-2"
                aria-label="Close notification"
              >
                &times;
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-[#060E1A]/95 backdrop-blur-md shadow-2xl py-3 border-b border-amber-500/15"
            : "bg-[#060E1A]/85 backdrop-blur-sm py-4 border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* School Crest & Logo */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-amber-400 via-amber-600 to-[#102A4E] p-[1.5px] shadow-lg shadow-amber-500/10 group-hover:shadow-amber-500/30 transition-shadow">
              <div className="w-full h-full bg-[#081325] rounded-[10px] flex items-center justify-center border border-amber-400/20">
                <div className="text-center">
                  <span className="font-crest text-amber-400 font-bold text-base tracking-wider block leading-none">
                    BMSS
                  </span>
                  <span className="text-[7px] tracking-widest text-slate-300 uppercase font-sans">
                    Est. 1988
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-amber-200 transition-colors font-serif-title">
                  BMSS
                </span>
                <span className="text-xs sm:text-sm font-semibold tracking-wider text-amber-400 uppercase">
                  International Academy
                </span>
              </div>
              <p className="text-[10px] text-slate-400 tracking-wider uppercase font-medium">
                {schoolInfo.mottoLatin}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 hover:text-amber-300 transition-colors duration-200 text-xs font-semibold uppercase tracking-wider group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-amber-400 to-amber-200 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#admissions"
              className="px-4 py-2 rounded-lg text-xs font-medium text-slate-200 hover:text-white border border-slate-700 hover:border-amber-400/50 bg-slate-800/40 hover:bg-slate-800/70 transition-all flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>Campus Tour</span>
            </a>

            <button
              onClick={onOpenAdmissionModal}
              className="px-5 py-2.5 rounded-lg text-xs font-semibold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-600 shadow-md shadow-amber-500/20 hover:shadow-amber-500/40 transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-1.5 font-sans"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Apply for 2025–26</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenAdmissionModal}
              className="px-3 py-1.5 text-xs font-semibold rounded bg-amber-400 text-slate-950"
            >
              Apply
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800/80 text-slate-200 hover:text-white border border-slate-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#060E1A] border-b border-amber-500/20 px-6 py-6 transition-all duration-300 shadow-2xl">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-200 hover:text-amber-400 text-sm font-semibold tracking-wide uppercase py-1 border-b border-slate-800/60"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAdmissionModal();
                  }}
                  className="w-full py-3 rounded-lg text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-300 to-amber-500 flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Start Admission Application</span>
                </button>

                <a
                  href={`tel:${schoolInfo.phone}`}
                  className="w-full py-2.5 rounded-lg text-xs font-medium text-slate-300 bg-slate-800/80 border border-slate-700 flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call Admissions: {schoolInfo.phone}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

