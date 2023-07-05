// a thunk is a function that returns another function which contains the actual logic we want to perform when it's triggered.

export const displayAlert = (text) => {
  alert(`You clicked on: ${text}`);
};
