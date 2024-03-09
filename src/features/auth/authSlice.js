import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const userExist = JSON.parse(localStorage.getItem("user"))

const initialState = {
    user : userExist ? userExist : null,
    isLoading : false,
    isError : false,
    isSuccess : false,
    message : "",
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    builder
    .addCase(registerUser.pending, (state) => {
        state.isLoading = true
    })

    .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
    })

    .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
    })

    .addCase(loginUser.pending, (state) => {
        state.isLoading = true
    })

    .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.message = "",
        state.user = action.payload
    })

    .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
    })

    .addCase(logoutUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.user = null
        })

    }
})

export default authSlice.reducer;

// register user//

export const registerUser = createAsyncThunk("REGISTER/USER", async(formData, thunkAPI) => {
    try {
        return await authService.register(formData)
    } catch (error) {
        const message = error.response.data.message;
        return thunkAPI.rejectWithValue(message)
    }
})

// logout user//

export const logoutUser = createAsyncThunk("LOGOUT/USER", async() => {
    localStorage.removeItem("user")
})

//login user//

export const loginUser = createAsyncThunk("LOGIN/USER", async(formData, thunkAPI) => {
    try {
        return await authService.login(formData)
    } catch (error) {
        const message = error.response.data.message;
        return thunkAPI.rejectWithValue(message)
    }
})