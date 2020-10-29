import express from 'express';
import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import config from './config';
import productRouter from './routers/productRouter';
import userRouter from './routers/userRouter';


const app = express();
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/bellacovers', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});


app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
