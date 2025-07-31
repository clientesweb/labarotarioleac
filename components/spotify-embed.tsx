"use client"

interface SpotifyEmbedProps {
  showId?: string
  episodeId?: string
  type?: "show" | "episode"
  title?: string
  height?: number
  className?: string
}

export default function SpotifyEmbed({
  showId,
  episodeId,
  type = "show",
  title = "Contenido de Spotify",
  height = 352,
  className = "",
}: SpotifyEmbedProps) {
  const embedUrl =
    type === "episode" && episodeId
      ? `https://open.spotify.com/embed/episode/${episodeId}?utm_source=generator&theme=0`
      : `https://open.spotify.com/embed/show/${showId}?utm_source=generator&theme=0`

  return (
    <div className={`w-full ${className}`}>
      {title && <h3 className="font-text-bold text-xl sm:text-2xl text-gray-900 mb-4 text-center">{title}</h3>}
      <div className="relative w-full overflow-hidden rounded-xl shadow-lg bg-gray-100">
        <iframe
          src={embedUrl}
          width="100%"
          height={height}
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="rounded-xl"
          title={title}
        />
      </div>
    </div>
  )
}
