import React from 'react';
import ThreeBackground from './components/common/ThreeBackground/ThreeBackground';
import Header from './components/layout/Header/Header';
import Hero from './components/sections/Hero/Hero';
import About from './components/sections/About/About';
import Skills from './components/sections/Skills/Skills';
import Projects from './components/sections/Projects/Projects';
import Experience from './components/sections/Experience/Experience';
import Process from './components/sections/Process/Process';
import Contact from './components/sections/Contact/Contact';
import Footer from './components/layout/Footer/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <ThreeBackground />
      <Header />
      
      <main className="content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Process />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
