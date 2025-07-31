import SpotifyEmbed from "./spotify-embed"
import { Headphones, Play, Dna } from "lucide-react"
import { podcastInfo } from "@/data/podcast-episodes"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PodcastSection() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
              <Dna className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-gray-900">
              {podcastInfo.title} {podcastInfo.subtitle}
            </h2>
          </div>
          <p className="font-text-regular text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            {podcastInfo.description}
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <span className="flex items-center">
              <Headphones className="h-4 w-4 mr-1" />
              {podcastInfo.totalEpisodes} episodios
            </span>
            <span>{podcastInfo.language}</span>
            <span>{podcastInfo.category}</span>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <SpotifyEmbed showId={podcastInfo.spotifyShowId} title="" height={400} className="mb-6 sm:mb-8" />

          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 text-gray-600 font-text-regular text-sm sm:text-base mb-4">
              <Play className="h-4 w-4 text-green-500" />
              <span>Disponible en Spotify • Contenido gratuito • Ciencia accesible</span>
            </div>
          </div>
        </div>

        {/* Información adicional */}
        <div className="max-w-2xl mx-auto mt-8 sm:mt-12 text-center">
          <div className="bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-white/50">
            <h3 className="font-text-bold text-lg sm:text-xl text-gray-900 mb-3">¿Por qué escuchar Generación GEN?</h3>
            <div className="grid sm:grid-cols-2 gap-3 text-sm sm:text-base text-gray-700 font-text-regular">
              <p className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Información científica actualizada
              </p>
              <p className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Genética explicada de forma simple
              </p>
              <p className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Aplicaciones en medicina personalizada
              </p>
              <p className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                Contenido creado por especialistas
              </p>
            </div>
          </div>
        </div>

        {/* Button to lead to the podcast page */}
        <div className="text-center mt-8 sm:mt-12">
          <Link href="/podcast">
            <Button
              size="lg"
              className="font-text-bold bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-base rounded-lg transition-colors duration-300"
            >
              <Headphones className="h-5 w-5 mr-2" />
              Ver Página Completa del Podcast
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
