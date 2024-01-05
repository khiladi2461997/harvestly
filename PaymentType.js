import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const paymentTypeSchema = new Schema({
    paymentTypeId: {
        type: Number,
        required: true
    },
    paymentTypeName: {
        type: String,
        required: true
    }
})

const paymentType = model("PaymentType", paymentTypeSchema)
export default paymentType