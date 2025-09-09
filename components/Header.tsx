"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import {AuthButtons} from "./button"

export default function Header() {
  const [showHeader, setShowHeader] = useState(true)
  const [lastScroll, setLastScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      if (currentScroll > lastScroll && currentScroll > 100) {
        // Rolando para baixo
        setShowHeader(false)
      } else {
        // Rolando para cima
        setShowHeader(true)
      }
      setLastScroll(currentScroll)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScroll])

  return (
    <header
      className={`bg-white fixed top-0 left-0 w-full flex justify-between items-center px-10 z-50 transition-transform duration-300 border-b ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div>
        <Link href="/" ><img
          src="/capa.png"
          alt="Logo Calmaria"
          style={{ height: "100px", width: "auto" }}
          
        /></Link>
      </div>
      <div className="flex gap-8 text-white font-bold ">
        <Link href="/quem-somos" className="text-black">Quem Somos</Link>
        <Link href="/contato" className="text-black">Contato</Link>
        <Link href="/imoveis" className="text-black">Explorar Imoveis</Link>
      </div>
      <div>
        <AuthButtons />
      </div>
    </header>
  )
}
