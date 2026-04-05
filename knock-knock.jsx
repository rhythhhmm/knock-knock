import { useState, useEffect, useRef } from "react";

// ── Utility: useInView hook ──────────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

// ── Animated counter ─────────────────────────────────────────────────────────
function Counter({ target, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [ref, visible] = useInView(0.3);
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [visible, target, duration]);
  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

// ── SVG Icons ────────────────────────────────────────────────────────────────
const IconZap = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);
const IconShoppingBag = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
  </svg>
);
const IconMapPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const IconStore = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);
const IconNavigation = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <polygon points="3 11 22 2 13 21 11 13 3 11"/>
  </svg>
);
const IconStar = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);
const IconMenu = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);
const IconX = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);
const IconPackage = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
  </svg>
);
const IconTruck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
  </svg>
);

// ── 3D Campus Delivery Illustration (SVG animated) ───────────────────────────
function CampusIllustration() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes floatSlow { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-8px) rotate(3deg)} }
        @keyframes orbit { from{transform:rotate(0deg) translateX(110px) rotate(0deg)} to{transform:rotate(360deg) translateX(110px) rotate(-360deg)} }
        @keyframes pulse-ring { 0%{transform:scale(0.8);opacity:1} 100%{transform:scale(2.2);opacity:0} }
        @keyframes dash { to{stroke-dashoffset:0} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .float-anim { animation: float 3s ease-in-out infinite; }
        .float-slow { animation: floatSlow 4s ease-in-out infinite; }
        .orbit-dot { animation: orbit 6s linear infinite; }
        .pulse-ring { animation: pulse-ring 2s ease-out infinite; }
        .dash-anim { stroke-dasharray:200;stroke-dashoffset:200;animation:dash 2.5s ease forwards; }
        .blink-anim { animation: blink 2s ease-in-out infinite; }
      `}</style>
      <svg viewBox="0 0 480 420" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-2xl">
        <defs>
          <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#dbeafe"/>
            <stop offset="100%" stopColor="#eff6ff"/>
          </linearGradient>
          <linearGradient id="buildingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1d4ed8"/>
            <stop offset="100%" stopColor="#2563eb"/>
          </linearGradient>
          <linearGradient id="buildingGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e40af"/>
            <stop offset="100%" stopColor="#3b82f6"/>
          </linearGradient>
          <linearGradient id="groundGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#bfdbfe"/>
            <stop offset="100%" stopColor="#93c5fd"/>
          </linearGradient>
          <linearGradient id="packageGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6"/>
            <stop offset="100%" stopColor="#1d4ed8"/>
          </linearGradient>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#1d4ed8" floodOpacity="0.25"/>
          </filter>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Background */}
        <rect width="480" height="420" fill="url(#skyGrad)" rx="20"/>

        {/* Ground */}
        <ellipse cx="240" cy="370" rx="200" ry="30" fill="url(#groundGrad)" opacity="0.5"/>

        {/* Building 1 – left */}
        <g className="float-slow" style={{transformOrigin:'100px 280px'}}>
          <rect x="60" y="160" width="80" height="200" rx="4" fill="url(#buildingGrad)" filter="url(#shadow)"/>
          <rect x="60" y="155" width="80" height="15" rx="2" fill="#1e3a8a"/>
          {/* windows */}
          {[0,1,2,3,4].map(r=>[0,1,2].map(c=>(
            <rect key={`w1-${r}-${c}`} x={72+c*22} y={175+r*30} width="14" height="18" rx="2" fill={Math.random()>0.4?"#bfdbfe":"#93c5fd"} opacity="0.9"/>
          )))}
          <text x="100" y="375" textAnchor="middle" fontSize="10" fill="#1e40af" fontWeight="600">Hostel A</text>
        </g>

        {/* Building 2 – center */}
        <g className="float-anim" style={{transformOrigin:'240px 260px'}}>
          <rect x="175" y="120" width="130" height="240" rx="4" fill="url(#buildingGrad2)" filter="url(#shadow)"/>
          <rect x="175" y="112" width="130" height="18" rx="2" fill="#1e3a8a"/>
          <polygon points="240,88 175,112 305,112" fill="#1e40af"/>
          {[0,1,2,3,4,5].map(r=>[0,1,2,3].map(c=>(
            <rect key={`w2-${r}-${c}`} x={183+c*28} y={135+r*32} width="18" height="20" rx="2" fill={r===2&&c===1?"#fbbf24":"#bfdbfe"} opacity="0.9" className={r===2&&c===1?"blink-anim":""}/>
          )))}
          <text x="240" y="375" textAnchor="middle" fontSize="10" fill="#1e40af" fontWeight="700">Main Campus</text>
        </g>

        {/* Building 3 – right */}
        <g className="float-slow" style={{transformOrigin:'370px 290px',animationDelay:'1.5s'}}>
          <rect x="330" y="190" width="75" height="170" rx="4" fill="url(#buildingGrad)" filter="url(#shadow)"/>
          <rect x="330" y="184" width="75" height="12" rx="2" fill="#1e3a8a"/>
          {[0,1,2,3].map(r=>[0,1].map(c=>(
            <rect key={`w3-${r}-${c}`} x={340+c*28} y={200+r*32} width="16" height="20" rx="2" fill="#bfdbfe" opacity="0.9"/>
          )))}
          <text x="367" y="375" textAnchor="middle" fontSize="10" fill="#1e40af" fontWeight="600">Canteen</text>
        </g>

        {/* Dashed delivery paths */}
        <path d="M140,310 Q190,280 230,300" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 4" fill="none" opacity="0.6" className="dash-anim"/>
        <path d="M305,270 Q340,260 370,280" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 4" fill="none" opacity="0.6" className="dash-anim"/>

        {/* Floating delivery package */}
        <g className="float-anim" style={{transformOrigin:'200px 240px',animationDelay:'0.5s'}} filter="url(#shadow)">
          <rect x="180" y="225" width="40" height="32" rx="4" fill="url(#packageGrad)"/>
          <rect x="180" y="225" width="40" height="8" rx="2" fill="#1e40af"/>
          <line x1="200" y1="225" x2="200" y2="257" stroke="#93c5fd" strokeWidth="1.5"/>
          <line x1="180" y1="237" x2="220" y2="237" stroke="#93c5fd" strokeWidth="1.5"/>
          {/* pulse */}
          <circle cx="200" cy="212" r="6" fill="#3b82f6" filter="url(#glow)"/>
          <circle cx="200" cy="212" r="6" fill="none" stroke="#60a5fa" strokeWidth="2" className="pulse-ring"/>
        </g>

        {/* Delivery scooter */}
        <g className="float-anim" style={{transformOrigin:'310px 310px',animationDelay:'1s'}}>
          <ellipse cx="310" cy="330" rx="30" ry="8" fill="#1d4ed8" opacity="0.2"/>
          <rect x="288" y="308" width="44" height="22" rx="8" fill="#2563eb"/>
          <rect x="308" y="300" width="24" height="14" rx="4" fill="#3b82f6"/>
          <circle cx="296" cy="330" r="8" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="2"/>
          <circle cx="324" cy="330" r="8" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="2"/>
          <rect x="305" y="296" width="10" height="12" rx="2" fill="#bfdbfe"/>
        </g>

        {/* Orbital dot representing network */}
        <g style={{transformOrigin:'240px 240px'}}>
          <circle cx="240" cy="240" r="110" fill="none" stroke="#bfdbfe" strokeWidth="1" strokeDasharray="4 6" opacity="0.5"/>
          <circle r="7" fill="#3b82f6" filter="url(#glow)" className="orbit-dot"/>
        </g>

        {/* Status badge */}
        <g className="float-anim" style={{animationDelay:'0.8s'}}>
          <rect x="20" y="50" width="120" height="36" rx="18" fill="white" opacity="0.9" filter="url(#shadow)"/>
          <circle cx="42" cy="68" r="8" fill="#22c55e"/>
          <text x="56" y="65" fontSize="10" fontWeight="700" fill="#1e40af">Live Tracking</text>
          <text x="56" y="77" fontSize="9" fill="#6b7280">2 min away ✓</text>
        </g>

        {/* Order badge */}
        <g className="float-anim" style={{animationDelay:'1.2s'}}>
          <rect x="340" y="45" width="120" height="36" rx="18" fill="white" opacity="0.9" filter="url(#shadow)"/>
          <circle cx="362" cy="63" r="8" fill="#3b82f6"/>
          <text x="376" y="60" fontSize="10" fontWeight="700" fill="#1e40af">New Order!</text>
          <text x="376" y="72" fontSize="9" fill="#6b7280">Hostel B → Canteen</text>
        </g>
      </svg>
    </div>
  );
}

// ── How It Works 3D Flow Diagram ─────────────────────────────────────────────
function FlowDiagram() {
  const steps = [
    { icon: "📱", label: "Place Order", desc: "Student orders via app", color: "#2563eb" },
    { icon: "🍱", label: "Vendor Prepares", desc: "Vendor gets notified", color: "#1d4ed8" },
    { icon: "🛵", label: "Partner Picks Up", desc: "Delivery partner assigned", color: "#1e40af" },
    { icon: "🏠", label: "Delivered!", desc: "Right at your doorstep", color: "#1e3a8a" },
  ];
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 relative">
        {/* connecting line */}
        <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-800 -translate-y-1/2 z-0"/>
        {steps.map((s, i) => {
          const [ref, vis] = useInView(0.1);
          return (
            <div key={i} className="flex flex-col items-center z-10 flex-1" ref={ref}
              style={{opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(30px)', transition: `all 0.6s ease ${i * 0.15}s`}}>
              <div className="relative group">
                {/* 3D card */}
                <div className="w-36 h-40 rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl"
                  style={{background: `linear-gradient(135deg, ${s.color}ee, ${s.color}aa)`, boxShadow: `0 8px 32px ${s.color}44, inset 0 1px 0 rgba(255,255,255,0.2)`}}>
                  <div className="text-4xl">{s.icon}</div>
                  <div className="text-white font-bold text-sm text-center px-2">{s.label}</div>
                  <div className="text-blue-100 text-xs text-center px-3">{s.desc}</div>
                </div>
                {/* step number */}
                <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-white text-blue-700 font-black text-xs flex items-center justify-center shadow-lg border-2 border-blue-200">
                  {i + 1}
                </div>
              </div>
              {/* mobile arrow */}
              {i < steps.length - 1 && (
                <div className="md:hidden text-blue-400 text-2xl mt-2">↓</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Feature Card ─────────────────────────────────────────────────────────────
function FeatureCard({ icon, title, desc, delay }) {
  const [ref, vis] = useInView(0.1);
  return (
    <div ref={ref} className="group relative p-6 rounded-2xl cursor-default transition-all duration-500 hover:-translate-y-1"
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
        background: 'rgba(255,255,255,0.7)',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 4px 24px rgba(37,99,235,0.1), inset 0 1px 0 rgba(255,255,255,0.8)',
        border: '1px solid rgba(219,234,254,0.8)'
      }}>
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
        style={{background: 'linear-gradient(135deg, #2563eb, #1d4ed8)', boxShadow: '0 4px 16px rgba(37,99,235,0.3)', color: 'white'}}>
        {icon}
      </div>
      <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
      {/* hover glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{background: 'linear-gradient(135deg, rgba(37,99,235,0.05), rgba(29,78,216,0.05))'}}/>
    </div>
  );
}

// ── Testimonial Card ─────────────────────────────────────────────────────────
function TestimonialCard({ name, role, text, emoji, delay }) {
  const [ref, vis] = useInView(0.1);
  return (
    <div ref={ref} className="p-6 rounded-2xl transition-all duration-500 hover:-translate-y-1"
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? 'translateY(0)' : 'translateY(24px)',
        transition: `all 0.6s ease ${delay}s`,
        background: 'rgba(255,255,255,0.8)',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 4px 32px rgba(37,99,235,0.1)',
        border: '1px solid rgba(219,234,254,0.6)'
      }}>
      <div className="flex gap-1 mb-3 text-yellow-400">
        {[...Array(5)].map((_, i) => <IconStar key={i}/>)}
      </div>
      <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">"{text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
          style={{background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)'}}>
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

// ── Main App ─────────────────────────────────────────────────────────────────
export default function KnockKnock() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const features = [
    { icon: <IconZap/>, title: "Lightning Fast", desc: "Deliveries completed in under 20 minutes across the entire campus network." },
    { icon: <IconShoppingBag/>, title: "Easy Ordering", desc: "Browse, tap, and order. A frictionless experience built for students on the go." },
    { icon: <IconMapPin/>, title: "Campus-Wide Coverage", desc: "Every hostel, building, and corner of campus is within our delivery radius." },
    { icon: <IconStore/>, title: "Vendor Integration", desc: "Seamlessly connected to canteens, shops, and on-campus vendors." },
    { icon: <IconNavigation/>, title: "Real-Time Tracking", desc: "Track your delivery live on a map — always know exactly where your order is." },
    { icon: <IconPackage/>, title: "Safe & Secure", desc: "Verified delivery partners and contactless handoffs for a safe experience." },
  ];

  const stats = [
    { value: 5000, suffix: "+", label: "Students Served" },
    { value: 1500, suffix: "+", label: "Users in 90 Days" },
    { value: 98, suffix: "%", label: "On-Time Delivery" },
  ];

  const testimonials = [
    { name: "Priya Sharma", role: "2nd Year, B.Tech CSE", text: "Knock Knock is a lifesaver! I got my lunch delivered right to my hostel during a hectic exam week. Super fast and reliable.", emoji: "👩‍💻" },
    { name: "Arjun Mehta", role: "3rd Year, MBA", text: "Ordered essentials at midnight during deadlines. Arrived in 15 minutes flat. Honestly couldn't believe it actually works this well!", emoji: "🧑‍🎓" },
    { name: "Sneha Patil", role: "1st Year, B.Sc", text: "The app is so clean and intuitive. Tracking my delivery in real-time made me feel totally in control. Best campus app ever!", emoji: "👩‍🔬" },
  ];

  const navLinks = [
    { id: "about", label: "About" },
    { id: "features", label: "Features" },
    { id: "how-it-works", label: "How It Works" },
    { id: "traction", label: "Traction" },
    { id: "founder", label: "Founder" },
  ];

  // Floating bg blobs
  const FloatingBlobs = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-20" style={{background: 'radial-gradient(circle, #3b82f6, transparent)', animation: 'float 8s ease-in-out infinite'}}/>
      <div className="absolute top-1/3 -right-32 w-80 h-80 rounded-full opacity-15" style={{background: 'radial-gradient(circle, #1d4ed8, transparent)', animation: 'float 10s ease-in-out infinite 2s'}}/>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full opacity-10" style={{background: 'radial-gradient(circle, #60a5fa, transparent)', animation: 'float 7s ease-in-out infinite 1s'}}/>
      <style>{`@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-20px)}}`}</style>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white font-sans relative" style={{fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif"}}>
      <FloatingBlobs/>

      {/* ── Navbar ──────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(255,255,255,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          boxShadow: scrolled ? '0 1px 32px rgba(37,99,235,0.1)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(219,234,254,0.5)' : 'none'
        }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => window.scrollTo({top:0,behavior:'smooth'})} className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-black text-sm" style={{background: 'linear-gradient(135deg, #2563eb, #1d4ed8)'}}>
              KK
            </div>
            <span className="font-bold text-gray-900 text-lg tracking-tight">Knock Knock</span>
          </button>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(l => (
              <button key={l.id} onClick={() => scrollTo(l.id)} className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">{l.label}</button>
            ))}
            <button onClick={() => scrollTo("cta")} className="px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
              style={{background: 'linear-gradient(135deg, #2563eb, #1d4ed8)', boxShadow: '0 4px 16px rgba(37,99,235,0.3)'}}>
              Get Started
            </button>
          </div>
          <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(v => !v)}>
            {menuOpen ? <IconX/> : <IconMenu/>}
          </button>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 p-6 flex flex-col gap-4"
            style={{background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(219,234,254,0.6)'}}>
            {navLinks.map(l => (
              <button key={l.id} onClick={() => scrollTo(l.id)} className="text-left text-gray-700 font-medium hover:text-blue-600 transition-colors py-1">{l.label}</button>
            ))}
            <button onClick={() => scrollTo("cta")} className="px-4 py-2.5 rounded-xl text-sm font-semibold text-white text-center"
              style={{background: 'linear-gradient(135deg, #2563eb, #1d4ed8)'}}>
              Get Started
            </button>
          </div>
        )}
      </nav>

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-24 w-full grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div style={{animation: 'heroIn 0.8s ease both'}}>
            <style>{`@keyframes heroIn{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:translateY(0)}}`}</style>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-blue-700 mb-6"
              style={{background: 'rgba(219,234,254,0.8)', border: '1px solid rgba(147,197,253,0.5)'}}>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block"/>
              Now Live Across Campus
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-6 tracking-tight">
              Delivering <span style={{background: 'linear-gradient(135deg, #2563eb, #1e40af)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Anything</span><br/>Across Campus,<br/>Instantly.
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-md">
              Knock Knock is the intra-campus delivery platform that connects students to food, essentials, and more — delivered to your doorstep in minutes.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollTo("cta")} className="px-7 py-3.5 rounded-xl font-semibold text-white text-base transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95"
                style={{background: 'linear-gradient(135deg, #2563eb, #1d4ed8)', boxShadow: '0 8px 24px rgba(37,99,235,0.35)'}}>
                Get Started →
              </button>
              <button onClick={() => scrollTo("how-it-works")} className="px-7 py-3.5 rounded-xl font-semibold text-blue-700 text-base border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-200">
                See How It Works
              </button>
            </div>
            <div className="flex items-center gap-6 mt-10">
              <div className="flex -space-x-2">
                {["🧑‍🎓","👩‍💻","🧑‍🔬","👩‍🎨"].map((e,i)=>(
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-sm" style={{background:'linear-gradient(135deg,#dbeafe,#bfdbfe)'}}>{e}</div>
                ))}
              </div>
              <p className="text-sm text-gray-500"><span className="font-bold text-gray-800">5,000+</span> students already onboard</p>
            </div>
          </div>
          <div style={{animation: 'heroIn 0.8s ease 0.3s both'}}>
            <CampusIllustration/>
          </div>
        </div>
        {/* bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none" style={{background: 'linear-gradient(to bottom, transparent, rgba(239,246,255,0.5))'}}/>
      </section>

      {/* ── About ───────────────────────────────────────────────────── */}
      <section id="about" className="py-24 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          {(() => {
            const [ref, vis] = useInView();
            return (
              <div ref={ref} className="rounded-3xl p-12 text-center transition-all duration-700"
                style={{
                  opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(32px)',
                  background: 'linear-gradient(135deg, rgba(37,99,235,0.08), rgba(29,78,216,0.05))',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(219,234,254,0.6)',
                  boxShadow: '0 8px 48px rgba(37,99,235,0.08)'
                }}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-blue-600 mb-6"
                  style={{background: 'rgba(219,234,254,0.8)'}}>
                  ABOUT US
                </div>
                <h2 className="text-4xl font-black text-gray-900 mb-6">What is Knock Knock?</h2>
                <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
                  Knock Knock is an <strong className="text-blue-700">intra-campus delivery platform</strong> built exclusively for students. We bridge the gap between campus vendors and student residences — so you can get your food, stationery, medicines, and daily essentials without leaving your room.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                  {[
                    {emoji:"🚀", title:"Built for Students", desc:"Designed around campus life — fast, affordable, and always available."},
                    {emoji:"🔗", title:"Vendor Network", desc:"Integrated with all campus-approved vendors and canteens."},
                    {emoji:"📍", title:"Hyper-Local", desc:"100% within campus. No delivery zone confusion, ever."},
                  ].map((c,i)=>(
                    <div key={i} className="p-5 rounded-2xl text-center" style={{background:'rgba(255,255,255,0.6)', border:'1px solid rgba(219,234,254,0.5)'}}>
                      <div className="text-3xl mb-2">{c.emoji}</div>
                      <div className="font-bold text-gray-800 mb-1">{c.title}</div>
                      <div className="text-sm text-gray-500">{c.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ── Features ────────────────────────────────────────────────── */}
      <section id="features" className="py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-blue-600 mb-4"
              style={{background: 'rgba(219,234,254,0.8)'}}>FEATURES</div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Everything you need,<br/>delivered.</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">A complete platform built around the unique needs of campus living.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <FeatureCard key={i} {...f} delay={i * 0.1}/>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-24 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-blue-600 mb-4"
              style={{background: 'rgba(219,234,254,0.8)'}}>HOW IT WORKS</div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Four steps to your door.</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">From order to delivery — a seamless, end-to-end experience.</p>
          </div>
          <FlowDiagram/>
        </div>
      </section>

      {/* ── Traction / Stats ────────────────────────────────────────── */}
      <section id="traction" className="py-24 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          {(() => {
            const [ref, vis] = useInView();
            return (
              <div ref={ref} className="rounded-3xl p-12 relative overflow-hidden transition-all duration-700"
                style={{
                  opacity: vis ? 1 : 0,
                  background: 'linear-gradient(135deg, #1d4ed8, #1e40af, #1e3a8a)',
                  boxShadow: '0 24px 64px rgba(29,78,216,0.4)'
                }}>
                {/* bg decoration */}
                <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-10" style={{background: 'white'}}/>
                <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full opacity-10" style={{background: 'white'}}/>
                <div className="relative z-10 text-center mb-12">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-blue-200 mb-4"
                    style={{background: 'rgba(255,255,255,0.15)'}}>TRACTION</div>
                  <h2 className="text-4xl font-black text-white mb-3">Our Numbers Speak.</h2>
                  <p className="text-blue-200">Real growth. Real impact. Built for the campus.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                  {stats.map((s, i) => (
                    <div key={i} className="text-center p-6 rounded-2xl" style={{background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.15)'}}>
                      <div className="text-5xl font-black text-white mb-2">
                        <Counter target={s.value} suffix={s.suffix}/>
                      </div>
                      <div className="text-blue-200 font-medium">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ── Founder ─────────────────────────────────────────────────── */}
      <section id="founder" className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-blue-600 mb-4"
              style={{background: 'rgba(219,234,254,0.8)'}}>FOUNDER</div>
            <h2 className="text-4xl font-black text-gray-900">The story behind Knock Knock.</h2>
          </div>
          {(() => {
            const [ref, vis] = useInView();
            return (
              <div ref={ref} className="rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 transition-all duration-700"
                style={{
                  opacity: vis ? 1 : 0,
                  transform: vis ? 'none' : 'translateY(32px)',
                  background: 'rgba(255,255,255,0.8)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(219,234,254,0.6)',
                  boxShadow: '0 8px 48px rgba(37,99,235,0.1)'
                }}>
                {/* Founder avatar */}
                <div className="flex-shrink-0">
                  <div className="w-36 h-36 rounded-3xl flex items-center justify-center text-6xl shadow-xl"
                    style={{background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)', border: '3px solid rgba(219,234,254,0.8)'}}>
                    👨‍💼
                  </div>
                  <div className="mt-4 text-center">
                    <div className="font-bold text-gray-900">Founder</div>
                    <div className="text-sm text-blue-600">Knock Knock India</div>
                  </div>
                </div>
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-gray-900 mb-4">Building the future of campus logistics.</h3>
                  <div className="space-y-4">
                    {[
                      { icon: "🚀", text: "Founded and scaled an intra-campus delivery platform serving 5,000+ students across college campuses." },
                      { icon: "📈", text: "Acquired 1,500+ active users within 90 days through targeted outreach and viral referral campaigns." },
                      { icon: "⚙️", text: "Designed end-to-end delivery workflows and vendor coordination systems achieving a 98% on-time delivery rate." },
                    ].map((b, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 rounded-xl" style={{background: 'rgba(239,246,255,0.6)', border: '1px solid rgba(219,234,254,0.4)'}}>
                        <span className="text-xl flex-shrink-0 mt-0.5">{b.icon}</span>
                        <p className="text-gray-600 text-sm leading-relaxed">{b.text}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-6">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold text-blue-700" style={{background:'rgba(219,234,254,0.8)'}}>🇮🇳 India</span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold text-blue-700" style={{background:'rgba(219,234,254,0.8)'}}>Campus Tech</span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold text-blue-700" style={{background:'rgba(219,234,254,0.8)'}}>EdTech Logistics</span>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ── Testimonials ────────────────────────────────────────────── */}
      <section className="py-24 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-blue-600 mb-4"
              style={{background: 'rgba(219,234,254,0.8)'}}>TESTIMONIALS</div>
            <h2 className="text-4xl font-black text-gray-900">Loved by students.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} delay={i * 0.15}/>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section id="cta" className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          {(() => {
            const [ref, vis] = useInView();
            return (
              <div ref={ref} className="rounded-3xl p-12 text-center relative overflow-hidden transition-all duration-700"
                style={{
                  opacity: vis ? 1 : 0,
                  background: 'linear-gradient(135deg, #1e40af, #1d4ed8, #2563eb)',
                  boxShadow: '0 24px 64px rgba(29,78,216,0.4)'
                }}>
                <div className="absolute inset-0 pointer-events-none" style={{background:'radial-gradient(circle at 70% 30%, rgba(255,255,255,0.08), transparent 60%)'}}>
                </div>
                <div className="relative z-10">
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Join the future of<br/>campus delivery.</h2>
                  <p className="text-blue-200 text-lg mb-10 max-w-lg mx-auto">Sign up today and experience what thousands of students already love.</p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <button className="px-8 py-4 rounded-xl font-bold text-blue-700 bg-white text-base transition-all duration-200 hover:scale-105 hover:shadow-2xl active:scale-95">
                      Sign Up Free
                    </button>
                    <button className="px-8 py-4 rounded-xl font-bold text-white text-base border-2 border-blue-300 hover:border-white hover:bg-white/10 transition-all duration-200">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────── */}
      <footer className="border-t relative z-10 py-12" style={{borderColor:'rgba(219,234,254,0.5)', background:'rgba(255,255,255,0.5)', backdropFilter:'blur(8px)'}}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-10">
            <div className="max-w-xs">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-black text-sm" style={{background:'linear-gradient(135deg,#2563eb,#1d4ed8)'}}>KK</div>
                <span className="font-bold text-gray-900 text-lg">Knock Knock</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">Intra-campus delivery platform — delivering anything across campus, instantly.</p>
              <div className="flex gap-3 mt-4">
                {["𝕏","in","📸","📘"].map((s,i)=>(
                  <button key={i} className="w-8 h-8 rounded-lg text-xs font-bold text-blue-600 hover:bg-blue-100 transition-colors flex items-center justify-center" style={{background:'rgba(219,234,254,0.5)'}}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <div className="text-sm font-bold text-gray-800 mb-3">Product</div>
                {["Features","How It Works","Pricing","Download App"].map(l=>(
                  <div key={l} className="text-sm text-gray-500 hover:text-blue-600 cursor-pointer py-1 transition-colors">{l}</div>
                ))}
              </div>
              <div>
                <div className="text-sm font-bold text-gray-800 mb-3">Company</div>
                {["About","Founder","Blog","Careers"].map(l=>(
                  <div key={l} className="text-sm text-gray-500 hover:text-blue-600 cursor-pointer py-1 transition-colors">{l}</div>
                ))}
              </div>
              <div>
                <div className="text-sm font-bold text-gray-800 mb-3">Contact</div>
                <div className="text-sm text-gray-500 py-1">hello@knockknock.in</div>
                <div className="text-sm text-gray-500 py-1">Campus Hub, India</div>
                <div className="text-sm text-gray-500 py-1">+91 98765 43210</div>
              </div>
            </div>
          </div>
          <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-2" style={{borderTop:'1px solid rgba(219,234,254,0.5)'}}>
            <p className="text-xs text-gray-400">© 2024 Knock Knock. All rights reserved.</p>
            <p className="text-xs text-gray-400">Built with ❤️ for Indian campuses.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
