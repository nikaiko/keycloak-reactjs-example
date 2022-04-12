import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import BookList from './BookList';
import BookForm from "./BookForm";
import BookDetails from "./BookDetails";
import NoMatch from "./NoMatch";
import SecretBooks from './SecretBooks';
import NotAllowed from './NotAllowed';
import { useKeycloak } from '@react-keycloak/web';

const AppRouter = () => {
    const{keycloak} = useKeycloak();

    return (
        <>
            <NavBar />
            <Routes>
                <Route 
                    path="/" 
                    element={<BookList />} 
                />
                <Route 
                    path="/books/new" 
                    element={<BookForm />} 
                />
                <Route 
                    path="/books/:bookId" 
                    element={<BookDetails />} 
                />
                <Route 
                    path="/secret" 
                    element={keycloak.hasRealmRole(['admin']) ? 
                        <SecretBooks /> 
                        : 
                        <NotAllowed/>
                    }
                />
                <Route 
                    path="*" 
                    element={<NoMatch />} 
                />
            </Routes>
        </>
    )
};


export default AppRouter;