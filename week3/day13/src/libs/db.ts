import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    if (mongoose.connection.readyState !== 0) {
      console.log("Already connected to the database");
      return;
    }
    await mongoose.connect(process.env.MONGODB_URL as string);
  } catch (error) {
    throw new Error(String(error));
  }
};
