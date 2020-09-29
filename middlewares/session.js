import {
  session, promisifyStore, Store, MemoryStore,
} from 'next-session';
import connectMongo from 'connect-mongo';

const MongoStore = connectMongo({ Store, MemoryStore });

export default function (req, res, next) {
  const mongoStore = new MongoStore({
    client: req.dbClient, //see database.js
    stringify: false,
  });
  return session({
    store: promisifyStore(mongoStore),
  })(req, res, next);
}