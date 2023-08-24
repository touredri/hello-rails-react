import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "/api/greetings";

export const fetchGreeting = createAsyncThunk("greeting", async () => {
    const res = await axios.get(API_URL);
    return res.data.greeting;
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
