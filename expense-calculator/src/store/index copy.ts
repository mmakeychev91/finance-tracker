import { configureStore } from '@reduxjs/toolkit';
import financeReducer, { FinanceState } from './financeSlice';

// Функция для загрузки состояния из localStorage
const loadState = (): { finance: FinanceState } | undefined => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Загружаем состояние из localStorage
const preloadedState = loadState();

// Конфигурация store с preloadedState
const store = configureStore({
  reducer: {
    finance: financeReducer,
  },
  preloadedState, // Загрузка состояния при инициализации
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
