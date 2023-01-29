import { ITodo, TODO_STATUS } from "../types";
import store from "../store";
import {
  setTodoAction,
  setStatusAction,
  setTodoListAction,
} from "../store/listReducer";

interface IUseTodo {
  setTodo: (val: string) => void;
  setTodoList: () => void;
  setStatus: (id: number) => void;
}
interface IUseLocalStorage {
  setLocalList: (todoList: any) => void;
  getLocalList: () => ITodo[];
}
export function useTodo(): IUseTodo {
  const { setLocalList, getLocalList } = useLocalStorage();
  const todoList = getLocalList();
  function setTodo(val: string) {
    const todo = {
      id: new Date().getTime(),
      content: val,
      status: TODO_STATUS.WILLDO,
    };
    store.dispatch(setTodoAction(todo));
    setLocalList(store.getState().list);
  }

  function setTodoList() {
    store.dispatch(setTodoListAction(todoList));
  }

  function setStatus(id: number) {
    store.dispatch(setStatusAction(id));
  }
  return { setTodo, setTodoList, setStatus };
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
