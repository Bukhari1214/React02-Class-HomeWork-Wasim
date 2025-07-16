import { useCounter } from "@/context/CounterContext";
import styles from "./Counter.module.css";

export default function Counter() {
  const { state, dispatch } = useCounter();

  return (
    <div className={styles.counterContainer}>
      <h2>Counter: {state.count}</h2>
      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
        className={styles.counterButton}
      >
        -
      </button>
      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
        className={styles.counterButton}
      >
        +
      </button>
    </div>
  );
}
