"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavLink() {
  const searchParams = useSearchParams();
  const city = searchParams.get("city");
  return (
    <>
      <ul className="flex items-center antialiased justify-around w-full">
        <li>
          <Link
            href="?city=seoul"
            className={`${(city === "seoul" || !city) && "font-bold"}`}
          >
            Seoul
          </Link>
        </li>
        <li>
          <Link
            href="?city=london"
            className={`${city === "london" && "font-bold"}`}
          >
            London
          </Link>
        </li>
        <li>
          <Link
            href="?city=paris"
            className={`${city === "paris" && "font-bold"}`}
          >
            Paris
          </Link>
        </li>
        <li>
          <Link
            href="?city=newyork"
            className={`${city === "newyork" && "font-bold"}`}
          >
            NewYork
          </Link>
        </li>
      </ul>
    </>
  );
}
