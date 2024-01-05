import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const addressSchema = new Schema({
    userId: {
        type: String,
        ref: "User"
    },
    addressLineOne: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: () => Date.now,
        immutable: true
    },
})

const address = model("Address", addressSchema)
export default address