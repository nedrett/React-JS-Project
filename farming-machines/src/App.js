import { Routes, Route } from 'react-router-dom';
import './App.css';
import { About } from './components/About';
import { Catalog } from './components/Catalog';
import { Home } from './components/Home';
import { Footer } from './components/common/Footer';
import { Header } from './components/common/Header';
import { Loader } from './components/common/Loader';
import { Contacts } from './components/Contacts';
import { Details } from './components/Details';

function App() {
    return (
        <div>

            <Loader />
            <Header />
                {/* <Routes>
                    <Route path="/" element={<Home />}/>
                </Routes> */}
                <Home />
                <Catalog />
                <Details />
                <About />

                <Contacts />

                <Footer />
        </div>
    );
}

export default App;
