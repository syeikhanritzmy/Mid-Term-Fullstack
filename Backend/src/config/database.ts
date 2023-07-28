import mongoose from 'mongoose';
import { URL_DB } from './envConfig';
export const connectToDatabase = async () => {
  try {
    await mongoose.connect(String(URL_DB));
    console.log('Connected to mongodb');
  } catch (error) {
    console.error('Error connecting to mongodb :', error);
  }
};
