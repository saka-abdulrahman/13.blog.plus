import { create } from "zustand";

type Post = {
  userID: number;
  postID: number;
  name: string;
  surName: string;
  title: string;
  image: File | null;
  description: string;
  postCreatedAt: string;
};

type PostStore = {
  posts: Post[];
  addPost: (newPost: Post) => void;
  postIDCounter: number;
  dicPostIDCounter: () => void;
};

const savePostsToLocalStorage = (posts: Post[]) => {
  localStorage.setItem("posts", JSON.stringify(posts));
};

const loadPostsFromLocalStorage = (): Post[] => {
  const savedPosts = localStorage.getItem("posts");
  return savedPosts ? JSON.parse(savedPosts) : [];
};

const usePostStore = create<PostStore>((set) => ({
  posts: loadPostsFromLocalStorage(),

  addPost: (newPost) =>
    set((state) => {
      const updatedPosts = [...state.posts, newPost];
      savePostsToLocalStorage(updatedPosts); // Save the updated posts to local storage
      return { posts: updatedPosts };
    }),

  postIDCounter: 0,
  dicPostIDCounter: () =>
    set((state) => ({ postIDCounter: state.postIDCounter + 1 })),
}));

export default usePostStore;
