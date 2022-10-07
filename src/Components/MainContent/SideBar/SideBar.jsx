import './SideBar.css';
import icons8 from './icons8-home-144.png';
import explore from './explore.png';
import Ss from './Ss.png';
import Sss from './sss.png';
import Ssli from './Ssli.png';
import Ssh from './Ssh.png';
const SideBar = () => {
    return (<div className='icons-container'>
        <div className='icons'>
            <div className='home'>
                <img className='icon8' src={icons8} alt="Home" />
                <p className='text'>Home</p>
            </div>
            <div className='home'>
                <img className='explore' src={explore} alt="Home" />
                <p className='text'>Explore</p>
            </div>
            <div className='home'>
                <img className='Ss' src={Ss} alt="Home" />
                <p className='text'>Shorts</p>
            </div>   <div className='home'>
                <img className='sss' src={Sss} alt="Home" />
                <p className='text'>Subcriptions</p>
            </div>   <div className='home'>
                <img className='ssli' src={Ssli} alt="Home" />
                <p className='text'>Library</p>
            </div>  <div className='home'>
                <img className='ssh' src={Ssh} alt="Home" />
                <p className='text'>History</p>
            </div>
        </div>

    </div>

    )
}
export default SideBar;