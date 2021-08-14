import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import apiRouter from './routes';
const cors = require('cors');
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5070;
dotenv.config();

if (!process.env.MONGO_CONNECTION_STRING) {
  throw new Error('please set the connection string as an env variable');
}

mongoose.connect(
  process.env.MONGO_CONNECTION_STRING,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log(`connected to mongodb`);
    } else {
      console.log(err);
    }
  }
);
app.use(
  cors({
    origin: 'http://10.0.120.56',
    credentials: true,
  })
);
app.use(cookieParser());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://10.0.120.56');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
app.use(express.json());
app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
  console.log(process.env.MONGO_CONNECTION_STRING);
});
