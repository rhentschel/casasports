import Link from "next/link"

export function BeforeDashboard() {
  return (
    <div
      style={{
        marginBottom: 32,
        padding: "28px 32px",
        background:
          "linear-gradient(135deg, rgba(230,57,70,0.12) 0%, rgba(230,57,70,0.02) 50%, transparent 100%)",
        border: "1px solid rgba(230,57,70,0.2)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
        <div>
          <p
            style={{
              margin: 0,
              fontSize: 11,
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "#e63946",
            }}
          >
            Casa Sports · Intern
          </p>
          <h2
            style={{
              margin: "10px 0 6px",
              fontSize: 24,
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "#f5f5f0",
            }}
          >
            Mitglieder-Dashboard mit KPIs &amp; Charts
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: 13,
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.5)",
              maxWidth: 520,
            }}
          >
            MRR, Abschluesse, Trend-Chart und Heatmap auf einen Blick. Aktualisiert sich automatisch.
          </p>
        </div>

        <Link
          href="/intern/dashboard"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "12px 22px",
            background: "#e63946",
            color: "#fff",
            textDecoration: "none",
            fontSize: 12,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            whiteSpace: "nowrap",
            transition: "background 0.3s",
          }}
        >
          Dashboard oeffnen
          <span style={{ fontSize: 14, lineHeight: 1 }}>→</span>
        </Link>
      </div>
    </div>
  )
}
