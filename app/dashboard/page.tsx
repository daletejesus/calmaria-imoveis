// app/dashboard/page.tsx
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function DashboardPage() {
  // precisa de await aqui 👇
  const headersList = await headers();
  const plainHeaders = new Headers(headersList);

  const session = await auth.api.getSession({
    headers: plainHeaders,
  });

  if (!session) {
    return <p>Você precisa estar logado para ver essa página.</p>;
  }

  return (
    <div className="pt-20">
        <p>Área do usuário: {session.user.email}</p>
    </div>
)
}
