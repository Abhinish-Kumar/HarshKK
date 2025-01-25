import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import NotFound from './components/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Reviews from './components/Reviews/Reviews';
import Services from './components/Services/Services';
import LiveEvents from './components/Services/LiveEvents/LiveEvents';
import AOS from 'aos';
import 'aos/dist/aos.css';


//data-aos="fade-left"

// data-aos="fade-right
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,     // Run the animation once
    });
  }, []);

  return (
    <Router>
      <Header />

      <div id='placeholder'>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/reviews" exact element={<Reviews />} />
          <Route path="/services" exact element={<Services />} />
          <Route path="services/liveEvents" exact element={<LiveEvents />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
