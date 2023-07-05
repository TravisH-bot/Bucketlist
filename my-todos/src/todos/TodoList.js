import React, { useEffect } from "react";
import "./TodoList.css";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import { connect } from "react-redux";
import { markTodoAsComplete } from "./actions";
import { loadTodos, removeTodoRequest } from "./thunks";

const TodoList = ({
  todos = [],
  onRemovePressed,
  onCompletedPressed,
  isLoading,
  startLoadingTodos,
}) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);

  const loadingMessage = <div>Loading todos...</div>;
  const content = (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}
        />
      ))}
    </div>
  );
  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  onCompletedPressed: (text) => dispatch(markTodoAsComplete(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
