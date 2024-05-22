import clientPromise from '@/lib/db';
import { NextResponse } from "next/server"
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const response = await db.collection('abouts').find({}).toArray();
    return NextResponse.json(response);
  } catch (e) {
    console.log('error:', e);
  }

}