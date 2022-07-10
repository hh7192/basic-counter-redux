// This is the old way of getting things done in redux.

import {createStore} from "redux";

const initState = {counter: 0};

const refucerFunction = (state = initState, action) => {
  if (action.type === "inc")
    return {
      ...state,
      counter: state.counter + 1,
    };
  else if (action.type === "dec")
    return {
      ...state,
      counter: state.counter - 1,
    };
  else if (action.type === "addTen")
    return {
      ...state,
      counter: state.counter + action.payload,
    };
  else if (action.type === "addBy")
    return {
      ...state,
      counter: state.counter + action.payload,
    };

  return state;
};

const store = createStore(refucerFunction);
export default store;

// 1 CREATING STORE AND PASSING REDUCER FUNCTION
// 2 CREATING REDUCER FUNCTION AND RETURNING JUST STATE FOR NOW
// 3 DETERMINING INITIAL STATE
// 4 IN index.js WRAP WHOLE APP TO PROVIDER FROM REACT-REDUX AND PASS CREATED STORE TO IT
// 5 IN app.js OR ANY OTHER COMPONENT WE CAN WRITE UI FOR OUR APP AND WE HAVE ACCESS TO STORE WITH useSelector HOOK.
// 6 IN app.js CREATE ACTIONS AND DISPATCH THEM WITH useDispatch HOOK.
// 7 REFACTOR REDUCER FUNCTION WITH ACTIONS WITHOUT MUTATING THE ORGINAL STATE.
