import { UserEntity } from "@/interface/user.interface";
import { create } from "zustand";

export interface useUserContextEnity {
  user: UserEntity | null;
  setUserEmail: (email: string) => void;
}

export const useUserContext = create<useUserContextEnity>()((set) => ({
  user: null,
  setUserEmail: (email) =>
    set((state) => ({ user: { email, userName: "", image: "" } })),
}));
