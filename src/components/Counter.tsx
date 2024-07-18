// Пишем счетсчик на React + TypeScript

import React, { useState } from 'react';
import './Counter.scss';

// Создаем интерфейс для пропсов
interface CounterProps {
  initialValue: number;
}

// Создаем компонент

const Counter: React.FC<CounterProps> = ({ initialValue }) => {
  // Создаем состояние
  const [count, setCount] = useState(initialValue);

  // Функция для увеличения счетчика
  const increment = () => {
    setCount(count + 1);
  };

  // Функция для уменьшения счетчика
  const decrement = () => {
    setCount(count - 1);
  };

  // Возвращаем разметку
  return (
    <div className="counter">
      <h1>Counter: {count}</h1>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
