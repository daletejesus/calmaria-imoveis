'use client'
import { useRouter } from 'next/navigation'

export default function ContatoPage() {
  const router = useRouter()

  return (
    <main className="max-w-5xl mx-auto px-6 py-12 pb-24"> {/* Aumentei o padding-bottom (pb-24) */}
      
      {/* Botão de voltar */}
      <div className="mb-8">
        <button
          onClick={() => router.push('/')}
          className="bg-[#FFFF00] px-4 py-2 rounded hover:bg-[#daa520] transition font-bold"
        >
          ← Voltar 
        </button>
      </div>

      {/* Bloco principal com texto e imagem lado a lado */}
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Informações de contato */}
        <section className="md:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold text-black">Entre em contato</h1>
          <p className="text-gray-600">
            Estamos aqui para te ajudar a encontrar o lar ideal. Fale conosco pelos canais abaixo:
          </p>

          <div className="space-y-4 text-gray-700">
            <p>📞 <strong>Telefone:</strong> (11) 98765-4321</p>
            <p>📱 <strong>WhatsApp:</strong> (11) 91234-5678</p>
            <p>📧 <strong>E-mail:</strong> contato@calmariaimoveis.com.br</p>
            <p>📍 <strong>Endereço:</strong> Rua dos Sonhos, 123 – Barueri, SP</p>
            <p>⏰ <strong>Atendimento:</strong> Segunda à Sexta, das 9h às 18h</p>
          </div>
        </section>

        {/* Imagem decorativa */}
        <section className="md:w-1/2">
          <img
            src="/contato.jpg"
            alt="Imagem de atendimento ou casa"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </section>
      </div>
    </main>
  );
}
