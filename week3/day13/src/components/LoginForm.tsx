"use client";
import { github, login } from "@/server/user.action";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";
export default function LoginForm() {
  const router = useRouter();
  const [state, formAction] = useFormState(login, {
    message: "",
    status: false,
  });

  useEffect(() => {
    if (state.message && !state.status) {
      alert(state.message);
    } else if (state.message && state.status) {
      alert("로그인이 되었습니다.");
      router.push("/dashboard");
    }
  }, [state]);

  return (
    <>
      <h1>LoginForm</h1>
      <form action={formAction}>
        <input className="border border-slate-500" type="text" name="email" />{" "}
        <br />
        <input
          className="border border-slate-500"
          type="password"
          name="password"
        />
        <br />
        <button>로그인</button>
      </form>
      <form action={github}>
        <button>깃허브 로그인</button>
      </form>
    </>
  );
}
