import mongoose from 'mongoose';


const connectDb = async () => {

    await mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err.message);
    })
}

export default connectDb;