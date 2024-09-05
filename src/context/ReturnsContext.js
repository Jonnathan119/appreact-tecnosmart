// src/context/ReturnsContext.js
import React, { createContext, useState, useContext } from 'react';

// Contexto para manejar el estado global de devoluciones
const ReturnsContext = createContext();

export const ReturnsProvider = ({ children }) => {
  const [returns, setReturns] = useState([]);

  const addReturn = (newReturn) => {
    setReturns([...returns, newReturn]);
  };

  const updateReturnStatus = (id, status) => {
    setReturns(returns.map((ret) => (ret.id === id ? { ...ret, status } : ret)));
  };

  return (
    <ReturnsContext.Provider value={{ returns, addReturn, updateReturnStatus }}>
      {children}
    </ReturnsContext.Provider>
  );
};

export const useReturns = () => useContext(ReturnsContext);
