import './sign.css';
import dotsImg from './dots.png';
import icons8 from './icons8-customer-40.png';





const Sign = () => {
    return (
        <div className='sign'>
            <img className='dotsimg' src={dotsImg} alt="" />
            <div className='sign-icon'>
                <img className='iconsimg' src={icons8} alt="" />
                <button className='button-icon' >Sign in</button>
            </div>

        </div>


    )



}
export default Sign;
