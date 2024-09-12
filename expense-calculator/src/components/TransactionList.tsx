import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const TransactionList: React.FC = () => {
  const transactions = useSelector((state: RootState) => state.finance.transactions);

  if (!transactions) {
    return <div>No transactions available</div>;
  }

  const categories = [...new Set(transactions.map((t) => t.category))];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Transaction List</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id} className="mb-2">
            {transaction.date} - {transaction.category} - {transaction.amount}руб. - {transaction.type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
