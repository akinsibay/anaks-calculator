import './App.css';
import './styles/Menu.css'
import './styles/MathForm.css'
import './styles/Keyboard.css'
import MathForm from './components/MathForm';
import TopMenu from './components/menu/TopMenu';
import LeftSideMenu from './components/menu/LeftSideMenu';
import RightSideMenu from './components/menu/RightSideMenu';
import {StoreProvider} from './context/Store'
function App() {
  return (
    <StoreProvider>
      <div className="App">
        <TopMenu/>
        <LeftSideMenu/>
        <MathForm/>
        <RightSideMenu/>  
      </div>
    </StoreProvider>
  );
}



export default App;
