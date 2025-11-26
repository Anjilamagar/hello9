import mongoose from "mongoose";

const user = mongoose.model('user', new mongoose.Schema({
    fulLname: { type: String },
    email: { type: String, unique: true, required: true },
    password: { type: String },
    phone: { type: String },
    role: { type: String, enum: ['ADMIN', 'USER'], default: 'USER' }
}))
export default user;