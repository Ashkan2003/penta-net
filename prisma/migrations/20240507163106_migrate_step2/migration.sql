/*
  Warnings:

  - Added the required column `userClerkId` to the `UserPentaNetAccount` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserPentaNetAccount" ADD COLUMN     "userClerkId" TEXT NOT NULL;
