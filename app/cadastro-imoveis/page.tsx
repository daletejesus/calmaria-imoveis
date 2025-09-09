import CadastroImovelForm from "@/components/cadastroImoveis"
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

import { redirect } from "next/navigation";

export default async function CadastroImoveisHome() {

  const headersList = await headers();
  const plainHeaders = new Headers(headersList);

  const session = await auth.api.getSession({
    headers: plainHeaders,
  });

  if (!session) {
      redirect("/auth/sign-in");
  }

  return (
    <div className="my-20">
      <CadastroImovelForm />
    </div>
  )
}
