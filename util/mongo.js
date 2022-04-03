import mongoose from "mongoose"
const MONGODB_URI = process.env.MONGO_URL
if(!MONGODB_URI){
    throw new Error('Please define the MONGODB_URI ')
}
let cached = global.mongoose
if(!cached){}