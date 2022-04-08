import React, { useState } from "react";

export default function Trigonometric() {
  const [trigoMore, settrigoMore] = useState(false);
  const name="Trigonometric"
  return (
    <div className="btn-container">
      <p className="button-header">{name.toUpperCase()}</p>
      <div className="buttons">
        <div className="btn-item">sin</div>
        <div className="btn-item">cos</div>
        <div className="btn-item">tan</div>
        <div className="btn-item">arcsin</div>
        <div className="btn-item">arccos</div>
        <div className="btn-item">arctan</div>
        <div className="btn-item btn-more" onClick={() => settrigoMore(!trigoMore)}>
          {trigoMore ? "<" : ">"}
        </div>
        <div className="more-buttons" hidden={!trigoMore}>
          <div className="btn-item">cot</div>
          <div className="btn-item">sec</div>
          <div className="btn-item">csc</div>
          <div className="btn-item">sinh</div>
          <div className="btn-item">cosh</div>
          <div className="btn-item">tanh</div>
          <div className="btn-item">coth</div>
          <div className="btn-item">sech</div>
          <div className="btn-item">arccot</div>
          <div className="btn-item">arcsec</div>
          <div className="btn-item">arccsc</div>
          <div className="btn-item">arcsinh</div>
          <div className="btn-item">arccosh</div>
          <div className="btn-item">arctanh</div>
          <div className="btn-item">arccoth</div>
          <div className="btn-item">arcsech</div>
        </div>
      </div>
    </div>
  );
}
