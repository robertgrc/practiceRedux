import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

const TodoInput = ({ addItem }) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setValue("");
    },
    [setValue]
  );

  return (
    <form onSubmit={onSubmit}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button>Agregar item</button>
    </form>
  );
};

export default TodoInput;
