import React, { useState } from "react";
import { addStyles, StaticMathField } from "react-mathquill";
addStyles();
export default function CalculusButtons() {
  const [calculusMore, setCalculusMore] = useState(false);
  const name="CALCULUS"
  return (
    <div className="btn-container">
      <p className="button-header">{name.toUpperCase()}</p>
      <div className="buttons">
        <div className="btn-item"><StaticMathField style={{cursor:'pointer'}}>{'\\frac{\\partial }{\\partial x}\\left(\\right)'}</StaticMathField></div>
        <div className="btn-item">+</div>
        <div className="btn-item">+</div>
        <div className="btn-item">+</div>
        <div className="btn-item">+</div>
        <div className="btn-item btn-more" onClick={() => setCalculusMore(!calculusMore)}>
        {calculusMore ? "<" : ">"}
        </div>
        <div className="more-buttons" hidden={!calculusMore}>
          <div className="btn-item">/</div>
          <div className="btn-item">%</div>
          <div className="btn-item">%</div>
          <div className="btn-item">%</div>
        </div>
      </div>
    </div>
  );
}
