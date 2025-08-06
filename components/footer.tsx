import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-gray-200 py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Columna 1: Logo y Descripción */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/images/leac-logo-blanco.png"
                alt="LEAC - Laboratorio Especializado en Análisis Clínicos"
                width={140}
                height={45}
                className="h-10 w-auto"
              />
            </Link>
            <p className="font-text-regular text-sm sm:text-base leading-relaxed text-gray-400">
              Laboratorio bioquímico comprometido con tu salud. Tecnología moderna, resultados rápidos y atención
              personalizada.
            </p>
          </div>

          {/* Columna 2: Navegación */}
          <div className="md:col-span-1">
            <h3 className="font-text-bold text-lg sm:text-xl text-white mb-4">Navegación</h3>
            <nav className="space-y-2">
              <Link
                href="/"
                className="block font-text-regular text-sm sm:text-base hover:text-blue-400 transition-colors"
              >
                Inicio
              </Link>
              <Link
                href="/servicios"
                className="block font-text-regular text-sm sm:text-base hover:text-blue-400 transition-colors"
              >
                Servicios
              </Link>
              <Link
                href="/nosotros"
                className="block font-text-regular text-sm sm:text-base hover:text-blue-400 transition-colors"
              >
                Nosotros
              </Link>
              <Link
                href="/resultados"
                className="block font-text-regular text-sm sm:text-base hover:text-blue-400 transition-colors"
              >
                Resultados
              </Link>
              <Link
                href="/novedades"
                className="block font-text-regular text-sm sm:text-base hover:text-blue-400 transition-colors"
              >
                Novedades
              </Link>
              <Link
                href="/podcast"
                className="block font-text-regular text-sm sm:text-base hover:text-blue-400 transition-colors"
              >
                Podcast
              </Link>
              <Link
                href="/contacto"
                className="block font-text-regular text-sm sm:text-base hover:text-blue-400 transition-colors"
              >
                Contacto
              </Link>
            </nav>
          </div>

          {/* Columna 3: Contacto */}
          <div className="md:col-span-1">
            <h3 className="font-text-bold text-lg sm:text-xl text-white mb-4">Contacto</h3>
            <div className="space-y-2 text-sm sm:text-base text-gray-400 font-text-regular">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-blue-400 flex-shrink-0" />
                <span>+54 9 3571 36-0087/</span>

                <span>3571 36-0087 / 3571 578763 578763</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-blue-400 flex-shrink-0" />
                <span>laboratoriosleac@gmail.com/</span>

<span>leac@live.com.ar</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-blue-400 flex-shrink-0 mt-1" />
                <span>Valle de Calamuchita, Córdoba, Argentina</span>
              </div>
            </div>
          </div>

          {/* Columna 4: Redes Sociales */}
          <div className="md:col-span-1">
            <h3 className="font-text-bold text-lg sm:text-xl text-white mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/laboratorioleac"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de LEAC"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Instagram className="h-6 w-6 sm:h-7 sm:w-7" />
              </Link>
              <Link
                href="https://www.facebook.com/share/1F2wKnsmKP/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de LEAC"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Facebook className="h-6 w-6 sm:h-7 sm:w-7" />
              </Link>
            </div>
          </div>
        </div>

        {/* Derechos de Autor y Desarrollado por */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500 font-text-regular space-y-2">
          <p>&copy; {currentYear} LEAC. Todos los derechos reservados.</p>
          <p className="font-text-regular text-sm text-gray-400 mt-2">
            Desarrollado por{" "}
            <Link
              href="https://www.dualitydomain.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-blue-400 transition-colors"
            >
              Duality Domain
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
