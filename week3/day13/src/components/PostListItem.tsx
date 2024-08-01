import Link from "next/link";
import { dummyAvartar } from "../../public/blog/assets";
import Image from "next/image";
import { TPost } from "@/types/post";
import { format } from "date-fns";

export default function PostListItem({
  thumbnail,
  category,
  datetime,
  title,
  description,
  name,
  profile,
  _id,
}: TPost) {
  return (
    <>
      <Link href={`/read/${_id}`}>
        <article>
          <Image
            src={thumbnail}
            width={800}
            height={278}
            alt="dummy"
            className="object-cover"
          />
          <div>
            <strong className="w-[73px] h-[26px] bg-[#283A61] text-white text-sm flex items-center justify-center rounded-[3px] mt-[21px] mb-[8px]">
              {category}
            </strong>
            <h3 className="text-[24px] font-bold">{title}</h3>
            <p className="text-[#515151]">
              {format(datetime, "yyyy.MM.dd")} • 11 min read
            </p>
            <p className="mt-[15px] text-[#434343]">{description}</p>
            <div className="mt-4 flex items-center gap-[14px]">
              <Image
                src={profile}
                width={42}
                height={42}
                alt="prifile image"
                className="rounded-s-full"
              />
              <strong className="text-sm">{name}</strong>
            </div>
          </div>
        </article>
      </Link>
    </>
  );
}
