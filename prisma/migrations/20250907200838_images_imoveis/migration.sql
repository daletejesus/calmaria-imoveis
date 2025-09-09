-- CreateTable
CREATE TABLE "public"."Imagem" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "imovelId" TEXT NOT NULL,

    CONSTRAINT "Imagem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Imagem" ADD CONSTRAINT "Imagem_imovelId_fkey" FOREIGN KEY ("imovelId") REFERENCES "public"."Imoveis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
