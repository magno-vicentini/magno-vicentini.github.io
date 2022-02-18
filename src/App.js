import Header from './pages/Header'
import Home from './pages/Home';
import Projects from './pages/Projects';
import Toolbox from './pages/Toolbox';
import About from './pages/About';
import Contact from './pages/Contact';
import PortfolioProvider from './provider/PortfolioProvider';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './App.scss';


function App() {

  

  Aos.init({ duration: 800 });

  return (
    <PortfolioProvider>
      <Header/>
      <Home/>
      <Toolbox/>
      <Projects/>
      <About/>
      <Contact/>
    </PortfolioProvider>   
  );
}

export default App;
