import {
  REMOVE_TODO,
  SET_DOING,
  SET_STATUS,
  SET_TODO,
  SET_TODO_LIST,
} from "@/store/actionTypes";
import { ITodo, TODO_STATIS } from "@/types";
import { watch } from "vue";
import { Store, useStore } from "vuex";

interface IUseTodo {
  setTodo: (value: string) => void;
  setTodoList: () => void;
  removeTodo: (id: number) => void;
  setStatus: (id: number) => void;
  setDoing: (id: number) => void;
}

interface IUseLocalStorage {
  getLocalList: () => ITodo[];
  setLocalList: (todoList: ITodo[]) => void;
}

export function useTodo(): IUseTodo {
  const store: Store<any> = useStore();
  const { getLocalList, setLocalList } = useLocalStorage();
  const todoList = getLocalList();

  watch(
    () => store?.state.list,
    (todo: ITodo[]) => setLocalList(todo)
  );
  function setTodo(value: string) {
    const todo: ITodo = {
      id: new Date().getTime(),
      content: value,
      status: TODO_STATIS.WILLDO,
    };
    store.dispatch(SET_TODO, todo);
    setLocalList(store.state.list);
  }

  function setTodoList() {
    store.dispatch(SET_TODO_LIST, todoList);
  }

  function removeTodo(id: number) {
    store.dispatch(REMOVE_TODO, id);
  }
  function setStatus(id: number) {
    store.dispatch(SET_STATUS, id);
  }
  function setDoing(id: number) {
    store.dispatch(SET_DOING, id);
  }
  return {
    setTodo,
    setTodoList,
    removeTodo,
    setStatus,
    setDoing,
  };
}

export function useLocalStorage(): IUseLocalStorage {
  const getLocalList = (): ITodo[] =>
    JSON.parse(localStorage.getItem("todoList") || "[]");
  const setLocalList = (todoList: ITodo[]) =>
    localStorage.setItem("todoList", JSON.stringify(todoList));
  return {
    getLocalList,
    setLocalList,
  };
}
