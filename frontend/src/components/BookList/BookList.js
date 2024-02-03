import { deleteBook, toggleFavorite } from "../../redux/books/actionCreators";
import { BsBookmarkStarFill, BsBookmarkStar } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import "./BookList.css";

const BookList = () => {
    const books = useSelector((state) => state.books);
    const dispatch = useDispatch();

    const handleDeleteBook = (id) => {
        dispatch(deleteBook(id));
    };

    const handleToggleFavorite = (id) => {
        dispatch(toggleFavorite(id));
    };

    return (
        <div className="app-block book-list">
            <h2>Book List</h2>
            <div>
                {books.length === 0 ? (
                    <p>No books avialable</p>
                ) : (
                    <ul>
                        {books.map((book, index) => (
                            <li key={book.id}>
                                <div className="book-info">
                                    {++index}. {book.title} by{" "}
                                    <strong>{book.author}</strong>
                                </div>
                                <div className="book-actions">
                                    <span
                                        onClick={() =>
                                            handleToggleFavorite(book.id)
                                        }
                                    >
                                        {book.isFavorite ? (
                                            <BsBookmarkStarFill className="star-icon" />
                                        ) : (
                                            <BsBookmarkStar className="star-icon" />
                                        )}
                                    </span>
                                    <button
                                        onClick={() =>
                                            handleDeleteBook(book.id)
                                        }
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default BookList;
