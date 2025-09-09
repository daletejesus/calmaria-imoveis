'use client'
import { useRouter } from 'next/navigation'

export default function SobreNosPage() {
  const router = useRouter()

  return (
    <main
      style={{
        position: 'relative',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem 1.5rem',
      }}
    >
      {/* Botão Voltar */}
      {/* <button
        onClick={() => router.replace('/')}
        style={{
          position: 'absolute',
          top: '1rem',
          left: '1rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#FFFF00',
          border: 'none',
          fontSize: '0.875rem',
          borderRadius: '8px',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#daa520')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#FFFF00')}
      >
        ← Voltar
      </button> */}

      {/* Container flexível */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '2rem',
          alignItems: 'flex-start',
          marginTop: '5rem',
          flexWrap: 'wrap', // para responsividade
        }}
      >
        {/* Texto à esquerda */}
        <section style={{ flex: 1, minWidth: '300px' }}>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#2d2d2d' }}>
            Imobiliária Calmaria
          </h1>

          <p
            style={{
              color: '#4b4b4b',
              lineHeight: '1.6',
              textAlign: 'justify',
              textIndent: '2rem',
              marginTop: '1rem',
            }}
          >
            Calmaria nasceu 2023, idealizada e fundada por Mayara Sayed, com o propósito de
            transformar a experiência de encontrar o imóvel perfeito em algo tranquilo e seguro.
            Localizada em Barueri, São Paulo, nossa imobiliária tem como missão oferecer atendimento
            personalizado, confiança e transparência em cada negociação. Desde o início, buscamos
            construir relacionamentos duradouros com nossos clientes, valorizando o respeito e o
            compromisso em todas as etapas do processo imobiliário. Na Calmaria, acreditamos que a
            jornada deve ser tranquila — por isso, nosso nome reflete nossa essência: proporcionar
            calma e segurança para você e sua família.
          </p>
        </section>

        {/* Imagem à direita */}
        <section style={{ flex: 1, minWidth: '300px' }}>
          <img
            src="/sobre.jpeg"
            alt="Foto de imóvel e chave"
            style={{
              borderRadius: '12px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
              objectFit: 'cover',
              width: '100%',
              height: 'auto',
              maxHeight: '400px',
            }}
          />
        </section>
      </div>
    </main>
  )
}
