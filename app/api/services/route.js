import { NextResponse } from "next/server";
import clientPromise from '@/lib/db';

export async function GET(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db();
    const response = await db.collection('homefeatures').find({}).toArray();
    return NextResponse.json(response);
  } catch (e) {
    console.log('error:', e);
  }
}  