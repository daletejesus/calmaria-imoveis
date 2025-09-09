import {Button} from "@heroui/react";
import Link from "next/link";

export function LoginButton() {
  return  (
    <Link href="/auth/sign-in" className="text-white cursor-pointer bg-[#2b2b2b] px-4 py-2 rounded hover:bg-slate-700" >
        Login
    </Link>
  )
}

export function AuthButtons() {
  return (
    <div className="flex gap-4">
      {/* Botão de Login */}
      <Link href="/auth/sign-in" className="inline-block px-6 py-2.5 bg-[#2b2b2b] text-white font-medium text-xs leading-tight uppercase rounded shadow-md focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out">
        Entrar
      </Link>

      {/* Botão de Cadastrar */}
      <Link href="/auth/sign-up" className="inline-block px-6 py-2.5 bg-gray-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-800 hover:shadow-lg focus:bg-gray-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out">
        Cadastrar
      </Link>
    </div>
  );
}