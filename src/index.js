import React from "react";
import ReactDOM from "react-dom";

//import App from "./App";
const printname = (name) =>{return <div>{name}</div>}
const App = <div>hi{printname('test')}</div>;




ReactDOM.render(App, document.getElementById("root"));
