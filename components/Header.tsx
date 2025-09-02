"use client"
import Link from "next/link"

export default function Header() {
  return (
    <header style={{ backgroundColor: "#f6e7b2" }} className="shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-8">

        {/* Logo à esquerda */}
        <div className="flex items-center">
          <img src="/capa.png" alt="Logo Calmaria" style={{ height: "100px", width: "auto" }} />
        </div>

        {/* Menu central */}
       <nav style={{ display: 'flex', gap: '8rem', fontSize: '1.125rem', fontWeight: 500 }}>
    <Link
  href="/quem-somos"
  style={{
    backgroundColor: '#fffb00ff',
    color: 'black',
    textDecoration: 'none',
    fontWeight: 'bold',
    padding: '8px 16px',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // ⬅ Sombra adicionada aqui
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = '#d49520ff';
    e.currentTarget.style.color = 'white';
    e.currentTarget.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.2)'; // sombra maior no hover
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = '#fffb00ff';
    e.currentTarget.style.color = 'black';
    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  }}
>
  Quem Somos
</Link>
          <Link
            href="/contato"
    style={{
    backgroundColor: '#fffb00ff',
    color: 'black',
    textDecoration: 'none',
    fontWeight: 'bold',
    padding: '8px 16px',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // ⬅ Sombra adicionada aqui
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = '#d49520ff';
    e.currentTarget.style.color = 'white';
    e.currentTarget.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.2)'; // sombra maior no hover
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = '#fffb00ff';
    e.currentTarget.style.color = 'black';
    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  }}
>
            Contatos
          </Link>
        </nav>

        {/* Botão login à direita */}
        <Link
          href="/login"
          style={{
    color: 'black',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginRight: '3rem',
  }}
 onMouseEnter={(e) => (e.currentTarget.style.color = '#d49520ff')} 
  onMouseLeave={(e) => (e.currentTarget.style.color = 'black')}
>
          Login 👤
        </Link>
      </div>
    </header>
  )
}
