-- CreateTable
CREATE TABLE "Media" (
    "id" SERIAL NOT NULL,
    "mediaType" TEXT NOT NULL,
    "mediaTmdbId" TEXT NOT NULL,
    "userPentaNetAccountUserClerkId" TEXT,

    CONSTRAINT "Media_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Media" ADD CONSTRAINT "Media_userPentaNetAccountUserClerkId_fkey" FOREIGN KEY ("userPentaNetAccountUserClerkId") REFERENCES "UserPentaNetAccount"("userClerkId") ON DELETE SET NULL ON UPDATE CASCADE;
