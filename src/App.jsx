import React from "react";
import Quiz from "./components/Quiz/Quiz";
import Timer from "./components/Timer/Timer";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Timer />
      <Quiz />
    </div>
  );
};

export default App;
