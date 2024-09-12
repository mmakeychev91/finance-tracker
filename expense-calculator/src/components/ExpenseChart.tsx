import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const ExpenseChart: React.FC = () => {
  const transactions = useSelector((state: RootState) => state.finance.transactions);

  // Проверка на undefined
  if (!transactions) {
    return <div>No transactions available</div>;
  }

  // Фильтрация и агрегирование данных
  const expenses = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, curr) => {
      acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
      return acc;
    }, {} as Record<string, number>);

  const data = Object.entries(expenses).map(([category, amount]) => ({
    name: category,
    value: amount,
  }));

  const colors = ['#00C49F', '#FFBB28', '#FF8042', '#0088FE', '#FF0000', '#00FF00', '#0000FF'];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Expense Chart</h2>
      <PieChart width={1024} height={400}>
        <Pie 
          data={data} 
          dataKey="value" 
          nameKey="name" 
          cx="50%" 
          cy="50%" 
          outerRadius={150} 
          fill="#8884d8" 
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `${value}`} />
        <Legend />
      </PieChart>
    </div>
  );
};

export default ExpenseChart;
