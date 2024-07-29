import Image from "next/image";
import travel from "/public/images/travel.png";
import seoul from "/public/images/seoul.jpg";
import london from "/public/images/london.jpg";
import paris from "/public/images/paris.jpg";
import newyork from "/public/images/newyork.jpg";
import Link from "next/link";

export default function CityPage({
  params,
}: {
  params: { [key: string]: string };
}) {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col items-center gap-4  max-w-[500px]">
          <Image src={travel} alt={"로고"} width={80} />
          <ul className="flex items-center antialiased justify-around w-full">
            <li>
              <Link
                href="/city/seoul"
                className={params.city === "seoul" ? "font-bold" : ""}
              >
                Seoul
              </Link>
            </li>
            <li>
              <Link
                href="/city/london"
                className={params.city === "london" ? "font-bold" : ""}
              >
                London
              </Link>
            </li>
            <li>
              <Link
                href="/city/paris"
                className={params.city === "paris" ? "font-bold" : ""}
              >
                Paris
              </Link>
            </li>
            <li>
              <Link
                href="/city/newyork"
                className={params.city === "newyork" ? "font-bold" : ""}
              >
                NewYork
              </Link>
            </li>
          </ul>
          <div>
            {params.city === "seoul" && <Image src={seoul} alt={"서울"} />}
            {params.city === "london" && <Image src={london} alt={"런던"} />}
            {params.city === "paris" && <Image src={paris} alt={"파리"} />}
            {params.city === "newyork" && (
              <Image src={newyork} alt={"뉴욕"} priority={true} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
