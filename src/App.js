import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Posts from "./components/Posts";
import Postform from "./components/Postform";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

const store = createStore(() => [], {}, applyMiddleware());

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Postform />
        <hr></hr>
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
