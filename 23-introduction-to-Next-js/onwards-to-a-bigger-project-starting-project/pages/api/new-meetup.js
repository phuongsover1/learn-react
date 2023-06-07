// /api/new-meetup
// POST /api/new-meetup
import { MongoClient } from 'mongodb';
import { ObjectId } from 'mongodb';

async function handler(request, response) {
  console.log('request: ', request);
  if (request.method === 'POST') {
    const data = response.body;
    console.log('data in handler: ', data);

    const client = await MongoClient.connect(
      'mongodb+srv://phuongsover2:phuongsover1@next-js-api.ef8pc3a.mongodb.net/?retryWrites=true&w=majority'
    );

    const db = client.db('next-js-mongodb');

    const meetupsCollection = db.collection('meetups');

    console.log('data :', data);
    data = JSON.parse(data);
    const id = new ObjectId(String(Math.floor(Math.random() * 1000)));
    data = { ...data, id };
    console.log('last data: ', data);
    const result = await meetupsCollection.insertOne(JSON.stringify(data));

    console.log(result);

    client.close();

    response.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default handler;
