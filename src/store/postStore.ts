import { create } from "zustand";

// Define the state and actions
type PostStore = {
  posts: {
    userID: number;
    postID: number;
    title: string;
    image: string;
    description: string;
    postCreatedAt: string;
  }[];

  addPost: (newPost: {
    userID: number;
    postID: number;
    title: string;
    image: string;
    description: string;
    postCreatedAt: string;
  }) => void;
};

const usePostStore = create<PostStore>((set) => ({
  posts: [
    {
      userID: -1,
      postID: -1,
      title: "",
      image: "",
      description: "",
      postCreatedAt: "",
    },
  ],

  // Add a new post
  addPost: (newPost) => set((state) => ({ posts: [...state.posts, newPost] })),
}));

export default usePostStore;
