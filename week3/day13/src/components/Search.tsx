"use client";
import Image from "next/image";
import { search } from "../../public/blog/assets";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const debounce = <T extends (...args: any[]) => any>(
    fn: T,
    delay: number
  ) => {
    let timeout: ReturnType<typeof setTimeout>;

    return (...args: Parameters<T>): ReturnType<T> => {
      let result: any;
      console.log(timeout);
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        result = fn(...args);
      }, delay);
      return result;
    };
  };

  const handlerSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 이 밑을 디바운스로 묶으면 된다.
    const params = new URLSearchParams(searchParams);
    const term = e.target.value;

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const debouncedOnChange = debounce<typeof handlerSearch>(handlerSearch, 500);

  return (
    <>
      <section className="flex justify-center items-center mt-[32px]">
        <div className="w-full max-w-[430px] relative">
          <input
            type="text"
            className="border border-[#DDDDDD] w-full h-[58px] py-[18px] px-[28px] rounded-[5px] placeholder-[#5f5f5f] text-lg"
            placeholder="Search for Articles"
            onChange={debouncedOnChange}
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
