import './App.css';
import Footer from './footer/Footer';
import Header from './header/Header';
import Contenido from './section/Contenido';

function App() {
    return (
        <div className="grid">
            <Header />
            <Contenido/>
            <Footer/>
        </div>
    );
}

export default App;
