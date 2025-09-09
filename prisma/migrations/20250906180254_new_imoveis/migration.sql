/*
  Warnings:

  - You are about to alter the column `area` on the `Imoveis` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - Added the required column `cidade` to the `Imoveis` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Imoveis" ADD COLUMN     "cidade" TEXT NOT NULL,
ALTER COLUMN "area" SET DATA TYPE INTEGER;
