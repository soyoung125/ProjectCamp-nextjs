import { useEffect, useState } from "react";
import { search } from "../assets/blog/assets";
import usePostStore from "../stores/postStore";

const Search = () => {
  const fetchPosts = usePostStore((state) => state.fetchPosts);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("db");
      fetchPosts("/posts?title_like=" + searchText);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  return (
    <>
      <section className="flex justify-center items-center mt-[32px]">
        <div className="w-full max-w-[430px] relative">
          <input
            type="text"
            className="border border-[#DDDDDD] w-full h-[58px] py-[18px] px-[28px] rounded-[5px] placeholder-[#5f5f5f] text-lg"
            placeholder="Search for Articles"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <img
            src={search}
            alt=""
            className="absolute top-1/2 right-4 -translate-y-1/2"
          />
        </div>
      </section>
    </>
  );
};
export default Search;
