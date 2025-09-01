/*
  Warnings:

  - Added the required column `consultorId` to the `Imoveis` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `area` on the `Imoveis` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `quartos` on the `Imoveis` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `banheiros` on the `Imoveis` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `vaga` on the `Imoveis` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "public"."Imoveis" ADD COLUMN     "consultorId" TEXT NOT NULL,
ADD COLUMN     "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "area",
ADD COLUMN     "area" DOUBLE PRECISION NOT NULL,
DROP COLUMN "quartos",
ADD COLUMN     "quartos" INTEGER NOT NULL,
DROP COLUMN "banheiros",
ADD COLUMN     "banheiros" INTEGER NOT NULL,
DROP COLUMN "vaga",
ADD COLUMN     "vaga" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Imoveis" ADD CONSTRAINT "Imoveis_consultorId_fkey" FOREIGN KEY ("consultorId") REFERENCES "public"."Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
