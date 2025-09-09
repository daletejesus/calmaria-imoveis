'use client'
import ContactForm from '@/components/form-contato'
import { useRouter } from 'next/navigation'

export default function ContatoPage() {
  const router = useRouter()

  return (
    <main
      style={{
        maxWidth: '960px',
        margin: '0 auto',
        padding: '3rem 1.5rem 6rem 1.5rem',
      }}
    >
      {/* Botão de voltar */}
      {/* <div style={{ marginBottom: '2rem' }}>
        <button
          onClick={() => router.push('/')}
          style={{
            backgroundColor: '#FFFF00',
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            fontWeight: 'bold',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#daa520')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#FFFF00')}
        >
          ← Voltar
        </button>
      </div> */}

      {/* Container flexível */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '2rem',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
        }}
      >
        {/* Texto à esquerda (order: 1) */}
        <section
          style={{
            flex: '1 1 300px',
            minWidth: '300px',
            order: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <h1
            style={{
              fontSize: '2.25rem',
              fontWeight: 'bold',
              color: '#000',
              marginBottom: '1rem',
            }}
          >
            Entre em contato
          </h1>
          <p style={{ color: '#555' }}>
            Estamos aqui para te ajudar a encontrar o lar ideal. Fale conosco pelos canais abaixo:
          </p>

          <div style={{ color: '#333', lineHeight: '1.5', fontWeight: 'normal' }}>
            <p>📞 <strong>Telefone:</strong> (11) 98765-4321</p>
            <p>📱 <strong>WhatsApp:</strong> (11) 91234-5678</p>
            <p>📧 <strong>E-mail:</strong> contato@calmariaimoveis.com.br</p>
            <p>📍 <strong>Endereço:</strong> Rua dos Sonhos, 123 – Barueri, SP</p>
            <p>⏰ <strong>Atendimento:</strong> Segunda à Sexta, das 9h às 18h</p>
          </div>
        </section>

        {/* Imagem à direita (order: 2) */}
        <section
          style={{
            flex: '1 1 300px',
            minWidth: '300px',
            order: 2,
            marginTop: '6rem',
          }}
        >
          <img
            src="/contato.jpg"
            alt="Imagem de atendimento ou casa"
            style={{
              borderRadius: '12px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              maxHeight: '400px',
            }}
          />
        </section>

        
      </div>

      <ContactForm />
    </main>
  )
}
