import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

const APP_URL = "https://www.laboratoriosleac.com.ar"

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    default: "LEAC - Laboratorio Especializado en Análisis Clínicos | Santa Rosa, Embalse, Villa del Dique",
    template: "%s | LEAC Laboratorio",
  },
  description:
    "LEAC es un laboratorio bioquímico especializado en análisis clínicos ubicado en Santa Rosa de Calamuchita, Embalse y Villa del Dique, Córdoba. Ofrecemos servicios de análisis de sangre, orina, microbiología, hormonas y más con tecnología moderna y resultados rápidos.",
  keywords: [
    "laboratorio bioquímico",
    "análisis clínicos",
    "Santa Rosa de Calamuchita",
    "Embalse",
    "Villa del Dique",
    "Córdoba",
    "análisis de sangre",
    "análisis de orina",
    "microbiología",
    "hormonas",
    "LEAC",
    "laboratorio LEAC",
    "bioquímica",
    "diagnóstico",
    "salud",
    "medicina",
    "Valle de Calamuchita",
  ],
  authors: [{ name: "LEAC Laboratorio" }],
  creator: "LEAC - Laboratorio Especializado en Análisis Clínicos",
  publisher: "LEAC Laboratorio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: APP_URL,
    siteName: "LEAC Laboratorio",
    title: "LEAC - Laboratorio Especializado en Análisis Clínicos",
    description:
      "Laboratorio bioquímico en Santa Rosa de Calamuchita, Embalse y Villa del Dique. Análisis clínicos con tecnología moderna y resultados rápidos.",
    images: [
      {
        url: `${APP_URL}/og-image-leac.jpg`,
        width: 1200,
        height: 630,
        alt: "LEAC - Laboratorio Especializado en Análisis Clínicos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LEAC - Laboratorio Especializado en Análisis Clínicos",
    description:
      "Laboratorio bioquímico en Santa Rosa de Calamuchita, Embalse y Villa del Dique. Análisis clínicos con tecnología moderna.",
    images: [`${APP_URL}/og-image-leac.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Reemplazar con el código real
  },
  alternates: {
    canonical: APP_URL,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "LEAC - Laboratorio Especializado en Análisis Clínicos",
              description:
                "Laboratorio bioquímico especializado en análisis clínicos con sedes en Santa Rosa de Calamuchita, Embalse y Villa del Dique, Córdoba.",
              url: APP_URL,
              telephone: "+54-3571-36-0087",
              email: "laboratoriosleac@gmail.com",
              address: [
                {
                  "@type": "PostalAddress",
                  streetAddress: "San Martín 3, Local A",
                  addressLocality: "Villa del Dique",
                  addressRegion: "Córdoba",
                  addressCountry: "AR",
                },
                {
                  "@type": "PostalAddress",
                  streetAddress: "Centro Médico Santa Rosa, Calle 6 N° 227",
                  addressLocality: "Santa Rosa de Calamuchita",
                  addressRegion: "Córdoba",
                  addressCountry: "AR",
                },
                {
                  "@type": "PostalAddress",
                  streetAddress: "Malvinas Argentinas 28",
                  addressLocality: "Embalse",
                  addressRegion: "Córdoba",
                  addressCountry: "AR",
                },
              ],
              openingHours: [
                "Mo-Fr 07:00-12:30",
                "Mo-Fr 18:00-19:00",
                "Mo-Fr 07:30-12:00",
                "Mo-Fr 07:00-14:00",
                "Mo-Fr 18:30-20:30",
              ],
              sameAs: ["https://www.instagram.com/laboratorioleac", "https://www.facebook.com/share/1F2wKnsmKP/"],
              medicalSpecialty: [
                "Clinical Laboratory Services",
                "Blood Analysis",
                "Urine Analysis",
                "Microbiology",
                "Hormonal Analysis",
                "Veterinary Analysis",
              ],
            }),
          }}
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon-leac.png" />
        <link rel="apple-touch-icon" href="/favicon-leac.png" />

        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Theme Color */}
        <meta name="theme-color" content="#2563eb" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
