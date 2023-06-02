// /api/new-meetup
// POST /api/new-meetup
import { MongoClient } from 'mongodb';

async function handler(request, response) {
  if (request.method === 'POST') {
    const data = response.body;

    const client = await MongoClient.connect(
      'mongodb+srv://phuongsover2:next.js-mongodb@next-js-api.ef8pc3a.mongodb.net/meetups?retryWrites=true&w=majority'
    );

    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);
    console.log(result);

    client.close();

    response.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default handler;
