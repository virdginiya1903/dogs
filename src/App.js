import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <button
        onClick={() => {
          console.log("собачка");
        }}
      >
        Показать собачку
      </button>
    </div>
  );
}

export default App;
