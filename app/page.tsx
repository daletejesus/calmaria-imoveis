import Banner from "../components/banner"

export default function Home() {
  return (
    <main>
      {/* Banner com imagem e frase */}
      <Banner />

      {/* Filtros de busca */}
      <section className="bg-white p-6 flex justify-center gap-4 shadow-md">
        <select className="border p-2 rounded">
          <option>Imóvel</option>
        </select>
        <select className="border p-2 rounded">
          <option>Opção de Negócio</option>
        </select>
        <select className="border p-2 rounded">
          <option>Cidades de São Paulo</option>
        </select>
        <button className="bg-yellow-700 text-white px-4 py-2 rounded hover:bg-yellow-800">
          Buscar
        </button>
      </section>
    </main>
  )
}
