export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface AcademicLevel {
  id: string;
  title: string;
  subtitle: string;
  ageGroup: string;
  grades: string;
  curriculum: string;
  image: string;
  overview: string;
  highlights: string[];
  features: {
    iconName: string;
    title: string;
    desc: string;
  }[];
}

export interface FacilityItem {
  id: string;
  category: "Academics" | "Sports" | "Arts & Culture" | "Living & Wellness";
  name: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  specs: string[];
}

export interface AchievementItem {
  year: string;
  title: string;
  category: string;
  organization: string;
  badge: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Academics" | "Athletics" | "Arts" | "Campus Life";
  image: string;
  caption: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  parentName: string;
  designation: string;
  studentInfo: string;
  avatar: string;
  rating: number;
  year: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: "Admissions" | "Academics" | "Campus & Safety" | "Fees & Scholarships";
}

export const schoolInfo = {
  name: "BMSS International Academy",
  shortName: "BMSS Academy",
  mottoLatin: "Sapientia, Virtus et Excellentia",
  mottoEnglish: "Wisdom, Character & Excellence",
  established: 1988,
  phone: "+1 (800) 267-7890",
  admissionsEmail: "admissions@bmss.edu",
  generalEmail: "info@bmss.edu",
  address: "740 Heritage Boulevard, Academic Grove, CA 94025",
  accreditations: [
    "Cambridge Assessment International Education (CAIE)",
    "Central Board of Secondary Education (CBSE)",
    "International Baccalaureate (IB) World Candidate School",
    "Council of International Schools (CIS)",
  ],
};

export const heroStats: StatItem[] = [
  {
    value: 100,
    suffix: "%",
    label: "University Acceptance",
    description: "Placements at top 100 worldwide universities including Ivy League & Oxbridge",
  },
  {
    value: 36,
    suffix: "+",
    label: "Years of Legacy",
    description: "Nurturing globally minded scholars and ethical leaders since 1988",
  },
  {
    value: 12,
    suffix: ":1",
    label: "Student-Faculty Ratio",
    description: "Individualized mentorship with 85% faculty holding master's or doctorate degrees",
  },
  {
    value: 45,
    suffix: " Acres",
    label: "Smart Campus",
    description: "Lush green botanical sanctuary featuring Olympic-grade athletic facilities",
  },
];

export const coreValues = [
  {
    title: "Intellectual Rigor",
    description:
      "A culture of inquiry and critical discernment that challenges students to solve complex, real-world problems.",
    icon: "GraduationCap",
  },
  {
    title: "Moral Integrity",
    description:
      "Deeply rooted ethical foundations emphasizing empathy, honor, service, and civic responsibility.",
    icon: "ShieldCheck",
  },
  {
    title: "Global Citizenship",
    description:
      "Multicultural fluency and universal appreciation, preparing students to lead across global frontiers.",
    icon: "Globe",
  },
  {
    title: "Pioneering Innovation",
    description:
      "Forward-thinking STEM labs, maker-spaces, and creative studios fostering entrepreneurship and bold curiosity.",
    icon: "Sparkles",
  },
];

