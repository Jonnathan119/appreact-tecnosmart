// src/components/ReturnItem.js
import React from 'react';
import { useReturns } from '../context/ReturnsContext';
import './ReturnItem.css'; // Importar CSS

const ReturnItem = ({ returnData }) => {
  const { updateReturnStatus } = useReturns();

  const handleComplete = () => {
    updateReturnStatus(returnData.id, 'completed');
  };

  return (
    <li className="return-item">
      <p><strong>Producto:</strong> {returnData.product}</p>
      <p><strong>Razón:</strong> {returnData.reason}</p>
      <p><strong>Reembolso:</strong> {returnData.refund}</p>
      <p><strong>Fecha de Ingreso:</strong> {returnData.entryDate}</p>
      <p><strong>Nombre del Cliente:</strong> {returnData.customerName}</p>
      <p><strong>Número de Cédula:</strong> {returnData.idNumber}</p>
      <p><strong>Teléfono:</strong> {returnData.phoneNumber}</p>
      <p><strong>IMEI o Serial del Equipo:</strong> {returnData.imei}</p>
      <button onClick={handleComplete}>Marcar como Completado</button>
    </li>
  );
};

export default ReturnItem;
