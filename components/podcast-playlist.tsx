"use client"

import { useState } from "react"
import Link from "next/link"
import { Play, Pause, Clock, Calendar, ExternalLink, Volume2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { latestPodcastEpisodes } from "@/data/podcast-episodes"

export default function PodcastPlaylist() {
  const [currentPlaying, setCurrentPlaying] = useState<string | null>(null)
  const [hoveredEpisode, setHoveredEpisode] = useState<string | null>(null)

  const getCategoryColor = (category: string) => {
    const colors = {
      "Edición Génica": "bg-purple-100 text-purple-800",
      Epigenética: "bg-blue-100 text-blue-800",
      "Genoma Humano": "bg-green-100 text-green-800",
      Farmacogenómica: "bg-orange-100 text-orange-800",
      Oncogenética: "bg-red-100 text-red-800",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  const handlePlayPause = (episodeId: string) => {
    if (currentPlaying === episodeId) {
      setCurrentPlaying(null)
    } else {
      setCurrentPlaying(episodeId)
    }
  }

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-title text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-4">LISTA DE REPRODUCCIÓN</h2>
            <p className="font-text-regular text-base sm:text-lg text-gray-600">
              Todos los episodios de Generación GEN organizados como una playlist
            </p>
          </div>

          {/* Playlist Container */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            {/* Playlist Header */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 sm:p-8 text-white">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-xl flex items-center justify-center">
                  <Volume2 className="h-8 w-8 sm:h-10 sm:w-10" />
                </div>
                <div>
                  <h3 className="font-title text-xl sm:text-2xl lg:text-3xl mb-2">Generación GEN 🧬</h3>
                  <p className="font-text-regular text-sm sm:text-base text-purple-100">
                    {latestPodcastEpisodes.length} episodios • Genética y Genoma Humano
                  </p>
                </div>
              </div>
            </div>

            {/* Episodes List */}
            <div className="divide-y divide-gray-100">
              {latestPodcastEpisodes.map((episode, index) => (
                <div
                  key={episode.id}
                  className={`p-4 sm:p-6 hover:bg-gray-50 transition-all duration-200 ${
                    currentPlaying === episode.id ? "bg-purple-50" : ""
                  }`}
                  onMouseEnter={() => setHoveredEpisode(episode.id)}
                  onMouseLeave={() => setHoveredEpisode(null)}
                >
                  <div className="flex items-center space-x-4">
                    {/* Episode Number / Play Button */}
                    <div className="flex-shrink-0 w-12 h-12 relative">
                      {hoveredEpisode === episode.id || currentPlaying === episode.id ? (
                        <button
                          onClick={() => handlePlayPause(episode.id)}
                          className="w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white transition-colors duration-200"
                        >
                          {currentPlaying === episode.id ? (
                            <Pause className="h-5 w-5" />
                          ) : (
                            <Play className="h-5 w-5 ml-0.5" />
                          )}
                        </button>
                      ) : (
                        <div className="w-12 h-12 flex items-center justify-center text-gray-400 font-text-bold text-lg">
                          {index + 1}
                        </div>
                      )}
                    </div>

                    {/* Episode Cover */}
                    <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-2xl">🧬</div>
                      </div>
                    </div>

                    {/* Episode Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex-1 min-w-0 mb-2 sm:mb-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="font-text-bold text-base sm:text-lg text-gray-900 truncate">
                              {episode.title}
                            </h4>
                            {episode.isLatest && (
                              <span className="px-2 py-1 rounded-full text-xs font-text-bold bg-red-100 text-red-800 flex-shrink-0">
                                NUEVO
                              </span>
                            )}
                          </div>
                          <p className="font-text-regular text-sm text-gray-600 line-clamp-2 mb-2">
                            {episode.description}
                          </p>
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-text-bold ${getCategoryColor(
                                episode.category,
                              )}`}
                            >
                              {episode.category}
                            </span>
                            <div className="flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              <span>
                                {new Date(episode.date).toLocaleDateString("es-ES", {
                                  month: "short",
                                  day: "numeric",
                                })}
                              </span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              <span>{episode.duration}</span>
                            </div>
                          </div>
                        </div>

                        {/* Action Button */}
                        <div className="flex-shrink-0 sm:ml-4">
                          <Link href={episode.spotifyUrl} target="_blank" rel="noopener noreferrer">
                            <Button
                              size="sm"
                              variant="outline"
                              className="font-text-bold border-green-200 text-green-600 hover:bg-green-50 text-xs px-3 py-1 bg-transparent"
                            >
                              <ExternalLink className="h-3 w-3 mr-1" />
                              Spotify
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Playlist Footer */}
            <div className="bg-gray-50 p-6 text-center">
              <p className="font-text-regular text-sm text-gray-600 mb-4">
                ¿Quieres escuchar todos los episodios completos?
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <Link
                  href="https://open.spotify.com/show/492R7IzThqsGNlJKcL2cBy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="font-text-bold bg-green-500 hover:bg-green-600 text-white px-6 py-2 w-full sm:w-auto">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Abrir en Spotify
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="font-text-bold border-purple-200 text-purple-700 hover:bg-purple-50 px-6 py-2 w-full sm:w-auto"
                >
                  Reproductor Principal
                </Button>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 sm:mt-12 text-center">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 sm:p-8 rounded-xl border border-purple-100">
              <h3 className="font-text-bold text-lg sm:text-xl text-gray-900 mb-3">Sobre esta playlist</h3>
              <p className="font-text-regular text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                Esta lista de reproducción contiene todos los episodios disponibles de Generación GEN, organizados desde
                el más reciente hasta el más antiguo. Cada episodio explora diferentes aspectos de la genética moderna y
                su impacto en la medicina personalizada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
