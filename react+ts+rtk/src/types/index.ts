interface ITodo {
  id: number;
  content: string;
  status: TODO_STATUS;
}

interface IState {
  list: ITodo[];
}

enum TODO_STATUS {
  FINISHED = "finished",
  WILLDO = "willdo",
  DOING = "doing",
}
export { TODO_STATUS };
export type { ITodo, IState };
