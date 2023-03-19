import React, { useState } from "react";
import "./App.css";
import Home from "./comps/home/Home.jsx";
import Register from "./comps/register/Register";
const App = () => {
  const [next, setNext] = useState(false);
  return (
    <div className="App">
      {next ? <Home /> : <Register setNext={setNext} />}
    </div>
  );
};

export default App;
