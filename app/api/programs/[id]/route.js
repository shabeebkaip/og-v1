import { findOne } from '@/lib/utils';
import { ObjectId } from 'mongodb';  // Import ObjectId from MongoDB if your IDs are stored as ObjectId
import { NextResponse } from "next/server";

function isValidObjectId(id) {
  return ObjectId.isValid(id);
}

export async function GET(req) {
  try {
    // Extract the ID from the URL path
    const id = req.nextUrl.pathname.split('/').pop();

    // Validate the ID format
    if (!isValidObjectId(id)) {
      return NextResponse.json({ error: 'Invalid ID format' }, { status: 400 });
    }

    const query = { _id: new ObjectId(id) };

    // Fetch the program using the findOne function
    const response = await findOne('programs', query);

    // Check if the program was found
    if (!response) {
      return NextResponse.json({ error: 'Program not found' }, { status: 404 });
    }

    return NextResponse.json(response);
  } catch (e) {
    console.log('error:', e);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}