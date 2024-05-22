import clientPromise from '@/lib/db';

export async function getDb() {
  const client = await clientPromise;
  return client.db();
}

export async function findOne(collectionName, query = {}) {
  try {
    const db = await getDb();
    const response = await db.collection(collectionName).findOne(query);
    return response;
  } catch (e) {
    console.log('Database query error:', e);
    throw new Error('Failed to fetch data');
  }
}

export async function find(collectionName, query = {}) {
  try {
    const db = await getDb();
    const response = await db.collection(collectionName).find(query).toArray();
    return response;
  } catch (e) {
    console.log('Database query error:', e);
    throw new Error('Failed to fetch data');
  }
}