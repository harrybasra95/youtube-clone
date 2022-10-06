import './App.css';
import SideBar from './Components/MainContent/SideBar/SideBar';
import NavBar from './Components/Navbar/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='Content'>
        <SideBar></SideBar>
      </div>
    </div>
  );
}

export default App;
