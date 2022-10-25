import { useState } from 'react';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';
const Question = ({ title, info,}) => {//title and info are props 
    const [showInfo, setShowInfo] = useState(false);
    return (
        <article className='question'>
            <header>
                <h4>{title}</h4>
                <button className='btn' onClick={() => setShowInfo(!showInfo)}>
                    {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    {/* ^if stament */}
                </button>
            </header>
            {showInfo && <p>{info}</p>}
        </article>
    );
};

export default Question;