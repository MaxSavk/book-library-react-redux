import { deleteBook } from "./actionCreators";
import * as actionsTypes from "./actionsTypes";

const initialState = [];

const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.ADD_BOOK:
            return [...state, action.payload];

        case actionsTypes.DELETE_BOOK:
            return state.filter((book) => book.id !== action.payload);

        case actionsTypes.TOGGLE_FAVORITE:
            return state.map((book) =>
                book.id === action.payload
                    ? { ...book, isFavorite: !book.isFavorite }
                    : book
            );

        default:
            return state;
    }
};

export default booksReducer;
