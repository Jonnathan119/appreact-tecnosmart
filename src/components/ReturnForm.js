// src/components/ReturnForm.js
import React, { useState } from 'react';
import { useReturns } from '../context/ReturnsContext';
import './ReturnForm.css'; // Importar CSS

const ReturnForm = () => {
  const { addReturn } = useReturns();
  const [product, setProduct] = useState('');
  const [reason, setReason] = useState('');
  const [refund, setRefund] = useState(0);
  const [entryDate, setEntryDate] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [imei, setImei] = useState('');

  const handleAddReturn = (e) => {
    e.preventDefault();
    addReturn({
      id: Date.now(),
      product,
      reason,
      refund,
      status: 'pending',
      entryDate,
      customerName,
      idNumber,
      phoneNumber,
      imei,
    });
    // Limpiar los campos del formulario
    setProduct('');
    setReason('');
    setRefund(0);
    setEntryDate('');
    setCustomerName('');
    setIdNumber('');
    setPhoneNumber('');
    setImei('');
  };

  return (
    <form className="return-form" onSubmit={handleAddReturn}>
      <input
        type="text"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        placeholder="Descripción del producto"
        required
      />
      <input
        type="text"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        placeholder="Razón de devolución o garantía"
        required
      />
      <input
        type="number"
        value={refund}
        onChange={(e) => setRefund(e.target.value)}
        placeholder="Reembolso (si es debido)"
        required
      />
      <input
        type="date"
        value={entryDate}
        onChange={(e) => setEntryDate(e.target.value)}
        placeholder="Fecha de Ingreso"
        required
      />
      <input
        type="text"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
        placeholder="Nombre del Cliente"
        required
      />
      <input
        type="text"
        value={idNumber}
        onChange={(e) => setIdNumber(e.target.value)}
        placeholder="Número de Cédula"
        required
      />
      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Teléfono"
        required
      />
      <input
        type="text"
        value={imei}
        onChange={(e) => setImei(e.target.value)}
        placeholder="IMEI o Serial del Equipo"
        required
      />
      <button type="submit">Registrar Devolución/Garantía</button>
    </form>
  );
};

export default ReturnForm;
