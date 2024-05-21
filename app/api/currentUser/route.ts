import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/db";

// this is a get-api for getting the current user information by the email- of nextAuth
export async function GET(request: NextRequest) {
  //this is the way of geetting the user authState in server components

  

  return NextResponse.json("dfdf",{status:301});
}
