// "use client";
import Video from "next-video";
import vi from "/videos/vi.mp4";
import vi2 from "/videos/get-started.mp4";
import bleach from "/videos/bleach-video.mp4";
import { PrismaClient } from "@prisma/client";

export default async function Page() {
  const prisma = new PrismaClient();

  const user = await prisma.userPentaNetAccount.findMany();
console.log(user,"dfadf")
  return <div>{/* <Video src={bleach} width={500} height={400} /> */}</div>;
}
