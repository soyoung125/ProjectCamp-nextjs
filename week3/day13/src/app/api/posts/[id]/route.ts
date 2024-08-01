export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");
    const path =
      type === "ne" ? `posts?id_ne=${params.id}` : `posts/${params.id}`;

    const res = await fetch(`http://localhost:5500/${path}`); // json-server의 규칙
    const data = await res.json();
    return Response.json(data);
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
