import mongoose from "mongoose";

export async function connect() {
  try {
    const MONGODB_URL="mongodb+srv://kishoraman2121_db_user:tsCNd4fLhOKrMDjH@development.1bpvkck.mongodb.net/?appName=development"
      console.log("MONGO_URI:", MONGODB_URL);
    await mongoose.connect(MONGODB_URL);

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB is connected succesfully");
    });
    connection.on("error", (err) => {
      console.log("MongoDB connection error", err);
      process.exit();
    });
  } catch (error) {
    console.log("Error while connecting to MonogoDB: ", error.message);
  }
}
