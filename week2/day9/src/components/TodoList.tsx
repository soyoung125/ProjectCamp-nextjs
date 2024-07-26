import { IListHandler, TTodo } from "../type";
import TodoListItem from "./TodoListItem";

interface TTodoListProps extends IListHandler {
  todos: TTodo[];
}

const TodoList = ({ todos, dispatch }: TTodoListProps) => {
  return (
    <ul className="flex flex-col gap-4 mt-4 max-h-[284px] overflow-scroll">
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </ul>
  );
};
export default TodoList;
