import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const cartSchema = new Schema({
    userId: {
        type: String,
        ref: "User"
    },
    items: [{
        productId: {
            type: String,
            ref: "Product"
        },
        name: {
            type: String,
            ref: "Product"
        },
        quantity: {
            type: Number,
            required: true,
            min: [1, 'Quantity can not be less then 1'],
            default: 1
        },
        price: Number
    }],
    createdAt: {
        type: Date,
        default: () => Date.now,
        immutable: true
    },
    updatedAt: Date
})

const cart = model("Cart", cartSchema)
export default cart