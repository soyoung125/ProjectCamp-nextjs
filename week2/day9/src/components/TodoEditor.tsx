import React, { useState } from "react";
import Button from "./html/Button";
import Input from "./html/Input";
import { TTodoAction } from "../type";

type TTodoEditorProps = {
  dispatch: React.Dispatch<TTodoAction>;
};

const TodoEditor = ({ dispatch }: TTodoEditorProps) => {
  const [text, setText] = useState("");

  const onSubmitHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: text });
    setText("");
  };

  return (
    <form action="" className="grid gap-4">
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Enter Todo List"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          type="submit"
          className="bg-[#4f4f4f] text-white w-[77px] shrink-0 rounded-lg"
          onClick={onSubmitHandler}
        >
          Add
        </Button>
      </div>
    </form>
  );
};
export default TodoEditor;
