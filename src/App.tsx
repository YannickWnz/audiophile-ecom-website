import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home';
import { Footer } from './Components/Footer/Footer';
import { Headphones } from './Pages/Headphones/Headphones';

function App() {


  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home /> } ></Route>
          <Route path='/headphones' element={ <Headphones /> } ></Route>
        </Routes>

        <Footer />
      </Router>

    </div>
  );
}

export default App;
