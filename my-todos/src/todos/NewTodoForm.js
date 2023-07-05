import React, { useState } from "react";
import "./NewTodoForm.css";
import { connect } from "react-redux";
import { addTodoRequest } from "./thunks";

// connect is a higher order component
// higher order functions are called with two different sets of arguments

// the second argument is the component we want to connect to the redux store
// the first
// this will be shown in how we export the component

// connect()(NewTodoForm)

const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        placeholder="Type your new todo here"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          const isDuplicateText = todos.some(
            (todo) => todo.text === inputValue
          );
          if (!isDuplicateText) {
            onCreatePressed(inputValue);
            setInputValue("");
          }
        }}
        className="new-todo-button"
      >
        Create Todo
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});
// the state argument being passed in an object that represents the entire redux state
// job - take state object and return another object containing pieces of that object state that our component needs access to

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(addTodoRequest(text)),
});
// takes dispatch as an argument rather than state
// dispatch - function that allows our components to trigger actions that our redux store will respond to
// eg. trigger a redux action when someone clicks the create todo button of our newTodoForm

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
