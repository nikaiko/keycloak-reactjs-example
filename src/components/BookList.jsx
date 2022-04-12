import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { allBooks, deleteBook } from "../modules/books";

const BookList = () => {
    const dispatch = useDispatch();
    const { books } = useSelector((state) => state)

    useEffect(() => {
        dispatch(allBooks())
    }, []);

    return (
        <div className="w-full">
            <div className="px-7 py-7 bg-gray-100 rounded-t-lg">
                <h1 className="text-2xl font-bold leading-normal text-gray-800">
                    Книги, которые должен прочитать перед смертью
                </h1>
                
            </div>
            <div className="bg-white shadow pt-7 pb-5 overflow-y-auto">
                <table className="w-full whitespace-nowrap">
                    <thead>
                        <tr className="h-16 w-full leading-none text-gray-800 font-bold text-left">
                            <th className="pl-7">Id</th>
                            <th>Название</th>
                            <th>Автор</th>
                        </tr>
                    </thead>
                    <tbody className="w-full">
                        {books.map((book) => 
                            <tr className="h-20 text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray" key={book.id}>
                                <td className="pl-7">{book.id}</td>
                                <td>
                                    <Link to={`/books/${book.id}`}>{book.title}</Link>
                                </td>
                                <td>{book.author}</td>
                                <td>
                                    <button className="my-2 bg-red-700 transition duration-150 ease-in-out hover:bg-red-600 rounded text-white px-4 py-2 text-sm" onClick={() => dispatch(deleteBook(book))}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default BookList;