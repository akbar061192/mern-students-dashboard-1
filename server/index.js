import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import studentRoutes from './routes/student.js';

const app = express();
app.use(cors());

app.use(express.json());
app.use('/api/v1/students', studentRoutes);

// app.use(bodyParser.json({ limit: '20mb', extended: true }));
// app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }));

const CONNECTION_URL = 'mongodb+srv://akbar06:Americ6@studentdb.a9ur0go.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.port || 5000;

mongoose.set('strictQuery', true);

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(5000, () => console.log(`Listening on port ${PORT}...`)))
  .catch(err => console.log(err.message));
