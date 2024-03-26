// use zustand to create a global state to store and update user's information
// so that the user's info can be shared to all components with just 1 hook.

import { create } from "zustand";

const useUserStore = create((set) => ({
  //   user: JSON.parse(localStorage.getItem("user-info"))||{},
  user: "",
  //   update user state with the value that we are getting
  setUser: (newData) => set({ user: newData }),

  //   clear user data to start over a new calculation
  clearUser: () => set({ user: {} }),

  // update user's IBW, weight goal, protein needs and fluid needs based on the new value entered in the inputs.
  updateUser: (newData) => set({ user: Object.assign(user, newData) }),
}));

export default useUserStore;
