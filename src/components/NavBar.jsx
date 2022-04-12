import { Link } from "react-router-dom";
import { useKeycloak } from '@react-keycloak/web';

const NavBar = () => {
    const {keycloak} = useKeycloak();

    return (
        <nav className="py-5 px-7 mb-8 bg-white border rounded shadow-lg">
            <div className="flex justify-between items-center">
                <div className="pr-16">
                    <Link className="cursor-pointer font-normal text-2xl leading-6 text-gray-800" to="/">BookBox!</Link>
                </div>
                <ul className="hidden md:flex flex-auto space-x-2">
                    <li className="my-2 cursor-pointer hover:bg-indigo-600 hover:text-white text-gray-600 border border-white bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 px-3 py-3 font-normal shadow-md rounded"><Link to='/'>Список</Link></li>
                    <li className="my-2 cursor-pointer hover:bg-indigo-600 hover:text-white text-gray-600 border border-white bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 px-3 py-3 font-normal shadow-md rounded"><Link to='/books/new'>Новая книга</Link></li>
                    <li className="my-2 cursor-pointer hover:bg-indigo-600 hover:text-white text-gray-600 border border-white bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 px-3 py-3 font-normal shadow-md rounded"><Link to='/secret'>Секретные книги</Link></li>
                    <li className="my-2 cursor-pointer hover:bg-indigo-600 hover:text-white text-gray-600 border border-white bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 px-3 py-3 font-normal shadow-md rounded"><Link to='/f'>Не найденная</Link></li>
                </ul>
                <p className="text-gray-800 font-normal text-xl pr-10">
                    Вошли под именем <strong>{keycloak.tokenParsed.preferred_username}</strong>
                </p>
                <button
                    className="my-2 bg-red-700 transition duration-150 ease-in-out hover:bg-red-600 rounded text-white px-8 py-3 text-sm" 
                    onClick={() => keycloak.logout()}
                >
                    Выйти
                </button>
            </div>
        </nav>
    )
};

export default NavBar;