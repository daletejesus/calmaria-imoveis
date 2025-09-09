"use client";

import { useState } from "react";
import { signIn, useSession, signOut } from "@/lib/auth-client";
import { redirect } from "next/navigation";

export default function LoginPage() {
  const { data: session, isPending } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (isPending) return <p>Carregando...</p>;

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await signIn.email({ email, password, callbackURL: "/dashboard" });
        }}
        className="flex flex-col gap-4 w-64"
      >
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Entrar
        </button>
      </form>
    </div>

    
  );
}
