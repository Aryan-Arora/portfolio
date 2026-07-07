import { ImageResponse } from "next/og";

export const alt = "Aryan Arora — a portfolio that works like a Mac";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background:
            "linear-gradient(135deg, #f7c59f 0%, #b15f7a 30%, #5b4272 55%, #10142e 85%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* menu bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 44,
            background: "rgba(0,0,0,0.4)",
            color: "rgba(255,255,255,0.9)",
            padding: "0 28px",
            fontSize: 20,
          }}
        >
          <div style={{ display: "flex", gap: 24 }}>
            <span style={{ fontWeight: 700 }}>Finder</span>
            <span style={{ opacity: 0.6 }}>File</span>
            <span style={{ opacity: 0.6 }}>Edit</span>
            <span style={{ opacity: 0.6 }}>View</span>
          </div>
          <span style={{ opacity: 0.8 }}>Mon Jul 6&ensp;9:41 AM</span>
        </div>

        {/* window */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "56px auto 0",
            width: 880,
            borderRadius: 18,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 9,
              background: "#2f2f31",
              padding: "14px 18px",
            }}
          >
            <div style={{ width: 16, height: 16, borderRadius: 8, background: "#ff5f57" }} />
            <div style={{ width: 16, height: 16, borderRadius: 8, background: "#febc2e" }} />
            <div style={{ width: 16, height: 16, borderRadius: 8, background: "#28c840" }} />
            <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 18, marginLeft: 300 }}>
              Notes
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              background: "#1c1c1e",
              padding: "40px 56px 52px",
            }}
          >
            <span style={{ fontSize: 60, fontWeight: 700, color: "#ffffff" }}>
              👋 aryan arora
            </span>
            <span
              style={{
                marginTop: 20,
                fontSize: 30,
                color: "rgba(255,255,255,0.75)",
              }}
            >
              front-end developer · python developer · ai/ml enthusiast
            </span>
            <span
              style={{
                marginTop: 12,
                fontSize: 26,
                color: "rgba(255,255,255,0.45)",
              }}
            >
              building hostiggo · b.tech IT @ MSIT &rsquo;28 · new delhi
            </span>
          </div>
        </div>

        {/* dock */}
        <div
          style={{
            display: "flex",
            gap: 14,
            margin: "auto auto 26px",
            padding: "12px 18px",
            borderRadius: 24,
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.18)",
          }}
        >
          {["#4dc4f5", "#fdc636", "#10ce3c", "#0a66c2", "#0d0d0d", "#8e8e93"].map(
            (c) => (
              <div
                key={c}
                style={{ width: 52, height: 52, borderRadius: 14, background: c }}
              />
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
