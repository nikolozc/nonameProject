import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import Header from "./Header";
import UnityWindow from "./UnityWindow";

function App() {
  return (
    <div className="app">
      <Header />
      <UnityWindow />
    </div>
  );
}

export default App;
