// app/api/imoveis/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const config = {
  api: {
    bodyParser: false, // necessário para upload de arquivos
  },
};

export async function POST(req: Request) {
  try {

    const body = await req.json();

    const { 
      nome, descricao, endereco, area, quartos, cidade, banheiros, vaga, preco, iptu, consultorEmail, images
    } = body as {
      nome: string, 
      descricao: string,
      endereco: string,
      area: number,
      quartos: number,
      cidade: string,
      banheiros: number,
      vaga: number,
      preco: number,
      iptu: number,
      consultorEmail: string,
      images: string[],
    };

    console.log(images)

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


    const novoImovel = await prisma.imoveis.create({
      data: {
        nome,
        descricao,
        endereco,
        area,
        cidade,
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

    return NextResponse.json({ id: novoImovel.id }, { status: 201 });
    
  } catch (error) {
    console.error("Erro ao cadastrar imóvel:", error);
    return NextResponse.json(
      { error: "Erro interno ao cadastrar imóvel." },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (id) {

      const imovel = await prisma.imoveis.findUnique({
        where: { id: id },
        include: {
          imagens: true// Inclui as imagens relacionadas
        }
      });

      console.log(imovel)

      if (!imovel) {
        return NextResponse.json(
          { error: "Imóvel não encontrado." },
          { status: 404 }
        );
      }

      return NextResponse.json(imovel);
    }

    // Buscar todos os imóveis com status true
    const imoveis = await prisma.imoveis.findMany({
      where: { status: true },
      include: {
        imagens: true// Inclui as imagens relacionadas
      }
    });

    console.log(imoveis)

    return NextResponse.json(imoveis);
  } catch (error) {
    console.error("Erro ao retornar imóveis:", error);
    return NextResponse.json(
      { error: "Erro ao retornar imóveis." },
      { status: 500 }
    );
  }
}