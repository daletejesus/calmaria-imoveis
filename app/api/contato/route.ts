// app/api/imoveis/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {

    const body = await req.json();

    const { 
      nome, email, telefone, mensagem
    } = body as {
      nome: string, 
      email: string,
      telefone: string,
      mensagem: string
    };

    console.log(email, nome, mensagem, telefone)

    if (!email || !nome || !mensagem || !telefone) {
      return NextResponse.json(
        { error: "Informações faltando para completar a mensagem" },
        { status: 400 }
      );
    }


    const novoContato = await prisma.contato.create({
      data: {
        nome,
        email,
        telefone,
        mensagem
      },
    });

    return NextResponse.json(novoContato);

  } catch (error) {
    return NextResponse.json(
      { error: "Erro interno ao criar contato." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const imoveis = await prisma.contato.findMany({
      where: { status: true }
    })

    return NextResponse.json(imoveis);
    
  } catch (error) {
    console.error("Erro ao retornar imoveis:", error);
    return NextResponse.json(
      { error: "Erro ao retornar imoveis." },
      { status: 500 }
    );
  }
}

export async function PATCH(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
    
        const { id } = params;

        const buscaContato = await prisma.contato.findFirst({
            where: { id: id } // Coloque o ID correto aqui
        });

        if (!buscaContato) {
            return NextResponse.json(
                { error: "Contato não encontrado." },
                { status: 404 }
            );
        }

        const updateContato = await prisma.contato.update({
            where: { id: id }, // Coloque o ID correto aqui
            data: { status: true }
        });

        return NextResponse.json(updateContato);
        
    } catch (error) {
        console.error("Erro ao atualizar contato:", error);
        return NextResponse.json(
            { error: "Erro ao atualizar contato." },
            { status: 500 }
        );
    }
}