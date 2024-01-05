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
      });
    },
    remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export default todoSlice;
export const { add, remove } = todoSlice.actions;
