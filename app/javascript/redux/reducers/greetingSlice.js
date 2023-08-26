import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "/api/greetings/random_greeting";

export const fetchGreeting = createAsyncThunk("greeting", async () => {
    const res = await axios.get(API_URL);
    console.log(res.data.greeting);
    return res.data.greeting.greeting;
});

const initialState = {
    greeting: "",
    isLoading: false,
};

export const greetingSlice = createSlice({
    name: "greeting",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchGreeting.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchGreeting.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.greeting = payload;
        });
        builder.addCase(fetchGreeting.rejected, (state, action) => {
            state.isLoading = false;
        });
    },
});

export default greetingSlice.reducer;
