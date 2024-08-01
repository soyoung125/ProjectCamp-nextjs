"use server";

import { connectToDB } from "@/libs/db";
import { User } from "@/libs/schemas/users";
import bcrypt from "bcrypt";

export async function register(formData: FormData) {
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
      email: formData.get("email"),
      name: formData.get("name"),
      password: await bcrypt.hash(formData.get("password") as string, 10),
    });
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : "알 수 없는 오류",
      status: false,
    };
  }
}
