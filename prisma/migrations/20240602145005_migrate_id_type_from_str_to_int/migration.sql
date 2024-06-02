/*
  Warnings:

  - Changed the type of `mediaTmdbId` on the `Media` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Media" DROP COLUMN "mediaTmdbId",
ADD COLUMN     "mediaTmdbId" INTEGER NOT NULL;
