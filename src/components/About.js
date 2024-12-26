import React from 'react';
import profilePicture from '../assets/profile.jpg'; // Placeholder for your image

function About() {
  return (
    <section id="about">
      <div className="container">
        <img src={profilePicture} alt="Your Profile" />
        <div>
          <h1>[Seu Nome]</h1>
          <h2>[Seu Título]</h2>
          <p>
            Um breve resumo sobre você. Aqui você pode incluir informações sobre sua experiência, paixões e objetivos.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
