import logo from './logo.svg';
import './Styles/App.scss';
import NavBar from './Module_Parts/NavBar.js'
import AboutMe from './Module_Parts/AboutMe'
// import Cube from './cube.js';


function App() {
  return (
    <div id = "App" >
      
      <NavBar />
      <AboutMe/>
    </div>
      
  );
}

export default App;
