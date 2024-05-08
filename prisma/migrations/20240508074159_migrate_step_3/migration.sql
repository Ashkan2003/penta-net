/*
  Warnings:

  - The primary key for the `UserPentaNetAccount` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `UserPentaNetAccount` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserPentaNetAccount" DROP CONSTRAINT "UserPentaNetAccount_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "UserPentaNetAccount_pkey" PRIMARY KEY ("userClerkId");
