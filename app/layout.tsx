import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Footer from "@/components/footer"
import HeaderAnnouncement from "@/components/header-announcement"

const inter = Inter({ subsets: ["latin"] })

const APP_NAME = "LEAC - Laboratorio Especializado en Análisis Clínicos"
const APP_DESCRIPTION =
  "Laboratorio bioquímico líder en Santa Rosa de Calamuchita, Embalse y Villa del Dique. Análisis clínicos, bacteriológicos y veterinarios con tecnología moderna, resultados rápidos y atención personalizada. Más de 15 años de experiencia."
const APP_URL = "https://laboratorio-leac.vercel.app"
const OG_IMAGE_URL = `${APP_URL}/og-image-leac.jpg`
const FAVICON_URL = "/favicon-leac.png"
const THEME_COLOR = "#2563eb"

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  applicationName: APP_NAME,
  title: {
    default: "LEAC - Laboratorio de Análisis Clínicos en Santa Rosa de Calamuchita, Embalse y Villa del Dique",
    template: `%s | ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  themeColor: THEME_COLOR,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_NAME,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: "LEAC - Laboratorio de Análisis Clínicos en Calamuchita | Resultados Rápidos y Confiables",
      template: `%s | ${APP_NAME}`,
    },
    description: APP_DESCRIPTION,
    url: APP_URL,
    locale: "es_AR",
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "LEAC - Laboratorio Especializado en Análisis Clínicos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: "LEAC - Laboratorio de Análisis Clínicos en Calamuchita",
      template: `%s | ${APP_NAME}`,
    },
    description: APP_DESCRIPTION,
    images: [OG_IMAGE_URL],
  },
  keywords: [
    // Servicios principales
    "laboratorio análisis clínicos",
    "análisis de sangre",
    "análisis de orina",
    "análisis hormonales",
    "microbiología",
    "análisis veterinarios",
    "extracción a domicilio",
    "paneles virales",
    "COVID-19 test",
    "hemograma completo",
    "bioquímica sanguínea",
    "perfil lipídico",
    "función hepática",
    "función renal",
    "análisis de embarazo",
    "cultivos bacterianos",
    "antibiogramas",

    // Ubicaciones específicas
    "laboratorio Santa Rosa de Calamuchita",
    "laboratorio Embalse Córdoba",
    "laboratorio Villa del Dique",
    "análisis clínicos Santa Rosa",
    "análisis clínicos Embalse",
    "análisis clínicos Villa del Dique",
    "laboratorio Calamuchita",
    "laboratorio Córdoba",

    // Términos locales y regionales
    "laboratorio bioquímico Calamuchita",
    "análisis clínicos Córdoba",
    "laboratorio cerca de mí",
    "resultados rápidos",
    "atención personalizada",
    "tecnología moderna",
    "profesionales especializados",

    // Servicios especializados
    "análisis para empresas",
    "exámenes preocupacionales",
    "chequeos médicos",
    "análisis preventivos",
    "salud ocupacional",
    "medicina laboral",

    // Términos técnicos
    "bioquímico",
    "bacteriología",
    "virología",
    "hematología",
    "inmunología",
    "endocrinología",
    "parasitología",
    "serología",

    // Calidad y certificaciones
    "COBICO autorizado",
    "laboratorio habilitado",
    "control de calidad",
    "resultados confiables",
    "equipamiento moderno",

    // Podcast y divulgación
    "Generación Gen podcast",
    "divulgación científica",
    "genética",
    "educación en salud",
  ],
  authors: [{ name: "LEAC Laboratorio", url: APP_URL }],
  creator: "LEAC - Laboratorio Especializado en Análisis Clínicos",
  publisher: "LEAC Laboratorio",
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
    google: "google-site-verification-code", // Reemplazar con código real
  },
  alternates: {
    canonical: APP_URL,
  },
  other: {
    "geo.region": "AR-X",
    "geo.placename": "Santa Rosa de Calamuchita, Córdoba, Argentina",
    "geo.position": "-32.0667;-64.5333",
    ICBM: "-32.0667, -64.5333",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="/images/banner-principal-leac-actualizado.webp" as="image" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Montserrat+Alternates:wght@900&display=swap"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Montserrat+Alternates:wght@900&display=swap"
          rel="stylesheet"
          media="print"
          onLoad="this.media='all'"
        />
        <link rel="icon" href={FAVICON_URL} sizes="any" />
        <link rel="canonical" href={APP_URL} />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "LEAC - Laboratorio Especializado en Análisis Clínicos",
              description: APP_DESCRIPTION,
              url: APP_URL,
              logo: `${APP_URL}/images/leac-logo.jpg`,
              image: OG_IMAGE_URL,
              telephone: "+54-3571-36-0087",
              email: "info@laboratorioleac.com.ar",
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
              openingHours: ["Mo-Fr 07:00-12:30", "Mo-Fr 18:00-19:00"],
              priceRange: "$$",
              paymentAccepted: "Cash, Credit Card",
              currenciesAccepted: "ARS",
              areaServed: ["Santa Rosa de Calamuchita", "Embalse", "Villa del Dique", "Calamuchita", "Córdoba"],
              serviceType: [
                "Análisis Clínicos",
                "Análisis Bacteriológicos",
                "Análisis Veterinarios",
                "Extracción a Domicilio",
              ],
            }),
          }}
        />

        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js')
                    .then(registration => {
                      console.log('SW registered: ', registration);
                    })
                    .catch(registrationError => {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <HeaderAnnouncement />
        {children}
        <Footer />
      </body>
    </html>
  )
}
