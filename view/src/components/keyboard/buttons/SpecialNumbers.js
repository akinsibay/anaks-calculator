import React,{useState} from 'react'

export default function SpecialNumbers() {
    const [specialMore, setspecialMore] = useState(false)
    const name="SPECIAL NUMBERS"
    return (
        <div className="btn-container">
        <p className="button-header">{name.toUpperCase()}</p>
        <div className="buttons">
          <div className="btn-item">+</div>
          <div className="btn-item">+</div>
          <div className="btn-item">+</div>
          <div className="btn-item">+</div>
          <div className="btn-item">+</div>
          <div className="btn-item btn-more" onClick={()=>setspecialMore(!specialMore)}>{specialMore ? "<" : ">"}</div>
          <div className="more-buttons" hidden={!specialMore}>
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
