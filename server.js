import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import authRoutes from './routes/auth.js';
import dsaRoutes from './routes/dsa.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
  res.send('Hello World');
})
app.use('/api/auth', authRoutes);
app.use('/api/dsa', dsaRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch(err => console.error('MongoDB connection failed:', err));
