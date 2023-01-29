interface ITodo {
  id: number;
  content: string;
  status: TODO_STATIS;
}
interface IState {
  list: ITodo[];
}
enum TODO_STATIS {
  WILLDO = "willdo",
  DOING = "diong",
  FINISHED = "finished",
}
export { IState, TODO_STATIS, ITodo };
