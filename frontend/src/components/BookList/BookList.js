import { deleteBook } from "../../redux/books/actionCreators";
import { useDispatch } from "react-redux";
import "./BookList.css";
import { useSelector } from "react-redux";

const BookList = () => {
    const books = useSelector((state) => state.books);
    const dispatch = useDispatch();

    const handleDeleteBook = (id) => {
        dispatch(deleteBook(id));
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
