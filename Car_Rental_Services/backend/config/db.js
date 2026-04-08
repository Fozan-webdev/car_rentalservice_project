import mongoose from "mongoose";
export const connectDB = async () => {
  
    await mongoose.connect("mongodb+srv://carrentallservice_db_user:gcbtech@cluster0.2xzsdbd.mongodb.net/carRentalServices").then(() =>console.log("Connected to MongoDB"));
    }
