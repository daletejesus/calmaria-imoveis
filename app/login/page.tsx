'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import type { FormEvent } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError("")

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password: senha,
    })

    setLoading(false)

    if (res?.error) {
      setError(res.error)
    } else {
      router.push("/painel-consultor")
    }
  }

  function handleVoltar() {
    router.push("/")
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-0xl px-0 py-6">
        {/* Logo */}
        {/* Botão Voltar */}
        <button
          onClick={handleVoltar}
          className="bg-[#FFFF00] hover:bg-[#daa520] text-black  py-2 px-4 rounded font-semibold"
        >
          ← Voltar
        </button>
      </div>

      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm border border-gray-300"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login Consultor</h2>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu e-mail"
          required
          className="w-full p-2 border rounded mb-4"
        />

        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Digite a senha"
          required
          className="w-full p-2 border rounded mb-4"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded font-bold"
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  )
}
