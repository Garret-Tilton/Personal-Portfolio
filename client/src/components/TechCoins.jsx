// TechCoins.jsx
import React from "react";
import Coin from "./Coin";

export default function TechCoins() {
  return (
    <div className="flex flex-wrap gap-8 justify-center">
      <Coin texturePath="/tech-icons/C++ (CPlusPlus).png" />
      <Coin texturePath="/tech-icons/HTML5.png" />
      <Coin texturePath="/tech-icons/JavaScript.png" />
      <Coin texturePath="/tech-icons/Python.png" />
      <Coin texturePath="/tech-icons/React.png" />
    </div>
  );
}
