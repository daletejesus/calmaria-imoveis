import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs"; // use bcryptjs

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    console.log("Recebido:", email, password); // <-- aqui, logo após extrair email e senha

    if (!email || !password) {
      return NextResponse.json({ error: "Email e senha são obrigatórios" }, { status: 400 });
    }

    // Buscar o usuário pelo e-mail
    const user = await prisma.usuario.findUnique({
      where: { email }
    });

    // Se usuário não encontrado
    if (user) {
      return NextResponse.json({ error: "Email já existente na base" }, { status: 400 });
    }

    const newUser = await prisma.usuario.create({
      data: {
        email,
        password: await bcrypt.hash(password, 10) // Hash da senha antes de salvar
      }
    });

    // Se passou, login ok
    return NextResponse.json({ newUser }, { status: 200 });

  } catch (error) {
    console.error("Erro no login:", error);
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 });
  }
}
