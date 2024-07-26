export type TTodo = {
  id: number;
  text: string;
  isCompleted: boolean;
};

export type TTodoAction =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number };

export interface IListHandler {
  dispatch: React.Dispatch<TTodoAction>;
}
