"use server";
import { signIn, signOut } from "@/auth";
import { connectToDB } from "@/libs/db";
import { User } from "@/libs/schemas/users";
import bcrypt from "bcrypt";

export async function login(
  state: { message: string; status: boolean },
  formData: FormData
) {
  try {
    await signIn("credentials", {
      redirect: false,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });
    return { message: "로그인이 완료되었습니다.", status: true };
  } catch (e) {
    return {
      message: e instanceof Error ? e.message : "알 수 없는 오류",
      status: false,
    };
  }
}

export async function register(
  state: { message: string; status: boolean },
  formData: FormData
) {
  try {
    connectToDB();
    const user = await User.findOne({ email: formData.get("email") });
    if (user) {
      return {
        message: "이미 존재하는 이메일입니다.",
        status: false,
      };
    }
    await User.create({
      name: formData.get("name"),
      email: formData.get("email"),
      password: await bcrypt.hash(formData.get("password") as string, 10),
    });
    return { message: "회원가입이 완료되었습니다.", status: true };
  } catch (e) {
    return {
      message: e instanceof Error ? e.message : "알 수 없는 오류",
      status: false,
    };
  }
}

export async function logout() {
  await signOut();
}

export async function github() {
  await signIn("github");
}
