import { Clock } from "lucide-react"
import Link from "next/link"

export default function HeaderAnnouncement() {
  return (
    <div className="bg-blue-600 text-white py-1.5 sm:py-2 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-center text-xs sm:text-sm">
          <div className="flex items-center space-x-2">
            <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
            <Link href="/contacto" className="font-text-bold hover:underline">
              Ver Horarios y Ubicaciones
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
