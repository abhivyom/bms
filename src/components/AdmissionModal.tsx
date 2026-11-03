"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  GraduationCap,
  Sparkles,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  User,
  Mail,
  Phone,
  FileCheck,
} from "lucide-react";
import confetti from "canvas-confetti";

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdmissionModal({ isOpen, onClose }: AdmissionModalProps) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    studentName: "",
    dob: "",
    gender: "Male",
    currentSchool: "",
    gradeApplying: "Grade 7",
    track: "Cambridge International",
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    relationship: "Mother",
    address: "",
    specialAptitude: "STEM & Robotics",
    scholarshipConsideration: "Yes",
    additionalNotes: "",
  });

  if (!isOpen) return null;

  const handleNext = () => {
    if (step === 1 && (!formData.studentName || !formData.dob)) {
      alert("Please provide the candidate's full name and date of birth.");
      return;
    }
    if (step === 2 && (!formData.parentName || !formData.parentEmail || !formData.parentPhone)) {
      alert("Please provide the parent/guardian name, email, and contact number.");
      return;
    }
    setStep((prev) => prev + 1);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.5 },
      colors: ["#D4AF37", "#0A192F", "#F59E0B", "#102A4E", "#FFFFFF"],
    });
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-2xl bg-[#091528] rounded-3xl border border-amber-500/40 p-6 sm:p-10 shadow-2xl text-white overflow-hidden"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/30 flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-serif-title text-white">
                Formal Application for Admission
              </h3>
              <p className="text-xs text-amber-300 font-medium">
                Academic Year 2025–26 &bull; BMSS International Academy
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 border-2 border-emerald-500/40 flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>

            <h4 className="text-2xl font-bold font-serif-title text-white">
              Application Dossier Successfully Submitted
            </h4>

            <p className="text-xs sm:text-sm text-slate-300 font-light max-w-md mx-auto leading-relaxed">
              Candidate <strong className="text-amber-300">{formData.studentName}</strong> has been
              registered for <strong>{formData.gradeApplying}</strong> ({formData.track}).
            </p>

            <div className="p-4 rounded-2xl bg-[#060E1A] border border-amber-500/20 max-w-sm mx-auto text-xs text-slate-300">
              <div className="font-semibold text-amber-400 mb-1">
                Application Tracking ID: #BMSS-2025-{Math.floor(100000 + Math.random() * 900000)}
              </div>
              <div>An official confirmation dossier has been dispatched to {formData.parentEmail}.</div>
            </div>

            <button
              onClick={handleReset}
              className="mt-6 px-8 py-3 rounded-xl text-xs font-bold bg-amber-400 text-slate-950 hover:bg-amber-300 transition-colors"
            >
              Return to Website
            </button>
          </div>
        ) : (
          <div className="pt-6">
            {/* Step Indicators */}
            <div className="flex items-center justify-between mb-8 max-w-md mx-auto text-xs">
              {[
                { s: 1, label: "Candidate" },
                { s: 2, label: "Guardian" },
                { s: 3, label: "Academics" },
              ].map((item) => (
                <div key={item.s} className="flex items-center gap-2">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-bold ${
                      step >= item.s
                        ? "bg-amber-400 text-slate-950"
                        : "bg-slate-800 text-slate-500 border border-slate-700"
                    }`}
                  >
                    {item.s}
                  </div>
                  <span
                    className={`font-semibold ${
                      step >= item.s ? "text-amber-300" : "text-slate-500"
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Form Steps */}
            <form onSubmit={handleFinalSubmit}>
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Candidate Full Name (as per Passport / Birth Certificate) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Julian Alexander Thorne"
                      value={formData.studentName}
                      onChange={(e) =>
                        setFormData({ ...formData, studentName: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-[#060E1A] border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.dob}
                        onChange={(e) =>
                          setFormData({ ...formData, dob: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-[#060E1A] border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Gender
                      </label>
                      <select
                        value={formData.gender}
                        onChange={(e) =>
                          setFormData({ ...formData, gender: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-[#060E1A] border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Non-binary / Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Current School & Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Oakridge Preparatory, London / Mumbai / New York"
                      value={formData.currentSchool}
                      onChange={(e) =>
                        setFormData({ ...formData, currentSchool: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-[#060E1A] border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Guardian Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ambassador Marcus Thorne"
                        value={formData.parentName}
                        onChange={(e) =>
                          setFormData({ ...formData, parentName: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-[#060E1A] border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Relationship
                      </label>
                      <select
                        value={formData.relationship}
                        onChange={(e) =>
                          setFormData({ ...formData, relationship: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-[#060E1A] border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400"
                      >
                        <option value="Mother">Mother</option>
                        <option value="Father">Father</option>
                        <option value="Legal Guardian">Legal Guardian</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Primary Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="guardian@domain.com"
                        value={formData.parentEmail}
                        onChange={(e) =>
                          setFormData({ ...formData, parentEmail: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-[#060E1A] border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Phone Number with Country Code *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 234-5678"
                        value={formData.parentPhone}
                        onChange={(e) =>
                          setFormData({ ...formData, parentPhone: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-[#060E1A] border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Residential Address / City
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Palo Alto, CA or International Residence"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-[#060E1A] border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Grade Applying For
                      </label>
                      <select
                        value={formData.gradeApplying}
                        onChange={(e) =>
                          setFormData({ ...formData, gradeApplying: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-[#060E1A] border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400"
                      >
                        <option value="Pre-K Foundation">Pre-K Foundation</option>
                        <option value="Kindergarten">Kindergarten</option>
                        <option value="Grade 1 to 5 (Primary)">Grade 1 to 5 (Primary)</option>
                        <option value="Grade 6 to 8 (Middle)">Grade 6 to 8 (Middle)</option>
                        <option value="Grade 9 to 10 (IGCSE/CBSE)">Grade 9 to 10 (IGCSE/CBSE)</option>
                        <option value="Grade 11 to 12 (A-Levels/CBSE)">Grade 11 to 12 (A-Levels)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Accredited Curriculum Preference
                      </label>
                      <select
                        value={formData.track}
                        onChange={(e) =>
                          setFormData({ ...formData, track: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-[#060E1A] border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400"
                      >
                        <option value="Cambridge International (CAIE)">Cambridge International (CAIE)</option>
                        <option value="CBSE Senior Secondary">CBSE Senior Secondary</option>
                        <option value="Dean Consultation Track">Dean Consultation Track</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Candidate Primary Aptitude / Focus
                      </label>
                      <select
                        value={formData.specialAptitude}
                        onChange={(e) =>
                          setFormData({ ...formData, specialAptitude: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-[#060E1A] border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400"
                      >
                        <option value="STEM & Advanced Computing">STEM & Advanced Computing</option>
                        <option value="Debating & International Relations">Debating & International Relations</option>
                        <option value="Olympic Athletics & Sports">Olympic Athletics & Sports</option>
                        <option value="Orchestral Music & Fine Arts">Orchestral Music & Fine Arts</option>
                        <option value="Multidisciplinary General Scholar">Multidisciplinary General Scholar</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Request Sterling Merit Scholarship Review?
                      </label>
                      <select
                        value={formData.scholarshipConsideration}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            scholarshipConsideration: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-[#060E1A] border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400"
                      >
                        <option value="Yes">Yes &mdash; Evaluate for Merit Scholarship</option>
                        <option value="No">No &mdash; Standard Enrollment</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Academic Honors / Special Accommodations
                    </label>
                    <textarea
                      rows={2}
                      placeholder="List any Olympiad awards, musical distinctions, or specific aspirations..."
                      value={formData.additionalNotes}
                      onChange={(e) =>
                        setFormData({ ...formData, additionalNotes: e.target.value })
                      }
                      className="w-full px-4 py-2 rounded-xl bg-[#060E1A] border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400 resize-none"
                    />
                  </div>
                </motion.div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-800">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep((prev) => prev - 1)}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 border border-slate-700 flex items-center gap-1.5 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Previous</span>
                  </button>
                ) : (
                  <div />
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Proceed to Step {step + 1}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-7 py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-600 shadow-lg shadow-amber-500/25 flex items-center gap-2 cursor-pointer font-sans"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Submit Formal Application</span>
                  </button>
                )}
              </div>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
}

