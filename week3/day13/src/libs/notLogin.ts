import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const notLogin = async () => {
  const session = await auth();
  if (session) redirect("/");
};
