import React from "react";
import { useInView } from "@/hooks/useInView";

function FounderCard() {
  const [ref, vis] = useInView();
  return (
    <div
      ref={ref}
      className="rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 transition-all duration-700"
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "none" : "translateY(32px)",
        background: "rgba(255,255,255,0.8)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(219,234,254,0.6)",
        boxShadow: "0 8px 48px rgba(37,99,235,0.1)",
      }}
    >
      <div className="flex-shrink-0">
        <div
          className="w-36 h-36 rounded-3xl flex items-center justify-center text-6xl shadow-xl"
          style={{
            background: "linear-gradient(135deg, #dbeafe, #bfdbfe)",
            border: "3px solid rgba(219,234,254,0.8)",
          }}
        >
          👨‍💼
        </div>
        <div className="mt-4 text-center">
          <div className="font-bold text-gray-900">Founder</div>
          <div className="text-sm text-blue-600">Knock Knock</div>
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-black text-gray-900 mb-4">
          Building the future of campus logistics.
        </h3>
        <div className="space-y-4">
          {[
            {
              icon: "🚀",
              text: "Founded and scaled an intra-campus delivery platform serving 5,000+ students across college campuses.",
            },
            {
              icon: "📈",
              text: "Acquired 1,500+ active users within 90 days through targeted outreach and viral referral campaigns.",
            },
            {
              icon: "⚙️",
              text: "Designed end-to-end delivery workflows and vendor coordination systems achieving a 98% on-time delivery rate.",
            },
          ].map((b, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 rounded-xl"
              style={{
                background: "rgba(239,246,255,0.6)",
                border: "1px solid rgba(219,234,254,0.4)",
              }}
            >
              <span className="text-xl flex-shrink-0 mt-0.5">{b.icon}</span>
              <p className="text-gray-600 text-sm leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-3 mt-6">
          <span
            className="px-3 py-1 rounded-full text-xs font-semibold text-blue-700"
            style={{ background: "rgba(219,234,254,0.8)" }}
          >
            🇮🇳 India
          </span>
          <span
            className="px-3 py-1 rounded-full text-xs font-semibold text-blue-700"
            style={{ background: "rgba(219,234,254,0.8)" }}
          >
            Campus Tech
          </span>
          <span
            className="px-3 py-1 rounded-full text-xs font-semibold text-blue-700"
            style={{ background: "rgba(219,234,254,0.8)" }}
          >
            EdTech Logistics
          </span>
        </div>
      </div>
    </div>
  );
}

export default FounderCard;
