"use client";

export default function CampusIllustration() {
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
            <stop offset="0%" stopColor="#dbeafe" />
            <stop offset="100%" stopColor="#eff6ff" />
          </linearGradient>
          <linearGradient id="buildingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1d4ed8" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
          <linearGradient id="buildingGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e40af" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id="groundGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#bfdbfe" />
            <stop offset="100%" stopColor="#93c5fd" />
          </linearGradient>
          <linearGradient id="packageGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#1d4ed8" floodOpacity="0.25" />
          </filter>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background */}
        <rect width="480" height="420" fill="url(#skyGrad)" rx="20" />

        {/* Ground */}
        <ellipse cx="240" cy="370" rx="200" ry="30" fill="url(#groundGrad)" opacity="0.5" />

        {/* Building 1 – left */}
        <g className="float-slow" style={{ transformOrigin: "100px 280px" }}>
          <rect x="60" y="160" width="80" height="200" rx="4" fill="url(#buildingGrad)" filter="url(#shadow)" />
          <rect x="60" y="155" width="80" height="15" rx="2" fill="#1e3a8a" />
          {[0, 1, 2, 3, 4].map((r) =>
            [0, 1, 2].map((c) => (
              <rect
                key={`w1-${r}-${c}`}
                x={72 + c * 22}
                y={175 + r * 30}
                width="14"
                height="18"
                rx="2"
                fill={(r + c) % 3 === 0 ? "#93c5fd" : "#bfdbfe"}
                opacity="0.9"
              />
            ))
          )}
          <text x="100" y="375" textAnchor="middle" fontSize="10" fill="#1e40af" fontWeight="600">
            Hostel A
          </text>
        </g>

        {/* Building 2 – center */}
        <g className="float-anim" style={{ transformOrigin: "240px 260px" }}>
          <rect x="175" y="120" width="130" height="240" rx="4" fill="url(#buildingGrad2)" filter="url(#shadow)" />
          <rect x="175" y="112" width="130" height="18" rx="2" fill="#1e3a8a" />
          <polygon points="240,88 175,112 305,112" fill="#1e40af" />
          {[0, 1, 2, 3, 4, 5].map((r) =>
            [0, 1, 2, 3].map((c) => (
              <rect
                key={`w2-${r}-${c}`}
                x={183 + c * 28}
                y={135 + r * 32}
                width="18"
                height="20"
                rx="2"
                fill={r === 2 && c === 1 ? "#fbbf24" : "#bfdbfe"}
                opacity="0.9"
                className={r === 2 && c === 1 ? "blink-anim" : ""}
              />
            ))
          )}
          <text x="240" y="375" textAnchor="middle" fontSize="10" fill="#1e40af" fontWeight="700">
            Main Campus
          </text>
        </g>

        {/* Building 3 – right */}
        <g className="float-slow" style={{ transformOrigin: "370px 290px", animationDelay: "1.5s" }}>
          <rect x="330" y="190" width="75" height="170" rx="4" fill="url(#buildingGrad)" filter="url(#shadow)" />
          <rect x="330" y="184" width="75" height="12" rx="2" fill="#1e3a8a" />
          {[0, 1, 2, 3].map((r) =>
            [0, 1].map((c) => (
              <rect
                key={`w3-${r}-${c}`}
                x={340 + c * 28}
                y={200 + r * 32}
                width="16"
                height="20"
                rx="2"
                fill="#bfdbfe"
                opacity="0.9"
              />
            ))
          )}
          <text x="367" y="375" textAnchor="middle" fontSize="10" fill="#1e40af" fontWeight="600">
            Canteen
          </text>
        </g>

        {/* Dashed delivery paths */}
        <path d="M140,310 Q190,280 230,300" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 4" fill="none" opacity="0.6" className="dash-anim" />
        <path d="M305,270 Q340,260 370,280" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 4" fill="none" opacity="0.6" className="dash-anim" />

        {/* Floating delivery package */}
        <g className="float-anim" style={{ transformOrigin: "200px 240px", animationDelay: "0.5s" }} filter="url(#shadow)">
          <rect x="180" y="225" width="40" height="32" rx="4" fill="url(#packageGrad)" />
          <rect x="180" y="225" width="40" height="8" rx="2" fill="#1e40af" />
          <line x1="200" y1="225" x2="200" y2="257" stroke="#93c5fd" strokeWidth="1.5" />
          <line x1="180" y1="237" x2="220" y2="237" stroke="#93c5fd" strokeWidth="1.5" />
          <circle cx="200" cy="212" r="6" fill="#3b82f6" filter="url(#glow)" />
          <circle cx="200" cy="212" r="6" fill="none" stroke="#60a5fa" strokeWidth="2" className="pulse-ring" />
        </g>

        {/* Delivery scooter */}
        <g className="float-anim" style={{ transformOrigin: "310px 310px", animationDelay: "1s" }}>
          <ellipse cx="310" cy="330" rx="30" ry="8" fill="#1d4ed8" opacity="0.2" />
          <rect x="288" y="308" width="44" height="22" rx="8" fill="#2563eb" />
          <rect x="308" y="300" width="24" height="14" rx="4" fill="#3b82f6" />
          <circle cx="296" cy="330" r="8" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="2" />
          <circle cx="324" cy="330" r="8" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="2" />
          <rect x="305" y="296" width="10" height="12" rx="2" fill="#bfdbfe" />
        </g>

        {/* Orbital dot representing network */}
        <g style={{ transformOrigin: "240px 240px" }}>
          <circle cx="240" cy="240" r="110" fill="none" stroke="#bfdbfe" strokeWidth="1" strokeDasharray="4 6" opacity="0.5" />
          <circle r="7" fill="#3b82f6" filter="url(#glow)" className="orbit-dot" />
        </g>

        {/* Status badge */}
        <g className="float-anim" style={{ animationDelay: "0.8s" }}>
          <rect x="20" y="50" width="120" height="36" rx="18" fill="white" opacity="0.9" filter="url(#shadow)" />
          <circle cx="42" cy="68" r="8" fill="#22c55e" />
          <text x="56" y="65" fontSize="10" fontWeight="700" fill="#1e40af">
            Live Tracking
          </text>
          <text x="56" y="77" fontSize="9" fill="#6b7280">
            2 min away ✓
          </text>
        </g>

        {/* Order badge */}
        <g className="float-anim" style={{ animationDelay: "1.2s" }}>
          <rect x="340" y="45" width="120" height="36" rx="18" fill="white" opacity="0.9" filter="url(#shadow)" />
          <circle cx="362" cy="63" r="8" fill="#3b82f6" />
          <text x="376" y="60" fontSize="10" fontWeight="700" fill="#1e40af">
            New Order!
          </text>
          <text x="376" y="72" fontSize="9" fill="#6b7280">
            Hostel B → Canteen
          </text>
        </g>
      </svg>
    </div>
  );
}
