export default function Counter({ count, onIncrement, onDecrement }) {
    return (
      <div>
        <h2>Counter</h2>
        <p>{count}</p>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
      </div>
    );
  }  