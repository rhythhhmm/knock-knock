import React from "react";
import { useInView } from "@/hooks/useInView";

const CtaCard = () => {
  const [ref, vis] = useInView();
  return (
    <div
      ref={ref}
      className="rounded-3xl p-12 text-center relative overflow-hidden transition-all duration-700"
      style={{
        opacity: vis ? 1 : 0,
        background: "linear-gradient(135deg, #1e40af, #1d4ed8, #2563eb)",
        boxShadow: "0 24px 64px rgba(29,78,216,0.4)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.08), transparent 60%)",
        }}
      />
      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
          Join the future of
          <br />
          campus delivery.
        </h2>
        <p className="text-blue-200 text-lg mb-10 max-w-lg mx-auto">
          Sign up today and experience what thousands of students already love.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-8 py-4 rounded-xl font-bold text-blue-700 bg-white text-base transition-all duration-200 hover:scale-105 hover:shadow-2xl active:scale-95">
            Sign Up Free
          </button>
          <button className="px-8 py-4 rounded-xl font-bold text-white text-base border-2 border-blue-300 hover:border-white hover:bg-white/10 transition-all duration-200">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};
export default CtaCard;
