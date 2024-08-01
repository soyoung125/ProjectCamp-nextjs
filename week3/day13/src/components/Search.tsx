"use client";
import Image from "next/image";
import { search } from "../../public/blog/assets";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handlerSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <section className="flex justify-center items-center mt-[32px]">
        <div className="w-full max-w-[430px] relative">
          <input
            type="text"
            className="border border-[#DDDDDD] w-full h-[58px] py-[18px] px-[28px] rounded-[5px] placeholder-[#5f5f5f] text-lg"
            placeholder="Search for Articles"
            onChange={(e) => handlerSearch(e.target.value)}
          />
          <Image
            src={search}
            alt=""
            className="absolute top-1/2 right-4 -translate-y-1/2"
          />
        </div>
      </section>
    </>
  );
}
