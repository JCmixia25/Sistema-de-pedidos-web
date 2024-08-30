import React, { useState } from "react";
import "../../App.css"; // Ruta corregida al archivo App.css
import traa from "../../traa.webp"; // Ruta corregida al archivo traa.webp

export const Services = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar el inicio de sesión
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    
    <>
          <img src={traa} className="App-inicio" alt="traa" />

      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Usuario:</label>
          <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};
