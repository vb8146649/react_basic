import './App.css';
import React from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import More from './components/More';
import Contact from './components/Contact';
import Alias from './components/Alias';



function App() {
  return (
      <Router>
        <Navbar/>
        <Routes>
          <Route element={<Home/>} path='/'/>
          <Route element={<Contact/>} path='/contact' />
          <Route element={<More/>} path='/more'/>
          <Route element={<About/>} path='/about' />
          <Route element={<Login/>} path='/login' />
          <Route element={<Alias/>} path='/Alias' />
        </Routes>
      </Router>
  );
}

export default App;
