import './App.css';
import Logo from './Components/Logo/Logo';
import Searchbar from './Components/SearchBar/SearchBar';
import Sign from './Components/Sign/sign';


function App() {
  return (
    <div className="App">
      <div id="navbar">
        <Logo></Logo>
        <Searchbar></Searchbar>
        <Sign></Sign>

      </div>
    </div>
  );
}

export default App;
