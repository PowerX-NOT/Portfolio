import React from 'react';
import Hero from './components/Hero/Hero';
import Introduction from './components/Introduction/Introduction';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Introduction />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;