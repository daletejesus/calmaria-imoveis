'use client'
import { useRouter } from 'next/navigation'

export default function SobreNosPage() {
  const router = useRouter()

  return (
    <main className="relative max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center gap-10">
      
      {/* Botão Voltar no canto superior esquerdo */}
      <button
        onClick={() => router.replace('/')}
        className="absolute top-0 left-0 mt-4 ml-4 px-4 py-2 bg-[#FFFF00] hover:bg-[#daa520] border border-none text-sm rounded shadow font-bold"
      >
        ← Voltar
      </button>

      {/* Texto */}
     <section className="md:w-1/2 space-y-6 mt-12">
  <h1 className="text-4xl font-bold text-gray-800">Imobiliária Calmaria</h1>

  <p className="text-gray-700 leading-relaxed">
    Calmaria nasceu 2023, idealizada e fundada por Mayara Sayed, com o propósito de transformar a experiência de encontrar o imóvel perfeito em algo tranquilo e seguro.
  </p>

  <p className="text-gray-700 leading-relaxed">
    Localizada em Barueri, São Paulo, nossa imobiliária tem como missão oferecer atendimento personalizado, confiança e transparência em cada negociação.
  </p>

  <p className="text-gray-700 leading-relaxed">
    Desde o início, buscamos construir relacionamentos duradouros com nossos clientes, valorizando o respeito e o compromisso em todas as etapas do processo imobiliário.
  </p>

  <p className="text-gray-700 leading-relaxed italic">
    Na Calmaria, acreditamos que a jornada deve ser tranquila — por isso, nosso nome reflete nossa essência: proporcionar calma e segurança para você e sua família.
  </p>
</section>
      {/* Imagem */}
      <section className="md:w-1/2 mt-12">
        <img
          src="/sobre.jpeg"
          alt="Foto de imóvel e chave"
          className="rounded-lg shadow-lg object-cover w-full max-h-[400px]"
        />
      </section>
    </main>
  );
}
