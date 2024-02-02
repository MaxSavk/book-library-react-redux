import { deleteBook } from "./actionCreators";
import * as actionsTypes from "./actionsTypes";

const initialState = [];

const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.ADD_BOOK:
            return [...state, action.payload];

        case actionsTypes.DELETE_BOOK:
            return state.filter((book) => book.id !== action.payload);

        default:
            return state;
    }
};

export default booksReducer;
