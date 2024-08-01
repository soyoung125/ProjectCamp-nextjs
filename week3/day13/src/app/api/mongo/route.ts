import { connectToDB } from "@/libs/db";
import { Product } from "@/libs/schema/product";

export async function GET(request: Request) {
  connectToDB(); // db 연결/ 항상 먼저 선언해야 함.

  const res = await Product.create({ name: "Product 1", price: 1000 });
  // 프로덕트에 해당 데이터를 넣겠다.
  return Response.json(res);
}
