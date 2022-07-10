import {useSelector, useDispatch} from "react-redux";
import {useState} from "react";
import {actions} from "../store/indexNew";

const CounterModern = () => {
  const [amount, setAmount] = useState("");
  const counterNew = useSelector((state) => state.counterNew);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment());
  };

  const decrement = () => {
    dispatch(actions.decrement());
  };

  const addByTen = () => {
    dispatch(actions.addByTen(10));
  };

  const addByAmount = () => {
    dispatch(actions.addByAmount(Number(amount)));
  };

  return (
    <>
      <div>
        <h1>Counter App</h1>
        <h3>This Counter app is made with modern Redux with Redux Toolkit</h3>
        <h2>{counterNew}</h2>
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

export default CounterModern;
