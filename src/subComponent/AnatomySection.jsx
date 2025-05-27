import React from 'react';
import humanbody from '../assets/human-body.png';
import { AiOutlineZoomIn, AiFillHeart } from "react-icons/ai";
import '../styles/AnatomySection.css';
import Scanner from '../assets/scanner.png';
import { GiLeg } from "react-icons/gi";


const AnatomySection = () => {
    return (
        <div className='human-body'>
            <div className='body-controller'>
                <img className='human-body-img' src={humanbody} alt="" />
            </div>
            <div className="healthy-heart">
                <img className='scan-img' src={Scanner} alt="" />
                <div className="text-heart"><AiFillHeart className='anotomy-icon' /> Healthy Heart</div>
            </div>
            <div className="healthy-leg">
                <div className="text-leg"><GiLeg className='anotomy-icon' /> Healthy Leg</div>
                <img className='scan-img' src={Scanner} alt="" />
            </div>
            <AiOutlineZoomIn className='zoom-button' />
        </div>
    )
}

export default AnatomySection;
