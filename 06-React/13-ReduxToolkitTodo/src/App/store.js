import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Features/Todo/TodoSlice";

export const todoStore = configureStore({
  reducer: todoReducer,
});
