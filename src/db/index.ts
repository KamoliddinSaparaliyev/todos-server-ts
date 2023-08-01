import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbConnect = async (): Promise<void> => {
  try {
    await mongoose.connect("mongodb://localhost:27017/testing");
    console.log("DB connected successfully.");
  } catch (error) {
    console.error("DB connection error:", error);
    throw error;
  }
};

export default dbConnect;
