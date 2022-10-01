import './Logo.css';
import logoImg from './logo.png';
import hambuger from './hambuger.jpg'
const Logo = () => {
    return (
        <div>
            <div className='logo-container'>
                <img className='hambugermenu' src={hambuger} alt="" />
                <img className='logoimg' src={logoImg} alt="" />
                <input type="text" placeholder='search' />
            </div>
            <div>
            </div>
        </div>
    )
}

export default Logo;