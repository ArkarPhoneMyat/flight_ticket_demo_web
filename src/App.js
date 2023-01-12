import logo from "./logo.svg";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "./App.css";
import NavBar from "./Pages/components/NavBar";

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
