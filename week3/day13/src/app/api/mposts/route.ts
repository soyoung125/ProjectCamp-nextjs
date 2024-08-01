import { connectToDB } from "@/libs/db";
import { Post } from "@/libs/schemas/posts";

// http://localhost:3000/api/posts?qyery=.. (GET)
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("query");

    connectToDB();
    const posts = await Post.find({
      title: { $regex: query || "", $options: "i" },
    }); // query와 입루 매칭. query 없으면 모두다 매칭.

    return Response.json(posts);
  } catch (e) {
    if (e instanceof Error) {
      return Response.json({ message: e.message, status: false });
    }
    return Response.json({
      message: "알 수 없는 오류가 발생했습니다.",
      status: false,
    });
  }
}

// http://localhost:3000/api/posts (POST)
export async function POST(request: Request) {
  const body = await request.json();

  // store at db
  try {
    connectToDB();

    new Post(body).save();

    return Response.json({ message: "등록에 성공했습니다.", status: true });
  } catch (e) {
    if (e instanceof Error) {
      return Response.json({ message: e.message, status: false });
    }
    return Response.json({
      message: "알 수 없는 오류가 발생했습니다.",
      status: false,
    });
  }
}
