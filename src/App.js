import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
