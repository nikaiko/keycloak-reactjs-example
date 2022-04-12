import { useKeycloak } from '@react-keycloak/web';

const Welcome = () => {
    const{keycloak} = useKeycloak();

    return(
        <div className='py-5 px-7 mb-8 bg-white rounded shadow-lg'>
            <h1 className='text-2xl'>Добро пожаловать, Аноним!</h1>
            <p className='mb-5 mt-2 text-xl font-light leading-4'>Войди в профиль</p>
            <p>
                <button
                    className='my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm'
                    onClick={() => keycloak.login()}
                >
                    Войти
                </button>
            </p>
        </div>
    )
};

export default Welcome;