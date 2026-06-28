import { createSlice } from '@reduxjs/toolkit'

export interface UserState {
    value: null | {
        firstName: string
        email: string
        role: string
        isAdmin: boolean
        isSeller: boolean
    }
}

const initialState: UserState = {
    value: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.value = action.payload
        },
        logout: (state) => {
            state.value = null
            // localStorage.clear()
            localStorage.removeItem('token')
        },
    },
})

// Action creators are generated for each case reducer function
export const { setUser, logout } = userSlice.actions

export default userSlice.reducer