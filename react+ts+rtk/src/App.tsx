import { memo, ReactNode, useEffect } from "react";
import type { FC } from "react";
import { connect } from "react-redux";
import { IRootState } from "./store";
import { ITodo } from "./types";
import { useTodo } from "./hooks";
import TodoInput from "./components/TodoInput";
import TodoLit from "./components/TodoLit";
interface IProps {
  children?: ReactNode;
  list: ITodo[];
}
const App: FC<IProps> = ({ list }) => {
  const { setTodoList } = useTodo();
  useEffect(() => {
    setTodoList();
  }, []);
  return (
    <div className='App'>
      <TodoInput />
      <TodoLit list={list} />
    </div>
  );
};
export default connect((state: IRootState) => ({
  list: state.list.list,
}))(memo(App));
