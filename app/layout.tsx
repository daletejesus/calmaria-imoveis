import Header from "../components/Header"
import Footer from "../components/Footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col">
        {/* Header fixo em todas as páginas */}
        <Header />

        {/* Conteúdo da página (cresce e empurra o footer) */}
        <main className="flex-grow">{children}</main>

        {/* Footer fixo em todas as páginas */}
        <Footer />
      </body>
    </html>
  )
}
