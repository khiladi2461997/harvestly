import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const orderDetailSchema = new Schema({
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
    shippingAddress: {
        type: String,
        ref: "Address"
    },
    paymentType: {
        type: String,
        ref: "PaymentType"
    },
    createdAt: {
        type: Date,
        default: () => Date.now,
        immutable: true
    }
})

const orderDetail = model("OrderDetail", orderDetailSchema)
export default orderDetail