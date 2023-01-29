import { createSlice } from "@reduxjs/toolkit";
import { IState, ITodo, TODO_STATUS } from "../types";
import { map } from "lodash";
interface IInitialState {
  list: ITodo[];
}
const initialState: IInitialState = {
  list: [],
};
const listReducer = createSlice({
  name: "list",
  initialState,
  reducers: {
    setTodoAction(state: IState, { payload }) {
      state.list = [payload, ...state.list];
    },

    setStatusAction(state: IState, { payload }) {
      state.list = state.list.map((item) => {
        if (item.id === payload) {
          switch (item.status) {
            case TODO_STATUS.WILLDO:
              item.status = TODO_STATUS.FINISHED;
              break;
            case TODO_STATUS.FINISHED:
              item.status = TODO_STATUS.WILLDO;
              break;
            default:
              break;
          }
        }
        return item;
      });
    },
    setTodoListAction(state: IState, { payload }) {
      state.list = payload.list;
    },
  },
});
export const { setTodoAction, setStatusAction, setTodoListAction } =
  listReducer.actions;
export default listReducer.reducer;
