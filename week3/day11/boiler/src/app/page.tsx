import Image, { StaticImageData } from "next/image";
import travel from "/public/images/travel.png";
import seoul from "/public/images/seoul.jpg";
import london from "/public/images/london.jpg";
import paris from "/public/images/paris.jpg";
import newyork from "/public/images/newyork.jpg";
import Link from "next/link";

export default function Home({
  searchParams,
}: {
  params: { [key: string]: string };
  searchParams: { city: string };
}) {
  const images: { [key: string]: StaticImageData } = {
    seoul: seoul,
    london: london,
    paris: paris,
    newyork: newyork,
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col items-center gap-4  max-w-[500px]">
          <Image src={travel} alt={"로고"} width={80} />
          <ul className="flex items-center antialiased justify-around w-full">
            <li>
              <Link
                href="?city=seoul"
                className={
                  searchParams.city === "seoul" || !searchParams.city
                    ? "font-bold"
                    : ""
                }
              >
                Seoul
              </Link>
            </li>
            <li>
              <Link
                href="?city=london"
                className={searchParams.city === "london" ? "font-bold" : ""}
              >
                London
              </Link>
            </li>
            <li>
              <Link
                href="?city=paris"
                className={searchParams.city === "paris" ? "font-bold" : ""}
              >
                Paris
              </Link>
            </li>
            <li>
              <Link
                href="?city=newyork"
                className={searchParams.city === "newyork" ? "font-bold" : ""}
              >
                NewYork
              </Link>
            </li>
          </ul>
          <div>
            <Image
              src={images[searchParams.city] ?? seoul}
              alt={searchParams.city ?? "seoul"}
              priority={true}
            />
          </div>
        </div>
      </div>
    </>
  );
}
