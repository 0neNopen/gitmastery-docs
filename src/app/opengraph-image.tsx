import { ImageResponse } from "next/og";

export const alt = "GitMastery — Dokumentasi & Panduan Git dan GitHub";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

/**
 * Static Open Graph & Twitter preview card generated at build time via
 * Next.js `ImageResponse` (zero external network fetches).
 */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          backgroundColor: "#0b141c",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(242, 91, 54, 0.28), transparent 50%), radial-gradient(circle at 15% 85%, rgba(59, 130, 246, 0.16), transparent 45%)",
          color: "#dae3ef",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top brand bar */}
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: "linear-gradient(135deg, #F1502F 0%, #DF3813 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="36" height="36" viewBox="0 0 32 32" fill="none">
              <line x1="11" y1="9" x2="11" y2="23" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" />
              <path d="M 11 19 C 11 14, 21 16.5, 21 12" fill="none" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" />
              <circle cx="11" cy="9" r="3" fill="#FFFFFF" />
              <circle cx="11" cy="23" r="3" fill="#FFFFFF" />
              <circle cx="21" cy="11" r="3" fill="#FFFFFF" />
            </svg>
          </div>
          <div style={{ fontSize: "34px", fontWeight: 800, letterSpacing: "-0.02em", color: "#ffffff" }}>
            GitMastery
          </div>
        </div>

        {/* Main headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "960px" }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              padding: "8px 18px",
              borderRadius: "9999px",
              border: "1px solid rgba(242, 91, 54, 0.45)",
              backgroundColor: "rgba(242, 91, 54, 0.14)",
              color: "#f25b36",
              fontSize: "20px",
              fontWeight: 700,
            }}
          >
            Panduan Komprehensif Git & GitHub
          </div>

          <div
            style={{
              fontSize: "62px",
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
              color: "#ffffff",
            }}
          >
            Kuasai Kontrol Versi dengan Presisi.
          </div>

          <div style={{ fontSize: "26px", lineHeight: 1.45, color: "#9ba5b0" }}>
            Dokumentasi berbahasa Indonesia, roadmap terstruktur, cheat sheet, dan praktik proyek dari nol hingga kolaborasi tim.
          </div>
        </div>

        {/* Footer tags */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "20px", color: "#9ba5b0" }}>
          <span>Dasar Git</span>
          <span style={{ color: "#f25b36" }}>•</span>
          <span>Alur Kerja GitHub</span>
          <span style={{ color: "#f25b36" }}>•</span>
          <span>Tutorial Proyek</span>
          <span style={{ color: "#f25b36" }}>•</span>
          <span>Cheat Sheet & Troubleshooting</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
