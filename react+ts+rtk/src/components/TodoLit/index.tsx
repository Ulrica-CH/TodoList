import { memo } from "react";
import type { FC, ReactNode } from "react";
import { map } from "lodash";
import TodoItem from "./item";
import { ITodo } from "../../types";
import { useTodo } from "../../hooks";
interface IProps {
  children?: ReactNode;
  list: ITodo[];
}
const TodoList: FC<IProps> = ({ list }) => {
  const { setStatus } = useTodo();
  return (
    <>
      {map(list, (item: ITodo) => (
        <TodoItem item={item} key={item.id} setStatus={setStatus} />
      ))}
    </>
  );
};

export default memo(TodoList);
