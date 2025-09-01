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

    console.log("Usuário encontrado:", user); // <-- aqui, depois de buscar o usuário no banco

    // Se usuário não encontrado
    if (!user) {
      return NextResponse.json({ error: "Usuário e/ou senha incorretos" }, { status: 400 });
    }

    // ✅ Aqui você usa bcrypt.compare() para validar a senha digitada com a do banco
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return NextResponse.json({ error: "Usuário e/ou senha incorretos" }, { status: 400 });
    }

    // Se passou, login ok
    return NextResponse.json({ user }, { status: 200 });

  } catch (error) {
    console.error("Erro no login:", error);
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 });
  }
}
