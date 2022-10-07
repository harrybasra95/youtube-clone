import './App.css';
import SideBar from './Components/MainContent/SideBar/SideBar';
import NavBar from './Components/Navbar/NavBar';
import Content from './Components/MainContent/Content/Content';


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='Content'>
        <SideBar></SideBar>
        <Content></Content>
      </div>
    </div>
  );
}

export default App;
