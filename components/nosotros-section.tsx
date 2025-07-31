import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Microscope, Clock, UserCheck } from "lucide-react"
import Link from "next/link"

export default function NosotrosSection() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 items-center">
          {/* Contenido de texto */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <div>
              <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-gray-900 mb-4 sm:mb-6">
                NOSOTROS
              </h2>
              <p className="font-text-regular text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                En LEAC somos un laboratorio bioquímico comprometido con tu salud. Nos especializamos en estudios
                clínicos, con tecnología moderna, rapidez en los resultados y un trato humano.
              </p>
            </div>

            {/* Ventajas clave */}
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <h3 className="font-text-bold text-lg sm:text-xl lg:text-2xl text-gray-900 mb-4">Ventajas clave</h3>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Microscope className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-text-bold text-sm sm:text-base lg:text-lg text-gray-900 mb-1">
                    Equipamiento de última generación
                  </h4>
                  <p className="font-text-regular text-sm sm:text-base text-gray-600">
                    Tecnología moderna para análisis precisos y confiables
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-text-bold text-sm sm:text-base lg:text-lg text-gray-900 mb-1">
                    Resultados en tiempo y forma
                  </h4>
                  <p className="font-text-regular text-sm sm:text-base text-gray-600">
                    Rapidez en la entrega sin comprometer la calidad
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <UserCheck className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-text-bold text-sm sm:text-base lg:text-lg text-gray-900 mb-1">
                    Atención personalizada
                  </h4>
                  <p className="font-text-regular text-sm sm:text-base text-gray-600">
                    Trato humano y profesional en cada consulta
                  </p>
                </div>
              </div>
            </div>

            {/* Botón Call to Action */}
            <div className="pt-2 sm:pt-4">
              <Link href="/nosotros">
                <Button
                  size="lg"
                  className="font-text-bold bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-lg transition-colors duration-300 w-full sm:w-auto"
                >
                  Conócenos
                </Button>
              </Link>
            </div>
          </div>

          {/* Imagen */}
          <div className="relative order-1 lg:order-2 lg:col-span-2">
            <div className="relative h-[280px] sm:h-[320px] md:h-[380px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/conocenos-leac-nuevo.webp"
                alt="Interior del Laboratorio LEAC - Recepción y área de atención"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 40vw"
                loading="lazy"
              />
            </div>
            {/* Elementos decorativos */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-blue-600 rounded-full opacity-10 -z-10"></div>
            <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-400 rounded-full opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
