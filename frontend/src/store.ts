import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface UserStore {
  isAuthenticated: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  login: (loginFn: Function) => void;
  // eslint-disable-next-line @typescript-eslint/ban-types
  logout: (logoutFn: Function) => void;
}

export const useUserStore = create<UserStore>()(
  devtools(
    // will be removed after linking the app with the backend
    persist(
      (set) => ({
        isAuthenticated: false,
        login: (loginFn) => {
          loginFn();
          set({ isAuthenticated: true });
        },
        logout: (logoutFn) => {
          logoutFn();
          set({ isAuthenticated: false });
        },
      }),
      {
        name: "user-storage",
      }
    )
  )
);
