import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const wishlistSchema = new Schema({
    userId: {
        type: String,
        ref: "User"
    },
    productId: {
        type: String,
        ref: "Product"
    },
    createdAt: {
        type: Date,
        default: () => Date.now,
        immutable: true
    },
    updatedAt: Date
})

const wishlist = model("Wishlist", wishlistSchema)
export default wishlist