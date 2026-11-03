"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import AcademicPrograms from "@/components/AcademicPrograms";
import CampusFacilities from "@/components/CampusFacilities";
import AchievementsSection from "@/components/AchievementsSection";
import StudentLifeGallery from "@/components/StudentLifeGallery";
import PrincipalsMessage from "@/components/PrincipalsMessage";
import ParentTestimonials from "@/components/ParentTestimonials";
import AdmissionProcess from "@/components/AdmissionProcess";
import FaqAndContact from "@/components/FaqAndContact";
import Footer from "@/components/Footer";
import AdmissionModal from "@/components/AdmissionModal";
import VirtualTourModal from "@/components/VirtualTourModal";

export default function Home() {
  const [admissionModalOpen, setAdmissionModalOpen] = useState(false);
  const [virtualTourOpen, setVirtualTourOpen] = useState(false);

  const openAdmissionModal = () => setAdmissionModalOpen(true);
  const closeAdmissionModal = () => setAdmissionModalOpen(false);

  const openVirtualTour = () => setVirtualTourOpen(true);
  const closeVirtualTour = () => setVirtualTourOpen(false);

  return (
    <div className="min-h-screen bg-[#050D1A] text-slate-100 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* 1. Sticky Navigation Bar */}
      <Navbar onOpenAdmissionModal={openAdmissionModal} />

      <main className="flex-1">
        {/* 2. Full-screen Hero with Powerful Headline & Animated Statistics */}
        <Hero
          onOpenAdmissionModal={openAdmissionModal}
          onOpenVirtualTour={openVirtualTour}
        />

        {/* 3. About Our School & Core Values */}
        <AboutSection />

        {/* 4. Why Choose Us / Key Differentiators */}
        <WhyChooseUs />

        {/* 5. Academic Programs (Early Childhood, Primary, Middle, Senior) */}
        <AcademicPrograms onOpenAdmissionModal={openAdmissionModal} />

        {/* 6. Campus Facilities & State-of-the-Art Precincts */}
        <CampusFacilities />

        {/* 7. Achievements, Accreditations & Global Rankings */}
        <AchievementsSection />

        {/* 8. Student Life, Co-Curriculars & Photo Gallery */}
        <StudentLifeGallery />

        {/* 9. Principal's Address & Philosophical Foundation */}
        <PrincipalsMessage onOpenAdmissionModal={openAdmissionModal} />

        {/* 10. Parent Testimonials & Community Voices */}
        <ParentTestimonials />

        {/* 11. Admission Process (4-Step Pathway & Calendar) */}
        <AdmissionProcess onOpenAdmissionModal={openAdmissionModal} />

        {/* 12. FAQ & Private Tour Scheduling / Contact */}
        <FaqAndContact />
      </main>

      {/* 13. Premium Footer with Latin Motto & Accreditations */}
      <Footer onOpenAdmissionModal={openAdmissionModal} />

      {/* Interactive Modals */}
      <AdmissionModal
        isOpen={admissionModalOpen}
        onClose={closeAdmissionModal}
      />

      <VirtualTourModal
        isOpen={virtualTourOpen}
        onClose={closeVirtualTour}
        onOpenAdmissionModal={() => {
          closeVirtualTour();
          openAdmissionModal();
        }}
      />
    </div>
  );
}
