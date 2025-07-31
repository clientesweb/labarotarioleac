import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, Microscope, Users, Target, ArrowLeft } from "lucide-react"
import WhatsAppFloatButton from "@/components/whatsapp-float-button"
import MobileMenu from "@/components/mobile-menu"

const APP_URL = "https://laboratorio-leac.vercel.app"

export const metadata: Metadata = {
  title: "Servicios de Análisis Clínicos | LEAC - Laboratorio en Santa Rosa de Calamuchita",
  description:
    "Servicios completos de análisis clínicos en Santa Rosa de Calamuchita, Embalse y Villa del Dique. Análisis de sangre, orina, hormonales, microbiología, paneles virales, extracción a domicilio y servicios para empresas. Resultados rápidos y confiables.",
  keywords: [
    "servicios análisis clínicos",
    "análisis de sangre Santa Rosa",
    "análisis de orina Embalse",
    "análisis hormonales Villa del Dique",
    "microbiología Calamuchita",
    "paneles virales COVID",
    "extracción a domicilio",
    "servicios para empresas",
    "exámenes preocupacionales",
    "hemograma completo",
    "bioquímica sanguínea",
    "perfil lipídico",
    "función hepática",
    "función renal",
    "cultivos bacterianos",
    "antibiogramas",
    "análisis veterinarios",
  ],
  openGraph: {
    title: "Servicios de Análisis Clínicos | LEAC Laboratorio",
    description:
      "Servicios completos de análisis clínicos con tecnología moderna y resultados confiables en Santa Rosa de Calamuchita, Embalse y Villa del Dique.",
    url: `${APP_URL}/servicios`,
    images: [
      {
        url: `${APP_URL}/og-image-servicios.jpg`,
        width: 1200,
        height: 630,
        alt: "Servicios de Análisis Clínicos LEAC",
      },
    ],
  },
  twitter: {
    title: "Servicios de Análisis Clínicos | LEAC Laboratorio",
    description: "Servicios completos de análisis clínicos con tecnología moderna y resultados confiables.",
    images: [`${APP_URL}/og-image-servicios.jpg`],
  },
  alternates: {
    canonical: `${APP_URL}/servicios`,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ServiciosPage() {
  const servicios = [
    {
      categoria: "Análisis de Sangre",
      descripcion: "Estudios completos del torrente sanguíneo",
      color: "red",
      servicios: [
        "Hemograma completo",
        "Química clínica",
        "Perfil lipídico (colesterol, triglicéridos)",
        "Glucemia",
        "Hemoglobina glicosilada",
        "Coagulograma",
        "Grupo sanguíneo y factor RH",
      ],
    },
    {
      categoria: "Análisis de Orina",
      descripcion: "Exámenes completos del sistema urinario",
      color: "blue",
      servicios: [
        "Examen físico químico",
        "Sedimento urinario",
        "Urocultivo",
        "Clearance de creatinina",
        "Proteinuria de 24 horas",
        "Microalbuminuria",
      ],
    },
    {
      categoria: "Análisis Hormonales",
      descripcion: "Estudios del sistema endocrino",
      color: "purple",
      servicios: [
        "Perfil tiroideo (TSH, T3, T4)",
        "Hormonas reproductivas",
        "Cortisol",
        "Insulina",
        "Hormona del crecimiento",
        "Prolactina",
        "Testosterona",
      ],
    },
    {
      categoria: "Microbiología",
      descripcion: "Detección e identificación de microorganismos",
      color: "green",
      servicios: [
        "Cultivos bacterianos",
        "Antibiogramas",
        "Cultivo de garganta",
        "Cultivo de heridas",
        "Cultivo de esputo",
        "Detección de estreptococo",
        "Análisis parasitológicos",
      ],
    },
    {
      categoria: "Análisis Especializados",
      descripcion: "Estudios específicos y marcadores",
      color: "orange",
      servicios: [
        "Marcadores tumorales",
        "Hepatitis B y C",
        "VIH",
        "Chagas",
        "Toxoplasmosis",
        "Citomegalovirus",
        "Rubéola",
      ],
    },
    {
      categoria: "Función Orgánica",
      descripcion: "Evaluación del funcionamiento de órganos",
      color: "teal",
      servicios: [
        "Función hepática",
        "Función renal",
        "Función cardíaca",
        "Función pancreática",
        "Perfil reumatológico",
        "Marcadores de inflamación",
      ],
    },
    {
      categoria: "Análisis de Embarazo",
      descripcion: "Seguimiento prenatal completo",
      color: "pink",
      servicios: [
        "Test de embarazo",
        "TORCH (Toxoplasmosis, Rubéola, CMV, Herpes)",
        "Glucosa en embarazadas",
        "Perfil prenatal",
        "Estreptococo grupo B",
        "Incompatibilidad Rh",
      ],
    },
    {
      categoria: "Análisis Veterinarios",
      descripcion: "Servicios especializados para mascotas",
      color: "amber",
      servicios: [
        "Hemograma veterinario",
        "Bioquímica veterinaria",
        "Análisis de orina animal",
        "Copro-parasitológico",
        "Cultivos veterinarios",
        "Perfil geriátrico animal",
      ],
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      red: "from-red-50 to-red-100 border-red-200 text-red-600",
      blue: "from-blue-50 to-blue-100 border-blue-200 text-blue-600",
      purple: "from-purple-50 to-purple-100 border-purple-200 text-purple-600",
      green: "from-green-50 to-green-100 border-green-200 text-green-600",
      orange: "from-orange-50 to-orange-100 border-orange-200 text-orange-600",
      teal: "from-teal-50 to-teal-100 border-teal-200 text-teal-600",
      pink: "from-pink-50 to-pink-100 border-pink-200 text-pink-600",
      amber: "from-amber-50 to-amber-100 border-amber-200 text-amber-600",
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Servicios de Análisis Clínicos LEAC",
            description:
              "Servicios completos de análisis clínicos, bacteriológicos y veterinarios con tecnología moderna",
            provider: {
              "@type": "MedicalBusiness",
              name: "LEAC - Laboratorio Especializado en Análisis Clínicos",
              url: APP_URL,
            },
            areaServed: ["Santa Rosa de Calamuchita", "Embalse", "Villa del Dique"],
            serviceType: [
              "Análisis de Sangre",
              "Análisis de Orina",
              "Análisis Hormonales",
              "Microbiología",
              "Paneles Virales",
              "Extracción a Domicilio",
              "Servicios para Empresas",
            ],
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
                className="font-text text-blue-600 font-text-bold transition-colors text-sm xl:text-base"
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
              NUESTROS SERVICIOS
            </h1>
            <p className="font-text-regular text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Análisis clínicos completos con tecnología de última generación y resultados confiables
            </p>
          </div>
        </div>
      </section>

      {/* Servicios Principales Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="font-title text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-gray-900 mb-4 sm:mb-6">
              SERVICIOS PRINCIPALES
            </h2>
            <p className="font-text-regular text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Servicios especializados diseñados para cubrir necesidades específicas
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-12">
            {/* Servicios para Empresas */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100 hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 sm:p-8 text-white">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <h3 className="font-title text-xl sm:text-2xl">EMPRESAS</h3>
                </div>
                <p className="font-text-regular text-sm sm:text-base text-blue-100">
                  Salud ocupacional y análisis clínicos adaptados al mundo laboral
                </p>
              </div>

              <div className="p-6 sm:p-8">
                <p className="font-text-regular text-sm sm:text-base text-gray-700 mb-6 leading-relaxed">
                  En Laboratorio LEAC brindamos servicios bioquímicos para empresas e instituciones, acompañando el
                  bienestar laboral con estudios personalizados.
                </p>

                <div className="mb-6">
                  <h4 className="font-text-bold text-base sm:text-lg text-gray-900 mb-3">✅ Servicios para empresas</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Evaluaciones preocupacionales (ingreso laboral)
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Controles anuales y exámenes periódicos
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Análisis clínicos según el tipo de trabajo o exposición
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Certificados de aptitud médica
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Planes de seguimiento y convenios empresariales
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-text-bold text-base sm:text-lg text-gray-900 mb-3">🧪 Análisis disponibles</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Perfil Laboral (básico y completo)
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Función Hepática y Renal
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Perfil Lipídico, Glucemia, Hemograma, Orina
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Perfil Tiroideo
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Serologías (HIV, Hepatitis B y C, VDRL, entre otros)
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Test de consumo de sustancias
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <p className="font-text-bold text-sm text-blue-800 mb-2">
                    📞 Solicitá tu presupuesto adaptado a tu empresa
                  </p>
                  <p className="font-text-regular text-xs text-blue-700">📲 Contacto por WhatsApp o email</p>
                </div>

                <Link
                  href="https://wa.me/5493571360087?text=Hola,%20necesito%20información%20sobre%20servicios%20para%20empresas%20en%20LEAC"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full font-text-bold bg-blue-600 hover:bg-blue-700 text-white">
                    Solicitar Presupuesto
                  </Button>
                </Link>
              </div>
            </div>

            {/* Paneles Virales */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-red-100 hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 sm:p-8 text-white">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">🦠</span>
                  </div>
                  <h3 className="font-title text-xl sm:text-2xl">ANALISIS VIROLOGICOS</h3>
                </div>
                <p className="font-text-regular text-sm sm:text-base text-red-100">
                  Detección de virus respiratorios y otras enfermedades infecciosas
                </p>
              </div>

              <div className="p-6 sm:p-8">
                <p className="font-text-regular text-sm sm:text-base text-gray-700 mb-6 leading-relaxed">
                  Contamos con estudios específicos para la detección rápida y confiable de virus respiratorios y
                  enfermedades virales.
                </p>

                <div className="mb-6">
                  <h4 className="font-text-bold text-base sm:text-lg text-gray-900 mb-3">
                    Panel respiratorio completo:
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      COVID-19 (PCR y test de antígenos)
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Influenza A y B
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Virus Sincicial Respiratorio
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Adenovirus
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Otros virus respiratorios estacionales
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-text-bold text-base sm:text-lg text-gray-900 mb-3">También realizamos:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Serologías virales: Hepatitis B y C, HIV, Epstein-Barr, Mononucleosis
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Test rápidos y estudios por PCR
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-lg mb-4">
                  <p className="font-text-bold text-sm text-red-800 mb-2">🕒 Resultados rápidos</p>
                  <p className="font-text-regular text-xs text-red-700">
                    Ideal para control de síntomas, contactos estrechos o chequeos previos a cirugías o viajes.
                  </p>
                </div>

                <Link
                  href="https://wa.me/5493571360087?text=Hola,%20necesito%20información%20sobre%20paneles%20virales%20en%20LEAC"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full font-text-bold bg-red-600 hover:bg-red-700 text-white">
                    Consultar Disponibilidad
                  </Button>
                </Link>
              </div>
            </div>

            {/* Extracción a Domicilio */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-green-100 hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 sm:p-8 text-white">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <h3 className="font-title text-xl sm:text-2xl">EXTRACCIÓN A DOMICILIO</h3>
                </div>
                <p className="font-text-regular text-sm sm:text-base text-green-100">
                  Tu análisis, sin moverte de casa
                </p>
              </div>

              <div className="p-6 sm:p-8">
                <p className="font-text-regular text-sm sm:text-base text-gray-700 mb-6 leading-relaxed">
                  Ofrecemos servicio de extracción a domicilio en Embalse, Santa Rosa y zonas cercanas.
                </p>

                <div className="mb-6">
                  <h4 className="font-text-bold text-base sm:text-lg text-gray-900 mb-3">Ideal para pacientes que:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Tienen movilidad reducida
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Son adultos mayores
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Necesitan evitar traslados por salud
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Prefieren la comodidad de su hogar
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-text-bold text-base sm:text-lg text-gray-900 mb-3">¿Cómo funciona?</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <span className="text-xs font-text-bold text-green-600">1</span>
                      </div>
                      <p className="text-sm text-gray-600">Coordinás tu turno por WhatsApp o teléfono</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <span className="text-xs font-text-bold text-green-600">2</span>
                      </div>
                      <p className="text-sm text-gray-600">Nuestro personal autorizado se acerca a tu domicilio</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <span className="text-xs font-text-bold text-green-600">3</span>
                      </div>
                      <p className="text-sm text-gray-600">Recibís los resultados por mail o los retirás en sede</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg mb-4">
                  <p className="font-text-bold text-sm text-green-800 mb-2">📲 Solicitá tu turno con anticipación</p>
                  <p className="font-text-regular text-xs text-green-700">
                    Disponible en Embalse, Santa Rosa y zonas cercanas
                  </p>
                </div>

                <Link
                  href="https://wa.me/5493571360087?text=Hola,%20necesito%20información%20sobre%20extracción%20a%20domicilio%20en%20LEAC"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full font-text-bold bg-green-600 hover:bg-green-700 text-white">
                    Solicitar Turno a Domicilio
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Separador */}
          <div className="text-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-8"></div>
            <p className="font-text-regular text-base text-gray-600">
              Además de nuestros servicios principales, ofrecemos una amplia gama de análisis clínicos
            </p>
          </div>
        </div>
      </section>

      {/* Servicios Grid */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
            <p className="font-text-regular text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Análisis clínicos organizados por categorías para una mejor comprensión de nuestros servicios
            </p>
          </div>
          <div className="grid gap-6 sm:gap-8 lg:gap-10">
            {servicios.map((categoria, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${getColorClasses(categoria.color)} border rounded-xl lg:rounded-2xl p-6 sm:p-8 lg:p-10`}
              >
                <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
                  <div className="lg:col-span-1">
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center mr-4 ${categoria.color === "red" ? "text-red-600" : categoria.color === "blue" ? "text-blue-600" : categoria.color === "purple" ? "text-purple-600" : categoria.color === "green" ? "text-green-600" : categoria.color === "orange" ? "text-orange-600" : categoria.color === "teal" ? "text-teal-600" : categoria.color === "pink" ? "text-pink-600" : "text-amber-600"}`}
                      >
                        <Microscope className="h-6 w-6 sm:h-7 sm:w-7" />
                      </div>
                      <div>
                        <h3 className="font-text-bold text-xl sm:text-2xl lg:text-3xl text-gray-900">
                          {categoria.categoria}
                        </h3>
                      </div>
                    </div>
                    <p className="font-text-regular text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                      {categoria.descripcion}
                    </p>
                  </div>

                  <div className="lg:col-span-2">
                    <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                      {categoria.servicios.map((servicio, serviceIndex) => (
                        <div
                          key={serviceIndex}
                          className="bg-white/70 backdrop-blur-sm p-3 sm:p-4 rounded-lg border border-white/50"
                        >
                          <div className="flex items-center">
                            <div
                              className={`w-2 h-2 rounded-full mr-3 flex-shrink-0 ${categoria.color === "red" ? "bg-red-500" : categoria.color === "blue" ? "bg-blue-500" : categoria.color === "purple" ? "bg-purple-500" : categoria.color === "green" ? "bg-green-500" : categoria.color === "orange" ? "bg-orange-500" : categoria.color === "teal" ? "bg-teal-500" : categoria.color === "pink" ? "bg-pink-500" : "bg-amber-500"}`}
                            ></div>
                            <span className="font-text-regular text-sm sm:text-base text-gray-800">{servicio}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Información Adicional */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="space-y-6">
            <h2 className="font-title text-2xl sm:text-3xl lg:text-4xl text-gray-900">ANÁLISIS CLÍNICOS GENERALES</h2>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-text-bold text-lg text-gray-900 mb-2">Precisión Garantizada</h3>
                  <p className="font-text-regular text-base text-gray-600">
                    Equipamiento de última generación y controles de calidad rigurosos
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-text-bold text-lg text-gray-900 mb-2">Resultados Rápidos</h3>
                  <p className="font-text-regular text-base text-gray-600">
                    Entrega en tiempo y forma sin comprometer la calidad
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-text-bold text-lg text-gray-900 mb-2">Atención Personalizada</h3>
                  <p className="font-text-regular text-base text-gray-600">
                    Trato humano y profesional en cada consulta
                  </p>
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
            ¿NECESITAS HACERTE UN ANÁLISIS?
          </h2>
          <p className="font-text-regular text-base sm:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Contactanos para más información sobre nuestros servicios o para reservar tu turno
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Link
              href="https://wa.me/5493571360087?text=Hola,%20me%20interesa%20reservar%20un%20turno%20en%20el%20laboratorio%20LEAC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="font-text-bold bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-base w-full sm:w-auto"
              >
                Reservar Turno
              </Button>
            </Link>
            <Link href="/nosotros">
              <Button
                size="lg"
                variant="outline"
                className="font-text-bold border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-base bg-transparent w-full sm:w-auto"
              >
                Conocer Más
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
