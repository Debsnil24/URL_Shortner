import { create } from 'zustand'

interface User {
    id: string
    email: string
    name: string
}

interface AppState {
    // Auth state
    isAuthenticated: boolean
    user: User | null

    // UI state
    isLoading: boolean
    isAuthDialogOpen: boolean
    // Actions
    setAuthenticated: (isAuth: boolean) => void
    setUser: (user: User) => void
    setLoading: (loading: boolean) => void
    logout: () => void
    setAuthDialogOpen: (open: boolean) => void
}

export const useStore = create<AppState>((set) => ({
    // Initial state
    isAuthenticated: false,
    user: null,
    isLoading: false,
    isAuthDialogOpen: false,

    // Actions
    setAuthenticated: (isAuth) => set({ isAuthenticated: isAuth }),
    setUser: (user) => set({ user }),
    setLoading: (loading) => set({ isLoading: loading }),
    logout: () => set({ isAuthenticated: false, user: null }),
    setAuthDialogOpen: (open) => set({ isAuthDialogOpen: open }),
}))
