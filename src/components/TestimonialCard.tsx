"use client";

import { useInView } from "@/hooks/useInView";
import { IconStar } from "@/components/icons";

interface TestimonialCardProps {
  name: string;
  role: string;
  text: string;
  emoji: string;
  delay: number;
}

export default function TestimonialCard({ name, role, text, emoji, delay }: TestimonialCardProps) {
  const [ref, vis] = useInView(0.1);

  return (
    <div
      ref={ref}
      className="p-6 rounded-2xl transition-all duration-500 hover:-translate-y-1"
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(24px)",
        transition: `all 0.6s ease ${delay}s`,
        background: "rgba(255,255,255,0.8)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 4px 32px rgba(37,99,235,0.1)",
        border: "1px solid rgba(219,234,254,0.6)",
      }}
    >
      <div className="flex gap-1 mb-3 text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <IconStar key={i} />
        ))}
      </div>
      <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">&quot;{text}&quot;</p>
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
          style={{ background: "linear-gradient(135deg, #dbeafe, #bfdbfe)" }}
        >
          {emoji}
        </div>
        <div>
          <div className="font-semibold text-gray-900 text-sm">{name}</div>
          <div className="text-gray-400 text-xs">{role}</div>
        </div>
      </div>
    </div>
  );
}
