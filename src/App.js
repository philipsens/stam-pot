import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/main.scss";
import Example from "./pages/Example";


const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={"/"} component={() => <Example />} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
