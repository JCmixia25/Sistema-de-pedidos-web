import React from "react";
import "../../App.css"; // Ruta corregida al archivo App.css
import traa from "../../traa.webp"; // Ruta corregida al archivo traa.webp

export const Home = () => {
  return (
    <div>
      <img src={traa} className="App-inicio" alt="traa" />
    </div>
  );
};
