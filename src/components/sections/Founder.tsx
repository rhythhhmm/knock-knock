import React from "react";
import FounderCard from "../FounderCard";

const Founder = () => {
  return (
    <section id="founder" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-blue-600 mb-4"
            style={{ background: "rgba(219,234,254,0.8)" }}
          >
            FOUNDER
          </div>
          <h2 className="text-4xl font-black text-gray-900">
            The story behind Knock Knock.
          </h2>
        </div>
        <FounderCard />
      </div>
    </section>
  );
};

export default Founder;
