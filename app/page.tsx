"use client";

import { useEffect, useState } from "react";
import NewButton from "@/components/button"
import Banner from "../components/banner"
import BoxImovel from "@/components/imovel-box"
import {Button} from '@heroui/button'; 
import { PageTextH2 } from "@/components/texts";
import ContactForm from "@/components/form-contato"

interface Property {
  id: string;
  preco: string;
  cidade: string;
  nome: string;
  quartos: number;
  banheiros: number;
  area: string;
  imagens: {
      id: string;
      url: string;
      imovelId: string;
  }[];
}

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch("/api/imoveis");
        if (!res.ok) throw new Error("Erro ao buscar imóveis");
        const data: Property[] = await res.json();
        setProperties(data);
      } catch (err) {
        console.error(err);
      } finally {
        console.log(properties)
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading && !properties) return <p className="text-white">Carregando imóveis...</p>;

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

      <div className="w-full px-10 mt-10">
        <div className="my-6">
          <PageTextH2 text="Explorar" />
        </div>
        <div className="w-full flex gap-4">
          {properties.map((property) => (
            <BoxImovel
              key={property.id}
              id={property.id}
              price={`R$ ${property.preco}`}
              place={property.cidade}
              title={property.nome}
              beds={property.quartos}
              baths={property.banheiros}
              area={property.area}
              imagem={property.imagens[0].url || ""}
            />
          ))}
        </div>
      </div>
      <div className="mt-10 w-full flex items-center justify-center">
        <div className="md:w-full xl:w-[70%]">
          <ContactForm />
        </div>
      </div>
    </main>
  )
}
