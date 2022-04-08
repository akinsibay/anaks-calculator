import React,{useState} from 'react'
import { addStyles, StaticMathField } from "react-mathquill";
import kok from "../../../assets/kök.png"
import ussu from "../../../assets/ussu.png"
addStyles();
export default function BasicButtons() {
    const [basicMore, setBasicMore] = useState(false)
    const name="BASIC"
    return (
        <div className="btn-container">
        <p className="button-header">{name.toUpperCase()}</p>
        <div className="buttons">
          <div className="btn-item"><img className="icons" src={kok}/></div>
          <div className="btn-item"><img className="icons" src={ussu}/></div>
          <div className="btn-item">%</div>        
          <div className="btn-item">%</div>
          <div className="btn-item">%</div>
          <div className="btn-item">(</div>
          <div className="btn-item">)</div>
          <div className="btn-item btn-more" onClick={()=>setBasicMore(!basicMore)}>{basicMore ? "<" : ">"}</div>
          <div className="more-buttons" hidden={!basicMore}>
            <div className="btn-item">/</div>
            <div className="btn-item">%</div>
            <div className="btn-item">%</div>
            <div className="btn-item">%</div>
            <div className="btn-item">%</div>
            <div className="btn-item">%</div>
            <div className="btn-item">%</div>
            <div className="btn-item">%</div>
          </div>
        </div>
      </div>
    )
}
