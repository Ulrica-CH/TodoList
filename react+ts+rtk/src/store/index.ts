import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./listReducer";
const store = configureStore({
  reducer: {
    list: listReducer,
  },
});
type IState = typeof store.getState;
export type IRootState = ReturnType<IState>;
export default store;
