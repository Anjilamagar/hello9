import mongoose from "mongoose";


const Product = mongoose.model('Product', new mongoose.Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    // category: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
}, {
    timestamps: true
}))
export default Product;