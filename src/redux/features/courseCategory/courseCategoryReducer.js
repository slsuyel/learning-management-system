// courseCategoryReducer.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categories: [],
};

const courseCategorySlice = createSlice({
    name: 'courseCategories',
    initialState,
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
    },
});

export const { setCategories } = courseCategorySlice.actions;
export default courseCategorySlice.reducer;
