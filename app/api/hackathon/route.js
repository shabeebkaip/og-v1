import {findOne} from '@/lib/utils';
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await findOne('hackathons');
    return NextResponse.json(response);
  } catch (e) {
    console.log('error:', e);
  }
}  