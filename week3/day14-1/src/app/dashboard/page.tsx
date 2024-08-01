import { logout } from "@/server/user.action";

export default function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <form action={logout}>
        <button>logout</button>
      </form>
    </>
  );
}
