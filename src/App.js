import React from 'react';
import './App.css';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import profile from './assets/profile.jpg';

function App() {
  return (
    <div className="App">
      <Header name="Adnan Qidwai" image={profile} />
      <section>
        <Skills skills={[
          'Python', 'C++', 'C', 'Java', 'x86 ASM', 'bash', 'Arduino', 'JavaScript', 'MySQL',
          'HTML', 'CSS', 'Lisp', 'Racket', 'TypeScript', 'LATEX', 'PyTorch', 'Numpy', 'Pandas',
          'Langchain', 'Chroma', 'QGIS', 'Git', 'Streamlit', 'Tree-Sitter', 'SciKit-Learn', 'BOOST',
          'FAISS', 'NodeJS', 'ExpressJS', 'MongoDB'
        ]} />
      </section>
      <section>
        <Experience />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Contact email="adnan.qidwai@students.iiit.ac.in" linkedin="https://linkedin.com/in/adnanqidwai" github="https://github.com/adnanqidwai" />
      </section>
    </div>
  );
}

export default App;
