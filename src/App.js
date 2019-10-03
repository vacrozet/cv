import React from "react";
import "./App.css";
import { Eclipse } from "react-loading-io";

const Index = () => {
  return <Eclipse size={120} />;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>En cours de création...</p>
        <Index />
      </header>
    </div>
  );
}

export default App;
