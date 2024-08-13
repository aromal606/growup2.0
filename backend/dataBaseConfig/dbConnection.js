import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URL);
    console.log("database connection success");
    
    
  } catch (error) {
     console.log("database connection failed due to : " ,error);
  }
};

export default dbConnection  