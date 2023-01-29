import { memo } from "react";
import type { FC, ReactNode } from "react";
import cs from "classnames";
import { ITodo, TODO_STATUS } from "../../types";
import itemStyle from "./index.module.scss";
interface IProps {
  children?: ReactNode;
  item: ITodo;
  setStatus: (id: number) => any;
}
const TodoItem: FC<IProps> = ({ item, setStatus }) => {
  const { FINISHED } = {
    FINISHED: TODO_STATUS.FINISHED,
    // DOING: TODO_STATUS.DOING,
    // WILLDO: TODO_STATUS.WILLDO,
  };
  return (
    <div>
      <input
        type='checkbox'
        defaultChecked={item.status === FINISHED}
        onClick={() => setStatus(item.id)}
      />
      <span className={cs(item.status === FINISHED && itemStyle.lineThrough)}>
        {item.content}
      </span>
      <button>删除</button>
      <button></button>
    </div>
  );
};
export default memo(TodoItem);
