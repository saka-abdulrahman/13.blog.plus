import { create } from "zustand";

type PostStore = {
  posts: {
    userID: number;
    postID: number;
    name: string;
    surName: string;
    title: string;
    image: File | null;
    description: string;
    postCreatedAt: string;
  }[];

  addPost: (newPost: {
    userID: number;
    postID: number;
    name: string;
    surName: string;
    title: string;
    image: File | null;
    description: string;
    postCreatedAt: string;
  }) => void;
};

const usePostStore = create<PostStore>((set) => ({
  posts: [
    {
      userID: -1,
      postID: -1,
      name: "",
      surName: "",
      title: "",
      image: null,
      description: "",
      postCreatedAt: "",
    },
  ],

  addPost: (newPost) => set((state) => ({ posts: [...state.posts, newPost] })),
}));

export default usePostStore;
