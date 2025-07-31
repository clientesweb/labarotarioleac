"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const reviews = [
  {
    name: "Alejandra Cepeda",
    avatar: "/images/review-alejandra-cepeda.png",
    rating: 5,
    text: "Excelente!!!!!!",
  },
  {
    name: "Valentin Soria",
    avatar: "/images/review-valentin-soria.png",
    rating: 5,
    text: "Excelente predisposición para informar y excelente atención!!",
  },
  {
    name: "Miguel Andrés Tempestini",
    avatar: "/images/review-miguel-andres-tempestini.png",
    rating: 5,
    text: "Un laboratorio muy competente. Muy amable la atención.",
  },
  {
    name: "Patricia Castro",
    avatar: "/images/review-patricia-castro.png",
    rating: 5,
    text: "Muy amables y prontos en la atención! Contemplan situaciones especiales. Muchas gracias!",
  },
]

export default function ReviewsCarousel() {
  const [currentReview, setCurrentReview] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 5000) // Cambia cada 5 segundos

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-gray-900 mb-4 sm:mb-6">
            LO QUE DICEN NUESTROS PACIENTES
          </h2>
          <p className="font-text-regular text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            La confianza de nuestra comunidad es nuestro mayor orgullo.
          </p>
        </div>

        <div className="relative overflow-hidden w-full">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translate3d(-${currentReview * 100}%, 0, 0)` }}
          >
            {reviews.map((review, index) => (
              <div key={index} className="flex-shrink-0 w-full px-2 sm:px-4">
                <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-200 shadow-lg rounded-xl p-4 sm:p-6 lg:p-8 h-full flex flex-col justify-between">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      <Image
                        src={review.avatar || "/placeholder.svg"}
                        alt={review.name}
                        width={56}
                        height={56}
                        className="rounded-full object-cover w-12 h-12 sm:w-14 sm:h-14 mr-4 border-2 border-blue-300"
                        loading="lazy"
                        sizes="(max-width: 640px) 48px, (max-width: 768px) 56px, 56px"
                      />
                      <div>
                        <h3 className="font-text-bold text-lg sm:text-xl text-gray-900">{review.name}</h3>
                        <div className="flex items-center mt-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 fill-yellow-500" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="font-text-regular text-base sm:text-lg text-gray-700 leading-relaxed">
                      {review.text}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Indicadores de navegación */}
        <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentReview(index)}
              className={cn(
                "w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-300",
                currentReview === index ? "bg-blue-600" : "bg-gray-300 hover:bg-gray-400",
              )}
              aria-label={`Ver reseña ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
