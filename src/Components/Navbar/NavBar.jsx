import './NavBar.css';
import Logo from './Logo/Logo';
import SearchBar from './SearchBar/SearchBar';
import Sign from './Sign/sign';

const NavBar = () => {
    return (
        <div id='navbar'>
            <Logo />
            <SearchBar />
            <Sign />
        </div>
    )
}
export default NavBar;

