import React from "react";
import BasicButtons from "./buttons/BasicButtons";
import CalculusButtons from "./buttons/CalculusButtons";
import SpecialNumbers from "./buttons/SpecialNumbers";
import Trigonometric from "./buttons/Trigonometric";
import Divider from "./Divider";

export default function Keyboard({ latex, setLatex }) {
  console.log('Keyboard rendered.')
  return (
    <div className="keyboard">
      <BasicButtons></BasicButtons>
      <Divider/>
      <CalculusButtons></CalculusButtons>
      <Divider/>
      <Trigonometric></Trigonometric>
      <Divider/>
      <SpecialNumbers></SpecialNumbers>
    </div>
  );
}

