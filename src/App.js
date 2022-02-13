import Header from './pages/Header'
import Home from './pages/Home';
import Projects from './pages/Projects';
import Toolbox from './pages/Toolbox';
import PortfolioProvider from './provider/PortfolioProvider';
import Aos from 'aos';
import 'aos/dist/aos.css';


function App() {

  Aos.init({ duration: 800 });

  return (
    <PortfolioProvider>
      <Header/>
      <Home/>
      <Toolbox/>
      <Projects/>
    </PortfolioProvider>   
  );
}

export default App;
