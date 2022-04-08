import React,{useContext,useState} from "react";
import { addStyles, EditableMathField } from "react-mathquill";
import { Button } from "semantic-ui-react";
import Keyboard from './keyboard/Keyboard';
import Clipboard from 'react-clipboard.js';
import axios from 'axios'
import ReactTooltip from 'react-tooltip'
import {Notification} from 'rsuite'
import Drawer from './Drawer'
import StoreContext from '../context/Store'
import {Spinner} from 'reactstrap'
//import functionPlot from 'function-plot'
addStyles();

export default function MathForm() {
  const {latex,setLatex,showDrawer,result,setresult} = useContext(StoreContext);
  const [isLoading, setIsLoading] = useState(false)
  const handleChange = (mathField) => {
    let latex = mathField.latex();
    setLatex(latex);
  };
  function open(funcName,message) {
    Notification[funcName]({
      title:'Notification',
      duration:5000,
      placement:'bottomEnd',
      description: <div className="notification">{message}</div>
    });
  }

  const calculateButton = ()=>{
    setIsLoading(true)
    axios.post('http://localhost:5000/calculation',{latex})
      .then((response)=>{
        setIsLoading(false)
        setresult(response.data.result)
        console.log(response.data)  
      })
      .catch((error) => {
        setIsLoading(false);
        setresult(error.response.data.description)
      })
    
  }
  const copyLatex = ()=>{
    open('success','Latex Copied')
  }
  console.log('MathForm rendered')

  // function computeYScale (width, height, xScale) {
  //   const xDiff = xScale[1] - xScale[0]
  //   const yDiff = height * xDiff / width
  //   return [-yDiff / 2, yDiff / 2]
  // }
  // const draw = () =>{
  //   const xScale = [-10,10]
  //   const width = window.innerWidth*0.9
  //   const height = 300
  //   try {
  //     functionPlot({
  //       target:'#anaks-plot',
  //       width,
  //       height,
  //       xDomain:xScale,
  //       yDomain:computeYScale(width,height,xScale),
  //       grid:true,
  //       data: [{
  //         fn: result.toString().replace(/[\n\r]/g, ''),
  //         color:'#7CFFCB',
  //         graphType:'scatter',
  //       }],
  //       tip:{
  //         xLine:true,
  //         yLine:true
  //       }
  //     }) 
  //   } catch (error) {
  //       alert(error)
  //   }
    
  // }
  return (
    <div className="math-div">    
      <div className="math-form">
        <div className="math-latex" id="latex" value={latex}>{latex} <Clipboard className="copy-button" data-clipboard-text={latex} onSuccess={copyLatex} component="div">Copy</Clipboard></div>
        <div className="math-input">  
          <EditableMathField
            className="math-textbox"
            latex={latex}
            onChange={(mathField) => handleChange(mathField)}
            value={latex}
          />
          <div className="equal-btn" onClick={calculateButton}>=</div>
          {isLoading ? <Spinner style={{marginRight:'100px'}} color="success"/> : <div className="result-label">{result}</div>} 
        </div>    
        {/* <Button inverted color="yellow" onClick={()=>draw()}>Draw</Button> */}
      </div>
      <div className="show-keyboard-btn">
        <Button data-tip="show-keyboard" data-for="keyboard" data-event='click focus' data-event-off='dblclick' className="show-keyboard-btn" size="large"><i style={{fontSize:'28px'}} class="far fa-keyboard"></i></Button>               
        <ReactTooltip type="dark" id="keyboard" place="bottom" effect='solid' clickable className="keyboard-tooltip">
          <Keyboard latex={latex} setLatex={setLatex}/>
        </ReactTooltip>
      </div>
      <div id="anaks-plot"></div>

      <Drawer show={showDrawer}><Keyboard></Keyboard></Drawer>
    </div>
    
      
    
    
  );
}
