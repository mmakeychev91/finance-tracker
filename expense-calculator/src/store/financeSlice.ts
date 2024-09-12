import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Типизация транзакции
type Transaction = {
  id: string;
  amount: number;
  category: string;
  type: 'income' | 'expense';
  date: string;
};

// Типизация состояния
export type FinanceState = {
  transactions: Transaction[];
  totalIncome: number;
  totalExpense: number;
};

// Изначальное состояние
const initialState: FinanceState = {
  transactions: [],
  totalIncome: 0,
  totalExpense: 0,
};

// Срез для управления финансами
const financeSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {
    addTransaction(state, action: PayloadAction<Transaction>) {
      state.transactions.push(action.payload);
      if (action.payload.type === 'income') {
        state.totalIncome += action.payload.amount;
      } else {
        state.totalExpense += action.payload.amount;
      }
    },
  },
});

export const { addTransaction } = financeSlice.actions;
export default financeSlice.reducer;
