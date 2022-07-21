import './App.css';
import { Banner } from './components/common/Banner';
import { Footer } from './components/common/Footer';
import { Header } from './components/common/Header';
import { Loader } from './components/common/Loader';

function App() {
  return (
    <div>

        <Loader />
        <Header />
        <Banner />

        <Footer />
    </div>
  );
}

export default App;
