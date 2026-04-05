import React from "react";
import FlowDiagram from "../FlowDiagram";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-blue-600 mb-4"
            style={{ background: "rgba(219,234,254,0.8)" }}
          >
            HOW IT WORKS
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Four steps to your door.
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            From order to delivery — a seamless, end-to-end experience.
          </p>
        </div>
        <FlowDiagram />
      </div>
    </section>
  );
};

export default HowItWorks;
