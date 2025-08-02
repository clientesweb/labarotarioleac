import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Clock, MapPin, Microscope, UserCheck, Mail } from "lucide-react"
import BannerCarousel from "@/components/banner-carousel"
import WhatsAppFloatButton from "@/components/whatsapp-float-button"
import NosotrosSection from "@/components/nosotros-section"
import MobileMenu from "@/components/mobile-menu"
import ReviewsCarousel from "@/components/reviews-carousel"
import ObrasSocialesSlider from "@/components/obras-sociales-slider"
import { locations } from "@/data/locations"

const APP_URL = "https://www.laboratoriosleac.com.ar"

export const metadata = {
  metadataBase: new URL(APP_URL),
  title: "LEAC - Laboratorio Especializado en Análisis Clínicos | Villa del Dique, Santa Rosa, Embalse",
  description:
    "Laboratorio de análisis clínicos en Villa del Dique, Santa Rosa de Calamuchita y Embalse. Análisis de sangre, orina, hormonales, microbiología y más. Tecnología de última generación.",
  keywords:
    "laboratorio, análisis clínicos, Villa del Dique, Santa Rosa de Calamuchita, Embalse, análisis de sangre, análisis de orina, microbiología, hormonales, LEAC",
  authors: [{ name: "LEAC Laboratorio" }],
  creator: "LEAC - Laboratorio Especializado en Análisis Clínicos",
  publisher: "LEAC Laboratorio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "LEAC - Laboratorio Especializado en Análisis Clínicos",
    description:
      "Laboratorio de análisis clínicos en Villa del Dique, Santa Rosa de Calamuchita y Embalse. Tecnología de última generación y atención personalizada.",
    url: APP_URL,
    siteName: "LEAC Laboratorio",
    images: [
      {
        url: "/og-image-leac.jpg",
        width: 1200,
        height: 630,
        alt: "LEAC - Laboratorio Especializado en Análisis Clínicos",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LEAC - Laboratorio Especializado en Análisis Clínicos",
    description: "Laboratorio de análisis clínicos en Villa del Dique, Santa Rosa de Calamuchita y Embalse.",
    images: ["/og-image-leac.jpg"],
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
    google: "tu-codigo-de-verificacion-google",
  },
}

export default function HomePage() {
  const newsArticles = [
    {
      id: 1,
      title: "Divulgación científica con acento calamuchitano: Generación Gen, el nuevo podcast",
      image: "/images/news-generacion-gen-podcast.webp",
      link: "https://calamuchitaenlinea.info/contenido/11860/divulgacion-cientifica-con-acento-calamuchitano-generacion-gen-el-nuevo-podcast-",
    },
    {
      id: 2,
      title: "LEAC se expande a Santa Rosa y refuerza su modelo de atención centrado en el paciente",
      image: "/images/news-leac-expansion-interview.webp",
      link: "https://calamuchitaenlinea.info/contenido/13504/leac-se-expande-a-santa-rosa-y-refuerza-su-modelo-de-atencion-centrado-en-el-pac",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: "LEAC - Laboratorio Especializado en Análisis Clínicos",
            description:
              "Laboratorio de análisis clínicos especializado en análisis de sangre, orina, hormonales, microbiología y más.",
            url: APP_URL,
            logo: `${APP_URL}/images/leac-logo.jpg`,
            image: `${APP_URL}/og-image-leac.jpg`,
            telephone: "+54-3571-360087",
            address: [
              {
                "@type": "PostalAddress",
                streetAddress: "Av. Costanera 1081",
                addressLocality: "Villa del Dique",
                addressRegion: "Córdoba",
                addressCountry: "AR",
              },
              {
                "@type": "PostalAddress",
                streetAddress: "Av. San Martín 1285",
                addressLocality: "Santa Rosa de Calamuchita",
                addressRegion: "Córdoba",
                addressCountry: "AR",
              },
              {
                "@type": "PostalAddress",
                streetAddress: "Belgrano 86",
                addressLocality: "Embalse",
                addressRegion: "Córdoba",
                addressCountry: "AR",
              },
            ],
            openingHours: "Mo-Fr 07:00-12:00,15:00-19:00 Sa 08:00-12:00",
            sameAs: ["https://www.instagram.com/laboratorio.leac/", "https://www.facebook.com/laboratorio.leac"],
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

      {/* Banners Container - Full Width Centrados */}
      <div className="w-full">
        {/* Banner Carousel */}
        <BannerCarousel />

        {/* Banner Inauguración - Pegado sin espacio y centrado */}
        <section className="relative w-full overflow-hidden" style={{ width: "100vw", marginLeft: "calc(50% - 50vw)" }}>
          <Link
            href="https://www.instagram.com/reel/DLz6YUdMNSS/?igsh=bDBqcmFmdDNpZWQx"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <div className="relative w-full h-[150px] xs:h-[180px] sm:h-[220px] md:h-[280px] lg:h-[400px] xl:h-[500px] 2xl:h-[600px] bg-white">
              <Image
                src="/images/inaguracion-leac-final-santa-rosa-actualizado.webp"
                alt="Inauguramos Laboratorio LEAC en Santa Rosa de Calamuchita - ¡Conoce más!"
                fill
                className="object-contain hover:scale-[1.02] transition-transform duration-300"
                sizes="100vw"
                loading="lazy"
              />
            </div>
          </Link>
        </section>
      </div>

      {/* Sección Nosotros */}
      <NosotrosSection />

      {/* Sección de Obras Sociales */}
      <ObrasSocialesSlider />

      {/* Sección Servicios */}
      <section id="servicios" className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-gray-900 mb-4 sm:mb-6">
              NUESTROS SERVICIOS
            </h2>
            <p className="font-text-regular text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos una amplia gama de análisis clínicos con tecnología de última generación
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-8 sm:mb-12">
            {/* Análisis de Sangre */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 sm:p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-red-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Microscope className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>
              <h3 className="font-text-bold text-lg sm:text-xl text-gray-900 text-center mb-3">Análisis de Sangre</h3>
              <p className="font-text-regular text-sm sm:text-base text-gray-600 text-center">
                Hemograma completo, bioquímica sanguínea, perfil lipídico
              </p>
            </div>

            {/* Análisis de Orina */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Clock className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>
              <h3 className="font-text-bold text-lg sm:text-xl text-gray-900 text-center mb-3">Análisis de Orina</h3>
              <p className="font-text-regular text-sm sm:text-base text-gray-600 text-center">
                Examen físico, químico y microscópico completo
              </p>
            </div>

            {/* Análisis Hormonales */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 sm:p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-purple-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <UserCheck className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>
              <h3 className="font-text-bold text-lg sm:text-xl text-gray-900 text-center mb-3">Análisis Hormonales</h3>
              <p className="font-text-regular text-sm sm:text-base text-gray-600 text-center">
                Tiroides, hormonas reproductivas, cortisol
              </p>
            </div>

            {/* Microbiología */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 sm:p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Phone className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>
              <h3 className="font-text-bold text-lg sm:text-xl text-gray-900 text-center mb-3">Microbiología</h3>
              <p className="font-text-regular text-sm sm:text-base text-gray-600 text-center">
                Cultivos, antibiogramas, detección de patógenos
              </p>
            </div>

            {/* Análisis de Embarazo */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-4 sm:p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-pink-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <MapPin className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>
              <h3 className="font-text-bold text-lg sm:text-xl text-gray-900 text-center mb-3">Test de Embarazo</h3>
              <p className="font-text-regular text-sm sm:text-base text-gray-600 text-center">
                Detección temprana y seguimiento prenatal
              </p>
            </div>

            {/* Función Hepática */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 sm:p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Microscope className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>
              <h3 className="font-text-bold text-lg sm:text-xl text-gray-900 text-center mb-3">Función Hepática</h3>
              <p className="font-text-regular text-sm sm:text-base text-gray-600 text-center">
                Transaminasas, bilirrubina, proteínas
              </p>
            </div>

            {/* Función Renal */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-4 sm:p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-teal-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Clock className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>
              <h3 className="font-text-bold text-lg sm:text-xl text-gray-900 text-center mb-3">Función Renal</h3>
              <p className="font-text-regular text-sm sm:text-base text-gray-600 text-center">
                Creatinina, urea, clearance de creatinina
              </p>
            </div>

            {/* Análisis Veterinarios */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 sm:p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-amber-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <UserCheck className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>
              <h3 className="font-text-bold text-lg sm:text-xl text-gray-900 text-center mb-3">
                Análisis Veterinarios
              </h3>
              <p className="font-text-regular text-sm sm:text-base text-gray-600 text-center">
                Estudios especializados para mascotas
              </p>
            </div>
          </div>

          {/* Botón Ver Más Servicios */}
          <div className="text-center">
            <Link href="/servicios">
              <Button
                size="lg"
                className="font-text-bold bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base rounded-lg transition-colors duration-300"
              >
                Ver Todos los Servicios
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sección de Reseñas */}
      <ReviewsCarousel />

      {/* Sección de Podcast - Reemplazada con imagen */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-gray-900 mb-4 sm:mb-6">
              GENERACIÓN GEN
            </h2>
            <p className="font-text-regular text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Nuestro podcast sobre genética y genoma humano. Divulgación científica accesible para todos.
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <Image
                src="/images/generacion-gen.webp"
                alt="Generación GEN - Podcast sobre genética y genoma humano"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="text-center">
            <Link href="/podcast">
              <Button
                size="lg"
                className="font-text-bold bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-base rounded-lg transition-colors duration-300 mr-4"
              >
                Escuchar Podcast
              </Button>
            </Link>
            <Link href="https://open.spotify.com/show/4VqMXRuihVdssdwrg5lEuH" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="font-text-bold border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 text-base rounded-lg transition-colors duration-300 bg-transparent"
              >
                Ver en Spotify
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sección de Novedades */}
      <section id="novedades" className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-gray-900 mb-4 sm:mb-6">
              NOVEDADES
            </h2>
            <p className="font-text-regular text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Mantente informado con las últimas noticias y avances en salud.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-8 sm:mb-12">
            {newsArticles.map((article) => (
              <div key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
                <div className="relative h-48 sm:h-56 lg:h-64 w-full">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  <h3 className="font-text-bold text-lg sm:text-xl text-gray-900 mb-3 flex-grow">{article.title}</h3>
                  <div className="mt-auto">
                    <Link href={article.link} target="_blank" rel="noopener noreferrer">
                      <Button className="font-text-bold bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 text-sm rounded-lg transition-colors duration-300 w-full">
                        Ver Noticia
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/novedades">
              <Button
                size="lg"
                className="font-text-bold bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base rounded-lg transition-colors duration-300"
              >
                Ver Más Novedades
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sección de Ubicaciones */}
      <section id="ubicaciones" className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-gray-900 mb-4 sm:mb-6">
              NUESTRAS UBICACIONES
            </h2>
            <p className="font-text-regular text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Encuéntranos en nuestras sedes para una atención cercana y de calidad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {locations.map((location, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 sm:p-8">
                  <h3 className="font-title text-2xl sm:text-3xl text-gray-900 mb-4">{location.name}</h3>
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
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading="lazy"
                      />
                    </div>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Autorización (reemplaza la sección de contacto anterior) */}
      <section className="py-8 sm:py-12 lg:py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h2 className="font-title text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6">AUTORIZADO POR COBICO</h2>
          <div className="font-text-regular text-base sm:text-lg lg:text-xl space-y-3 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-white/10 p-4 rounded-lg">
                <p className="font-text-bold text-white mb-2">Villa del Dique</p>
                <p className="text-blue-100 text-sm">Dir. Técnica: Bioq. Rosana Heras (MP 6668)</p>
                <p className="text-blue-200 text-xs mt-2">Resolución A 20203/2023</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <p className="font-text-bold text-white mb-2">Santa Rosa</p>
                <p className="text-blue-100 text-sm">Dir. Técnica: Bioq. Esp. Evelyn Butassi (MP 6000 / ME 715)</p>
                <p className="text-blue-200 text-xs mt-2">Resolución A 22185/2025</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <p className="font-text-bold text-white mb-2">Embalse</p>
                <p className="text-blue-100 text-sm">Dir. Técnica: Bioq. Esp. Evelyn Butassi (MP 6000 / ME 715)</p>
                <p className="text-blue-200 text-xs mt-2">Resolución A 18856/2022</p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-blue-400">
              <p className="text-blue-100">Teléfonos: 3571 36-0087 / 3571 578763</p>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <WhatsAppFloatButton />
    </div>
  )
}
