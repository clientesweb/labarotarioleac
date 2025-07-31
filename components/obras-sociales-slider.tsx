"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import Image from "next/image"

const obrasSociales = [
  {
    name: "OSPE",
    logo: "/images/obras-sociales/ospe-logo-blanco.png",
    alt: "OSPE - Obra Social del Personal de la Educación",
  },
  {
    name: "OSFATLYF",
    logo: "/images/obras-sociales/osfatlyf-logo-nuevo.jpeg",
    alt: "OSFATLYF - Obra Social de la Federación Argentina de Trabajadores de Luz y Fuerza",
  },
  {
    name: "PAMI",
    logo: "/images/obras-sociales/pami-logo.png",
    alt: "PAMI - Instituto Nacional de Servicios Sociales para Jubilados y Pensionados",
  },
  {
    name: "OSDE",
    logo: "/images/obras-sociales/osde-logo.png",
    alt: "OSDE - Organización de Servicios Directos Empresarios",
  },
  {
    name: "Galeno",
    logo: "/images/obras-sociales/galeno-logo.png",
    alt: "Galeno - Medicina Prepaga",
  },
  {
    name: "SanCor Salud",
    logo: "/images/obras-sociales/sancor-salud-logo.webp",
    alt: "SanCor Salud - Grupo de Medicina Privada",
  },
  {
    name: "APROSS",
    logo: "/images/obras-sociales/apross-logo.png",
    alt: "APROSS - Administración Provincial del Seguro de Salud",
  },
  {
    name: "IOSFA",
    logo: "/images/obras-sociales/iosfa-logo.png",
    alt: "IOSFA - Instituto de Obra Social de las Fuerzas Armadas y de Seguridad",
  },
  {
    name: "Unimed",
    logo: "/images/obras-sociales/unimed-logo-nuevo.png",
    alt: "Unimed - Medicina Privada",
  },
]

export default function ObrasSocialesSlider() {
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    // Calcular el ancho real del contenido
    const firstChild = slider.firstElementChild as HTMLElement
    if (firstChild) {
      const itemWidth = firstChild.offsetWidth
      const totalItems = obrasSociales.length
      const totalWidth = itemWidth * totalItems

      // Establecer la variable CSS con el ancho calculado
      slider.style.setProperty("--scroll-width", `${totalWidth}px`)
    }
  }, [])

  // Duplicamos el array para crear el efecto infinito
  const duplicatedLogos = [...obrasSociales, ...obrasSociales]

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-title text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-gray-900 mb-4 sm:mb-6">
            OBRAS SOCIALES Y PREPAGAS
          </h2>
          <p className="font-text-regular text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Trabajamos con las principales obras sociales y medicina prepaga del país
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Sliding Content */}
          <div
            ref={sliderRef}
            className="flex animate-scroll-mobile sm:animate-scroll-desktop"
            style={{ "--scroll-width": "1600px" } as React.CSSProperties}
          >
            {duplicatedLogos.map((obra, index) => (
              <div
                key={`${obra.name}-${index}`}
                className="flex-shrink-0 mx-1 sm:mx-2 lg:mx-3 flex items-center justify-center w-20 sm:w-32 lg:w-40 h-12 sm:h-16 lg:h-20"
              >
                <div className="relative w-full h-full flex items-center justify-center bg-gray-50 rounded-md lg:rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 p-1 sm:p-2 border border-gray-200 hover:border-blue-200">
                  <Image
                    src={obra.logo || "/placeholder.svg"}
                    alt={obra.alt}
                    fill
                    className="object-contain hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 80px, (max-width: 1024px) 128px, 160px"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-8 sm:mt-12">
          <p className="font-text-regular text-sm sm:text-base text-gray-600 mb-4">
            ¿Tu obra social no está en la lista? ¡Consultanos! Trabajamos con muchas más.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <a
              href="https://wa.me/5493571360087?text=Hola,%20quiero%20consultar%20si%20trabajan%20con%20mi%20obra%20social"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-text-bold rounded-lg transition-colors duration-300 w-full sm:w-auto"
            >
              Consultar Obra Social
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-mobile {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(calc(-1 * (80px + 8px) * 9), 0, 0);
          }
        }
        
        @keyframes scroll-desktop {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(var(--scroll-width, -1600px), 0, 0);
          }
        }
        
        .animate-scroll-mobile {
          animation: scroll-mobile 16s linear infinite;
          will-change: transform;
        }
        
        .animate-scroll-desktop {
          animation: scroll-desktop 16s linear infinite;
          will-change: transform;
        }
        
        .animate-scroll-mobile:hover,
        .animate-scroll-desktop:hover {
          animation-play-state: paused;
        }

        @media (min-width: 640px) {
          @keyframes scroll-mobile {
            0% {
              transform: translate3d(0, 0, 0);
            }
            100% {
              transform: translate3d(calc(-1 * (128px + 16px) * 9), 0, 0);
            }
          }
        }

        @media (min-width: 1024px) {
          @keyframes scroll-mobile {
            0% {
              transform: translate3d(0, 0, 0);
            }
            100% {
              transform: translate3d(calc(-1 * (160px + 24px) * 9), 0, 0);
            }
          }
        }
      `}</style>
    </section>
  )
}
