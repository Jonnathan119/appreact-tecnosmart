// src/components/ReturnsDashboard.js
import React, { useState } from 'react';
import { useReturns } from '../context/ReturnsContext';
import ReturnForm from './ReturnForm';
import ReturnItem from './ReturnItem';
import './ReturnsDashboard.css'; // Importación CSS

const ReturnsDashboard = () => {
  const { returns } = useReturns();
  const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda
  const [currentPage, setCurrentPage] = useState(1); // Estado para la página actual
  const itemsPerPage = 5; // Número de devoluciones por página

  // Función de filtrado
  const filteredReturns = returns.filter((ret) =>
    ret.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ret.imei.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calcular las devoluciones que se muestran en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredReturns.slice(indexOfFirstItem, indexOfLastItem);

  // Número total de páginas
  const totalPages = Math.ceil(filteredReturns.length / itemsPerPage);

  const pendingReturns = currentItems.filter(ret => ret.status === 'pending');
  const completedReturns = currentItems.filter(ret => ret.status === 'completed');

  // Función para cambiar de página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="dashboard-container">
      <h1>Gestión de Garantías y Devoluciones</h1>

      {/* Campo de búsqueda */}
      <input
        type="text"
        className="search-input"
        placeholder="Buscar por nombre del cliente o IMEI"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ReturnForm />

      <h2>Devoluciones Pendientes</h2>
      <ul>
        {pendingReturns.map((ret) => (
          <ReturnItem key={ret.id} returnData={ret} />
        ))}
      </ul>

      <h2>Devoluciones Completadas</h2>
      <ul>
        {completedReturns.map((ret) => (
          <ReturnItem key={ret.id} returnData={ret} />
        ))}
      </ul>

      {/* Paginación */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ReturnsDashboard;
