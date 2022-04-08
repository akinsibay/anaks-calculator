import { Dropdown } from "semantic-ui-react";
import React, { useState } from "react";

export default function BottomMenu() {

  return (
        <div className="bottom-menu">
            <li><a href="#"><i className="menu-button fas fa-desktop"></i></a></li>
            <li><a href="#"><i className="menu-button fas fa-cogs"></i></a></li>
            <li><a href="#"><i className="menu-button fas fa-table"></i></a></li>
            <li><a href="#"><i className="menu-button fas fa-desktop"></i></a></li>
            <li><a href="#"><i className="menu-button fas fa-th"></i></a></li>
            <li><a href="#"><i className="menu-button fas fa-info-circle"></i></a></li>
            <li><a href="#"><i className="menu-button fab fa-angellist"></i></a></li>        
        </div>
  )
}
