"use client";

import { TPost } from "@/types/post";
import { useRouter } from "next/router";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function WritePAge() {
  const router = useRouter;
  const [text, setText] = useState<TPost>({
    id: uuidv4(),
    title: "",
    category: "",
    description: "",
    thumbnail: "",
    datetime: new Date(),
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setText({
      ...text,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0]; // 파일을 가져온다.
    if (file) {
      const reader = new FileReader(); // 파일을 읽어오는 객체를 생성한다.
      reader.onloadend = () => {
        // 파일을 다 읽었을 때 실행되는 이벤트
        setText({
          ...text,
          thumbnail: reader.result as string, // 파일을 base64로 변환한 값을 저장한다.
        });
      };
      reader.readAsDataURL(file); // 파일을 읽어온다.
    }
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST_URL}/api/blog`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(text),
      }
    );

    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <section className="bg-white ">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 ">
            Add a new Post
          </h2>
          <form onSubmit={onSubmitHandler}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Type product name"
                  required
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  onChange={handleChange}
                >
                  <option value={""}>Select category</option>
                  <option value="Next.js">Next.js</option>
                  <option value="React.js">React.js</option>
                  <option value="Vue.js">Vue.js</option>
                  <option value="HTML">HTML</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="item-weight"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Thumbnail
                </label>
                <label
                  className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="thumbnail"
                >
                  Upload file
                </label>
                <input
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50focus:outline-none   h-[42px] p-[7px]"
                  aria-describedby="thumbnail_help"
                  id="thumbnail"
                  name="tumbnail"
                  type="file"
                  onChange={handleImageUpload}
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={8}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Your description here"
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex border border-slate-500 items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center  bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800"
            >
              Add Post
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
