import { useState } from 'react';
import './Content.css';
import './Content.scss';
import imgyt from './imgyt.png'





const Content = () => {
    const [selectedIndex, setSelectedIndex] = useState(null); // state
    const buttonTexts = ['All', 'Videos', 'Live', 'Music'];
    return (
        <div className='content'>
            <div className='button-icons'>
                {
                    buttonTexts.map((text, i) => (<button onClick={() => {
                        setSelectedIndex(i);
                    }} className={`text-button ${selectedIndex === i ? "button-selected" : ""}`}>{text}</button>))
                }
            </div>
            <div className='full-content'>
                <div className='content'>
                    <div className='card'>
                        <div className='image'>
                            <img className='imgyt' src={imgyt} alt="" />

                        </div>
                        <div className='details'>
                            <div className='profile'>
                            <div className='profie-icon'>
                            <img className='img' src={imgyt} alt="" />
                                
                            </div>
                            </div>  
                            <div className='video-discripation'></div>
                            <div className='more-info'>
                                <div className='moreinfo-icon'>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='card'>
                        <div className='image'>
                        <img className='imgyt' src={imgyt} alt="" />

                        </div>
                        <div className='details'>
                            <div className='profile'>
                            <div className='profie-icon'>
                            <img className='img' src={imgyt} alt="" />
                                
                            </div>
                            </div>
                            <div className='video-discripation'></div>
                            <div className='more-info'>
                                <div className='moreinfo-icon'>
                                </div>
                            </div>
                        </div>

                    </div>               <div className='card'>
                        <div className='image'>
                            <img className='imgyt' src={imgyt} alt="" />

                        </div>
                        <div className='details'>
                            <div className='profile'>
                            <div className='profie-icon'>
                            <img className='img' src={imgyt} alt="" />

                            </div>
                            </div>
                            <div className='video-discripation'></div>
                            <div className='more-info'>
                                <div className='moreinfo-icon'>
                                </div>
                            </div>
                        </div>

                    </div>               <div className='card'>
                        <div className='image'>
                            <img className='imgyt' src={imgyt} alt="" />

                        </div>
                        <div className='details'>
                            <div className='profile'>
                            <div className='profie-icon'>
                            <img className='img' src={imgyt} alt="" />
                            </div>
                            </div>
                            <div className='video-discripation'></div>
                            <div className='more-info'>
                                <div className='moreinfo-icon'>
                                </div>
                            </div>
                        </div>

                    </div>
                    


                </div>
            </div>
        </div>
    )

}
export default Content;


