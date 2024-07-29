import { useState } from "react";
import { TPost } from "../type/post";
import usePostStore from "../stores/postStore";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const Write = () => {
  const navigate = useNavigate();
  const addPost = usePostStore((state) => state.addPost);

  const [post, setPost] = useState<TPost>({
    id: uuidv4(),
    title: "",
    category: "",
    description: "",
    thumbnail: "",
    dateTime: new Date(),
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0]; // 사용자가 선택한 파일 정보 가져오기
    if (file) {
      const render = new FileReader(); // 표준 내장 객체로 파일 인스턴스 생성
      render.onloadend = () => {
        //이미지 정상 처리 확인
        console.log(render.result as string);
        setPost({ ...post, thumbnail: render.result as string });
      };
      render.readAsDataURL(file); // 파일 정보 읽어오기
    }
  };

  const onChangeHandler = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await addPost(post);
    if (result) {
      alert("새로운 글을 등록했습니다.");
      navigate("/");
    } else {
      alert("글 등록에 실패했습니다.");
    }
  };

  return (
    <>
      <section className="bg-white ">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 ">
            Add a new Post
          </h2>
          <form action="#" onSubmit={onSubmitHandler}>
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
                  value={post.title}
                  onChange={onChangeHandler}
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
                  value={post.category}
                  onChange={onChangeHandler}
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
                  name="thumbnail"
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
                  value={post.description}
                  onChange={onChangeHandler}
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="border border-slate-500 inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800"
            >
              Add Post
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
export default Write;
