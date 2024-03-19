import React from 'react';

export default function HeroBack({ videoSource }) {
    return (
        <div className='main'>
            <div className="overlay"></div>
            <video src={videoSource} autoPlay loop muted />
        </div>
    );
}
