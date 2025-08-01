import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, ExternalLink } from "lucide-react"
import WhatsAppFloatButton from "@/components/whatsapp-float-button"
import MobileMenu from "@/components/mobile-menu"

const APP_URL = "https://www.laboratoriosleac.com.ar"

export const metadata: Metadata = {
  title: "Novedades y Noticias | LEAC - Laboratorio en Santa Rosa de Calamuchita",
  description:
    "Últimas noticias y novedades del laboratorio LEAC. Mantente informado sobre avances en salud, nuevos servicios, expansión a Santa Rosa de Calamuchita y el podcast Generación GEN sobre genética y medicina personalizada.",
  keywords: [
    "noticias laboratorio LEAC",
    "novedades análisis clínicos",
    "expansión Santa Rosa Calamuchita",
    "podcast Generación GEN",
    "divulgación científica genética",
    "noticias salud Córdoba",
    "avances medicina personalizada",
    "laboratorio Calamuchita noticias",
    "bioquímica Evelyn Butassi",
    "virología Calamuchita",
    "prevención dengue",
    "VIH SIDA prevención",
    "análisis clínicos especialista",
    "salud ocupacional",
    "medicina laboral",
  ],
  openGraph: {
    title: "Novedades y Noticias | LEAC Laboratorio",
    description:
      "Mantente informado con las últimas noticias y avances del laboratorio LEAC, incluyendo nuestro podcast Generación GEN.",
    url: `${APP_URL}/novedades`,
    images: [
      {
        url: `${APP_URL}/og-image-novedades.jpg`,
        width: 1200,
        height: 630,
        alt: "Novedades LEAC Laboratorio",
      },
    ],
  },
  twitter: {
    title: "Novedades y Noticias | LEAC Laboratorio",
    description: "Últimas noticias y avances del laboratorio LEAC y el podcast Generación GEN.",
    images: [`${APP_URL}/og-image-novedades.jpg`],
  },
  alternates: {
    canonical: `${APP_URL}/novedades`,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function NovedadesPage() {
  const newsArticles = [
    {
      id: 1,
      title: "LEAC se expande a Santa Rosa y refuerza su modelo de atención centrado en el paciente",
      image: "/images/news-leac-expansion-interview.webp",
      excerpt:
        "El laboratorio LEAC inaugura una nueva sede en Santa Rosa de Calamuchita, ampliando su cobertura y servicios para la comunidad.",
      date: "Julio, 2025",
      link: "https://calamuchitaenlinea.info/contenido/13504/leac-se-expande-a-santa-rosa-y-refuerza-su-modelo-de-atencion-centrado-en-el-pac",
      category: "Institucional",
    },
    {
      id: 2,
      title: "Análisis clínicos: una especialista en virología de Calamuchita brinda aspectos importantes",
      image: "/images/news-blood-draw.webp",
      excerpt: "La importancia de los análisis clínicos en el diagnóstico temprano y la prevención de enfermedades.",
      date: "15 de Diciembre, 2024",
      link: "https://calamuchitaenlinea.info/contenido/8250/analisis-clinicos-una-especialista-en-virologia-de-calamuchita-brinda-aspectos-i",
      category: "Salud",
    },
    {
      id: 3,
      title: "A 40 años del descubrimiento del VIH/SIDA: viróloga de Calamuchita enfatiza sobre la prevención",
      image: "/images/news-red-ribbon.webp",
      excerpt:
        "Reflexiones sobre cuatro décadas de avances en la lucha contra el VIH/SIDA y la importancia de la prevención.",
      date: "1 de Diciembre, 2024",
      link: "https://calamuchitaenlinea.info/contenido/8436/a-40-anos-del-descubrimiento-del-vihsida-virologa-de-calamuchita-enfatiza-sobre-",
      category: "Prevención",
    },
    {
      id: 4,
      title: "Dengue en Calamuchita: los consejos de una profesional para prevenir la enfermedad",
      image: "/images/news-dengue-mosquito.webp",
      excerpt:
        "Evelyn Butassi, bioquímica especialista en virología de LEAC, explica sobre la prevención del dengue en los hogares y para turistas.",
      date: "29 de Enero, 2024",
      link: "https://calamuchitaenlinea.info/contenido/8829/dengue-en-calamuchita-los-consejos-de-una-profesional-para-prevenir-la-enfermedad",
      category: "Prevención",
    },
    {
      id: 5,
      title: "Salud en Calamuchita: descubrí los recursos y consejos claves para cuidarte",
      image: "/images/news-salud-calamuchita-leac.webp",
      excerpt: "Recursos y consejos fundamentales para el cuidado de la salud en la región de Calamuchita.",
      date: "2024",
      link: "https://calamuchitaenlinea.info/contenido/10285/salud-en-calamuchita-descubri-los-recursos-y-consejos-claves-para-cuidarte",
      category: "Salud",
    },
  ]

  const getCategoryColor = (category: string) => {
    const colors = {
      Salud: "bg-blue-100 text-blue-800",
      Prevención: "bg-green-100 text-green-800",
      Institucional: "bg-gray-100 text-gray-800",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: "Novedades LEAC Laboratorio",
            description: "Últimas noticias y novedades del laboratorio LEAC",
            publisher: {
              "@type": "Organization",
              name: "LEAC - Laboratorio Especializado en Análisis Clínicos",
              url: APP_URL,
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${APP_URL}/novedades`,
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
                className="font-text text-blue-600 font-text-bold transition-colors text-sm xl:text-base"
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
              NOVEDADES
            </h1>
            <p className="font-text-regular text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Mantente informado con las últimas noticias, avances en salud y novedades del laboratorio LEAC
            </p>
          </div>
        </div>
      </section>

      {/* Novedades Grid */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {newsArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="relative h-48 sm:h-56 lg:h-64 w-full">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-text-bold ${getCategoryColor(article.category)}`}
                    >
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="font-text-regular">{article.date}</span>
                  </div>

                  <h2 className="font-text-bold text-lg sm:text-xl text-gray-900 mb-3 line-clamp-2">{article.title}</h2>

                  <p className="font-text-regular text-sm sm:text-base text-gray-600 mb-4 flex-grow line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="mt-auto">
                    <Link href={article.link} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full font-text-bold bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 text-sm rounded-lg transition-colors duration-300 flex items-center justify-center">
                        Leer Noticia
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-title text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-4 sm:mb-6">
              ¿QUIERES ESTAR AL DÍA?
            </h2>
            <p className="font-text-regular text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
              Síguenos en nuestras redes sociales para no perderte ninguna novedad sobre salud y nuestros servicios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="https://www.instagram.com/laboratorioleac" target="_blank" rel="noopener noreferrer">
                <Button className="font-text-bold bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 text-base rounded-lg w-full sm:w-auto">
                  Seguir en Instagram
                </Button>
              </Link>
              <Link href="https://www.facebook.com/share/1F2wKnsmKP/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="font-text-bold border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-base rounded-lg w-full sm:w-auto bg-transparent"
                >
                  Seguir en Facebook
                </Button>
              </Link>
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
            No esperes más para cuidar tu salud. Contactanos para más información o reserva tu turno.
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
            <Link href="/servicios">
              <Button
                size="lg"
                variant="outline"
                className="font-text-bold border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-base bg-transparent w-full sm:w-auto"
              >
                Ver Servicios
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
