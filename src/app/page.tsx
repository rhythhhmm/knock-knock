"use client";

import { useState, useEffect } from "react";
import { useInView } from "@/hooks/useInView";
import { IconMenu, IconX } from "@/components/icons";

import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import Founder from "@/components/sections/Founder";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import TractionStat from "@/components/sections/TractionStat";
import CTA from "@/components/sections/CTA";
import FloatingBlobs from "@/components/FloatingBlobs";
import About from "@/components/sections/About";

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function KnockKnock() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navLinks = [
    { id: "about", label: "About" },
    { id: "features", label: "Features" },
    { id: "how-it-works", label: "How It Works" },
    { id: "traction", label: "Traction" },
    { id: "founder", label: "Founder" },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white font-sans relative"
      style={{ fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif" }}
    >
      <FloatingBlobs />

      {/* ── Navbar ──────────────────────────────────────────────────── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          boxShadow: scrolled ? "0 1px 32px rgba(37,99,235,0.1)" : "none",
          borderBottom: scrolled ? "1px solid rgba(219,234,254,0.5)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-black text-sm"
              style={{
                background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
              }}
            >
              KK
            </div>
            <span className="font-bold text-gray-900 text-lg tracking-tight">
              Knock Knock
            </span>
          </button>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 hover:scale-105 duration-300 transition-colors"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("cta")}
              className="px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
                boxShadow: "0 4px 16px rgba(37,99,235,0.3)",
              }}
            >
              Get Started
            </button>
          </div>
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <IconX /> : <IconMenu />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="md:hidden absolute top-full left-0 right-0 p-6 flex flex-col gap-4"
            style={{
              background: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(16px)",
              borderBottom: "1px solid rgba(219,234,254,0.6)",
            }}
          >
            {navLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-left text-gray-700 font-medium hover:text-blue-600 transition-colors py-1"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("cta")}
              className="px-4 py-2.5 rounded-xl text-sm font-semibold text-white text-center"
              style={{
                background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
              }}
            >
              Get Started
            </button>
          </div>
        )}
      </nav>

      <Hero />

      <About />

      <Features />

      <HowItWorks />

      <TractionStat />
      <Founder />

      <Testimonials />

      <CTA />

      <Footer />
    </div>
  );
}
