-- CreateTable
CREATE TABLE "public"."Usuario" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Imoveis" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "quartos" TEXT NOT NULL,
    "banheiros" TEXT NOT NULL,
    "vaga" TEXT NOT NULL,
    "preco" DECIMAL(65,30) NOT NULL,
    "iptu" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Imoveis_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "public"."Usuario"("email");
