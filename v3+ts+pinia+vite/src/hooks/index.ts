import {
  REMOVE_TODO,
  SET_TODO,
  SET_TODO_LIST,
  SET_DOING,
  SET_STATUS,
} from "../store/constant";
import useList from "../store/listStore";
import { ITodo, TODO_STATIS } from "../types";

interface IUseTodo {
  setTodo: (value: string) => void;
  setTodoList: () => void;
  removeTodo: (id: number) => void;
  setStatus: (id: number) => void;
  setDoing: (id: number) => void;
}

interface IUseLocalStorage {
  setLocalList: (todoList: ITodo[]) => void;
  getLocalList: () => ITodo[];
}
export function useTodo(): IUseTodo {
  const listStore = useList();
  const { setLocalList, getLocalList } = useLocalStorage();
  const todoList = getLocalList();
  function setTodo(value: string) {
    const todoItem = {
      id: new Date().getTime(),
      content: value,
      status: TODO_STATIS.WILLDO,
    };
    listStore[SET_TODO](todoItem);
    setLocalList(listStore.list);
  }
  function setTodoList() {
    listStore[SET_TODO_LIST](todoList);
  }

  function removeTodo(id: number) {
    listStore[REMOVE_TODO](id);
  }
  function setStatus(id: number) {
    listStore[SET_STATUS](id);
  }
  function setDoing(id: number) {
    listStore[SET_DOING](id);
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