export const academicPrograms: AcademicLevel[] = [
  {
    id: "early-years",
    title: "Early Childhood Foundation",
    subtitle: "Reggio-Emilia & Montessori Inspired Experiential Learning",
    ageGroup: "Ages 3 - 5 Years",
    grades: "Pre-K to Kindergarten",
    curriculum: "Early Years Foundation Stage (EYFS)",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
    overview:
      "Our Early Years Foundation nurtures the natural curiosity of young minds in an emotionally supportive, sensory-rich environment designed to spark joyful learning.",
    highlights: [
      "Play-based phonics, language acquisition & sensory exploration",
      "Foundational numeracy and inquiry-led scientific wonder",
      "Daily expressive arts, outdoor discovery & emotional intelligence",
      "Ultra-low 8:1 child-to-educator ratio with pediatric care support",
    ],
    features: [
      {
        iconName: "HeartHandshake",
        title: "Nurturing Pods",
        desc: "Cozy child-centric ateliers with natural wooden sensory play stations.",
      },
      {
        iconName: "Palette",
        title: "Creative Arts",
        desc: "Tactile sculpturing, music immersion, and multilingual storytelling.",
      },
      {
        iconName: "Trees",
        title: "Nature Discovery",
        desc: "Dedicated botanical garden and sensory walking trails for early biology.",
      },
    ],
  },
  {
    id: "primary",
    title: "Primary Years Academy",
    subtitle: "Building Core Mastery, Analytical Thinking & Character",
    ageGroup: "Ages 6 - 10 Years",
    grades: "Grade 1 to Grade 5",
    curriculum: "Cambridge Primary & CBSE Integrated Framework",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
    overview:
      "During the formative primary years, students develop robust reading habits, mathematical intuition, scientific inquiry, and collaborative social skills.",
    highlights: [
      "Conceptual Singapore-style mathematics and problem solving",
      "Bilingual literacy, creative writing, and public elocution",
      "Hands-on science labs and early computational thinking",
      "Compulsory participation in swimming, team sports, and classical instruments",
    ],
    features: [
      {
        iconName: "BookOpenCheck",
        title: "Mastery-Based Learning",
        desc: "Adaptive benchmarks ensuring every concept is deeply mastered.",
      },
      {
        iconName: "Cpu",
        title: "Junior STEM Labs",
        desc: "Lego robotics, scratch coding, and hands-on physics experiments.",
      },
      {
        iconName: "Compass",
        title: "Leadership Foundations",
        desc: "Student council representation and structured collaborative projects.",
      },
    ],
  },
  {
    id: "middle",
    title: "Middle School of Excellence",
    subtitle: "Cultivating Deep Inquiry, Autonomy & Global Perspective",
    ageGroup: "Ages 11 - 13 Years",
    grades: "Grade 6 to Grade 8",
    curriculum: "Cambridge Lower Secondary & Advanced CBSE",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    overview:
      "Middle school is a transformative bridge where students explore multidisciplinary subject depths, participate in national Olympiads, and hone independent research skills.",
    highlights: [
      "Specialized science subjects taught in professional laboratories",
      "Foreign language immersion (French, Spanish, German, Mandarin)",
      "Model United Nations (MUN), parliamentary debates, and humanities research",
      "Formal sports specialization under certified national coaches",
    ],
    features: [
      {
        iconName: "Microscope",
        title: "Advanced Lab Sciences",
        desc: "Direct experimentation in specialized chemistry, physics & bio labs.",
      },
      {
        iconName: "Languages",
        title: "Modern World Languages",
        desc: "Native speaker faculty preparing students for DELF/DELE certifications.",
      },
      {
        iconName: "Trophy",
        title: "Varsity Sports Track",
        desc: "Competitive leagues in basketball, soccer, tennis, and swimming.",
      },
    ],
  },
  {
    id: "senior",
    title: "Senior Secondary & University Prep",
    subtitle: "Pre-University Rigor, Advanced Placement & Global Leadership",
    ageGroup: "Ages 14 - 18 Years",
    grades: "Grade 9 to Grade 12",
    curriculum: "Cambridge A-Levels, AP Courses & CBSE Senior Secondary",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop",
    overview:
      "Our senior school equips graduates with academic honors, extensive research portfolios, and dedicated college counseling that secures admissions into world-leading universities.",
    highlights: [
      "Choice of 24+ AP courses and specialized Cambridge A-Level tracks",
      "1-on-1 Ivy League and Oxbridge university admission guidance counseling",
      "Internship programs with research institutions and top corporate mentors",
      "Capstone research paper mentored by university professors",
    ],
    features: [
      {
        iconName: "Award",
        title: "College Counseling",
        desc: "Dedicated advisory team providing SAT/ACT prep, essay review, and admissions portfolio.",
      },
      {
        iconName: "Briefcase",
        title: "Research Internships",
        desc: "Summer fellowships at premier tech, biomedical, and policy centers.",
      },
      {
        iconName: "Flame",
        title: "Alumni Network",
        desc: "Global alumni network providing lifelong career guidance and mentorship.",
      },
    ],
  },
];

