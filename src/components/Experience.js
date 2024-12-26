import React from 'react';

function Experience() {
  return (
    <div>
      <h2>Experience</h2>
      <div>
        <h3>Undergraduate Researcher</h3>
        <p>Affiliated with University of Pennsylvania and Arizona State University</p>
        <p>Jan 24 - Present</p>
        <ul>
          <li>Exploring multimodal question answering with Prof. Vivek Gupta.</li>
          <li>Collaborated with Adobe Research; work published at EMNLP 2024.</li>
        </ul>
      </div>
      <div>
        <h3>Research Intern - IBM Research, On-site</h3>
        <p>May 24 - Aug 24</p>
        <ul>
          <li>Lead contributor for developing a novel method for code data profiling for a large set of code languages, using LLMs and Abstract Syntax Trees.</li>
          <li>Work submitted for review to a conference</li>
        </ul>
      </div>
      <div>
        <h3>NLP Intern - Datazoic Inc.</h3>
        <p>Jan 24 - Apr 24</p>
        <ul>
          <li>Worked with the team to develop NLP applications integrating with local data on a very large set of documents.</li>
          <li>Developed a RAG-based chatbot and an NER application</li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
