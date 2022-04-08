import { Dropdown } from "semantic-ui-react";
import React, { useState } from "react";
import ReactTooltip from 'react-tooltip'
export default function RightSideMenu() {
  console.log('RightSideMenu rendered')
  return (
        <div className="right-menu">        
            <li data-tip="Settings" data-for="settings"><a href="#"><i className="fas fa-desktop"></i></a></li>
            <li data-tip="Settings" data-for="settings"><a href="#"><i className="fas fa-cogs"></i></a></li>
            <li data-tip="Settings" data-for="settings"><a href="#"><i className="fas fa-table"></i></a></li>
            <li data-tip="Settings" data-for="settings"><a href="#"><i className="fas fa-desktop"></i></a></li>
            <li data-tip="Settings" data-for="settings"><a href="#"><i className="fas fa-th"></i></a></li>
            <li data-tip="Settings" data-for="settings"><a href="#"><i className="fas fa-info-circle"></i></a></li>
            <li data-tip="Settings" data-for="settings"><a href="#"><i className="fab fa-angellist"></i></a></li>        
            <ReactTooltip id="settings" place="left" type="light" effect="solid"/>
        </div>
  )
}
