
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Nav from './Components/Nav/Nav';

import Service from './Components/Service';
import Products from './Components/Products';
import Contact from './Components/Contact';
import Footer from './Components/Footer/Footer';
import Landing from './Components/Landing/Landing';
import About from './Components/About/About';

function App() {
  return (
    <Router>
      <Nav />
      
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element= {<Service />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    <Footer />
    </Router>
  );
}

export default App;
