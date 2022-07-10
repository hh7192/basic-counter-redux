// This is the modern redux using redux toolkit
import {configureStore, createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counterNew",
  initialState: {counterNew: 0},
  reducers: {
    increment(state) {
      state.counterNew++;
    },
    decrement(state) {
      state.counterNew--;
    },
    addByTen(state, action) {
      state.counterNew += action.payload;
    },
    addByAmount(state, action) {
      state.counterNew += action.payload;
    },
  },
});

const storeNew = configureStore({
  reducer: counterSlice.reducer,
});

export const actions = counterSlice.actions;
export default storeNew;

// 1 create slice for app with name, initialState and reducers property
// 2 create store.
// 3 create actions and export it
// 4 import actions in corresponding component
// 5
