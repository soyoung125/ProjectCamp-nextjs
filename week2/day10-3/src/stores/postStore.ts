import { create } from "zustand";
import { TPost } from "../type/post";

type TPostStore = {
  post: TPost;
  posts: TPost[];
  fetchPosts: (url: string) => Promise<void>;
  fetchPost: (id: string) => Promise<void>;
  addPost: (formData: TPost) => Promise<boolean>;
  // getPost: (id: string) => TPost;
};

const fetchData = async (url: string, option?: object) => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_JSON_SERVER}${url}`,
      option
    );
    if (!res.ok) {
      throw new Error("서버 상태가 이상합니다.");
    }
    return await res.json();
  } catch (error) {
    console.error(error);
  }
};

const usePostStore = create<TPostStore>((set) => ({
  post: {
    id: "",
    title: "",
    category: "",
    description: "",
    thumbnail: "",
    dateTime: new Date(),
  },
  posts: [],
  fetchPosts: async (url: string) => {
    // 처음에는 없었는데 확정성을 위해 매개변수 추가 (기본 가져오기와 검색에 사용)
    const posts = await fetchData(url);
    const data = await posts.json();
    set({ posts: data });
  },
  fetchPost: async (id: string) => {
    const post = await fetchData(`/post?id=${id}`);
    const data = await post.json();
    set({ post: data });
  },
  addPost: async (formData) => {
    const res = await fetchData("/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      return true;
    }
    return false;
  },
}));

export default usePostStore;
