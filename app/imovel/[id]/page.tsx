"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

interface Imovel {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  banheiros: number;
  quartos: number;
  cidade: string;
  endereco: string;
  vaga: number;
  area: number;
  imagens: {
      id: string;
      url: string;
      imovelId: string;
  }[];
}


export default function VillaPage() {
  const { id } = useParams(); // pega o id da URL

  const [imovel, setImovel] = useState<Imovel | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchImovel = async () => {
      try {
        const res = await fetch(`/api/imoveis?id=${id}`);
        if (!res.ok) throw new Error("Erro ao buscar imóvel");
        const data = await res.json();
        setImovel(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchImovel();
  }, [id]);

  if (loading) return <p className="p-10">Carregando...</p>;
  if (!imovel) return <p className="p-10">Imóvel não encontrado.</p>;

  return (
    <main className="text-black max-w-6xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
           <h1 className="text-3xl font-bold">{imovel.nome}</h1>  {/* Inserir a informação Titulo da API */}
          <p className="text-gray-500">{imovel.cidade} · {imovel.endereco}</p>
        </div>
        {/* <div className="flex gap-3">
          <ShareButton text={imovel.descricao} url={`localhost:3000/imovel/${id}`} title={imovel.nome}/>
        </div> */}
      </div>

      {/* Galeria */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <img
          src={imovel.imagens[0]?.url || "/villa1.jpg"}  
          alt="Main Villa"
          className="rounded-xl object-cover w-full h-[400px]"
        />
        <div className="grid grid-cols-2 gap-4">
          {imovel.imagens.slice(1).map((imagem) => (
            <img src={imagem.url} key={imagem.id} className="rounded-xl object-cover h-[195px]" />
          ))}
        </div>
      </div>
        <div className="border-b-2 w-full border-gray-200 mb-6"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Descrição */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold mb-3">Description</h2>
           <p className="text-gray-700 leading-relaxed"> {/* Colocar a informação de descrição da API */}
            {imovel.descricao}
          </p>
        </div>

        {/* Caixa de reserva */}
        <div className="bg-[#f6f6f6] rounded-2xl p-6 space-y-5 w-[300px] justify-center itens-center">
          <div className="flex items-end justify-between">
            <p className="text-black text-2xl font-bold">R$ {imovel.preco}</p>
          </div>

          <div className="bg-white rounded-xl px-4 py-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col">
                <label className="text-sm text-gray-500">Quartos</label>
                <div className="flex items-center border rounded-lg px-3 py-2">
                   <span>{imovel.quartos}</span>  {/* trazer informações de quartos */}
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-gray-500">Banheiros</label>
                <div className="flex items-center border rounded-lg px-3 py-2">
                  <span>{imovel.banheiros}</span> {/* trazer informações de banheiros */}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col">
                <label className="text-sm text-gray-500">Vagas</label>
                <div className="flex items-center border rounded-lg px-3 py-2">
                  <span>{imovel.vaga}</span> {/* trazer informações de banheiros */}
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-gray-500">Area</label>
                <div className="flex items-center border rounded-lg px-3 py-2">
                   <span>{imovel.area}</span>  {/* trazer informações de quartos */}
                </div>
              </div>
            </div>
          </div>
          

          

          <Link href={`https://wa.me/11945791665?text=Olá, tive interesse na casa '${imovel.nome}'`} className="w-full bg-black text-white py-3 px-2 rounded-lg font-medium hover:bg-gray-800 transition">
            Entre em Contato Agora!
          </Link>
        </div>
      </div>
    </main>
  );
}
