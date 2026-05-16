import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Extracurricular from './components/Extracurricular';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div className="bg-background text-white min-h-screen font-sans selection:bg-primary/30 selection:text-white">
      {/* Custom Cursor Effect (Desktop only) */}
      <motion.div 
        className="hidden md:block fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary/50 pointer-events-none z-[100] mix-blend-screen"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      
      {/* Subtle background glow following mouse */}
      <motion.div 
        className="hidden md:block fixed top-0 left-0 w-96 h-96 bg-primary/5 rounded-full pointer-events-none z-[-1] blur-[100px]"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.2 }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Extracurricular />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
