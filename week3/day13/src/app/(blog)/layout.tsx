import Link from "next/link";
import { Merriweather } from "next/font/google";
import { logout } from "@/server/user.action";
import { getSession } from "@/libs/getSession";

const merriweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default async function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();

  return (
    <>
      <article
        className={`container mx-auto px-5 ${merriweather.className} antialiased`}
      >
        <div className="max-w-[1100px] mx-auto">
          {/* 헤더 영역 */}
          <header className="flex justify-between items-center py-[54px]">
            <Link href="/">
              <h1 className="text-2xl text-[#000638] font-bold">Sucoding</h1>
            </Link>
            <nav>
              <ul className="flex gap-5 text-lg text-[#605C59]">
                <li>
                  <Link href="/write">Write</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                {session && (
                  <li>
                    <form action={logout}>
                      <button>Logout</button>
                    </form>
                  </li>
                )}
                {!session && (
                  <li>
                    <Link href="/login">Login</Link>
                  </li>
                )}
              </ul>
            </nav>
          </header>
          <main className="min-h-[calc(100vh)]">{children}</main>
        </div>
      </article>
      <footer className={`bg-[#F5F5F5] py-[36px] ${merriweather.className}`}>
        <div className="container flex flex-col justify-end items-center mx-auto">
          <nav className="flex gap-[25px] text-[#544B44] text-sm mb-[26px]">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </nav>
          <div>
            <p className="text-[#3E3E3E]">
              © 2024 Sucoding. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
