"use client"

import { useState } from "react"
import { Play, Calendar, Clock, ExternalLink, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import { latestPodcastEpisodes } from "@/data/podcast-episodes"
import Link from "next/link"

export default function LatestEpisodesSection() {
  const [selectedEpisode, setSelectedEpisode] = useState<string | null>(null)

  const getCategoryColor = (category: string) => {
    const colors = {
      "Edición Génica": "bg-purple-100 text-purple-800 border-purple-200",
      Epigenética: "bg-blue-100 text-blue-800 border-blue-200",
      "Genoma Humano": "bg-green-100 text-green-800 border-green-200",
      Farmacogenómica: "bg-orange-100 text-orange-800 border-orange-200",
      Oncogenética: "bg-red-100 text-red-800 border-red-200",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800 border-gray-200"
  }

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-title text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-4">
              ÚLTIMOS EPISODIOS DESTACADOS
            </h2>
            <p className="font-text-regular text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Explora los episodios más recientes sobre genética, genómica y medicina personalizada
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8">
            {latestPodcastEpisodes.map((episode, index) => (
              <div
                key={episode.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 ${
                  index === 0 ? "border-l-purple-500" : "border-l-gray-200"
                }`}
              >
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
                    {/* Episode Number & Category */}
                    <div className="flex items-center space-x-3 mb-4 lg:mb-0 lg:flex-col lg:space-x-0 lg:space-y-2 lg:items-start">
                      <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full font-text-bold text-sm">
                        #{index + 1}
                      </div>
                      {index === 0 && (
                        <span className="px-3 py-1 rounded-full text-xs font-text-bold bg-red-100 text-red-800 border border-red-200">
                          NUEVO
                        </span>
                      )}
                    </div>

                    {/* Episode Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-text-bold border ${getCategoryColor(
                            episode.category,
                          )}`}
                        >
                          {episode.category}
                        </span>
                        <div className="flex items-center text-sm text-gray-500 space-x-4">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>
                              {new Date(episode.date).toLocaleDateString("es-ES", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{episode.duration}</span>
                          </div>
                        </div>
                      </div>

                      <h3 className="font-text-bold text-xl sm:text-2xl text-gray-900 mb-3 leading-tight">
                        {episode.title}
                      </h3>

                      <p className="font-text-regular text-base text-gray-600 mb-6 leading-relaxed">
                        {episode.description}
                      </p>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link href={episode.spotifyUrl} target="_blank" rel="noopener noreferrer">
                          <Button className="font-text-bold bg-green-500 hover:bg-green-600 text-white px-6 py-2 w-full sm:w-auto">
                            <Play className="h-4 w-4 mr-2" />
                            Escuchar en Spotify
                            <ExternalLink className="h-4 w-4 ml-2" />
                          </Button>
                        </Link>
                        <Button
                          variant="outline"
                          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                          className="font-text-bold border-purple-200 text-purple-700 hover:bg-purple-50 px-6 py-2 w-full sm:w-auto"
                        >
                          <Headphones className="h-4 w-4 mr-2" />
                          Reproductor Principal
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-8 sm:mt-12">
            <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-white/50 shadow-lg">
              <h3 className="font-text-bold text-xl sm:text-2xl text-gray-900 mb-4">
                ¿Quieres escuchar todos los episodios?
              </h3>
              <p className="font-text-regular text-base text-gray-600 mb-6">
                Accede al reproductor completo con todos los episodios disponibles de Generación GEN
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="font-text-bold bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 w-full sm:w-auto"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  <Headphones className="h-5 w-5 mr-2" />
                  Reproductor Principal
                </Button>
                <Link
                  href="https://open.spotify.com/show/492R7IzThqsGNlJKcL2cBy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="font-text-bold border-green-500 text-green-600 hover:bg-green-50 px-8 py-3 w-full sm:w-auto bg-transparent"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Abrir en Spotify
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
