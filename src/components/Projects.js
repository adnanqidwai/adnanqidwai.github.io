import React from 'react';

function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <div>
        <h3>Nanopass Compiler Technologies</h3>
        <p>Technologies: Racket</p>
        <p>Developed a nanopass compiler in racket, for racket. Makes numerous intermediate representations for compilation. The project was done in a team of two.</p>
      </div>
      <div>
        <h3>Product Attribute Recognition Technologies</h3>
        <p>Technologies: Huggingface, Pytorch</p>
        <p>Done as a part of the Amazon ML Challenge: Team ranked 13 out of 75000+ participants all over India at all academic levels.</p>
        <p>Developed a method to recognize entities like height, weight, volume etc. from a given image of a product, using only a small (230M) model.</p>
      </div>
      <div>
        <h3>Multi-tool Agent with RAG Technologies</h3>
        <p>Technologies: ChromaDB, FastApi, React</p>
        <p>Developed an end-to-end application that hosts multiple tools: VectorDB retrieval, RAG and a multi-tool LLM agent.</p>
        <p>The agent can perform RAG, web searches, mathematical calculations, and output speech using Sarvam.ais API.</p>
      </div>
      <div>
        <h3>Machine Learning Projects</h3>
        <p>Technologies: Pytorch, Numpy, Sklearn</p>
        <p>Developed several projects using GMMs, LSTMs, CNNs, SVMs, and more. Projects included visual age estimation, background seperation from videos, Image caption prediction, face recognition, etc.</p>
      </div>
      <div>
        <h3>Custom Shell</h3>
        <p>Technologies: C, Linux, Operating Systems</p>
        <p>Developed an end-to-end custom shell to run on UNIX systems which makes system calls and serves multiple features provided by bash</p>
      </div>
    </div>
  );
}

export default Projects;
