import './SearchBar.css';
import search from './search.png'
import mic from './mic.png'


const SearchBar = () => {
    return (
        <div className='searchbar-container'>
            <input className='searchbar-icon' type="text" placeholder='search' />
            <div className='img'>
                <img className='searchimg' src={search} alt="" />

            </div>
            <div className='mic-img'>
                <img className='micimg' src={mic} alt="" />
            </div>
        </div>
    )
}

export default SearchBar; 