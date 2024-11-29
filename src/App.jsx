import React from 'react'
import  Nav from './components/Nav'
import Work from './components/Work';
import Stripes from './components/Stripes';
import Products from './components/Products';
import Marquee from './components/Marquee';
import Cards from './components/Cards';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full h-full bg-zinc-900 text-white'>
      
      <Nav />
      <Work />
      <Stripes />
      <Products />
      <Marquee />
      <Cards />
      <Footer />
    </div>
  )
}

export default App
