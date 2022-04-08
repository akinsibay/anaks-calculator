import React, { useState } from "react";
import TopMenu from "./TopMenu";
import ReactTooltip from 'react-tooltip'
import MathForm from '../MathForm'
export default function LeftSideMenu({latex,setLatex}) {
  const [visible, setVisible] = useState(true)
  const showBar = ()=>{
    setVisible(false)
    document.getElementById("lm").style.left = '200px';
  }
  console.log('LeftSideMenu rendered')
  return (
      <div>
        <div hidden={visible} className="ek-menu"></div>
        <ul id="lm" className="left-menu">
          <li data-tip="Settings" data-for="settings"><a href="#"><i onClick={showBar} className="  fas fa-vial"></i></a></li>               
          <li data-tip="Files" data-for="files"><a href="#"><i className="  fas fa-desktop"></i></a></li>
          <li data-tip data-for="menu"><a href="#"><i className="  fas fa-desktop"></i></a></li>
          <li data-tip='merhaba' data-for="extra-class"><a href="#"><i className="  fas fa-desktop"></i></a></li>
          <li data-tip data-for="calculator"><a href="#"><i className="  fas fa-th"></i></a></li>
          <li><a href="#"><i className="  fas fa-info-circle"></i></a></li>
          <li><a href="#"><i className="  fab fa-angellist"></i></a></li>              
        </ul>
        <ReactTooltip id="settings" place="right" type="light" effect="solid" delayHide={200} delayShow={20}/>
        <ReactTooltip id="files" place="right" type="light" effect="solid" delayHide={200} delayShow={20}/>
        
        {/* <ReactTooltip id="calculator" className="extra-class" effect='solid' clickable>
          <MathForm latex={latex} setLatex={setLatex}/>
        </ReactTooltip> */}
      </div>
  )
}
