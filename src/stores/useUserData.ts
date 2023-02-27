import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  name: string;
  followers: number;
}

export const useUserData = create<User>()(
  persist(
    () => ({
      name: 'Jonathan',
      followers: 25,
    }),
    { name: 'useUserData' }
  )
);
