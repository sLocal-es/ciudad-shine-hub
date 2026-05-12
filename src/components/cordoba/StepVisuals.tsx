import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { mes: "M1", pos: 9 },
  { mes: "M2", pos: 7 },
  { mes: "M3", pos: 5 },
  { mes: "M4", pos: 3 },
  { mes: "M5", pos: 1 },
];

export const LocalPackMockup = () => (
  <div
    className="mx-auto"
    style={{
      width: 260,
      height: 460,
      borderRadius: 24,
      background: "#1a1a2e",
      border: "6px solid #333",
      padding: 14,
      boxShadow: "0 20px 40px -20px rgba(0,0,0,0.4)",
    }}
  >
    <div style={{ background: "#fff", borderRadius: 12, height: "100%", overflow: "hidden", padding: 10 }}>
      <div style={{ fontSize: 10, color: "#666", marginBottom: 8 }}>Resultados cerca de ti</div>
      {[
        { name: "Fontanería Centro", color: "#E8622A", highlight: true },
        { name: "Aguas y Reparaciones", color: "#3b82f6", highlight: false },
        { name: "Servitec Córdoba", color: "#10b981", highlight: false },
      ].map((r, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            gap: 10,
            padding: 10,
            marginBottom: 6,
            borderRadius: 6,
            borderLeft: r.highlight ? "3px solid #E8622A" : "3px solid transparent",
            background: r.highlight ? "rgba(232,84,26,0.06)" : "transparent",
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: r.color,
              flexShrink: 0,
            }}
          />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#111", marginBottom: 2 }}>{r.name}</div>
            <div style={{ color: "#fbbf24", fontSize: 10, marginBottom: 2 }}>★★★★★</div>
            <div style={{ fontSize: 10, color: "#666" }}>Fontanero · Córdoba</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const GBPMockup = () => (
  <div
    className="mx-auto"
    style={{
      width: 400,
      maxWidth: "100%",
      height: 280,
      borderRadius: 12,
      background: "#f8f8f8",
      border: "1px solid #e5e5e5",
      overflow: "hidden",
      boxShadow: "0 10px 30px -15px rgba(0,0,0,0.15)",
    }}
  >
    <div style={{ height: 24, background: "#e8e8e8", display: "flex", alignItems: "center", gap: 6, padding: "0 10px" }}>
      <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#ff5f57" }} />
      <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#ffbd2e" }} />
      <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#28c940" }} />
    </div>
    <div style={{ padding: 18 }}>
      <div style={{ fontSize: 16, fontWeight: 700, color: "#111", marginBottom: 4 }}>Tu negocio en Córdoba</div>
      <div style={{ fontSize: 12, color: "#666", marginBottom: 8 }}>Servicios profesionales</div>
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
        <span style={{ color: "#E8622A", fontSize: 14 }}>★★★★★</span>
        <span style={{ fontSize: 12, color: "#444" }}>47 reseñas</span>
      </div>
      <div style={{ fontSize: 12, color: "#444", marginBottom: 4 }}>Abierto · Cierra a las 20:00</div>
      <div style={{ fontSize: 12, color: "#444", marginBottom: 14 }}>Av. del Brillante, 12 · Córdoba</div>
      <button
        style={{
          background: "#1a73e8",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          padding: "8px 16px",
          fontSize: 12,
          fontWeight: 600,
          cursor: "default",
        }}
      >
        Cómo llegar
      </button>
    </div>
  </div>
);

export const PositionChart = () => (
  <div style={{ width: "100%", maxWidth: 380 }} className="mx-auto">
    <div className="text-xs text-muted-foreground mb-2">Posición media en Google Maps · Córdoba</div>
    <div style={{ height: 220 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
          <XAxis dataKey="mes" stroke="#999" fontSize={11} />
          <YAxis reversed domain={[1, 10]} stroke="#999" fontSize={11} />
          <Tooltip />
          <Line type="monotone" dataKey="pos" stroke="hsl(var(--primary))" strokeWidth={3} dot={{ r: 5, fill: "hsl(var(--primary))" }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);
