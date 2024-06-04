import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/db";
import { auth } from "@clerk/nextjs/server";

// get the list of related medias that user has added them into his list(userMovieTVList)
export async function GET(request: NextRequest) {
  // get current user-id
  const { userId } = auth();

  const data = await prisma.media.findMany({
    where: { userPentaNetAccountUserClerkId: userId },
  });

  return NextResponse.json(data, { status: 200 });
}

// create a new item(media) for user list // user add media in his list functionality
export async function POST(request: NextRequest) {
  // get the req
  const body = await request.json();
  console.log(body,"ooooooooooooooo")
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

  // create a media in db related to this user
  const data = await prisma.userPentaNetAccount.update({
    where: { userClerkId: userId },
    data: {
      userMovieTVList: {
        create: { mediaType: body.mediaType, mediaTmdbId: body.mediaTmdbId },
      },
    },
  });
  return NextResponse.json("media successfully created", { status: 201 });
}

// delete the media from user list
export async function DELETE(request: NextRequest) {
  // get the req
  const body = await request.json();

  const data = await prisma.media.delete({
    where: { mediaTmdbId: body.mediaTmdbId },
  });

  return NextResponse.json("media successfully deleted", { status: 200 });
}
