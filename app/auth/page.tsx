'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { supabase } from '@/lib/supabase'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setErro('')
    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password: senha,
    })

    if (error) {
      setErro('Email ou senha incorretos')
      setLoading(false)
      return
    }

    router.push('/pipeline')
  }

  return (
    <div className="min-h-screen flex">
      {/* Lado esquerdo — imagem */}
      <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center bg-[#0a0a0a]">
        <Image
          src="/tela-trilia.png"
          alt="Trilia"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Lado direito — formulário */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#0d0d0d] px-6">
        <div className="w-full max-w-md space-y-8">
          {/* Logo mobile */}
          <div className="lg:hidden flex justify-center mb-8">
            <Image
              src="/tela-trilia.png"
              alt="Trilia"
              width={200}
              height={200}
              className="object-contain"
              priority
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-white">
              TRI<span className="text-red-600">L</span>IA
            </h1>
            <p className="text-gray-400 mt-2 text-sm">
              Gerencie seus negócios com inteligência
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="senha" className="block text-sm font-medium text-gray-300 mb-1">
                Senha
              </label>
              <input
                id="senha"
                type="password"
                required
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition"
                placeholder="••••••••"
              />
            </div>

            {erro && (
              <p className="text-red-500 text-sm">{erro}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-semibold rounded-lg transition"
            >
              {loading ? 'Entrando...' : 'Entrar'}
            </button>
          </form>

          <p className="text-center text-gray-600 text-xs mt-8">
            powered by DIGITAL AIR
          </p>
        </div>
      </div>
    </div>
  )
}
