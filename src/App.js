import logo from "./logo.svg";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import "./App.css";

function App() {
  return (
    <div>
      {/* <NavBar/> */}
      <BrowserRouter>
        
        <Switch>
          <Route path="/" name="Home" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
