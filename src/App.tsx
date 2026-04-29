import ThreeBackground from './components/common/ThreeBackground/ThreeBackground';

import Header from './components/layout/Header/Header';


import Hero from './components/sections/Hero/Hero';
import './App.css';
import About from './components/sections/About/About';
import Skills from './components/sections/Skills/Skills';
import Projects from './components/sections/Projects/Projects';
import Experience from './components/sections/Experience/Experience';
import Contact from './components/sections/Contact/Contact';
import Footer from './components/layout/Footer/Footer';

function App() {
  return (
    <div className="App">
      <ThreeBackground />
      <Header />
      
      <main>
        <Hero />
        <About />
        <Skills/>
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;