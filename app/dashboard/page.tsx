// app/dashboard/page.tsx
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";

import { redirect } from "next/navigation";

export default async function DashboardPage() {
  // precisa de await aqui 👇
  const headersList = await headers();
    const plainHeaders = new Headers(headersList);
  
    const session = await auth.api.getSession({
      headers: plainHeaders,
    });
  
    if (!session) {
        redirect("/auth/sign-in");
    }

  return (
    <div className="w-full flex flex-col  items-center justify-center pt-20 gap-6">
      {/* Nome do usuário */}
      <p className="text-black text-lg">
        Área do usuário: <span className="font-semibold">{session?.user?.email}</span>
      </p>

      {/* Botões */}
      <div className="flex gap-4">
        <Link
          href="/listar-contatos"
          className="px-6 py-3 rounded-xl font-bold bg-gray-600 text-white font-medium shadow hover:bg-gray-200 hover:text-black transition"
        >
          Consultar Contatos
        </Link>
        <Link
          href="/cadastro-imoveis"
          className="px-6 py-3 text-black font-bold rounded-xl bg-gray-200 font-medium shadow hover:bg-gray-700 hover:text-white transition"
        >
          Cadastrar Imóvel
        </Link>
      </div>
    </div>
)
}

