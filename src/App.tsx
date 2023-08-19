import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home';
import { Footer } from './Components/Footer/Footer';
import { Headphones } from './Pages/Headphones/Headphones';
import { Speakers } from './Pages/Speakers/Speakers';
import { Earphones } from './Pages/Earphones/Earphones';
import { Product } from './Components/Product/Product';
import { CartContextProvider } from './Components/Context/CartContext';
import { Checkout } from './Pages/Checkout/Checkout';

function App() {

  return (
    <CartContextProvider>
      <div className="App">
        <div className="small-screen-msg">
          <h1>This website is yet to be optimized for medium and small screen. <br /> Please use a larger screen to access this website.</h1>
        </div>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={ <Home /> } ></Route>
            <Route path='/headphones' element={ <Headphones /> } ></Route>
            <Route path='/speakers' element={ <Speakers /> } ></Route>
            <Route path='/earphones' element={ <Earphones /> } ></Route>
            <Route path='/product/:id' element={ <Product /> } ></Route>
            <Route path='/checkout' element={ <Checkout /> } ></Route>
          </Routes>
          <Footer />
        </Router>
      </div>
    </CartContextProvider>
  );
}

export default App;
