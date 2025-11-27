import mongoose from "mongoose";



const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database connection success");


    } catch (error) {
        console.log("Database connection failed", error);

    }
}
const sum = () => {
    console.log("Hello sum");
}
export default connectdb
export { sum }

