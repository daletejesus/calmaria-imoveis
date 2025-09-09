
import Link from "next/link";

interface MessageCardProps {
  id: string;
  nome: string;
  telefone: string; // no formato 5511999999999
  email: string;
  mensagem: string;
}

export default function MessageCard({ nome, telefone, email, mensagem }: MessageCardProps) {
  const whatsappUrl = `https://wa.me/${telefone}?text=Olá ${nome}, vi sua mensagem: "${mensagem}"`;

  return (
    <div className="w-full max-w-2xl bg-white shadow-md rounded-xl p-6 flex justify-between items-start gap-6">
      {/* Dados da mensagem */}
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold text-gray-800">{nome}</p>
        <p className="text-gray-600">📱 {telefone}</p>
        <p className="text-gray-600">✉️ {email}</p>
        <p className="text-gray-700 mt-2">{mensagem}</p>
      </div>

      {/* Botão de responder */}
      <Link
        href={whatsappUrl}
        target="_blank"
        className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
      >
        Responder
      </Link>
    </div>
  );
}
