import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "../todo.model";

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push({
        id: Math.random().toString(),
        text: action.payload,
        checked: false,
      });
    },
    remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    toggleCheck: (state, action) => {
      return state.map((item) => (item.id === action.payload ? { ...item, checked: !item.checked } : { ...item }));
    },
  },
});

export default todoSlice;
export const { add, remove, toggleCheck } = todoSlice.actions;
