import { createSlice } from '@reduxjs/toolkit';

const greetingSlice = createSlice({
    name: 'greeting',
    initialState: '',
    reducers: {
        setGreeting: (state, action) => {
            return action.payload;
        },
    }
});

export const { setGreeting } = greetingSlice.actions;
export default greetingSlice.reducer;
