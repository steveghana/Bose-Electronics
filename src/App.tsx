import React from "react";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Slide from "./components/Slide";
import Slider from "./components/slider";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Slide />
      <Slider />
    </div>
  );
}

export default App;
