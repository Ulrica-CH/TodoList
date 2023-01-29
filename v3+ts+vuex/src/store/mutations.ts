import { IState, ITodo, TODO_STATIS } from "@/types";
import {
  REMOVE_TODO,
  SET_DOING,
  SET_STATUS,
  SET_TODO,
  SET_TODO_LIST,
} from "./actionTypes";

export default {
  [SET_TODO](state: IState, todo: ITodo) {
    state.list = [todo, ...state.list];
  },
  [SET_TODO_LIST](state: IState, todoList: ITodo[]) {
    state.list = todoList;
  },
  [REMOVE_TODO](state: IState, id: number) {
    state.list = state.list.filter((item) => item.id !== id);
  },
  [SET_STATUS](state: IState, id: number) {
    state.list = state.list.map((item) => {
      if (item.id === id) {
        // 更好的拓展性 使用switch
        switch (item.status) {
          case TODO_STATIS.FINISHED:
            item.status = TODO_STATIS.WILLDO;
            break;
          case TODO_STATIS.WILLDO:
          case TODO_STATIS.DOING:
            item.status = TODO_STATIS.FINISHED;
            break;
          default:
            break;
        }
      }
      return item;
    });
  },
  [SET_DOING](state: IState, id: number) {
    state.list = state.list.map((item) => {
      if (item.id !== id) {
        item.status = TODO_STATIS.WILLDO;
      } else {
        item.status =
          item.status === TODO_STATIS.WILLDO
            ? TODO_STATIS.DOING
            : TODO_STATIS.WILLDO;
      }

      return item;
    });
  },
};
