"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Headphones, Play, Download, Dna, ExternalLink, Youtube } from "lucide-react"
import WhatsAppFloatButton from "@/components/whatsapp-float-button"
import MobileMenu from "@/components/mobile-menu"
import SpotifyEmbed from "@/components/spotify-embed"
import { podcastInfo } from "@/data/podcast-episodes"

const APP_URL = "https://laboratoriosleac.com.ar"

export default function PodcastPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PodcastSeries",
            name: "Generación GEN",
            description: "Podcast sobre genética y genoma humano creado por LEAC Laboratorio",
            url: `${APP_URL}/podcast`,
            author: {
              "@type": "Organization",
              name: "LEAC - Laboratorio Especializado en Análisis Clínicos",
              url: APP_URL,
            },
            publisher: {
              "@type": "Organization",
              name: "LEAC - Laboratorio Especializado en Análisis Clínicos",
              url: APP_URL,
            },
            genre: ["Science", "Medicine", "Education"],
            inLanguage: "es",
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
                className="font-text text-blue-600 font-text-bold transition-colors text-sm xl:text-base"
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
      <section className="relative bg-gradient-to-br from-purple-50 via-blue-50 to-white py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4 sm:mb-6 font-text-regular text-sm sm:text-base"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al inicio
            </Link>

            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                <Dna className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <h1 className="font-title text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-gray-900">
                GENERACIÓN GEN
              </h1>
            </div>

            <p className="font-text-regular text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-4">
              {podcastInfo.description}
            </p>

            <div className="flex items-center justify-center space-x-2 text-purple-600 font-text-bold text-sm sm:text-base">
              <Headphones className="h-5 w-5" />
              <span>Podcast sobre Genética y Genoma Humano</span>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-title text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-4">
                CONOCE MÁS SOBRE GENERACIÓN GEN
              </h2>
              <p className="font-text-regular text-base sm:text-lg text-gray-600">
                Descubre cómo nació este proyecto de divulgación científica
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/uv6L4YYumm0"
                  title="Generación GEN - Presentación del Podcast"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="font-text-bold text-xl sm:text-2xl text-gray-900 mb-3">
                  La historia detrás del podcast
                </h3>
                <p className="font-text-regular text-base text-gray-600 mb-4">
                  Conoce cómo surgió la idea de crear Generación GEN y por qué es importante hacer divulgación
                  científica sobre genética de manera accesible para todos.
                </p>
                <Link href="https://youtu.be/uv6L4YYumm0" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="font-text-bold border-red-500 text-red-600 hover:bg-red-50 px-6 py-2 bg-transparent"
                  >
                    <Youtube className="h-4 w-4 mr-2" />
                    Ver en YouTube
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Spotify Show Embed */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-title text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-4">TODOS LOS EPISODIOS</h2>
              <p className="font-text-regular text-base sm:text-lg text-gray-600">
                Explora la colección completa de episodios de Generación GEN
              </p>
            </div>

            <SpotifyEmbed showId={podcastInfo.spotifyShowId} title="" height={500} className="mb-8 sm:mb-12" />

            <div className="text-center mb-8">
              <Link href={podcastInfo.spotifyUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="font-text-bold bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-base rounded-lg transition-colors duration-300"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Ver Más en Spotify
                </Button>
              </Link>
            </div>

            <div className="text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-600 font-text-regular text-sm sm:text-base mb-6">
                <div className="flex items-center space-x-2">
                  <Play className="h-4 w-4 text-green-500" />
                  <span>Disponible en Spotify</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Download className="h-4 w-4 text-blue-500" />
                  <span>Descarga gratuita</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Dna className="h-4 w-4 text-purple-500" />
                  <span>Ciencia accesible</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-title text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-6 sm:mb-8 text-center">
              SOBRE GENERACIÓN GEN
            </h2>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
                <h3 className="font-text-bold text-xl sm:text-2xl text-gray-900 mb-4">¿Qué encontrarás?</h3>
                <ul className="space-y-3 font-text-regular text-base text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Edición génica y técnicas CRISPR
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Epigenética y expresión de genes
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Medicina personalizada
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Farmacogenómica avanzada
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
                <h3 className="font-text-bold text-xl sm:text-2xl text-gray-900 mb-4">¿Por qué escucharnos?</h3>
                <ul className="space-y-3 font-text-regular text-base text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Información científica actualizada
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Contenido creado por especialistas
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Explicaciones claras y accesibles
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Episodios regulares sobre genética
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h2 className="font-title text-2xl sm:text-3xl lg:text-4xl text-white mb-4 sm:mb-6">
            ¿TIENES CONSULTAS SOBRE GENÉTICA?
          </h2>
          <p className="font-text-regular text-base sm:text-lg lg:text-xl text-purple-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Si tienes preguntas sobre genética, análisis genéticos o los temas tratados en nuestro podcast, no dudes en
            contactarnos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Link
              href="https://wa.me/5493571360087?text=Hola,%20tengo%20una%20consulta%20sobre%20genética%20y%20el%20podcast%20Generación%20GEN"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="font-text-bold bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-base w-full sm:w-auto"
              >
                Hacer Consulta
              </Button>
            </Link>
            <Link href="/contacto">
              <Button
                size="lg"
                variant="outline"
                className="font-text-bold border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 text-base bg-transparent w-full sm:w-auto"
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
