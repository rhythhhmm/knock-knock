import React from "react";

const Footer = () => {
  return (
    <footer
      className="border-t relative z-10 py-12"
      style={{
        borderColor: "rgba(219,234,254,0.5)",
        background: "rgba(255,255,255,0.5)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-10">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-black text-sm"
                style={{
                  background: "linear-gradient(135deg,#2563eb,#1d4ed8)",
                }}
              >
                KK
              </div>
              <span className="font-bold text-gray-900 text-lg">
                Knock Knock
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Intra-campus delivery platform — delivering anything across
              campus, instantly.
            </p>
            <div className="flex gap-3 mt-4">
              {["𝕏", "in", "📸", "📘"].map((s, i) => (
                <button
                  key={i}
                  className="w-8 h-8 rounded-lg text-xs font-bold text-blue-600 hover:bg-blue-100 transition-colors flex items-center justify-center"
                  style={{ background: "rgba(219,234,254,0.5)" }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <div className="text-sm font-bold text-gray-800 mb-3">
                Product
              </div>
              {["Features", "How It Works", "Pricing", "Download App"].map(
                (l) => (
                  <div
                    key={l}
                    className="text-sm text-gray-500 hover:text-blue-600 cursor-pointer py-1 transition-colors"
                  >
                    {l}
                  </div>
                ),
              )}
            </div>
            <div>
              <div className="text-sm font-bold text-gray-800 mb-3">
                Company
              </div>
              {["About", "Founder", "Blog", "Careers"].map((l) => (
                <div
                  key={l}
                  className="text-sm text-gray-500 hover:text-blue-600 cursor-pointer py-1 transition-colors"
                >
                  {l}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="pt-6 flex flex-col md:flex-row justify-between items-center gap-2"
          style={{ borderTop: "1px solid rgba(219,234,254,0.5)" }}
        >
          <p className="text-xs text-gray-400">
            © 2024 Knock Knock. All rights reserved.
          </p>
          <p className="text-xs text-gray-400">
            Built with ❤️ for Indian campuses.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
