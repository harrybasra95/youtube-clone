import { useState } from 'react';
import './Content.css';





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
        </div>
    )

}
export default Content;


