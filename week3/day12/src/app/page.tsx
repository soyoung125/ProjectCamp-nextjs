import { format } from "date-fns";
export const dynamic = "force-dynamic";

async function getMovieData() {
  const response = await fetch(
    "https://66a7f3e753c13f22a3d188f0.mockapi.io/users",
    { cache: "no-cache" }
  );
  return response.json();
}
export default async function Home() {
  const data1 = await getMovieData();
  return (
    <>
      <h1>Home</h1>
      <h2>{format(new Date(), "HH:mm:ss")}</h2>
      <h3>{data1.length}</h3>
    </>
  );
}
