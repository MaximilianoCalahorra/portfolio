import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import TechStack from './components/TechStack'

import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react'

function App() {
  useEffect(() => {
  AOS.init({
    duration: 800,
    once: true,
  });
}, []);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
