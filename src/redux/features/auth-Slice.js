import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    value: {
        isAuth: false,
        username: "",
        password: ""
    }
}
export const auth = createSlice({
    name: "auth", 
    initialState,
    reducers: {
        logOut: () => {
            return initialState;
        }, 
        logIn: (state, action) => {
            return {
                value: {
                    isAuth: true,
                    username: action.payload.username,
                    password: action.payload.password
                }
            }
        },
    }
})

export const {logIn, logOut} = auth.actions;
export default auth.reducer;