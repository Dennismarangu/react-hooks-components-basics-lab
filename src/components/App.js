import React from "react";
import NavBar from "./Navbar"; // they are in the same file path
import Home from "./Home";
import About from "./About";


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
