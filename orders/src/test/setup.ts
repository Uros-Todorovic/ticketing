import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

declare global {
  var signin: () => string[];
}

jest.mock('../nats-wrapper');

let mongod: any;
 
beforeAll(async () => {
  mongod = await MongoMemoryServer.create();
  process.env.JWT_KEY = 'asdf';
  const uri = mongod.getUri();
  await mongoose.connect(uri);
});
 
beforeEach(async () => {
  jest.clearAllMocks();
  const collections = await mongoose.connection.db.collections();
 
  for (let c of collections) {
    await c.deleteMany({});
  }
});
 
afterAll(async () => {
  await mongoose.connection.close()
  await mongod.stop()
});

global.signin = () => {
  // Build a JWT payload { id, email }
  const payload = {
    id: new mongoose.Types.ObjectId().toHexString(),
    email: 'test@test.com'
  };
  // Create the JWT!
  const token = jwt.sign(payload, process.env.JWT_KEY!);

  // Build session Object { jwt: MY_JWT }
  const session = { jwt: token };

  // Turn that session into JSON 
  const sessionJSON = JSON.stringify(session);

  // Take JSON and encode it as base64 encoded
  const base64 = Buffer.from(sessionJSON).toString('base64');

  // Return a string thats athe cookie with the encoded data
  return [`express:sess=${base64}`];
};