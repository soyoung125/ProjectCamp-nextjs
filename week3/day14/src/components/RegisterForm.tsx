import { register } from "@/server/user_action";

export default function RegisterForm() {
  return (
    <>
      <h1>RegisterForm</h1>
      <form action={register}>
        <input type="text" name="name" required />
        <br />
        <input type="text" name="email" required />
        <br />
        <input type="password" name="password" required />
        <br />
        <button>Signin</button>
      </form>
    </>
  );
}
