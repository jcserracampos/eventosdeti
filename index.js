import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config()

const app = express();

mongoose.connect(process.env.MONGODB_HOST);

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))