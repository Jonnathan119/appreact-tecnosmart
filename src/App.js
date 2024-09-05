// src/App.js
import React from 'react';
import { ReturnsProvider } from './context/ReturnsContext';
import ReturnsDashboard from './components/ReturnsDashboard';
import './App.css'; // Importar el archivo CSS global

const App = () => {
  return (
    <>
      {/* Contenedor de fondo y overlay */}
      <div className="background-wrapper">
        <div className="background-image"></div>
        <div className="background-overlay"></div>
      </div>

{/* Título de la aplicación */}
<h1 className="app-title">TecnoSmart SalesPro</h1>

      {/* Contenedor de la aplicación */}
      <ReturnsProvider>
        <div className="app-container">
          <ReturnsDashboard />
        </div>
      </ReturnsProvider>
    </>
  );
};

export default App;

