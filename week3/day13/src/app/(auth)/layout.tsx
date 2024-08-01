import { notLogin } from "@/libs/notLogin";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await notLogin(); // 로그인 안한 사람만 접근 가능
  return <>{children}</>;
}
