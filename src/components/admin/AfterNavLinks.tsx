import Link from "next/link"

export function AfterNavLinks() {
  return (
    <div style={{ marginTop: 20, marginBottom: 8 }}>
      <Link
        href="/intern/dashboard"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 10,
          padding: "14px 16px",
          background: "linear-gradient(135deg, rgba(230,57,70,0.15) 0%, rgba(230,57,70,0.05) 100%)",
          border: "1px solid rgba(230,57,70,0.35)",
          color: "#f5f5f0",
          textDecoration: "none",
          fontSize: 12,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          transition: "all 0.3s",
        }}
      >
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
          <span
            style={{
              display: "inline-block",
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#e63946",
              boxShadow: "0 0 8px rgba(230,57,70,0.6)",
            }}
          />
          KPI Dashboard
        </span>
        <span style={{ fontSize: 14, lineHeight: 1 }}>→</span>
      </Link>
    </div>
  )
}
