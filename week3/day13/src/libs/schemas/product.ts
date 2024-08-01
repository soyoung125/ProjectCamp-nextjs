import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

export const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
// 스키마 있으면 있는거 사용하고 없으면 새로 만들겠다.
