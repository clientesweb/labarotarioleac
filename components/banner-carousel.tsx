"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

const bannerImages = [
  {
    src: "/images/banner-principal-leac-actualizado.webp",
    alt: "Laboratorio especializado en análisis clínicos - Reserva tu turno aquí",
    link: "https://wa.me/5493571360087?text=Hola,%20me%20interesa%20reservar%20un%20turno%20en%20el%20laboratorio%20LEAC",
    hasLink: true,
  },
  {
    src: "/images/banner-secundario-leac-actualizado.webp",
    alt: "No esperes a sentirte mal - La prevención es clave",
    link: "",
    hasLink: false,
  },
  {
    src: "/images/banner-salud-leac-actualizado.png",
    alt: "Tu salud es primero - ¿Por qué es importante hacerte un chequeo regular?",
    link: "https://wa.me/5493571360087?text=Hola,%20me%20interesa%20reservar%20un%20turno%20en%20el%20laboratorio%20LEAC",
    hasLink: true,
  },
]

export default function BannerCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const renderBannerContent = (image: (typeof bannerImages)[0], index: number) => {
    const content = (
      <div
        className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
          index === currentSlide ? "translate-x-0" : index < currentSlide ? "-translate-x-full" : "translate-x-full"
        }`}
      >
        <Image
          src={image.src || "/placeholder.svg"}
          alt={image.alt}
          fill
          className={`object-cover transition-all duration-500 ${image.hasLink ? "hover:scale-[1.01]" : ""}`}
          priority={index === 0}
          sizes="100vw"
        />
      </div>
    )

    if (image.hasLink) {
      return (
        <Link key={index} href={image.link} target="_blank" rel="noopener noreferrer" className="block">
          {content}
        </Link>
      )
    }

    return <div key={index}>{content}</div>
  }

  return (
    <section className="relative w-full overflow-hidden" style={{ width: "100vw", marginLeft: "calc(50% - 50vw)" }}>
      <div className="relative w-full h-[250px] xs:h-[300px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[650px] 2xl:h-[750px]">
        {bannerImages.map((image, index) => renderBannerContent(image, index))}
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 ${
              index === currentSlide ? "bg-white shadow-lg" : "bg-white/70"
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
