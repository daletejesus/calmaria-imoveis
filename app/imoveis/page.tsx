"use client"
import MessageCard from "@/components/ContatcList";
import Link from "next/link";
import BoxImovel from "@/components/imovel-box"

import { useEffect, useState } from "react";

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



export default function ListaContatosPage() {
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

  // ... (código anterior)

  return (
    <div className="w-full h-full flex flex-col items-center justify-center py-20">
      <div className="my-8">
        <h2 className="text-4xl text-black font-bold">Todos os Imoveis</h2>
      </div>

      {/* Div ajustada */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
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
            imagem={property.imagens[0]?.url || ""}
          />
        ))}
      </div>
    </div>
  )
}

