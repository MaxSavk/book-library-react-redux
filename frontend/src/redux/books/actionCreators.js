import * as actionTypes from "./actionsTypes";

export const addBook = (newBook) => {
    return {
        type: actionTypes.ADD_BOOK,
        payload: newBook,
    };
};
