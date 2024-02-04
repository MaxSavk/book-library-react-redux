import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: "",
    author: "",
};

const filterSlice = createSlice({
    name: "filter",
    initialState: initialState,
    reducers: {
        setTitleFilter: (state, action) => {
            // return { ...state, title: action.payload };
            state.title = action.payload;
        },

        setAuthorFilter: (state, action) => {
            state.author = action.payload;
        },

        resetFilters: (state) => {
            return initialState;
        },
    },
});

export const setTitleFilter = filterSlice.actions.setTitleFilter;
export const setAuthorFilter = filterSlice.actions.setAuthorFilter;
// export const { setTitleFilter } = filterSlice.actions;
export const resetFilters = filterSlice.actions.resetFilters;

export const selectTitleFilter = (state) => state.filter.title;
export const selectAuthorFilter = (state) => state.filter.author;

export default filterSlice.reducer;
