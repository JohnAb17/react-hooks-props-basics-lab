import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

import user from "../data/user";

function App() {
  const { name, city, color } = user;
  return (
    <div>
      <NavBar />
      <Home name={name} city={city} color={color} />
      <About bio={user.bio} links={user.links} />
    </div>
  );
}

export default App;

