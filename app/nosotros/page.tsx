import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, Heart, Users, Award, Shield, Target, ArrowLeft } from "lucide-react"
import WhatsAppFloatButton from "@/components/whatsapp-float-button"
import MobileMenu from "@/components/mobile-menu"

const APP_URL = "https://www.laboratoriosleac.com.ar"

export const metadata: Metadata = {
  title: "Nosotros | LEAC - Más de 15 años de experiencia en análisis clínicos",
  description:
    "Conoce la historia de LEAC, laboratorio fundado en 2008 en Embalse de Calamuchita. Más de 15 años brindando servicios de análisis clínicos con profesionales especializados y tecnología moderna en Santa Rosa, Embalse y Villa del Dique.",
  keywords: [
    "historia LEAC laboratorio",
    "equipo profesional LEAC",
    "bioquímicos especializados",
    "laboratorio Calamuchita historia",
    "Dr. Pablo Gagliardi",
    "15 años experiencia",
    "profesionales análisis clínicos",
    "equipo médico Santa Rosa",
    "bioquímicos Embalse",
    "técnicos especializados",
    "valores laboratorio",
    "confianza calidad",
    "compromiso salud",
    "atención personalizada",
    "excelencia servicio",
  ],
  openGraph: {
    title: "Nosotros | LEAC - Más de 15 años cuidando tu salud",
    description:
      "Conoce la historia y el equipo profesional de LEAC. Más de 15 años de experiencia en análisis clínicos con tecnología moderna y atención personalizada.",
    url: `${APP_URL}/nosotros`,
    images: [
      {
        url: `${APP_URL}/og-image-nosotros.jpg`,
        width: 1200,
        height: 630,
        alt: "Equipo profesional LEAC Laboratorio",
      },
    ],
  },
  twitter: {
    title: "Nosotros | LEAC - Más de 15 años cuidando tu salud",
    description:
      "Conoce la historia y el equipo profesional de LEAC. Más de 15 años de experiencia en análisis clínicos.",
    images: [`${APP_URL}/og-image-nosotros.jpg`],
  },
  alternates: {
    canonical: `${APP_URL}/nosotros`,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "Nosotros - LEAC Laboratorio",
            description: "Historia y equipo profesional de LEAC, laboratorio con más de 15 años de experiencia",
            mainEntity: {
              "@type": "MedicalBusiness",
              name: "LEAC - Laboratorio Especializado en Análisis Clínicos",
              foundingDate: "2008",
              founder: {
                "@type": "Person",
                name: "Dr. Pablo Gagliardi",
              },
              employee: [
                {
                  "@type": "Person",
                  name: "Bioq. Rosana Heras",
                  jobTitle: "Directora Técnica Villa del Dique",
                },
                {
                  "@type": "Person",
                  name: "Bioq. Esp. Evelyn Butassi",
                  jobTitle: "Directora Técnica Santa Rosa y Embalse",
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
                className="font-text text-blue-600 font-text-bold transition-colors text-sm xl:text-base"
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
                className="font-text text-gray-700 hover:text-blue-600 transition-colors text-sm xl:text-base"
              >
                Contacto
              </Link>
            </nav>

            {/* Mobile Menu */}
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-8 sm:py-12 lg:py-16 xl:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto mb-4 sm:mb-6">
            <Link
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4 sm:mb-6 font-text-regular text-sm sm:text-base"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al inicio
            </Link>
          </div>
          <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-8 xl:gap-12 items-center">
            {/* Contenido */}
            <div className="lg:col-span-3 space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
              <div>
                <h1 className="font-title text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-gray-900 mb-3 sm:mb-4 lg:mb-6">
                  NOSOTROS
                </h1>
                <p className="font-text-regular text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Más de 15 años comprometidos con la salud de nuestra comunidad
                </p>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-3 sm:space-x-4 text-blue-600">
                <Heart className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 flex-shrink-0" />
                <span className="font-text-bold text-sm sm:text-base lg:text-lg xl:text-xl">
                  Confianza • Calidad • Compromiso
                </span>
              </div>
            </div>

            {/* Imagen del Equipo */}
            <div className="lg:col-span-2 order-first lg:order-last relative">
              <div className="relative h-[280px] xs:h-[320px] sm:h-[350px] md:h-[380px] lg:h-[400px] xl:h-[450px] 2xl:h-[480px] rounded-xl lg:rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl">
                <Image
                  src="/images/nosotros-equipo-nuevo.webp"
                  alt="Equipo profesional del Laboratorio LEAC"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              {/* Elementos decorativos */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32 bg-blue-600 rounded-full opacity-10 -z-10"></div>
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-blue-400 rounded-full opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Historia Section */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="font-title text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4 sm:mb-6">
              NUESTRA HISTORIA
            </h2>
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-blue-600 mx-auto mb-4 sm:mb-6 lg:mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-blue-50 p-4 sm:p-6 lg:p-8 rounded-xl lg:rounded-2xl">
                <div className="flex items-start sm:items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <Award className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-text-bold text-lg sm:text-xl text-gray-900">Fundación</h3>
                    <p className="font-text-regular text-sm sm:text-base text-blue-600">
                      2008 - Embalse de Calamuchita
                    </p>
                  </div>
                </div>
                <p className="font-text-regular text-sm sm:text-base text-gray-700 leading-relaxed">
                  El Laboratorio LEAC fue fundado en 2008 en Embalse de Calamuchita por el Dr. Pablo Gagliardi, quien
                  nos dejó su invaluable legado hace 6 años.
                </p>
              </div>

              <div className="bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-xl lg:rounded-2xl">
                <div className="flex items-start sm:items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-600 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-text-bold text-lg sm:text-xl text-gray-900">Legado</h3>
                    <p className="font-text-regular text-sm sm:text-base text-gray-600">Dr. Pablo Gagliardi</p>
                  </div>
                </div>
                <p className="font-text-regular text-sm sm:text-base text-gray-700 leading-relaxed">
                  Su visión y dedicación sentaron las bases de lo que hoy somos: una institución privada comprometida
                  con la excelencia en el servicio.
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h3 className="font-title text-xl xs:text-2xl sm:text-3xl text-gray-900 mb-3 sm:mb-4">
                MÁS DE 15 AÑOS DE CONFIANZA
              </h3>
              <p className="font-text-regular text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                Somos una institución privada que brinda servicios de análisis clínicos, bacteriológicos y veterinarios.
                La confianza por más de 15 años de todas las familias, médicos, veterinarios y empresas de la ciudad y
                localidades vecinas, es el reflejo del esfuerzo en brindar respuestas de calidad a la comunidad.
              </p>
              <p className="font-text-regular text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                Este reconocimiento nos compromete a mejorar día a día, manteniendo los más altos estándares de calidad
                y servicio que nos han caracterizado desde nuestros inicios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo Section */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="font-title text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4 sm:mb-6">
              NUESTRO EQUIPO
            </h2>
            <p className="font-text-regular text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto">
              Profesionales altamente capacitados comprometidos con tu salud
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-xl lg:rounded-2xl shadow-lg text-center">
              <h3 className="font-text-bold text-xl sm:text-2xl lg:text-3xl text-gray-900 mb-4 sm:mb-6">
                Profesionales Especializados
              </h3>
              <p className="font-text-regular text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6">
                Nuestro equipo está conformado por bioquímicos y técnicos especializados con amplia experiencia en
                análisis clínicos, bacteriológicos y veterinarios.
              </p>
              <p className="font-text-regular text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                Cada miembro de nuestro equipo se mantiene actualizado con las últimas técnicas y tecnologías del sector
                para brindar el mejor servicio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="font-title text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4 sm:mb-6">
              NUESTROS VALORES
            </h2>
            <p className="font-text-regular text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600">
              Los principios que guían nuestro trabajo diario
            </p>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center p-4 sm:p-6">
              <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                <Target className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-blue-600" />
              </div>
              <h3 className="font-text-bold text-lg sm:text-xl text-gray-900 mb-3 sm:mb-4">Precisión</h3>
              <p className="font-text-regular text-sm sm:text-base text-gray-600">
                Resultados exactos y confiables en cada análisis que realizamos.
              </p>
            </div>

            <div className="text-center p-4 sm:p-6">
              <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:w-20 bg-green-100 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                <Clock className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-green-600" />
              </div>
              <h3 className="font-text-bold text-lg sm:text-xl text-gray-900 mb-3 sm:mb-4">Rapidez</h3>
              <p className="font-text-regular text-sm sm:text-base text-gray-600">
                Entrega oportuna de resultados sin comprometer la calidad.
              </p>
            </div>

            <div className="text-center p-4 sm:p-6 xs:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:w-20 bg-purple-100 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                <Heart className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-purple-600" />
              </div>
              <h3 className="font-text-bold text-lg sm:text-xl text-gray-900 mb-3 sm:mb-4">Compromiso</h3>
              <p className="font-text-regular text-sm sm:text-base text-gray-600">
                Dedicación total al bienestar y salud de nuestra comunidad.
              </p>
            </div>

            <div className="text-center p-4 sm:p-6">
              <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:w-20 bg-orange-100 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                <Users className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-orange-600" />
              </div>
              <h3 className="font-text-bold text-lg sm:text-xl text-gray-900 mb-3 sm:mb-4">Trato Humano</h3>
              <p className="font-text-regular text-sm sm:text-base text-gray-600">
                Atención personalizada y cálida en cada consulta.
              </p>
            </div>

            <div className="text-center p-4 sm:p-6">
              <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:w-20 bg-red-100 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                <Award className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-red-600" />
              </div>
              <h3 className="font-text-bold text-lg sm:text-xl text-gray-900 mb-3 sm:mb-4">Excelencia</h3>
              <p className="font-text-regular text-sm sm:text-base text-gray-600">
                Búsqueda constante de la mejora continua en nuestros servicios.
              </p>
            </div>

            <div className="text-center p-4 sm:p-6 xs:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:w-20 bg-indigo-100 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                <Shield className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-indigo-600" />
              </div>
              <h3 className="font-text-bold text-lg sm:text-xl text-gray-900 mb-3 sm:mb-4">Confianza</h3>
              <p className="font-text-regular text-sm sm:text-base text-gray-600">
                Más de 15 años construyendo relaciones sólidas con la comunidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h2 className="font-title text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-white mb-4 sm:mb-6">
            ¿NECESITAS NUESTROS SERVICIOS?
          </h2>
          <p className="font-text-regular text-sm sm:text-base lg:text-lg xl:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Estamos aquí para cuidar tu salud. Contactanos para más información o para reservar tu turno.
          </p>
          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md mx-auto">
            <Link
              href="https://wa.me/5493571360087?text=Hola,%20me%20interesa%20reservar%20un%20turno%20en%20el%20laboratorio%20LEAC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="font-text-bold bg-white text-blue-600 hover:bg-gray-100 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base lg:text-lg w-full xs:w-auto"
              >
                Reservar Turno
              </Button>
            </Link>
            <Link href="/contacto">
              <Button
                size="lg"
                variant="outline"
                className="font-text-bold border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base lg:text-lg bg-transparent w-full xs:w-auto"
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
