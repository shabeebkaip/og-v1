import {findOne} from '@/lib/utils';
import { NextResponse } from "next/server";
import { URLSearchParams } from 'url';

export async function GET(req, res) {
  try {
    const url = new URL(req.url);
    const params = new URLSearchParams(url.search);
    const key = params.get('key');
    const query = key ? { key } : {};
    const response = await findOne('pagecontents', query);
    return NextResponse.json(response);
  } catch (e) {
    console.log('error:', e);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}  