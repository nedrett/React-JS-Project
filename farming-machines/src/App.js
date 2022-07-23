import { Routes, Route } from 'react-router-dom';
import './App.css';
import { About } from './components/About';
import { Catalog } from './components/Catalog/Catalog';
import { Home } from './components/Home/Home';
import { Footer } from './components/common/Footer/Footer';
import { Header } from './components/common/Header/Header';
import { Loader } from './components/common/Loader/Loader';
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
            </Routes>
                {/* <Home />
                <Catalog />
                <Details />
                <About />

                <Contacts /> */}
            </main>
            <Footer />
        </div>
    );
}

export default App;
