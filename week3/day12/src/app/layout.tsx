import { format } from "date-fns";
import Link from "next/link";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/a" prefetch>
              A
            </Link>
          </li>
          <li>
            <Link href="/b" prefetch>
              B
            </Link>
          </li>
        </ul>
        <main>
          <h2>layout: {format(new Date(), "HH:mm:ss")}</h2>
          {children}
        </main>
      </body>
    </html>
  );
}
