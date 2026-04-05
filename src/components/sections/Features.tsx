import React from "react";
import FeatureCard from "../FeatureCard";
import {
  IconZap,
  IconShoppingBag,
  IconMapPin,
  IconStore,
  IconNavigation,
  IconPackage,
} from "../icons";

const features = [
  {
    icon: <IconZap />,
    title: "Lightning Fast",
    desc: "Deliveries completed in under 20 minutes across the entire campus network.",
  },
  {
    icon: <IconShoppingBag />,
    title: "Easy Ordering",
    desc: "Browse, tap, and order. A frictionless experience built for students on the go.",
  },
  {
    icon: <IconMapPin />,
    title: "Campus-Wide Coverage",
    desc: "Every hostel, building, and corner of campus is within our delivery radius.",
  },
  {
    icon: <IconStore />,
    title: "Vendor Integration",
    desc: "Seamlessly connected to canteens, shops, and on-campus vendors.",
  },
  {
    icon: <IconNavigation />,
    title: "Real-Time Tracking",
    desc: "Track your delivery live on a map — always know exactly where your order is.",
  },
  {
    icon: <IconPackage />,
    title: "Safe & Secure",
    desc: "Verified delivery partners and contactless handoffs for a safe experience.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-blue-600 mb-4"
            style={{ background: "rgba(219,234,254,0.8)" }}
          >
            FEATURES
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Everything you need,
            <br />
            delivered.
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            A complete platform built around the unique needs of campus living.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
