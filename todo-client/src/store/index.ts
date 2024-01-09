import { configureStore } from "@reduxjs/toolkit";
import { asyncTodoThunkSlice } from "./todoAsynSlice";

const store = configureStore({
  reducer: {
    asyncTodoThunk: asyncTodoThunkSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
