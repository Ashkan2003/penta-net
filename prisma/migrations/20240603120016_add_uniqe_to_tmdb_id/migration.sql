/*
  Warnings:

  - A unique constraint covering the columns `[mediaTmdbId]` on the table `Media` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Media_mediaTmdbId_key" ON "Media"("mediaTmdbId");
