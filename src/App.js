import './App.scss';
import Features from './component/Features/Features';
import Navigation from './component/Navbar/Navbar';
import Landing from './component/Landing/Landing';
import Services from './component/Services/Services';
import Portfolio from './component/Portfolio/Portfolio';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App"> 
      <div className='container'>
        <Navigation />
      </div>
        <Landing />
        <Features />
        <Services />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
    </div>
  );
}
      
      // <Route path="" element={} />
      // <Route path="" element={} />
export default App;
