import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Phone, Clock, MapPin, Mail } from "lucide-react"
import WhatsAppFloatButton from "@/components/whatsapp-float-button"
import { Button } from "@/components/ui/button"
import { locations } from "@/data/locations"
import ContactForm from "@/components/contact-form"
import MobileMenu from "@/components/mobile-menu"

const APP_URL = "https://www.laboratoriosleac.com.ar"

export const metadata: Metadata = {
  title: "Contacto y Ubicaciones | LEAC - Laboratorio en Santa Rosa, Embalse y Villa del Dique",
  description:
    "Contacta con LEAC Laboratorio. Ubicaciones en Santa Rosa de Calamuchita, Embalse y Villa del Dique. Horarios de atención, teléfonos, direcciones y formulario de contacto. Reserva tu turno por WhatsApp.",
  keywords: [
    "contacto LEAC laboratorio",
    "ubicaciones LEAC",
    "dirección Santa Rosa Calamuchita",
    "dirección Embalse laboratorio",
    "dirección Villa del Dique",
    "teléfono LEAC",
    "horarios atención laboratorio",
    "reservar turno LEAC",
    "WhatsApp laboratorio",
    "formulario contacto",
    "Centro Médico Santa Rosa",
    "San Martín Villa del Dique",
    "Malvinas Argentinas Embalse",
    "laboratoriosleac@gmail.com",
    "3571 36-0087",
    "laboratorio Córdoba contacto",
  ],
  openGraph: {
    title: "Contacto y Ubicaciones | LEAC Laboratorio",
    description:
      "Contacta con LEAC. Ubicaciones en Santa Rosa de Calamuchita, Embalse y Villa del Dique. Reserva tu turno.",
    url: `${APP_URL}/contacto`,
    images: [
      {
        url: `${APP_URL}/og-image-contacto.jpg`,
        width: 1200,
        height: 630,
        alt: "Contacto LEAC Laboratorio",
      },
    ],
  },
  twitter: {
    title: "Contacto y Ubicaciones | LEAC Laboratorio",
    description: "Contacta con LEAC. Ubicaciones en Santa Rosa, Embalse y Villa del Dique.",
    images: [`${APP_URL}/og-image-contacto.jpg`],
  },
  alternates: {
    canonical: `${APP_URL}/contacto`,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contacto LEAC Laboratorio",
            description: "Información de contacto y ubicaciones del laboratorio LEAC",
            mainEntity: {
              "@type": "MedicalBusiness",
              name: "LEAC - Laboratorio Especializado en Análisis Clínicos",
              telephone: "+54-3571-36-0087",
              email: "laboratoriosleac@gmail.com",
              url: APP_URL,
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
            },
          }),
        }}
      />

      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
            {/* Left Navigation - Desktop */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <Link
                href="/servicios"
                className="font-text text-gray-700 hover:text-blue-600 transition-colors text-sm xl:text-base"
              >
                Servicios
              </Link>
              <Link
                href="/nosotros"
                className="font-text text-gray-700 hover:text-blue-600 transition-colors text-sm xl:text-base"
              >
                Nosotros
              </Link>
              <Link
                href="/novedades"
                className="font-text text-gray-700 hover:text-blue-600 transition-colors text-sm xl:text-base"
              >
                Novedades
              </Link>
            </nav>

            {/* Logo - Centered on Desktop, Left on Mobile */}
            <Link
              href="/"
              className="flex items-center justify-center lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2"
            >
              <Image
                src="/images/leac-logo.jpg"
                alt="LEAC - Laboratorio Especializado en Análisis Clínicos"
                width={120}
                height={38}
                className="h-6 sm:h-8 lg:h-10 w-auto"
                priority
              />
            </Link>

            {/* Right Navigation - Desktop */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <Link
                href="/resultados"
                className="font-text text-gray-700 hover:text-blue-600 transition-colors text-sm xl:text-base"
              >
                Resultados
              </Link>
              <Link
                href="/podcast"
                className="font-text text-gray-700 hover:text-blue-600 transition-colors text-sm xl:text-base"
              >
                Podcast
              </Link>
              <Link
                href="/contacto"
                className="font-text text-blue-600 font-text-bold transition-colors text-sm xl:text-base"
              >
                Contacto
              </Link>
            </nav>

            {/* Mobile Menu */}
            <MobileMenu />
          </div>
        </div>
      </header>

      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Columna de Ubicaciones */}
            <div className="space-y-8">
              {locations.map((location, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="p-6 sm:p-8">
                    <h2 className="font-title text-2xl sm:text-3xl text-gray-900 mb-4">{location.name}</h2>
                    <div className="space-y-3 text-gray-700 font-text-regular text-base sm:text-lg">
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0" />
                        <span>{location.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0" />
                        <span>{location.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0" />
                        <span>{location.hours}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0" />
                        <span>{location.email}</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Link
                        href={`https://wa.me/${location.phone.replace(/\s/g, "").replace("+", "")}?text=${encodeURIComponent("Hola, me gustaría hacer una consulta sobre los servicios del laboratorio LEAC en " + location.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="w-full font-text-bold bg-green-500 hover:bg-green-600 text-white">
                          Contactar por WhatsApp
                        </Button>
                      </Link>
                    </div>
                  </div>
                  {location.imageUrl && (
                    <Link href={location.mapLink} target="_blank" rel="noopener noreferrer" className="block">
                      <div className="w-full h-[300px] sm:h-[350px] lg:h-[400px] border-t border-gray-200 relative">
                        <Image
                          src={location.imageUrl || "/placeholder.svg"}
                          alt={`Mapa de ${location.name}`}
                          fill
                          className="object-contain object-center"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                        />
                      </div>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Columna del Formulario de Contacto */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <WhatsAppFloatButton />
    </div>
  )
}
