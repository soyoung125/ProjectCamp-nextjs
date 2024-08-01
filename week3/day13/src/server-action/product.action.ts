"use server"; // 반드시 붙여줘야 함
import { connectToDB } from "@/libs/db";
import { Product } from "@/libs/schemas/product";

export async function addProduct(
  state: {
    message: string;
    status: boolean;
  },
  formData: FormData
) {
  // mongo db
  connectToDB();

  await Product.create({
    name: formData.get("product"),
    price: formData.get("price"),
  });
  return { message: "Product added", status: true };
}
