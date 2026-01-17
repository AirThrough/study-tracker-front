import { create } from "zustand";

type AuthState = {
  isAuthenticated: boolean;
};

type AuthActions = {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
};

type AuthStore = AuthState & AuthActions;

export const useAuthStore = create<AuthStore>(
  (set): AuthStore => ({
    isAuthenticated: false,
    setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  }),
);
