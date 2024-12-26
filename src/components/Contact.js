import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2>Contato</h2>
        <p>Você pode me contatar através dos seguintes meios:</p>
        <ul>
          <li>Email: <a href="mailto:seuemail@exemplo.com">[Seu Email]</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/seuperfil/">[Seu LinkedIn]</a></li>
          <li>GitHub: <a href="https://github.com/seunomeusuario">[Seu GitHub]</a></li>
          {/* Adicione mais informações de contato aqui */}
        </ul>
      </div>
    </section>
  );
}

export default Contact;
