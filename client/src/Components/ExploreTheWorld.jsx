import React from 'react';
import "./ExploreTheWorld.scss";
import { FaArrowRight } from 'react-icons/fa6';

const ExploreTheWorld = () => {
    return (
        <div className="explore-wrld-cont">
            <h1>EXPLORE THE WORLD</h1>
            <div className="bottomClass">
                <div className="bottomLeft">
                    <p>Let's embark on a journey to uncover some of the world's most extraordinary and lesser-known wonders, where the line between reality and fantasy blurs into a tapestry of awe-inspiring experiences.</p>
                    <button>See all <FaArrowRight style={{marginLeft: '9px'}}/></button>
                </div>
                <div className="bottomRight">
                        {data.map((d, index) => (
                            <div key={index} className="exp-card">
                                    <button>
                                        <img src={d.img} alt="img" className="" />
                                    </button>
                                    <p className="">{d.name}</p>
                                </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default ExploreTheWorld;

const data = [
    {
        "img": "img/austria.png",
        "name": "Saizburg, Austria"
    },
    {
        "img": "img/poland.jpeg",
        "name": "Krakow, Poland"
    },
    {
        "img": "img/croatia.jpeg",
        "name": "Dubrovnik, Croatia"
    }
]