import mongoose from "mongoose";



const connectdb = async () => {
    try {
        await mongoose.connect('mongodb+srv://anjilamagar506_db_user:Anjila.@cluster0.j56riod.mongodb.net/?appName=Cluster0');
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

