import { useState } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = (step=1) => {
    setCount(prev => prev + step);
  };

  const decrement = (step=1) => {
    setCount(prev => prev - step);
  };

  const reset = () => {
    setCount(initialValue);
  };

  return {
    count,
    increment,
    decrement,
    reset
  };
}

export default useCounter;