import { useInView } from "@/hooks/useInView";
function AboutCard() {
  const [ref, vis] = useInView();
  return (
    <div
      ref={ref}
      className="rounded-3xl p-12 text-center transition-all duration-700"
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "none" : "translateY(32px)",
        background:
          "linear-gradient(135deg, rgba(37,99,235,0.08), rgba(29,78,216,0.05))",
        backdropFilter: "blur(8px)",
        border: "1px solid rgba(219,234,254,0.6)",
        boxShadow: "0 8px 48px rgba(37,99,235,0.08)",
      }}
    >
      <div
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-blue-600 mb-6"
        style={{ background: "rgba(219,234,254,0.8)" }}
      >
        ABOUT US
      </div>
      <h2 className="text-4xl font-black text-gray-900 mb-6">
        What is Knock Knock?
      </h2>
      <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
        Knock Knock is an{" "}
        <strong className="text-blue-700">
          intra-campus delivery platform
        </strong>{" "}
        built exclusively for students. We bridge the gap between campus vendors
        and student residences — so you can get your food, stationery,
        medicines, and daily essentials without leaving your room.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {[
          {
            emoji: "🚀",
            title: "Built for Students",
            desc: "Designed around campus life — fast, affordable, and always available.",
          },
          {
            emoji: "🔗",
            title: "Vendor Network",
            desc: "Integrated with all campus-approved vendors and canteens.",
          },
          {
            emoji: "📍",
            title: "Hyper-Local",
            desc: "100% within campus. No delivery zone confusion, ever.",
          },
        ].map((c, i) => (
          <div
            key={i}
            className="p-5 rounded-2xl text-center"
            style={{
              background: "rgba(255,255,255,0.6)",
              border: "1px solid rgba(219,234,254,0.5)",
            }}
          >
            <div className="text-3xl mb-2">{c.emoji}</div>
            <div className="font-bold text-gray-800 mb-1">{c.title}</div>
            <div className="text-sm text-gray-500">{c.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutCard;
