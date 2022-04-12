import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Welcome from './components/Welcome';
import AppRouter from './components/AppRouter';
import StoreService from './services/StoreService';
import { useKeycloak } from '@react-keycloak/web';

const store = StoreService.setup();

function App() {
  const{keycloak} = useKeycloak();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='px-4 mx-auto 2xl:container 2xl:mx-auto'>
          { keycloak.authenticated ?
            <AppRouter />
            :
            <Welcome />
          }
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
