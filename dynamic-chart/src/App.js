import React from "react";
import "./App.css";
import ChartSelect from "./components/chartSelect/ChartSelect";
import ChartWrapper from "./components/chartWrapper/ChartWrapper";
import Inspector from "./components/inspector/Inspector";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Inspector />
        <ChartWrapper />
        <ChartSelect />
      </Provider>
    </div>
  );
}

export default App;
