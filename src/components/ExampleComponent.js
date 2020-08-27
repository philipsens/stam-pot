import React from "react";

const ExampleComponent = ({ count, setCount }) => {
  return (
    <React.Fragment>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </React.Fragment>
  );
};

export default ExampleComponent;
