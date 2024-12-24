import mongoose from "mongoose";

export const connectMongoDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URL,{
            // dbName: 'Qwaze_database',
            dbName: 'Qwaze_database',
            retryWrites: true,
            w: 'majority',
            serverSelectionTimeoutMS: 30000,  // Increase server selection timeout
            socketTimeoutMS: 45000,           // Increase socket timeout
        });
        console.log("Connected to database!")
    }catch(error){
        console.log("error",error)
    }
};
