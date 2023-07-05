import { CREATE_TODO, REMOVE_TODO } from "./actions";

export const todos = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { text } = payload;
      const newTodo = {
        text,
        isCompleted: false,
      };
      return state.concat(newTodo);
    }
    case REMOVE_TODO: {
      const { text } = payload;
      // filter based on whose text property does not equal the text property that we got on the action payload
      return state.filter((todo) => todo.text !== text);
    }
    default:
      return state;
  }
};
