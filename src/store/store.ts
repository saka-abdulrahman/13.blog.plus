import { create } from "zustand";

type User = {
  userID: number;
  userType: string;
  name: string;
  surName: string;
  email: string;
  password: string;
  profileImage: string;
  age: string;
  gender: string;
  createdAt: string;
  posts: {
    postID: number;
    title: string;
    name: string;
    surName: string;
    image: string;
    description: string;
    postCreatedAt: string;
  }[];
};

type Store = {
  users: User[];
  deleteAllUsers: () => void;
  addUser: (user: User) => void;
  signInDoneCounter: number;
  dicSignInDoneCounter: () => void;

  loggedAccount: {
    userID: number;
    name: string;
    surName: string;
    email: string;
    password: string;
  };
  setLoggedAccount: (account: User) => void;
};

const loadUsersFromLocalStorage = (): User[] => {
  if (typeof window !== "undefined") {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
  }
  return [];
};

const useStore = create<Store>((set) => ({
  // * Users
  users: loadUsersFromLocalStorage(),
  deleteAllUsers: () =>
    set(() => {
      if (typeof window !== "undefined") {
        localStorage.removeItem("users");
      }
      return { users: [] };
    }),

  addUser: (user: User) =>
    set((state) => {
      const updatedUsers = [...state.users, user];
      if (typeof window !== "undefined") {
        localStorage.setItem("users", JSON.stringify(updatedUsers));
      }
      return { users: updatedUsers };
    }),

  signInDoneCounter: 1,
  dicSignInDoneCounter: () =>
    set((state) => ({ signInDoneCounter: state.signInDoneCounter + 1 })),

  // * Logged Account
  loggedAccount: {
    userID: -1,
    name: "",
    surName: "",
    email: "",
    password: "",
  },
  setLoggedAccount: (account: User) => set({ loggedAccount: account }),
}));

export default useStore;
