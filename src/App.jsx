import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Learning from './components/Learning'
import Footer from './components/Footer'
import Contact from './components/Contact'

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    
    <Skills/>
    <Learning/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
