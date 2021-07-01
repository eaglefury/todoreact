import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { addNote } from "./services/card.service";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5020;

mongoose.connect(
  "someconnection",
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

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
  console.log(process.env.MONGO_CONNECTION_STRING);
});
