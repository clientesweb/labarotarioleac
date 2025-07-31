import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, FileText, Clock, Shield, Smartphone, Monitor } from "lucide-react"
import WhatsAppFloatButton from "@/components/whatsapp-float-button"
import MobileMenu from "@/components/mobile-menu"

const APP_URL = "https://laboratorio-leac.vercel.app"

export const metadata: Metadata = {
  title: "Resultados Online | LEAC - Consulta tus análisis clínicos",
  description:
    "Plataforma digital en desarrollo para consultar y descargar resultados de análisis clínicos del laboratorio LEAC. Mientras tanto, consulta tus resultados por teléfono o retíralos en nuestras sedes de Santa Rosa, Embalse y Villa del Dique.",
  keywords: [
    "resultados análisis clínicos online",
    "consultar resultados LEAC",
    "descargar resultados laboratorio",
    "plataforma digital resultados",
    "resultados análisis Santa Rosa",
    "resultados análisis Embalse",
    "resultados análisis Villa del Dique",
    "consulta resultados teléfono",
    "retirar resultados sede",
    "resultados seguros",
    "acceso resultados 24 horas",
    "resultados PDF",
    "consulta análisis clínicos",
    "resultados rápidos",
    "plataforma resultados médicos",
  ],
  openGraph: {
    title: "Resultados Online | LEAC - Consulta tus análisis clínicos",
    description:
      "Plataforma digital en desarrollo para consultar resultados de análisis clínicos. Consulta por teléfono o retira en sede.",
    url: `${APP_URL}/resultados`,
    images: [
      {
        url: `${APP_URL}/og-image-resultados.jpg`,
        width: 1200,
        height: 630,
        alt: "Resultados Online LEAC Laboratorio",
      },
    ],
  },
  twitter: {
    title: "Resultados Online | LEAC Laboratorio",
    description: "Plataforma digital en desarrollo para consultar resultados de análisis clínicos.",
    images: [`${APP_URL}/og-image-resultados.jpg`],
  },
  alternates: {
    canonical: `${APP_URL}/resultados`,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ResultadosPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Resultados Online LEAC",
            description: "Plataforma digital para consultar resultados de análisis clínicos",
            applicationCategory: "HealthApplication",
            operatingSystem: "Web",
            provider: {
              "@type": "MedicalBusiness",
              name: "LEAC - Laboratorio Especializado en Análisis Clínicos",
              url: APP_URL,
            },
            url: `${APP_URL}/resultados`,
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
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <nav className="flex items-center space-x-6 xl:space-x-8">
                <Link
                  href="/resultados"
                  className="font-text text-blue-600 font-text-bold transition-colors text-sm xl:text-base"
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
                  className="font-text text-gray-700 hover:text-blue-600 transition-colors text-sm xl:text-base"
                >
                  Contacto
                </Link>
              </nav>
              <Link
                href="https://wa.me/5493571360087?text=Hola,%20me%20interesa%20reservar%20un%20turno%20en%20el%20laboratorio%20LEAC"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="font-text-bold bg-blue-600 hover:bg-blue-700 text-sm px-4 py-2">
                  Reservar Turno
                </Button>
              </Link>
            </div>

            {/* Mobile Menu */}
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4 sm:mb-6 font-text-regular text-sm sm:text-base"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al inicio
            </Link>
            <h1 className="font-title text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-gray-900 mb-4 sm:mb-6">
              RESULTADOS ONLINE
            </h1>
            <p className="font-text-regular text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Accede a tus resultados de análisis clínicos de forma rápida y segura
            </p>
          </div>
        </div>
      </section>

      {/* En Desarrollo Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            {/* Icono principal */}
            <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8">
              <div className="relative">
                <FileText className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 text-blue-600" />
                <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                </div>
              </div>
            </div>

            {/* Mensaje principal */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 sm:p-8 lg:p-12 rounded-2xl border border-blue-200 mb-8 sm:mb-12">
              <h2 className="font-title text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-4 sm:mb-6">
                PRÓXIMAMENTE EN DESARROLLO
              </h2>
              <p className="font-text-regular text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
                Estamos trabajando en una plataforma digital donde podrás descargar tus resultados de análisis clínicos
                de forma segura y conveniente, disponible las 24 horas del día.
              </p>
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-text-bold">
                <Clock className="h-4 w-4 mr-2" />
                En desarrollo activo
              </div>
            </div>

            {/* Características futuras */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Download className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-text-bold text-lg text-gray-900 mb-3">Descarga Instantánea</h3>
                <p className="font-text-regular text-sm text-gray-600">
                  Accede y descarga tus resultados en formato PDF de forma inmediata
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-text-bold text-lg text-gray-900 mb-3">Acceso Seguro</h3>
                <p className="font-text-regular text-sm text-gray-600">
                  Plataforma protegida con autenticación segura para tu privacidad
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Smartphone className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-text-bold text-lg text-gray-900 mb-3">Multiplataforma</h3>
                <p className="font-text-regular text-sm text-gray-600">
                  Compatible con computadoras, tablets y dispositivos móviles
                </p>
              </div>
            </div>

            {/* Información actual */}
            <div className="bg-gray-50 p-6 sm:p-8 rounded-xl border border-gray-200">
              <h3 className="font-text-bold text-xl sm:text-2xl text-gray-900 mb-4">
                Mientras tanto, obtén tus resultados:
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Monitor className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-text-bold text-base text-gray-900 mb-1">Retiro en sede</h4>
                    <p className="font-text-regular text-sm text-gray-600">
                      Visita cualquiera de nuestras sedes durante el horario de atención
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Smartphone className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-text-bold text-base text-gray-900 mb-1">Consulta telefónica</h4>
                    <p className="font-text-regular text-sm text-gray-600">
                      Llámanos para consultar sobre el estado de tus análisis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h2 className="font-title text-2xl sm:text-3xl lg:text-4xl text-white mb-4 sm:mb-6">
            ¿NECESITAS TUS RESULTADOS?
          </h2>
          <p className="font-text-regular text-base sm:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Mientras desarrollamos la plataforma digital, contactanos para obtener tus resultados
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Link
              href="https://wa.me/5493571360087?text=Hola,%20quiero%20consultar%20sobre%20mis%20resultados%20de%20análisis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="font-text-bold bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-base w-full sm:w-auto"
              >
                Consultar Resultados
              </Button>
            </Link>
            <Link href="/contacto">
              <Button
                size="lg"
                variant="outline"
                className="font-text-bold border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-base bg-transparent w-full sm:w-auto"
              >
                Más Información
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <WhatsAppFloatButton />
    </div>
  )
}
