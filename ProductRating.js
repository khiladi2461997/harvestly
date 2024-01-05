import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const productRatingSchema = new Schema({
    productId: {
        type: String,
        ref: "Product"
    },
    avgRating: Number,
    noOfReviews: Number,
})

const productRating = model("ProductRating", productRatingSchema)
export default productRating