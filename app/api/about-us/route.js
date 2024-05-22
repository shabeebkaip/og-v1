
import { NextResponse } from "next/server"
import { findOne } from '@/lib/utils';
export async function GET() {
  try {
    const response = await findOne('abouts');
    return NextResponse.json(response);
  } catch (e) {
    console.log('error:', e);
  }

}