import { create } from "zustand";
import { TPost } from "../type/post";

type TPostStore = {
  posts: TPost[];
  fetchPosts: (url: string) => Promise<void>;
  addPost: (formData: TPost) => Promise<boolean>;
  // getPost: (id: string) => TPost;
};

// const fetchData

const usePostStore = create<TPostStore>((set) => ({
  posts: [],
  fetchPosts: async (url: string) => {
    // 처음에는 없었는데 확정성을 위해 매개변수 추가 (기본 가져오기와 검색에 사용)
    try {
      const res = await fetch("http://localhost:3000" + url);
      const data = await res.json();
      set({ posts: data });
    } catch (error) {
      console.error(error);
    }
  },
  addPost: async (formData) => {
    console.log(formData);
    try {
      const res = await fetch("http://localhost:3000/posts", {
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
    } catch (error) {
      console.error("데이터 전송에 실패했습니다.");
      return false;
    }
  },
}));

export default usePostStore;
