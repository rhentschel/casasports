import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { SkipLink } from "@/components/layout/skip-link"
import { CookieBanner } from "@/components/ui/cookie-banner"
import { WhatsappButton } from "@/components/ui/whatsapp-button"
import { JsonLd } from "@/components/schema/json-ld"
import { healthClubSchema, serviceCatalogSchema, websiteSchema } from "@/lib/schema"
import { siteConfig } from "@/data/site"
import "./styles.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} - Fitnessstudio Oer-Erkenschwick`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: siteConfig.name,
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: "/images/casasports-hero-1.webp",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Fitnessstudio Oer-Erkenschwick`,
      },
    ],
  },
}

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <JsonLd data={[healthClubSchema(), websiteSchema(), serviceCatalogSchema()]} />
        <SkipLink />
        <Header />
        <main id="main" tabIndex={-1}>{children}</main>
        <Footer />
        <WhatsappButton />
        <CookieBanner />
      </body>
    </html>
  )
}
