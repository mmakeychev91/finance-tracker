import React from 'react';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import TransactionList from './components/TransactionList'; // Импортируем новый компонент
import ExpenseChart from './components/ExpenseChart'; // Импортируем новый компонент

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Калькулятор расходов</h1>
      <Balance />
      <AddTransaction />
      <TransactionList /> {/* Добавляем компонент списка транзакций */}
      <ExpenseChart /> {/* Добавляем компонент графика */}
    </div>
  );
};

export default App;
