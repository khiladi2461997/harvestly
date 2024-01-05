import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const mongoose = require("mongoose");

const ProductSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true, },
    img: { type: String, required: true },
    categories: { type: Array },
    size: { type: String },
    color: { type: String },
    price: { type: Number, required: true },
    
  },
  { timestamps: true }
);

//module.exports = mongoose.model("Product", ProductSchema);
const product = model("Product", ProductSchema)
export default product
/*
const productSchema = new Schema({
    name: {
        type: String,
        ref: "User"
    },
    categoryId: {
        type: String,
        required: true,
        ref: "Category"
    },
    description: String,
    productImages: [String],
    qtyInStock: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    percentageDiscount: Number,
    createdAt: {
        type: Date,
        default: ()=>Date.now,
        immutable: true
    },
    updatedAt: Date
})

const product = model("Product", productSchema)
export default product*/