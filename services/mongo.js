import mongoose from "mongoose"



export const DBConnection =async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log("Database Connection Success")
        return conn;
        
    } catch (error) {
        console.log(error)
        
    }
}