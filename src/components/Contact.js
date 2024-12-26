import React from 'react';

function Contact({ email, linkedin, github }) {
  return (
    <div>
      <h2>Contact</h2>
      <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
      <p>LinkedIn: <a href={linkedin} target="_blank" rel="noopener noreferrer">{linkedin}</a></p>
      <p>GitHub: <a href={github} target="_blank" rel="noopener noreferrer">{github}</a></p>
    </div>
  );
}

export default Contact;
