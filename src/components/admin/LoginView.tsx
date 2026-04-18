"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function LoginView() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const res = await fetch("/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data?.errors?.[0]?.message || "Login fehlgeschlagen")
        setLoading(false)
        return
      }

      router.push("/admin")
    } catch {
      setError("Verbindungsfehler. Bitte erneut versuchen.")
      setLoading(false)
    }
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: "100vh",
        background: "#0a0a0a",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* Left: Image */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <Image
          src="/images/naim-casasports.webp"
          alt="Naim Obeid - Casa Sports"
          fill
          style={{
            objectFit: "cover",
            filter: "contrast(1.1) brightness(0.85) saturate(0.85)",
          }}
          priority
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, transparent 50%, #0a0a0a)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(10,10,10,0.8), transparent 60%)",
          }}
        />
        <div style={{ position: "absolute", bottom: 48, left: 48, right: 48 }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "#e63946",
              marginBottom: 12,
            }}
          >
            Admin Panel
          </p>
          <h1
            style={{
              fontSize: "clamp(2rem, 3vw, 3.5rem)",
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              color: "#f5f5f0",
              margin: 0,
            }}
          >
            Casa Sports
          </h1>
          <p
            style={{
              marginTop: 16,
              fontSize: 14,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.5)",
              maxWidth: 360,
            }}
          >
            Verwalte Inhalte, Bewerbungen, Mitgliedschaften und mehr.
          </p>
        </div>
      </div>

      {/* Right: Login Form */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 48,
          background: "#111111",
        }}
      >
        <div style={{ width: "100%", maxWidth: 380 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <Image
              src="/images/casa-sports-logo.webp"
              alt="Casa Sports"
              width={180}
              height={50}
              style={{ objectFit: "contain", margin: "0 auto" }}
            />
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 20 }}>
              <label
                style={{
                  display: "block",
                  fontSize: 11,
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "rgba(255,255,255,0.4)",
                  marginBottom: 8,
                }}
              >
                E-Mail
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoFocus
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 0,
                  color: "#f5f5f0",
                  fontSize: 14,
                  outline: "none",
                  transition: "border-color 0.3s",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#e63946")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
              />
            </div>

            <div style={{ marginBottom: 24 }}>
              <label
                style={{
                  display: "block",
                  fontSize: 11,
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "rgba(255,255,255,0.4)",
                  marginBottom: 8,
                }}
              >
                Passwort
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 0,
                  color: "#f5f5f0",
                  fontSize: 14,
                  outline: "none",
                  transition: "border-color 0.3s",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#e63946")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
              />
            </div>

            {error && (
              <div
                style={{
                  padding: "12px 16px",
                  marginBottom: 20,
                  background: "rgba(230,57,70,0.1)",
                  border: "1px solid rgba(230,57,70,0.2)",
                  fontSize: 13,
                  color: "#e63946",
                }}
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                padding: "14px 24px",
                background: "#e63946",
                border: "1px solid #e63946",
                color: "#fff",
                fontSize: 13,
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                cursor: loading ? "not-allowed" : "pointer",
                opacity: loading ? 0.6 : 1,
                transition: "all 0.3s",
              }}
              onMouseOver={(e) => {
                if (!loading) {
                  e.currentTarget.style.background = "transparent"
                }
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "#e63946"
              }}
            >
              {loading ? "Wird angemeldet..." : "Anmelden"}
            </button>

            <div style={{ marginTop: 20, textAlign: "center" }}>
              <a
                href="/admin/forgot"
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                  letterSpacing: "0.05em",
                  transition: "color 0.3s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#e63946")}
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
                }
              >
                Passwort vergessen?
              </a>
            </div>
          </form>

          <p
            style={{
              marginTop: 32,
              textAlign: "center",
              fontSize: 12,
              color: "rgba(255,255,255,0.2)",
            }}
          >
            Casa Sports Admin
          </p>
        </div>
      </div>
    </div>
  )
}
