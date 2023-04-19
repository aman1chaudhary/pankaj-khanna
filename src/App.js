import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import People from './pages/People';
import Contact from './pages/Contact';
import Publications from './pages/Publications';
import Navigation from './components/Navigation';
import PeopleDetails from './pages/PeopleDetails';
import Privacy from './pages/Privacy';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/people" element={<People />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/publications" element={<Publications />}/>
        <Route path="/privacy-policy" element={<Privacy />}/>
        <Route path="/people/:Name" element={<PeopleDetails />} />
        
      </Routes>
      <Footer />
    </Router>
  )
}

export default App