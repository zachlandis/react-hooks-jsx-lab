import React from "react";
import { name, city } from "../data/data.js";

const style = {color: 'firebrick'}

function Home() {
  return (
  <div id="home">
    <h1 style={style}>{name} is a Web Developer from {city}</h1>
  </div>
  )
}

export default Home;
