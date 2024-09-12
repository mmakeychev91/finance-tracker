import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Balance: React.FC = () => {
  const { totalIncome, totalExpense } = useSelector((state: RootState) => state.finance);
  const balance = totalIncome - totalExpense;

  return (
    <div className="p-4 bg-gray-100 shadow rounded">
      <h2 className="text-xl font-bold">Баланс: {balance} ₽</h2>
      <div className="mt-2">
        <p>Доходы: {totalIncome} ₽</p>
        <p>Расходы: {totalExpense} ₽</p>
      </div>
    </div>
  );
};

export default Balance;
