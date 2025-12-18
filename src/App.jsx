import { useState } from 'react'


import './App.css'
// import Navbar from './Compoments/Navbar';
import Home from './Compoments/Home';
import About from './Compoments/About';
import Projects from './Compoments/Project';
import Contact from './Compoments/Contact';

function App() {


  return (
    <>
      <div>

        {/* <Navbar /> */}
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
       </div>
    </>
  )
}

export default App
