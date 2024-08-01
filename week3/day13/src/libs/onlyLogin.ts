import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const onlyLogin = async () => {
  const session = await auth();
  if (!session) redirect("/");
};
