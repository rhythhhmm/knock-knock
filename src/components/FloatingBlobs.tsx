function FloatingBlobs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, #3b82f6, transparent)",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-1/3 -right-32 w-80 h-80 rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, #1d4ed8, transparent)",
          animation: "float 10s ease-in-out infinite 2s",
        }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #60a5fa, transparent)",
          animation: "float 7s ease-in-out infinite 1s",
        }}
      />
      <style>{`@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-20px)}}`}</style>
    </div>
  );
}

export default FloatingBlobs;
