import { getSession } from "@/libs/getSession";
import { logout } from "@/server/user.action";

export default async function Dashboard() {
  const session = await getSession();

  return (
    <>
      <h1>Dashboard</h1>
      {JSON.stringify(session)}
      <form action={logout}>
        <button>logout</button>
      </form>
    </>
  );
}
