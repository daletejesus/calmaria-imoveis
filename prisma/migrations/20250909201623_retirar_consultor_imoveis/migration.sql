/*
  Warnings:

  - You are about to drop the column `consultorId` on the `Imoveis` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Imoveis" DROP CONSTRAINT "Imoveis_consultorId_fkey";

-- AlterTable
ALTER TABLE "public"."Imoveis" DROP COLUMN "consultorId";
