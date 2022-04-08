import React,{useContext} from 'react'
import anakslogo from '../../images/anakslogo.png';
import ReactTooltip from 'react-tooltip'
import {Icon} from 'rsuite'
import StoreContext from '../../context/Store'
import {AnaksLogo, TopMenuDiv , TopMenuSag,TopMenuSol} from '../../styles/TopStyle'
 function TopMenu() {
    const {showDrawer,setshowDrawer} = useContext(StoreContext)
    console.log('TopMenu rendered')
    return (
        <TopMenuDiv>
          <TopMenuSol>
            <li data-tip="Settings" data-for="a"><a href="#"><i className="fas fa-info-circle"></i></a></li>
            <li data-tip="Settings" data-for="x"><a href="#"><i className="fab fa-angellist"></i></a></li>
            <li data-tip="Settings" data-for="y"><a href="#"><i className="fas fa-desktop"></i></a></li>
            <li data-tip="Settings" data-for="z"><a href="#"><i className="fas fa-cogs"></i></a></li>
            <li data-tip="Settings" data-for="t"><a href="#"><i className="fas fa-table"></i></a></li>
            <li data-tip="Settings" data-for="q"><a href="#"><i className="fas fa-desktop"></i></a></li>
            <li data-tip="Settings" data-for="r"><a href="#"><i className="fas fa-th"></i></a></li>
          </TopMenuSol>
          <AnaksLogo>
            <img src={anakslogo} alt="logo" height='30px'/>
          </AnaksLogo>    
          <TopMenuSag>
            <li data-tip="Settings" data-for="b"><a href="#"><i className="fas fa-info-circle"></i></a></li>
            <li data-tip="Settings" data-for="c"><a href="#"><Icon icon="bars" style={{fontSize:'3vmin',color:'#0d8a28'}} onClick={()=>setshowDrawer(!showDrawer)}></Icon></a></li>
          </TopMenuSag>
          <ReactTooltip id="a" place="bottom" type="light" effect="solid" delayHide={200} delayShow={20}/>
          <ReactTooltip id="x" place="bottom" type="light" effect="solid" delayHide={200} delayShow={20}/>
          <ReactTooltip id="y" place="bottom" type="light" effect="solid" delayHide={200} delayShow={20}/>
          <ReactTooltip id="z" place="bottom" type="light" effect="solid" delayHide={200} delayShow={20}/>
          <ReactTooltip id="t" place="bottom" type="light" effect="solid" delayHide={200} delayShow={20}/>
          <ReactTooltip id="q" place="bottom" type="light" effect="solid" delayHide={200} delayShow={20}/>
          <ReactTooltip id="r" place="bottom" type="light" effect="solid" delayHide={200} delayShow={20}/>
          <ReactTooltip id="b" place="bottom" type="light" effect="solid" delayHide={200} delayShow={20}/>
          <ReactTooltip id="c" place="bottom" type="light" effect="solid" delayHide={200} delayShow={20}/>
        </TopMenuDiv>
    )
}

export default React.memo(TopMenu)