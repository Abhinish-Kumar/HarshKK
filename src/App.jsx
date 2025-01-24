import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css"
import Home from './components/Home/Home';
import About from './components/About/About';
import NotFound from './components/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';





function App() {
  return (
    <Router>
   
      <Header/>
      

<div id='placeholder'>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/contactUs" element={<Contact />} /> */}
      </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
