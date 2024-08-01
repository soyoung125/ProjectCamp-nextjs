import { onlyLogin } from "@/libs/onlyLogin";

export default async function WriteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await onlyLogin(); // 로그인 한 사람만 접근 가능
  return <>{children}</>;
}
