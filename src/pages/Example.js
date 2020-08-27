import React, { useState } from "react";
import ExampleComponent from "../components/ExampleComponent";
import CorpsIcon from "../assets/images/CorpsIcon.jpg";

const Example = () => {
  const [count, setCount] = useState(0);

  return (
    <section>
      <img src={CorpsIcon} title="Digital Corps Logo" alt="Digital Corps Logo" />
      <h1>The Count is: {count}</h1>
      <ExampleComponent count={count} setCount={setCount} />
    </section>
  );
};

export default Example;
