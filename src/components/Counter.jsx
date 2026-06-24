import useCounter from "../hooks/useCounter";

function Counter({ title, initialValue, step }) {
  const { count, increment, decrement, reset } = useCounter(initialValue);

  return (
    <div className="counter-box">
      <h2>{title}</h2>
      <h1 className="count">{count}</h1>
      <p className="step-text">Stepping by: {step}</p>

      <button className="btn" onClick={() => increment(step)}>
        Increment (+{step})
      </button>

      <button className="btn" onClick={() => decrement(step)}>
        Decrement (-{step})
      </button>

      <button className="btn reset-btn" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
