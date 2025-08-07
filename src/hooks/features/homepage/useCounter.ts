import { useState } from 'react';

export default function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const [val, setVal] = useState(1);

  function increment() {
    setCount((count) => count + 1);
  }

  function decrement() {
    setCount((count) => count - 1);
  }

  function setValAndCount(newVal: number) {
    setVal(newVal);
    setCount(newVal);
  }

  function reset() {
    setCount(initialValue);
  }

  return { count, increment, decrement, val, setVal: setValAndCount, reset };
}
