-- AlterTable
ALTER TABLE "public"."Account" ALTER COLUMN "provider" DROP NOT NULL,
ALTER COLUMN "providerAccountId" DROP NOT NULL;
