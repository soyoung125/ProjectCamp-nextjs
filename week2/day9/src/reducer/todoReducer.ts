import { TTodo, TTodoAction } from "../type";

export const todoReducer = (todos: TTodo[], action: TTodoAction) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...todos,
        {
          id: Date.now(),
          text: action.payload,
          isCompleted: false,
        },
      ];
    case "DELETE_TODO":
      return todos.filter((todo) => todo.id !== action.payload);
    case "TOGGLE_TODO":
      return todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
    default:
      return todos;
  }
};