export const campusFacilities: FacilityItem[] = [
  {
    id: "stem-hub",
    category: "Academics",
    name: "The Da Vinci AI & Robotics Lab",
    shortDesc: "A 10,000 sq.ft cutting-edge facility with 3D printers, IoT workstations, and AI clusters.",
    fullDesc:
      "Equipped with industrial robotic arms, high-performance computing clusters for machine learning, autonomous drone testing cages, and precision CNC fabrication machines.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop",
    specs: ["VEX & FIRST Robotics Arenas", "12 Industrial 3D Printers", "NVIDIA AI Compute Stations"],
  },
  {
    id: "biotech-lab",
    category: "Academics",
    name: "Newton Biotechnology & Physics Research Center",
    shortDesc: "University-grade research laboratory enabling DNA electrophoresis and advanced astrophysics.",
    fullDesc:
      "Constructed to international biosafety standards, allowing high school researchers to conduct published scientific research under faculty mentorship.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop",
    specs: ["Biosafety Level 2 Containment", "Automated DNA Sequencer", "High-Resolution Electron Microscopes"],
  },
  {
    id: "aquatics",
    category: "Sports",
    name: "Olympic Aquatic Complex",
    shortDesc: "10-lane 50m temperature-controlled Olympic pool with electronic timing and spectator gallery.",
    fullDesc:
      "Certified by FINA standards, featuring advanced ozone water purification, underwater video analysis cameras for stroke correction, and dedicated diving boards.",
    image: "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?q=80&w=1200&auto=format&fit=crop",
    specs: ["50-Meter FINA Regulation Pool", "Omega Digital Touchpad Timing", "Heated All-Weather Enclosure"],
  },
  {
    id: "athletic-stadium",
    category: "Sports",
    name: "The Vanguard Sports Arena & Synthetic Track",
    shortDesc: "FIFA-standard natural turf football arena, 400m synthetic running track, and indoor courts.",
    fullDesc:
      "An elite multi-sport stadium housing four maple-wood basketball courts, six squash courts, eight badminton courts, and floodlit evening competition grounds.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop",
    specs: ["400m IAAF Standard 8-Lane Track", "FIFA 2-Star Quality Turf Pitch", "4 Maple Hardwood Indoor Courts"],
  },
  {
    id: "auditorium",
    category: "Arts & Culture",
    name: "The Shakespeare Grand Amphitheater",
    shortDesc: "850-seat acoustic concert hall designed for symphony orchestras, ballet, and world summits.",
    fullDesc:
      "Engineered by world-renowned acoustic consultants, featuring motorized orchestra pit, Meyer Sound acoustic arrays, and broadcast-ready 4K multi-camera studio.",
    image: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?q=80&w=1200&auto=format&fit=crop",
    specs: ["850-Seat Continental Seating", "Hydraulic Orchestra Lift", "Studio Quality Dolby Atmos Audio"],
  },
  {
    id: "library",
    category: "Academics",
    name: "The Alexandria 4-Story Central Library",
    shortDesc: "Over 75,000 physical volumes, rare manuscript archives, and JSTOR/Oxford research access.",
    fullDesc:
      "A serene architectural masterpiece with panoramic campus views, silent scholar carrels, multimedia screening pods, and collaborative group debate parlors.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop",
    specs: ["75,000+ Curated Volumes", "Over 2,000,000 Digital Papers", "Ergonomic Silent Study Atriums"],
  },
];

export const achievements: AchievementItem[] = [
  {
    year: "2025",
    title: "#1 International Day-cum-Boarding School",
    category: "Institutional Ranking",
    organization: "Global Education World Awards",
    badge: "Ranked #1",
    description: "Evaluated across 14 rigorous parameters including academic reputation, faculty competence, and leadership development.",
  },
  {
    year: "2024",
    title: "Triple Gold Medals at IMO & IPhO",
    category: "Global Olympiads",
    organization: "International Mathematical & Physics Olympiads (Bath, UK)",
    badge: "World Champions",
    description: "BMSS senior scholars secured top podium finishes representing the national delegation against 110 competing countries.",
  },
  {
    year: "2024",
    title: "100% University Placement with $14.2M in Scholarships",
    category: "University Placements",
    organization: "Global Higher Education Council",
    badge: "Ivy League & Oxbridge",
    description: "Our graduating cohort received 48 offers from Ivy League institutions, Cambridge, Oxford, MIT, and leading global institutes.",
  },
  {
    year: "2023",
    title: "Platinum Net-Zero Eco School Award",
    category: "Sustainability",
    organization: "UNESCO Green Schools Alliance",
    badge: "Platinum Certified",
    description: "Recognized for 100% solar self-sufficiency, zero waste dining halls, and our 12-acre biodiversity conservation zone.",
  },
  {
    year: "2023",
    title: "National STEM & Robotics Innovation Trophy",
    category: "Technological Excellence",
    organization: "National Science Foundation",
    badge: "1st Place National",
    description: "Awarded to BMSS High School Robotics guild for an autonomous flood rescue drone system recognized by disaster response agencies.",
  },
];

