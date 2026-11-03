"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface StatsCounterProps {
  value: number;
  suffix: string;
  label: string;
  description: string;
  delay?: number;
}

export default function StatsCounter({
  value,
  suffix,
  label,
  description,
  delay = 0,
}: StatsCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 2000; // 2 seconds

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out expo
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeOut * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    const timer = setTimeout(() => {
      requestAnimationFrame(animate);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [isInView, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative group p-6 rounded-2xl bg-[#091528]/80 backdrop-blur-md border border-amber-500/20 hover:border-amber-400/50 transition-all duration-300 shadow-xl shadow-black/40 hover:-translate-y-1"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-colors pointer-events-none" />

      <div className="flex items-baseline gap-1 mb-2">
        <span className="text-4xl sm:text-5xl font-extrabold text-white font-serif-title tracking-tight">
          {count}
        </span>
        <span className="text-2xl sm:text-3xl font-bold text-amber-400">
          {suffix}
        </span>
      </div>

      <h4 className="text-base font-bold text-slate-100 tracking-wide mb-1 font-sans">
        {label}
      </h4>

      <p className="text-xs text-slate-400 leading-relaxed font-sans">
        {description}
      </p>

      <div className="w-8 h-0.5 bg-gradient-to-r from-amber-400 to-transparent mt-4 group-hover:w-16 transition-all duration-300" />
    </motion.div>
  );
}

