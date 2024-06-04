
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || "mongodb+srv://Codeox:Codeox123@cluster0.xsjfj85.mongodb.net/og-hub?retryWrites=true&w=majority&appName=Cluster0";
const options = {};

let client;
let clientPromise;

if (!uri) {
  throw new Error('Please add your Mongo URI to .env.local');
}
if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default clientPromise;