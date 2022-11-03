import React from "react";
import Accesories from "./components/Accesories";
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
      <Accesories />
    </div>
  );
}

export default App;
