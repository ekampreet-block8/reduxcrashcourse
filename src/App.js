import React from "react";
import "./App.css";
import Posts from "./components/Posts";
import Postform from "./components/Postform";
import { Provider } from "react-redux";
import store from "./store";
// const store = createStore(() => [], {}, applyMiddleware());

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
