// app/api/imoveis/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const nome = formData.get("nome") as string;
    const descricao = formData.get("descricao") as string;
    const endereco = formData.get("endereco") as string;
    const area = parseFloat(formData.get("area") as string);
    const quartos = parseInt(formData.get("quartos") as string);
    const banheiros = parseInt(formData.get("banheiros") as string);
    const vaga = parseInt(formData.get("vaga") as string);
    const preco = parseFloat(formData.get("preco") as string);
    const iptu = parseFloat(formData.get("iptu") as string);
    const consultorEmail = formData.get("consultorEmail") as string;

    if (!consultorEmail) {
      return NextResponse.json(
        { error: "Email do consultor não fornecido." },
        { status: 400 }
      );
    }

    const usuario = await prisma.usuario.findUnique({
      where: { email: consultorEmail },
    });

    if (!usuario) {
      return NextResponse.json(
        { error: "Consultor não encontrado." },
        { status: 404 }
      );
    }

    // Aqui você pode pegar a imagem também se quiser tratar
    // const imagem = formData.get("imagem") as File;

    const novoImovel = await prisma.imoveis.create({
      data: {
        nome,
        descricao,
        endereco,
        area,
        quartos,
        banheiros,
        vaga,
        preco,
        iptu,
        consultor: {
          connect: {
            id: usuario.id,
          },
        },
      },
    });

    return NextResponse.json(novoImovel);
  } catch (error) {
    console.error("Erro ao cadastrar imóvel:", error);
    return NextResponse.json(
      { error: "Erro interno ao cadastrar imóvel." },
      { status: 500 }
    );
  }
}
