import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { allBooks } from '../modules/books';

const BookDetails = () => {

    const { bookId } = useParams();
    const dispatch = useDispatch();
    const { books } = useSelector((state) => state);
    const [book, setBook] = useState();

    useEffect(() => {
        dispatch(allBooks())
    }, []);

    useEffect(() => {
        setBook(books.find(book => book.id === parseInt(bookId, 10)))
    }, [bookId, books]);

    return book ? (
        <>
            <div className="mb-4 w-full">
                <div className="px-7 py-7 bg-gray-100 rounded-t-lg">
                    <h1 className="text-2xl font-bold leading-normal text-gray-800">
                        Книга №{book.id}
                    </h1>
                </div>
                <div className="bg-white shadow pt-7 overflow-y-auto">
                    <table className="w-full whitespace-nowrap">
                        <thead>
                            <tr className="h-16 w-full leading-none text-gray-800 font-bold text-left">
                                <th className="pl-7">Название</th>
                                <th>Автор</th>
                            </tr>
                        </thead>
                        <tbody className="w-full">
                            <tr className="h-20 text-gray-800 bg-white hover:bg-gray-100 border-t border-gray">
                                <td className="pl-7">
                                    {book.title}
                                </td>
                                <td>{book.author}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <span className=" bg-blue-700 transition duration-150 ease-in-out hover:bg-blue-600 rounded text-white px-4 py-2">
                <Link to="/">&laquo; Назад к списку</Link>
            </span>
        </>
    ) : null;
}

export default BookDetails
