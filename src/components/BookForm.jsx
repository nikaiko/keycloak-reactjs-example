import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from './../modules/books';
import { useKeycloak } from '@react-keycloak/web';

const BookForm = () => {
    const[author, setAuthor] = useState('');
    const[title, setTitle] = useState('');
    const{keycloak} = useKeycloak();

    const dispatch = useDispatch();
    const navigate = useNavigate(); // 5v useHistory

    const handleSubmit = (e) => {
        e.preventDefault(); //не рендерить при отправке
        if (!author || !title) {
            return;
        }
        dispatch(addBook({ author, title}))
            .then(() => navigate('/'))
    };

    return (
        <div>
            <div>
                <form className='py-5 px-7 mb-8 bg-white' onSubmit={handleSubmit}>
                    <h1 className='text-2xl font-bold leading-normal text-gray-800'>Добавить новую книгу</h1>
                    <div className='my-2 font-semibold text-xl'>Автор</div>
                    <input 
                        className='border my-2 rounded px-4 py-2'
                        type='text'
                        placeholder='Автор'
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                    <div>
                        <div className='my-2 font-semibold text-xl'>Название</div>
                        <input
                            className='border my-2 rounded px-4 py-2'
                            type='text'
                            placeholder='Название'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    {keycloak.hasRealmRole(['user']) &&
                        <button 
                            type='submit' 
                            className='my-2 bg-green-700 transition duration-150 ease-in-out hover:bg-green-600 rounded text-white px-4 py-2'
                        >
                            Добавить книгу
                        </button>
                    }
                </form>
            </div>
        </div>
    );
}

export default BookForm;