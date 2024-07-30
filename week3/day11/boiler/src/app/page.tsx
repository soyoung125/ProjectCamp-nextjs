import Image, { StaticImageData } from "next/image";
import seoul from "/public/images/seoul.jpg";
import london from "/public/images/london.jpg";
import paris from "/public/images/paris.jpg";
import newyork from "/public/images/newyork.jpg";

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
      <Image
        src={images[searchParams.city] ?? seoul}
        alt={searchParams.city ?? "seoul"}
        priority={true}
      />
    </>
  );
}
