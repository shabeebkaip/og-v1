import {find} from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await find("courses");
    return NextResponse.json(response);
  } catch (e) {
    console.log("error:", e);
  }
}