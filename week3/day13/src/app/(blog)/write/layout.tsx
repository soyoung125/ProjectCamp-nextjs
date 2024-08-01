import { getSession } from "@/libs/getSession";
import { onlyLogin } from "@/libs/onlyLogin";

export default async function WriteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await onlyLogin(); // 로그인 한 사람만 접근 가능
  const session = await getSession();

  return (
    <>
      {JSON.stringify(session)}
      <main>{children}</main>
    </>
  );
}
