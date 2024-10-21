import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Career from './components/Career';
import Contact from './components/Contact';
 import Clint from './components/Clint';


//import TopInfo from './components/Top';
import Navbar from './components/Navbar';
import Overview from './components/Overview';
import Footer from './components/Footer';
import CSV from './components/Services/CSV';
import CandQ from './components/Services/CandQ';
import Excel from './components/Services/Excel';
import Trainings from './components/Services/Trainings';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/clint" element={<Clint />} />

        <Route path="/csv" element={<CSV />} />
        <Route path="/CandQ" element={<CandQ />} />
        <Route path="/Excel" element={<Excel />} />
        <Route path="/Trainings" element={<Trainings />} />

 
      </Routes>
      
      <Footer/>
    </Router>
  );
}

export default App;