export const studentLifeGallery: GalleryItem[] = [
  {
    id: "g1",
    title: "Model United Nations General Assembly",
    category: "Campus Life",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop",
    caption: "Student delegates debating international climate diplomacy during the 14th BMSS MUN.",
  },
  {
    id: "g2",
    title: "Annual Symphony Orchestra Performance",
    category: "Arts",
    image: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?q=80&w=1200&auto=format&fit=crop",
    caption: "BMSS Philharmonic playing Beethoven's 9th Symphony at the Shakespeare Grand Hall.",
  },
  {
    id: "g3",
    title: "Varsity Track & Field Championship",
    category: "Athletics",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop",
    caption: "Sprinting toward victory at the Inter-School Athletics Championship meet.",
  },
  {
    id: "g4",
    title: "Biotechnology & Genome Sequencing",
    category: "Academics",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop",
    caption: "Senior scholars isolating plant chloroplast DNA in the Newton Research Center.",
  },
  {
    id: "g5",
    title: "Autonomous Drone Flight Testing",
    category: "Academics",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop",
    caption: "Calibrating LiDAR obstacle avoidance sensors inside the Da Vinci Innovation Hub.",
  },
  {
    id: "g6",
    title: "Visual Fine Arts & Sculpture Studio",
    category: "Arts",
    image: "https://images.unsplash.com/photo-1460518451282-c97100198083?q=80&w=1200&auto=format&fit=crop",
    caption: "Oil painting masterclass led by our resident visiting royal fellow artist.",
  },
  {
    id: "g7",
    title: "State Championship Aquatic Gala",
    category: "Athletics",
    image: "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?q=80&w=1200&auto=format&fit=crop",
    caption: "Gold medal swim relay team breaking the regional inter-school record.",
  },
  {
    id: "g8",
    title: "Collaborative Research in the Quadrangle",
    category: "Campus Life",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    caption: "Scholars collaborating on cross-disciplinary social economics under the centenary oaks.",
  },
];

export const principalData = {
  name: "Dr. Alistair Sterling",
  title: "Head of School & Principal",
  qualifications: "B.A. (Hons) Oxford, M.Ed. Harvard, Ph.D. in Educational Leadership Cambridge",
  honor: "Fellow of the Royal Society of Arts (FRSA)",
  experience: "28+ Years in International School Leadership",
  portrait: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  messageParagraphs: [
    "At BMSS International Academy, we believe that education is far more than the acquisition of factual knowledge; it is the deliberate awakening of human potential, moral courage, and intellect.",
    "For over three decades, our campus has stood as a beacon where ancient classical ideals of virtue and scholarship meet the frontier challenges of the 21st century. Here, students are not taught what to think, but how to interrogate reality with rigor, empathy, and intellectual independence.",
    "Our scholars thrive because they are surrounded by teachers who are themselves passionate scholars, in an environment of architectural grace, boundless safety, and relentless encouragement. Whether in the laboratory, on the stage, or on the athletic field, every child discovers their unique signature of excellence.",
    "I invite you to step through our gates and experience the warmth, vitality, and brilliance that makes BMSS a truly transformative cradle of global leadership.",
  ],
  quote: "“We do not merely prepare students for the future; we empower them to define it with honor, wisdom, and compassion.”",
};

export const testimonials: TestimonialItem[] = [
  {
    id: "t1",
    quote:
      "Enrolling our twin daughters at BMSS has been the single best decision we have made for their development. The balance between rigorous academic scholarship and humane emotional support allowed both of them to flourish and secure early admissions to Stanford and Oxford.",
    parentName: "Dr. Jonathan & Elena Vance",
    designation: "Chief of Neurosurgery & Managing Director at Sequoia Global",
    studentInfo: "Parents of Aria & Sophia (Class of 2024)",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    rating: 5,
    year: "Alumni Parent",
  },
  {
    id: "t2",
    quote:
      "What sets BMSS apart is the sheer calibre of the faculty. The mentors in the robotics lab and debate society challenged our son to think like a professional researcher from Grade 8 onwards. The school gave him wings while keeping his feet grounded in humility.",
    parentName: "Ambassador Marcus Aurelius Thorne",
    designation: "Senior Diplomat & Former Under-Secretary of International Affairs",
    studentInfo: "Father of Julian Thorne (Grade 11, Cambridge A-Levels)",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    rating: 5,
    year: "Current Parent",
  },
  {
    id: "t3",
    quote:
      "As a scientist, I was blown away by the laboratory infrastructure at BMSS. My daughter was publishing peer-reviewed research in high school! The pastoral care system ensures no student ever slips through the cracks.",
    parentName: "Prof. Sunita Rao, Ph.D.",
    designation: "Director of Genomic Research, National Institute of Health",
    studentInfo: "Mother of Maya Rao (Class of 2023, now at MIT)",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
    rating: 5,
    year: "Alumni Parent",
  },
  {
    id: "t4",
    quote:
      "The athletic and arts programs at BMSS match the highest collegiate standards. Our daughter grew from a shy 6-year-old into a national equestrian champion and concert violinist, all while maintaining straight A* grades.",
    parentName: "Robert & Clarissa Sterling-Cole",
    designation: "Partner, Goldman Sachs & Founder of Heritage Conservation Trust",
    studentInfo: "Parents of Charlotte (Grade 10)",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop",
    rating: 5,
    year: "Current Parent",
  },
];

