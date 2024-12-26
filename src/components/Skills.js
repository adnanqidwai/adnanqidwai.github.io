import React from 'react';

function Skills() {
  const skills = [
    'JavaScript',
    'React',
    'HTML',
    'CSS',
    'Node.js',
    'Python',
    // Adicione mais habilidades aqui
  ];

  return (
    <section id="skills">
      <div className="container">
        <h2>Habilidades</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
