import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Todo } from "../todo.model";

export const fetchTodo = createAsyncThunk("asyncTodoThunk/getTodo", async (_, thunkAPI) => {
  try {
    const response = await axios.get("http://localhost:5000/todos");
    const data = await response.data;
    const todos = (await data.todos) as Todo[];
    return todos;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const createTodo = createAsyncThunk("asyncTodoThunk/createTodo", async (text: string, thunkAPI) => {
  try {
    const response = await axios.post("http://localhost:5000/todos", { text });
    const data = await response.data;
    const newTodo = await data.newTodo;
    thunkAPI.dispatch(fetchTodo());
    return newTodo;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const updateTodo = createAsyncThunk(
  "asyncTodoThunk/updateTodo",
  async (updateData: { id: string; text: string; checked: boolean }, thunkAPI) => {
    const { id, text, checked } = updateData;
    try {
      const response = await axios.patch(`http://localhost:5000/todos/${id}`, { text, checked });
      const data = await response.data;
      const updatedTodo = await data.updatedTodo;
      thunkAPI.dispatch(fetchTodo());
      return updatedTodo;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const removeTodo = createAsyncThunk("asyncTodoThunk/removeTodo", async (id: string, thunkAPI) => {
  try {
    await axios.delete(`http://localhost:5000/todos/${id}`);
    thunkAPI.dispatch(fetchTodo());
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const asyncTodoThunkSlice = createSlice({
  name: "asyncTodoThunk",
  initialState: {
    value: [] as Todo[],
    status: "init",
  },
  reducers: {},
  extraReducers: (builder) => {
    //getTodo
    builder.addCase(fetchTodo.pending, (state) => {
      state.status = "Loading";
    });
    builder.addCase(fetchTodo.fulfilled, (state, action) => {
      state.value = action.payload;
      state.status = "Complete";
    });
    builder.addCase(fetchTodo.rejected, (state) => {
      state.status = "Failed";
    });

    //createTodo
    builder.addCase(createTodo.pending, (state) => {
      state.status = "Loading";
    });
    builder.addCase(createTodo.fulfilled, (state) => {
      state.status = "Complete";
    });
    builder.addCase(createTodo.rejected, (state) => {
      state.status = "Failed";
    });

    //updateTodo
    builder.addCase(updateTodo.pending, (state) => {
      state.status = "Loading";
    });
    builder.addCase(updateTodo.fulfilled, (state) => {
      state.status = "Complete";
    });
    builder.addCase(updateTodo.rejected, (state) => {
      state.status = "Failed";
    });

    //removeTodo
    builder.addCase(removeTodo.pending, (state) => {
      state.status = "Loading";
    });
    builder.addCase(removeTodo.fulfilled, (state) => {
      state.status = "Complete";
    });
    builder.addCase(removeTodo.rejected, (state) => {
      state.status = "Failed";
    });
  },
});
