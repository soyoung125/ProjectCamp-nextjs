export async function GET() {
  console.log("movie GET!");
  return Response.json({ message: "Hello World!" });
}
