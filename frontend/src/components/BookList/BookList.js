import "./BookList.css";
import { useSelector } from "react-redux";

const BookList = () => {
    const books = useSelector((state) => state.books);

    return (
        <div className="app-block book-list">
            <h2>Book List</h2>
            <div>
                {books.length === 0 ? (
                    <p>No books avialable</p>
                ) : (
                    <ul>
                        {books.map((book, index) => (
                            <li key={index}>
                                <div className="book-info">
                                    {++index}. {book.title} by{" "}
                                    <strong>{book.author}</strong>
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
