// dependencies
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  reset,
  incrementByAmount,
  decrementByAmount,
} from "../redux/features/counter/counterSlice";

const Counter = () => {
  const [amount, setAmount] = useState();
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div>
      <h1>Simple Counter: {count}</h1>
      <button onClick={() => dispatch(increment())} type="button">
        Increment
      </button>{" "}
      <button onClick={() => dispatch(decrement())} type="button">
        Decrement
      </button>{" "}
      <button onClick={() => dispatch(reset())} type="button">
        Reset
      </button>
      <br />
      <br />
      <br />
      {/* <h1>Count By Amount: {count}</h1> */}
      <label htmlFor="amount">Inter Amount</label>{" "}
      <input onChange={handleAmount} type="number" name="amount" id="" />{" "}
      <button onClick={() => dispatch(incrementByAmount(amount))} type="button">
        Increment
      </button>{" "}
      <button onClick={() => dispatch(decrementByAmount(amount))} type="button">
        Decrement
      </button>
    </div>
  );
};

export default Counter;
