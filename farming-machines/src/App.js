import { Routes, Route } from 'react-router-dom';
import './App.css';
import { About } from './components/About/About';
import { Catalog } from './components/Catalog/Catalog';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Loader } from './components/Loader/Loader';
import { Contacts } from './components/Contacts/Contacts';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Logout } from './components/Logout/Logout';
import { OfferCreate } from './components/Offer/Create';
import { OfferDetails } from './components/Offer/Details';
import { AuthProvider } from './contexts/AuthContext';

function App() {
    return (
        <AuthProvider>
            <div id="box">
                <Loader />
                <Header />
                <main id="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/catalog" element={<Catalog />} />
                        <Route path="/offer/create" element={<OfferCreate />} />
                        <Route path="/offer/details" element={<OfferDetails />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/logout" element={<Logout />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </AuthProvider>
    );
}

export default App;
