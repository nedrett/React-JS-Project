import { Routes, Route } from 'react-router-dom';
import './App.css';
import { About } from './components/About';
import { Catalog } from './components/Catalog/Catalog';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Loader } from './components/Loader/Loader';
import { Contacts } from './components/Contacts';
import { Details } from './components/Details';

function App() {
    return (
        <div id="box">

            <Loader />
            <Header />
            <main id="main-content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