export const admissionSteps = [
  {
    step: "01",
    title: "Application & Digital Dossier",
    desc: "Complete our streamlined online application form with previous academic transcripts, recommendation letters, and candidate portfolio.",
    timeline: "Step 1 (Online - 15 Mins)",
    icon: "FileText",
  },
  {
    step: "02",
    title: "Campus Discovery & Family Tour",
    desc: "Experience our 45-acre estate first-hand. Meet faculty deans, tour specialized laboratories, and experience a live class session.",
    timeline: "Step 2 (Personal Visit)",
    icon: "Compass",
  },
  {
    step: "03",
    title: "Holistic Diagnostic Assessment",
    desc: "An age-appropriate interactive dialogue and cognitive reasoning evaluation designed to understand your child's innate strengths.",
    timeline: "Step 3 (Assessment Day)",
    icon: "Brain",
  },
  {
    step: "04",
    title: "Formal Offer & Welcome Induction",
    desc: "Receipt of admission letter, orientation pack, house allocation, and personalized academic roadmap with their assigned mentor.",
    timeline: "Step 4 (Final Enrollment)",
    icon: "CheckCircle2",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "What curricula and examination boards are offered at BMSS?",
    answer:
      "BMSS International Academy provides a dual-track academic pathway. Students can choose between the Cambridge International curriculum (CAIE - Cambridge Primary, Lower Secondary, IGCSE and A-Levels) and the Central Board of Secondary Education (CBSE) with Advanced Placement (AP) electives. Both tracks are enriched by our proprietary STEM and global humanities modules.",
    category: "Academics",
  },
  {
    question: "What is the teacher-to-student ratio and class size?",
    answer:
      "We maintain an overall student-to-faculty ratio of 12:1. In the Early Childhood Foundation, classes are restricted to 16 students with two teachers and a full-time assistant. In Grades 1 through 12, classroom sizes are capped at 20-22 scholars to ensure individualized pedagogy and active mentorship.",
    category: "Academics",
  },
  {
    question: "How does BMSS support university placements and college counseling?",
    answer:
      "Our dedicated College Guidance and Career Advisory Office commences structured counseling from Grade 9. Each scholar is assigned a dedicated counselor who assists with course selection, SAT/ACT test preparation, extracurricular portfolio curation, personal statement polishing, and direct liaising with admissions officers at universities worldwide.",
    category: "Admissions",
  },
  {
    question: "What are the campus safety, surveillance, and health protocols?",
    answer:
      "The BMSS 45-acre campus features a biometric access control perimeter, 24/7 RFID student check-in, over 300 AI-monitored CCTV security cameras, and a dedicated security battalion. We have an on-campus 24/7 medical infirmary staffed by pediatric doctors and registered nurses, with a dedicated ICU-grade ambulance on standby.",
    category: "Campus & Safety",
  },
  {
    question: "Does the school offer transportation and bus services?",
    answer:
      "Yes. We operate an exclusive fleet of air-conditioned GPS-enabled luxury coaches covering all major routes across the metropolitan region. Every coach is equipped with speed governors, CCTV cameras, seat belts, emergency panic switches, and a female escort staff on all runs.",
    category: "Campus & Safety",
  },
  {
    question: "Are merit scholarships and financial assistance available?",
    answer:
      "BMSS awards the prestigious Sterling Merit Scholarship annually to exceptionally talented scholars demonstrating extraordinary achievement in academics, national sports, scientific invention, or classical arts. Scholarships range from 25% to 100% tuition waivers.",
    category: "Fees & Scholarships",
  },
  {
    question: "What are the boarding and residential options?",
    answer:
      "We provide modern, climate-controlled residential boarding for students from Grade 6 onwards, featuring twin-sharing en-suite rooms, dedicated evening prep rooms with resident tutors, nutritional dining halls, and weekend cultural excursions.",
    category: "Campus & Safety",
  },
];

