import { create } from "zustand";

// User type definition
type User = {
  userId: number;
  userType: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  profileImage: string;
  age: string;
  gender: string;
  createdAt: string;
  posts: {
    postID: number;
    title: string;
    image: string;
    description: string;
    postCreatedAt: string;
  }[];
};

// Store type definition
type Store = {
  isDark: boolean;
  change: () => void;
  users: User[];
  deleteAllUsers: () => void;
  addUser: (user: User) => void;
  signInDoneCounter: number;
  dicSignInDoneCounter: () => void;
  loggedAccount: object;
  setLoggedAccount: (account: User) => void;
};

// Load users from local storage or return an empty array if none are found
const loadUsersFromLocalStorage = (): User[] => {
  if (typeof window !== "undefined") {
    // Check if the code is running in the browser
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
  }
  return []; // Return an empty array when `localStorage` is not available (e.g., on the server side)
};

// Zustand store
const useStore = create<Store>((set) => ({
  //! Dark Mode
  isDark: false,
  change: () => set((state) => ({ isDark: !state.isDark })),
  //! END of Dark Mode

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
  // * END of Users

  // ? Sign In Inputs and infos

  signInDoneCounter: 1,
  dicSignInDoneCounter: () =>
    set((state) => ({ signInDoneCounter: state.signInDoneCounter + 1 })),

  loggedAccount: {},
  setLoggedAccount: (account: User) => set({ loggedAccount: account }),
  // ? END of Sign In Inputs and infos
}));

export default useStore;
