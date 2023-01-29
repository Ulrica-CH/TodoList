import { defineStore } from "pinia";
import { IState, ITodo, TODO_STATIS } from "../types";
import {
  REMOVE_TODO,
  SET_DOING,
  SET_STATUS,
  SET_TODO,
  SET_TODO_LIST,
} from "./constant";

const useList = defineStore("list", {
  state: () => <IState>{ list: [] },
  actions: {
    [SET_TODO](todo: ITodo) {
      this.list = [...this.list, todo];
    },
    [SET_TODO_LIST](todoList: ITodo[]) {
      this.list = todoList;
    },
    [REMOVE_TODO](id: number) {
      this.list = this.list.filter((item) => item.id !== id);
    },
    [SET_STATUS](id: number) {
      this.list = this.list.map((item) => {
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
    [SET_DOING](id: number) {
      this.list = this.list.map((item) => {
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
  },
});
export default useList;
