import './App.css';
import { About } from './components/About';
import { Catalog } from './components/Catalog';
import { Banner } from './components/common/Banner';
import { Footer } from './components/common/Footer';
import { Header } from './components/common/Header';
import { Loader } from './components/common/Loader';
import { Details } from './components/Details';

function App() {
  return (
    <div>

        <Loader />
        <Header />
          <Banner />

            <Catalog />
            <Details />
            <About />

        <Footer />
    </div>
  );
}

export default App;
