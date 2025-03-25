import { AuthUser } from '../core/types/user';
import { Nulleable } from '../core/types/utils';
import type { StateCreator } from 'zustand'



export interface User {
  userId: string;
  username: string;
  role: string;
  email: string;
}

export interface AuthState extends Nulleable<AuthUser> {
  isAuthenticated: boolean
  loggedInDate: Date | null
  token: string | null;
}



export interface AuthActions {
  login: (user:  AuthUser) => void;
  logout: () => void;
}

export type AuthSlice = AuthState & AuthActions


const initialState: AuthState = {
  isAuthenticated: false,
  loggedInDate: null,
  firstName: null,
  lastName: null,
  roleId: null,
  roleName: null,
  token: null,
  userId: null
}

export  const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  ...initialState,
  login(newState){
    set({
      isAuthenticated: true,
      loggedInDate: new Date(),
        ...newState,
    })
  },
  logout() {
      set(initialState)
  },
})




