import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import { addNote } from './data/card-service';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5020;

mongoose.connect(
  'mongodb+srv://gkapoor:94thZ$*97iffYm@cluster0.vjwbj.mongodb.net/notesdb?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log(`connected to mongodb`);
    } else {
      console.log(err);
    }
  }
);

app.use(express.json());

app.get('/', async (request, response) => {
  try {
    await addNote({
      title: 'title',
      description: 'description',
      state: 'todo',
    });
  } catch (err) {
    console.log(err);
  }
  response.send('hello server! and test');
});

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
  console.log(process.env.MONGO_CONNECTION_STRING);
});
