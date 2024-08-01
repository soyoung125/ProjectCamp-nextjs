import { connectToDB } from "@/libs/db";
import { Post } from "@/libs/schema/posts";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    connectToDB();

    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");
    const posts =
      type === "ne"
        ? await Post.find({ _id: { $ne: params.id } })
        : await Post.findById(params.id);

    return Response.json(posts);
  } catch (error) {
    if (error instanceof Error) {
      return Response.json({ message: error.message, status: false });
    }
    return Response.json({
      message: "알 수 없는 오류가 발생했습니다.",
      status: false,
    });
  }
}
