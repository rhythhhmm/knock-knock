"use client";

import { useInView } from "@/hooks/useInView";

const steps = [
  { icon: "📱", label: "Place Order", desc: "Student orders via app", color: "#2563eb" },
  { icon: "🍱", label: "Vendor Prepares", desc: "Vendor gets notified", color: "#1d4ed8" },
  { icon: "🛵", label: "Partner Picks Up", desc: "Delivery partner assigned", color: "#1e40af" },
  { icon: "🏠", label: "Delivered!", desc: "Right at your doorstep", color: "#1e3a8a" },
];

function FlowStep({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const [ref, vis] = useInView(0.1);

  return (
    <div
      key={index}
      className="flex flex-col items-center z-10 flex-1"
      ref={ref}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.6s ease ${index * 0.15}s`,
      }}
    >
      <div className="relative group">
        <div
          className="w-36 h-40 rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl"
          style={{
            background: `linear-gradient(135deg, ${step.color}ee, ${step.color}aa)`,
            boxShadow: `0 8px 32px ${step.color}44, inset 0 1px 0 rgba(255,255,255,0.2)`,
          }}
        >
          <div className="text-4xl">{step.icon}</div>
          <div className="text-white font-bold text-sm text-center px-2">{step.label}</div>
          <div className="text-blue-100 text-xs text-center px-3">{step.desc}</div>
        </div>
        <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-white text-blue-700 font-black text-xs flex items-center justify-center shadow-lg border-2 border-blue-200">
          {index + 1}
        </div>
      </div>
      {index < steps.length - 1 && <div className="md:hidden text-blue-400 text-2xl mt-2">↓</div>}
    </div>
  );
}

export default function FlowDiagram() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 relative">
        <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-800 -translate-y-1/2 z-0" />
        {steps.map((step, i) => (
          <FlowStep key={i} step={step} index={i} />
        ))}
      </div>
    </div>
  );
}
