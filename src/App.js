
import Home from './component/Pages/Home/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import NavBar from './component/Pages/Home/NavBar';
 import Store from './component/Pages/Store/Store';
import About from './component/Pages/About/About';
import ContextProvider from './component/conrext-store/ContextProvider';
import Footer from './component/Footer';
import  Header from './component/Header'
import Authentication from './component/Authentication/Authentication';
import React, { Fragment, Suspense, useContext } from 'react';
import cartContext from './component/conrext-store/contextAPI';
 import SingleProduct from './component/Pages/SingleProduct/SingleProduct';
 import Contact from './component/Pages/ContactUs/Contact';



function App() {

  const ctx=useContext(cartContext)

  

  return (
    <Fragment>
     
       <NavBar />
       <Header />
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path='/store' element={ctx.isLoggedIn ? <Store /> :<Authentication /> } />
      <Route path='/about' element={<About />} />
      <Route path='/login' element={!ctx.isLoggedIn ? <Authentication /> : <Store />} />
      <Route path='/singleproduct/:id' element={<SingleProduct />} />
      <Route path='/contact' element={ctx.isLoggedIn ? <Contact /> : <Authentication />} />
      <Route path='*' element={<Home />} />
     
    </Routes>
    <Footer />
    
  </Fragment>
  );
}

export default App;
