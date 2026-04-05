"use client";

import { useInView } from "@/hooks/useInView";
import type { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  desc: string;
  delay: number;
}

export default function FeatureCard({ icon, title, desc, delay }: FeatureCardProps) {
  const [ref, vis] = useInView(0.1);

  return (
    <div
      ref={ref}
      className="group relative p-6 rounded-2xl cursor-default transition-all duration-500 hover:-translate-y-1"
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
        background: "rgba(255,255,255,0.7)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 4px 24px rgba(37,99,235,0.1), inset 0 1px 0 rgba(255,255,255,0.8)",
        border: "1px solid rgba(219,234,254,0.8)",
      }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
        style={{
          background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
          boxShadow: "0 4px 16px rgba(37,99,235,0.3)",
          color: "white",
        }}
      >
        {icon}
      </div>
      <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.05), rgba(29,78,216,0.05))" }}
      />
    </div>
  );
}
