import { useInView } from "@/hooks/useInView";
import Counter from "./Counter";
const stats = [
  { value: 5000, suffix: "+", label: "Students Served" },
  { value: 1500, suffix: "+", label: "Users in 90 Days" },
  { value: 98, suffix: "%", label: "On-Time Delivery" },
];

function TractionCard() {
  const [ref, vis] = useInView();
  return (
    <div
      ref={ref}
      className="rounded-3xl p-12 relative overflow-hidden transition-all duration-700"
      style={{
        opacity: vis ? 1 : 0,
        background: "linear-gradient(135deg, #1d4ed8, #1e40af, #1e3a8a)",
        boxShadow: "0 24px 64px rgba(29,78,216,0.4)",
      }}
    >
      <div
        className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-10"
        style={{ background: "white" }}
      />
      <div
        className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full opacity-10"
        style={{ background: "white" }}
      />
      <div className="relative z-10 text-center mb-12">
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-blue-200 mb-4"
          style={{ background: "rgba(255,255,255,0.15)" }}
        >
          TRACTION
        </div>
        <h2 className="text-4xl font-black text-white mb-3">
          Our Numbers Speak.
        </h2>
        <p className="text-blue-200">
          Real growth. Real impact. Built for the campus.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {stats.map((s, i) => (
          <div
            key={i}
            className="text-center p-6 rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <div className="text-5xl font-black text-white mb-2">
              <Counter target={s.value} suffix={s.suffix} />
            </div>
            <div className="text-blue-200 font-medium">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default TractionCard;
