import Link from "next/link";
import { dummyImage, dummyImage3 } from "../../public/blog/assets";
import Image from "next/image";

export default function PostListItem() {
  return (
    <>
      <Link href="/read/1">
        <article>
          <Image src={dummyImage} alt="dummy" className="object-cover" />
          <div>
            <strong className="w-[73px] h-[26px] bg-[#283A61] text-white text-sm flex items-center justify-center rounded-[3px] mt-[21px] mb-[8px]">
              Next.JS
            </strong>
            <h3 className="text-[24px] font-bold">
              What Traveling Greece For 2 Weeks Taught Me About Life
            </h3>
            <p className="text-[#515151]">Jun 21, 2021 • 11 min read</p>
            <p className="mt-[15px] text-[#434343]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
              mollis lectus vitae nulla malesuada amet purus sed. A condimentum
              tempus a egestas sodales diam cras.
            </p>
            <div className="mt-4 flex items-center gap-[14px]">
              <Image src={dummyImage3} alt="" className="rounded-s-full" />
              <strong className="text-sm">George Costanazv</strong>
            </div>
          </div>
        </article>
      </Link>
    </>
  );
}
