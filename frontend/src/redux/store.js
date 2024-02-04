import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./books/reducer";
import filterSlice from "./slices/filterSlice";

const store = configureStore({
    reducer: {
        books: booksReducer,
        filter: filterSlice,
    },
});

export default store;
