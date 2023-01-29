import { memo, useState } from "react";
import type { FC, ReactNode } from "react";
import { useTodo } from "../../hooks";
interface IProps {
  children?: ReactNode;
}
const TodoInput: FC<IProps> = () => {
  const [todoVal, setTodoVal] = useState<string>("www");
  const { setTodo } = useTodo();
  const setTodoValue = (e: any) => {
    setTodoVal(e.target.value);
    if (e.key === "Enter" && todoVal.trim().length) {
      setTodo(todoVal);
    }
  };
  return (
    <input
      type='text'
      onChange={setTodoValue}
      onKeyUp={setTodoValue}
      value={todoVal}
    />
  );
};
export default memo(TodoInput);
