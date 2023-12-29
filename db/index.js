import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const connectDb = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}`);
    console.log("Database Connected!");
  } catch (error) {
    console.log("Error ", error.message);
  }
}