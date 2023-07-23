import mongoose from "mongoose"
const dbConnect = () =>{
    try
    {
        mongoose.connect(process.env.MONGO_URI);
    }
    catch(error)
    {
        console.log("MongoDB connection error" + error);
    }
}

export default dbConnect;