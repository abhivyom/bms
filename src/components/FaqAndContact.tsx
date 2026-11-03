"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HelpCircle,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Sparkles,
  CheckCircle,
  Calendar,
} from "lucide-react";
import confetti from "canvas-confetti";
import { faqs, schoolInfo, FaqItem } from "@/data/schoolData";

export default function FaqAndContact() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeFaqCategory, setActiveFaqCategory] = useState<string>("All");

  // Contact / Tour Booking Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    studentGrade: "Grade 6",
    track: "Cambridge International",
    tourDate: "",
    message: "",
  });

  const categories = ["All", "Admissions", "Academics", "Campus & Safety", "Fees & Scholarships"];

  const filteredFaqs =
    activeFaqCategory === "All"
      ? faqs
      : faqs.filter((f) => f.category === activeFaqCategory);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.parentName || !formData.email || !formData.phone) {
      alert("Please fill in your name, email, and phone number.");
      return;
    }

    // Trigger celebratory confetti
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#D4AF37", "#0A192F", "#F59E0B", "#102A4E"],
    });

    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 bg-[#060E1A] relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Inquiries & Admissions Desk</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif-title tracking-tight leading-tight mb-6">
            Frequently Asked Questions & Campus Tour Booking
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed font-sans">
            Have questions about curricula, bus routes, or tuition? Review our common
            questions below or book an exclusive 1-on-1 walkthrough with our Admissions Dean.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Interactive FAQ Accordion */}
          <div className="lg:col-span-7 space-y-6">
            {/* Category filter pills */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveFaqCategory(cat);
                    setOpenFaqIndex(null);
                  }}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeFaqCategory === cat
                      ? "bg-amber-400 text-slate-950 font-bold"
                      : "bg-[#0B1A30] text-slate-300 hover:text-white border border-slate-800"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Accordion Items */}
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={faq.question}
                    className="rounded-2xl bg-[#091528] border border-amber-500/20 overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-800/40 transition-colors cursor-pointer"
                    >
                      <span className="text-sm sm:text-base font-bold text-white font-serif-title">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-5 pb-5 text-xs sm:text-sm text-slate-300 font-light font-sans leading-relaxed border-t border-slate-800/60 pt-3"
                        >
                          {faq.answer}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Direct Contact Details Box */}
            <div className="mt-10 p-6 rounded-2xl bg-[#0B1A30] border border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">
                    Direct Admissions Line
                  </div>
                  <a
                    href={`tel:${schoolInfo.phone}`}
                    className="text-xs font-bold text-white hover:text-amber-400 transition-colors"
                  >
                    {schoolInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">
                    Admissions Directorate
                  </div>
                  <a
                    href={`mailto:${schoolInfo.admissionsEmail}`}
                    className="text-xs font-bold text-white hover:text-amber-400 transition-colors"
                  >
                    {schoolInfo.admissionsEmail}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Campus Tour & Admission Inquiry Form */}
          <div className="lg:col-span-5">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#091528] border border-amber-500/30 shadow-2xl relative">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 font-sans">
                  Private Campus Experience
                </span>
                <h3 className="text-2xl font-bold font-serif-title text-white mt-1">
                  Schedule an Admissions Interaction
                </h3>
                <p className="text-xs text-slate-300 font-light mt-1">
                  Connect directly with our senior admissions counsel and tour the 45-acre grounds.
                </p>
              </div>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white font-serif-title">
                    Inquiry Received with Distinction
                  </h4>
                  <p className="text-xs text-slate-300 font-light max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong className="text-amber-300">{formData.parentName}</strong>.
                    Our Senior Dean of Admissions will contact you within 24 business hours to
                    confirm your personalized campus itinerary.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        parentName: "",
                        email: "",
                        phone: "",
                        studentGrade: "Grade 6",
                        track: "Cambridge International",
                        tourDate: "",
                        message: "",
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl text-xs font-bold bg-amber-400 text-slate-950 hover:bg-amber-300 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Parent / Guardian Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lord Marcus Sterling"
                      value={formData.parentName}
                      onChange={(e) =>
                        setFormData({ ...formData, parentName: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-[#060E1A] border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="parent@domain.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-[#060E1A] border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Contact Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-[#060E1A] border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Grade Applying For
                      </label>
                      <select
                        value={formData.studentGrade}
                        onChange={(e) =>
                          setFormData({ ...formData, studentGrade: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-[#060E1A] border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400"
                      >
                        <option value="Pre-K to Kindergarten">Pre-K & Kindergarten</option>
                        <option value="Grade 1 to 5 (Primary)">Grade 1 to 5 (Primary)</option>
                        <option value="Grade 6 to 8 (Middle)">Grade 6 to 8 (Middle)</option>
                        <option value="Grade 9 to 10 (IGCSE/CBSE)">Grade 9 to 10 (IGCSE/CBSE)</option>
                        <option value="Grade 11 to 12 (A-Levels/CBSE)">Grade 11 to 12 (A-Levels)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Academic Stream
                      </label>
                      <select
                        value={formData.track}
                        onChange={(e) =>
                          setFormData({ ...formData, track: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-[#060E1A] border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400"
                      >
                        <option value="Cambridge International (CAIE)">Cambridge International</option>
                        <option value="CBSE Senior Secondary">CBSE Senior Secondary</option>
                        <option value="Undecided / Dean Guidance">Undecided / Dean Guidance</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Preferred Tour Date (Optional)
                    </label>
                    <input
                      type="date"
                      value={formData.tourDate}
                      onChange={(e) =>
                        setFormData({ ...formData, tourDate: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-[#060E1A] border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Candidate Talents or Specific Inquiries
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your child's passions in science, music, athletics, or any questions for our faculty..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-[#060E1A] border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-600 shadow-xl shadow-amber-500/20 transition-all cursor-pointer flex items-center justify-center gap-2 font-sans"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Formal Admissions Inquiry</span>
                  </button>

                  <p className="text-[10px] text-slate-400 text-center">
                    All prospective dossiers are managed under strict FERPA & GDPR privacy protocols.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

