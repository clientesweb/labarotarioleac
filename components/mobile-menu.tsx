"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const closeMenu = () => setIsOpen(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Abrir menú"
      >
        <Menu className="h-6 w-6 text-gray-600" />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50" onClick={closeMenu} />

          {/* Menu Panel */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <span className="font-text-bold text-lg text-gray-900">Menú</span>
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="Cerrar menú"
                >
                  <X className="h-6 w-6 text-gray-600" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 px-4 py-6">
                <div className="space-y-4">
                  <Link
                    href="/servicios"
                    onClick={closeMenu}
                    className="block py-3 px-4 font-text text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    Servicios
                  </Link>
                  <Link
                    href="/nosotros"
                    onClick={closeMenu}
                    className="block py-3 px-4 font-text text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    Nosotros
                  </Link>
                  <Link
                    href="/novedades"
                    onClick={closeMenu}
                    className="block py-3 px-4 font-text text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    Novedades
                  </Link>
                  <Link
                    href="/resultados"
                    onClick={closeMenu}
                    className="block py-3 px-4 font-text text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    Resultados
                  </Link>
                  <Link
                    href="/podcast"
                    onClick={closeMenu}
                    className="block py-3 px-4 font-text text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    Podcast
                  </Link>
                  <Link
                    href="/contacto"
                    onClick={closeMenu}
                    className="block py-3 px-4 font-text text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    Contacto
                  </Link>
                </div>
              </nav>

              {/* Contact Info */}
              <div className="p-4 border-t bg-gray-50">
                <Link
                  href="https://wa.me/5493571360087?text=Hola,%20me%20interesa%20reservar%20un%20turno%20en%20el%20laboratorio%20LEAC"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  <Button className="w-full font-text-bold bg-blue-600 hover:bg-blue-700">Reservar Turno</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
