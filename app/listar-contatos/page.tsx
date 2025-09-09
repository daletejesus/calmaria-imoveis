"use client"
import MessageCard from "@/components/ContatcList";
import Link from "next/link";

import { useEffect, useState } from "react";

interface Messages {
  id: string;
  nome: string;
  telefone: string; // no formato 5511999999999
  email: string;
  mensagem: string;
}


export default function ListaContatosPage() {
  const [contatos, setContatos] = useState<Messages[]>([]);
  const [loading, setLoading] = useState(true);

  // precisa de await aqui 👇
  // const headersList = await headers();
  // const plainHeaders = new Headers(headersList);

  // const session = await auth.api.getSession({
  //   headers: plainHeaders,
  // });

  // if (!session) {
  //   return <p>Você precisa estar logado para ver essa página.</p>;
  // }

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch("/api/contato");
        if (!res.ok) throw new Error("Erro ao buscar imóveis");
        const data: Messages[] = await res.json();
        setContatos(data);
      } catch (err) {
        console.error(err);
      } finally {
        console.log(contatos)
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center pt-20">
      className="text-2xl text-black font-bold"

      <div className="w-full h-full flex flex-col items-center justify-center gap-2">
        {contatos.map((contato) => (
          <MessageCard
            key={contato.id}
            id={contato.id}
            email={contato.email}
            telefone={contato.telefone}
            nome={contato.nome}
            mensagem={contato.mensagem}
          />
        ))}
      </div>
    </div>
)
}

