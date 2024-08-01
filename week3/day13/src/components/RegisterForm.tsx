"use client";
import { register } from "@/server/user.action";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

export default function RegisterForm() {
  const router = useRouter();
  const [state, formAction] = useFormState(register, {
    message: "",
    status: false,
  });

  useEffect(() => {
    if (state.message && !state.status) {
      alert(state.message);
    } else if (state.message && state.status) {
      alert("회원가입이 완료되었습니다.");
      router.push("/login");
    }
  }, [state]);

  return (
    <>
      <h1>RegisterForm</h1>
      <form action={formAction}>
        <input type="text" name="name" required /> <br />
        <input type="email" name="email" required /> <br />
        <input type="password" name="password" required /> <br />
        <button>회원가입</button>
      </form>
    </>
  );
}
