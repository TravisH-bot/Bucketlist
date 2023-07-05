// a thunk is a function that returns another function which contains the actual logic we want to perform when it's triggered.
import {
  loadTodosInProgress,
  loadTodosSuccess,
  loadTodosFailure,
} from "./actions";

export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodosInProgress());
    const response = await fetch("http://localhost:8080/todos");
    const todos = await response.json();

    dispatch(loadTodosSuccess(todos));
  } catch (e) {
    dispatch(loadTodosFailure());
    dispatch(displayAlert(e));
  }
};

export const displayAlert = (text) => {
  alert(text);
};
