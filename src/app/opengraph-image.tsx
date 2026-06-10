import { ImageResponse } from "next/og";

export const alt = "Hendra Gunawan — Senior Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0a0a0b",
          backgroundImage:
            "radial-gradient(900px 600px at 85% -10%, rgba(63,185,80,0.18), transparent 60%)",
          color: "#e6edf3",
          padding: "90px",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#8b949e" }}>
          <span style={{ color: "#3fb950" }}>hendra@portfolio</span>
          <span>:</span>
          <span style={{ color: "#56d4dd" }}>~</span>
          <span>$ whoami</span>
        </div>
        <div style={{ display: "flex", fontSize: 92, fontWeight: 700, marginTop: 22, letterSpacing: -3 }}>
          Hendra Gunawan
        </div>
        <div style={{ display: "flex", fontSize: 40, color: "#3fb950", marginTop: 6 }}>
          Senior Software Engineer
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#8b949e", marginTop: 34 }}>
          React · Next.js · Node.js · TypeScript · PHP / Laravel
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#6e7681", marginTop: 54 }}>
          Fintech · public-sector · 7+ years shipping production systems
        </div>
      </div>
    ),
    { ...size },
  );
}
