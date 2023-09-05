import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {});
    console.log(`Database connected to ${conn.connection.host}`);
  } catch (error) {
    console.error(`error ${error.message}`);
    process.exit(1);
  }
};

export default connectDb;
