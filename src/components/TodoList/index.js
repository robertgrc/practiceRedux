import React, { useCallback } from "react";
import TodoItem from "../TodoItem";

const TodoList = () => {
  const list = [{ item: "uno" }, { item: "dos" }, { item: "tres" }];

  const onClickRemove = useCallback((item) => {
    //Accion de eliminar un item
  }, []);

  return (
    <div>
      {list &&
        list.map((i) => (
          <TodoItem
            key={i.item}
            {...i}
            onClickRemove={onClickRemove}
          ></TodoItem>
        ))}
    </div>
  );
};

/*
const mapStateToProps = state => {
    return {
        list: state.items
    }
}
const mapDispatchToProps = dispatch => {
    return {
        removeItem: value => dispatch({type: 'REMOVE_ITEM', payload: value})
    }
}
*/
// export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
export default TodoList;
