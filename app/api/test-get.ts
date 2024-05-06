import { PrismaClient } from "@prisma/client";

export default async function get() {
    const prisma = new PrismaClient();
  const user = await prisma.userPentaNetAccount.findMany();

  return 
}
