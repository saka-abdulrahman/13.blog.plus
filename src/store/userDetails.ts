import { create } from "zustand";

// Define the state and actions
type DetailsStore = {
  name: string;
  lastName: string;
  email: string;
  password: string;
  dateOfBirth: string;
  gender: string;
  userIdCounter: number;

  setName: (name: string) => void;
  setLastName: (lastName: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setDateOfBirth: (dateOfBirth: string) => void;
  setGender: (gender: string) => void;
  DicUserIdCounter: () => void;
  setAllFieldsToDefault: () => void;
};

const useDetailsStore = create<DetailsStore>((set) => ({
  name: "",
  lastName: "",
  email: "",
  password: "",
  dateOfBirth: "",
  gender: "",
  userIdCounter: 0,

  setName: (name) => set(() => ({ name })),
  setLastName: (lastName) => set(() => ({ lastName })),
  setEmail: (email) => set(() => ({ email })),
  setPassword: (password) => set(() => ({ password })),
  setDateOfBirth: (dateOfBirth) => set(() => ({ dateOfBirth })),
  setGender: (gender) => set(() => ({ gender })),

  DicUserIdCounter: () =>
    set((state) => ({ userIdCounter: state.userIdCounter + 1 })),

  setAllFieldsToDefault: () => {
    set(() => ({
      name: "",
      lastName: "",
      email: "",
      password: "",
      dateOfBirth: "",
      gender: "",
    }));
  },
}));

export default useDetailsStore;
