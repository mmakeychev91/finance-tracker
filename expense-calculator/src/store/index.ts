import { configureStore } from '@reduxjs/toolkit';
import financeReducer, { FinanceState } from './financeSlice';

// Функция для сохранения состояния в localStorage
const saveState = (state: { finance: FinanceState }) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.error("Ошибка сохранения состояния в localStorage:", err);
  }
};

// Функция для загрузки состояния из localStorage
const loadState = (): { finance: FinanceState } | undefined => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Ошибка загрузки состояния из localStorage:", err);
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

// Подписываемся на изменения store и сохраняем состояние в localStorage
store.subscribe(() => {
  saveState({
    finance: store.getState().finance, // Сохраняем только часть состояния, связанную с финансами
  });
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
