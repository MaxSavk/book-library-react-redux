import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: "",
    author: "",
    onlyFavorite: false,
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

        setOnlyFavoriteFilter: (state, action) => {
            state.onlyFavorite = !state.onlyFavorite;
        },

        resetFilters: (state) => {
            return initialState;
        },
    },
});

export const setTitleFilter = filterSlice.actions.setTitleFilter;
export const setAuthorFilter = filterSlice.actions.setAuthorFilter;
// export const { setTitleFilter } = filterSlice.actions;
export const setOnlyFavoriteFilter = filterSlice.actions.setOnlyFavoriteFilter;
export const resetFilters = filterSlice.actions.resetFilters;

export const selectTitleFilter = (state) => state.filter.title;
export const selectAuthorFilter = (state) => state.filter.author;
export const selectOnlyFavoriteFilter = (state) => state.filter.onlyFavorite;

export default filterSlice.reducer;
