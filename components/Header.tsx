"use client"
import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-[#f6e7b2] shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-8">
        
        {/* Logo à esquerda */}
        <div className="flex items-center">
          <img src="/capa.png" alt="Logo Calmaria" className="h-12" />
        </div>

        {/* Menu central */}
        <nav className="flex space-x-16 text-lg font-medium">
          <Link href="/quem-somos" className="text-gray-800 hover:text-gray-600">
            Quem Somos
          </Link>
          <Link href="/contatos" className="text-gray-800 hover:text-gray-600">
            Contatos
          </Link>
        </nav>

        {/* Botão login à direita */}
        <Link
          href="/login"
          className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-md shadow hover:bg-yellow-500 transition"
        >
          Login
        </Link>
      </div>
    </header>
  )
}
