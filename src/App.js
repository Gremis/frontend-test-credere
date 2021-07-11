import React from "react";
import GlobalStyle from "./GlobalStyled";
import GlobalState from "./components/Global/GlobalState";
import HomePage from "./page/HomePage/HomePage";

function App() {
  return (
    <div>
      <GlobalState>
        <GlobalStyle />
        <HomePage />
      </GlobalState>
    </div>
  );
}

export default App;
