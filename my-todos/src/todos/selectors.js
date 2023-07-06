import { createSelector } from "reselect";

export const getTodos = (state) => state.todos.data;
export const getTodosLoading = (state) => state.todos.isLoading;

export const getIncompleteTodos = createSelector(getTodos, (todos) =>
  todos.filter((todo) => !todo.isCompleted)
);

// getIncompleteTodos(state)
// returns all the todos in the state whose isCompleted property is false

export const getCompletedTodos = createSelector(getTodos, (todos) =>
  todos.filter((todo) => todo.isCompleted)
);
