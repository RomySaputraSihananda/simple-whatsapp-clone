import { create } from "zustand";

const useAppStore = create((set) => ({
  user: [],
  setUser: (user) => set(() => ({ user })),

  message: [],
  setMessage: (newMessage) =>
    set((state) => ({ message: [...state.message, newMessage] })),
}));

export default useAppStore;
