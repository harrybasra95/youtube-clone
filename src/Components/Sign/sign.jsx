import './sign.css';
import dotsImg from './dots.png';




const Sign = () => {
    return (
        <div className='sign'>
            <img className='dotsimg' src={dotsImg} alt="" />
            <button className='button-icon' >Sign in</button>

        </div>


    )



}
export default Sign;
