import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/db";
import { useAuth } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export async function POST(request: NextRequest) {
  // get the req
  const body = await request.json();

  // get current user-id
  const { userId } = auth();

  // if the user-id does not exists it means that there isnt any user
  if (!userId) {
    return NextResponse.json("the user is not signed in", { status: 401 });
  }

  // get all the medias(movie or tv) from db with this tmdb-id
  const medias = await prisma.media.findMany({
    where: { mediaTmdbId: body.mediaTmdbId },
  });

  // if the array has lenght it means that the prisma has found a media with the same tmdb-id so dont creat it becuze of duplicate
  if (medias.length != 0) {
    return NextResponse.json("the media is in db", { status: 208 });
  }

  const data = await prisma.userPentaNetAccount.update({
    where: { userClerkId: userId },
    data: {
      userMovieTVList: {
        create: { mediaType: body.mediaType, mediaTmdbId: body.mediaTmdbId },
      },
    },
  });
  return NextResponse.json(data, { status: 201 });
}
