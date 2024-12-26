import React from 'react';

function Header({ name, image }) {
  return (
    <div>
      <img src={image} alt="Profile" />
      <h1>{name}</h1>
    </div>
  );
}

export default Header;
