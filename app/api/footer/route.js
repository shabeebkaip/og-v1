import { find } from '@/lib/utils';
import { NextResponse } from 'next/server';

export async function GET(req) {
  try {
    const response = await find('footers');
    return NextResponse.json(response);
  } catch (e) {
    console.log(e)
  }
}