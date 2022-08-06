import { Routes, Route } from 'react-router-dom';
import './App.css';
import { About } from './components/About/About';
import { Catalog } from './components/Catalog/Catalog';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Loader } from './components/Loader/Loader';
import { Contacts } from './components/Contacts/Contacts';
import { Search } from './components/Search/Search';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Logout } from './components/Logout/Logout';
import { OfferCreate } from './components/Offer/Create';
import { OfferDetails } from './components/Offer/Details';
import { OfferEdit } from './components/Offer/Edit';
import { AuthProvider } from './contexts/AuthContext';
import { CombineProvider } from './contexts/CombineContext';
import { PrivateRoute } from './components/common/PrivateRoute';
import { CombineOwner } from './components/common/CombineOwner';

function App() {
    return (
        <AuthProvider>
            <div id="box">
                <Loader />
                <Header />
                <CombineProvider>
                    <main id="main-content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/catalog" element={<Catalog />} />
                            <Route path="/offer/:combineId" element={<OfferDetails />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contacts" element={<Contacts />} />
                            <Route path="/search" element={<Search />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route element={<CombineOwner />}>
                                <Route path="/offer/:combineId/edit" element={<OfferEdit />} />
                            </Route>
                            <Route element={<PrivateRoute />}>
                                <Route path="/offer/create" element={<OfferCreate />} />
                                <Route path="/logout" element={<Logout />} />
                            </Route>
                        </Routes>
                    </main>
                </CombineProvider>
                <Footer />
            </div>
        </AuthProvider>
    );
}

export default App;
