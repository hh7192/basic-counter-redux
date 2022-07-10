import {useSelector, useDispatch} from "react-redux";
import {useState} from "react";

const CounterDeprecated = () => {
  const [amount, setAmount] = useState("");
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({
      type: "inc",
    });
  };

  const decrement = () => {
    dispatch({
      type: "dec",
    });
  };

  const addByTen = () => {
    dispatch({
      type: "addTen",
      payload: 10,
    });
  };

  const addByAmount = () => {
    dispatch({
      type: "addBy",
      payload: Number(amount),
    });
  };
  return (
    <>
      <div>
        <h1>Counter App</h1>
        <h3>This Counter app is made with old Redux method</h3>
        <h2>{counter}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={addByTen}>Add by 10</button>
      </div>
      <div>
        <input type='number' onChange={(e) => setAmount(e.target.value)} />
        <button onClick={addByAmount}>Add by amount</button>
      </div>
    </>
  );
};

export default CounterDeprecated;
