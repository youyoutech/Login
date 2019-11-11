import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/login.component";
import Home from "./components/home.component";
import Success from "./components/success.component";


function App() {
  return (
    <div className="container">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/login"  component={Login} />
        <Route path="/success"  component={Success} />
      </Router>
    </div>
  );
}

export default App;
