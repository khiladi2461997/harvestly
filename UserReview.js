import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userReviewSchema = new Schema({
    userId: {
        type: String,
        ref: "User"
    },
    productId: {
        type: String,
        ref: "Product"
    },
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: () => Date.now,
        immutable: true
    }
})

const userReview = model("UserReview", userReviewSchema)
export default userReview