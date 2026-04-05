import React from "react";
import TestimonialCard from "../TestimonialCard";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "2nd Year, B.Tech CSE",
    text: "Knock Knock is a lifesaver! I got my lunch delivered right to my hostel during a hectic exam week. Super fast and reliable.",
    emoji: "👩‍💻",
  },
  {
    name: "Arjun Mehta",
    role: "3rd Year, MBA",
    text: "Ordered essentials at midnight during deadlines. Arrived in 15 minutes flat. Honestly couldn't believe it actually works this well!",
    emoji: "🧑‍🎓",
  },
  {
    name: "Sneha Patil",
    role: "1st Year, B.Sc",
    text: "The app is so clean and intuitive. Tracking my delivery in real-time made me feel totally in control. Best campus app ever!",
    emoji: "👩‍🔬",
  },
];
const Testimonials = () => {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-blue-600 mb-4"
            style={{ background: "rgba(219,234,254,0.8)" }}
          >
            TESTIMONIALS
          </div>
          <h2 className="text-4xl font-black text-gray-900">
            Loved by students.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
