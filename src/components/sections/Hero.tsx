import React from "react";
import CampusIllustration from "../CampusIllustration";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-24 w-full grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div style={{ animation: "heroIn 0.8s ease both" }}>
          <style>{`@keyframes heroIn{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:translateY(0)}}`}</style>
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-blue-700 mb-6"
            style={{
              background: "rgba(219,234,254,0.8)",
              border: "1px solid rgba(147,197,253,0.5)",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block" />
            Now Live Across Campus
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-6 tracking-tight">
            Delivering{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2563eb, #1e40af)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Anything
            </span>
            <br />
            Across Campus,
            <br />
            Instantly.
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-md">
            Knock Knock is the intra-campus delivery platform that connects
            students to food, essentials, and more — delivered to your doorstep
            in minutes.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() =>
                document
                  .getElementById("cta")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-7 py-3.5 rounded-xl font-semibold text-white text-base transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95"
              style={{
                background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
                boxShadow: "0 8px 24px rgba(37,99,235,0.35)",
              }}
            >
              Get Started →
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("how-it-works")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-7 py-3.5 rounded-xl font-semibold text-blue-700 text-base border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-200"
            >
              See How It Works
            </button>
          </div>
          <div className="flex items-center gap-6 mt-10">
            <div className="flex -space-x-2">
              {["🧑‍🎓", "👩‍💻", "🧑‍🔬", "👩‍🎨"].map((e, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-sm"
                  style={{
                    background: "linear-gradient(135deg,#dbeafe,#bfdbfe)",
                  }}
                >
                  {e}
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500">
              <span className="font-bold text-gray-800">5,000+</span> students
              already onboard
            </p>
          </div>
        </div>
        <div style={{ animation: "heroIn 0.8s ease 0.3s both" }}>
          <CampusIllustration />
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(239,246,255,0.5))",
        }}
      />
    </section>
  );
};

export default Hero;
