// import React, { useState } from 'react';
// import classes from './Counter.module.scss';
// // import classes from './Counter.scss';

// // Создаем интерфейс для пропсов
// interface CounterProps {
//   initialValue: number;
// }

// // Создаем компонент

// const Counter: React.FC<CounterProps> = ({ initialValue }) => {
//   // Создаем состояние
//   const [count, setCount] = useState(initialValue);

//   // Функция для увеличения счетчика
//   const increment = () => {
//     setCount(count + 1);
//   };

//   // Функция для уменьшения счетчика
//   const decrement = () => {
//     setCount(count - 1);
//   };

//   // Возвращаем разметку
//   return (
//     <div className={classes.counter}>
//       <h1>Counter: {count}</h1>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// };

// export default Counter;

import React, { useState } from 'react';
import styles from './Counter.module.scss';

interface CounterProps {
  initialValue: number;
}

const Counter: React.FC<CounterProps> = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className={styles.counter || ''}>
      <h1>Counter: {count}</h1>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
