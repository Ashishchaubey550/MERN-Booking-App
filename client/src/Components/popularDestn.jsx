import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from "./popularDestnCard.jsx";
import data from "../Dummy Data/popularDestn.json";

const popularDestn = () => {
    const CustomPrevArrow = props => {
        const { className, style, onClick } = props
        return (
            <div
                className={className}
                style={{ ...style, top: -179, padding: 7, left: 1200 }}
                onClick={onClick}
            >
                Previous
            </div>
        )
    }
    const CustomNextArrow = props => {
        const { className, style, onClick } = props
        return (
            <div
                className={className}
                style={{ ...style, top: -179, padding: 7, right: 280 }}
                onClick={onClick}
            >
                Next
            </div>
        )
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />
    }

    return (
        <div className=' bg-bgCatorgies w-full h-[652px]'>
            <div className=''>
                <div className='flex flex-col '>
                    <div className=' flex flex-col ml-[200px]'>
                        <div className=' w-[200px] h-[57] mt-[19px] ml-[15px] font-semibold text-6xl text-BgOwnBlue text-left items-start'>
                            <span>Find Polpular Destinations</span>
                        </div>
                    </div>
                    <div className='w-full h-[275px] mt-[60px] ml-[200px]'>
                    <Slider {...settings}>
                    {data.map((card, index) => (
                        <div key={index}>
                            <Card 
                            imageUrl={card.imageUrl}
                            name={card.name}
                            country={card.country}
                            price={card.price}
                            />
                        </div>))}
                    </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default popularDestn

// import React from 'react';
// import Card from "./popularDestnCard.jsx";
// import "./popularDestn.scss";
// import cardsData from "../Dummy Data/popularDestn.json";
// import { FaAngleLeft } from "react-icons/fa6";
// import { FaAngleRight } from "react-icons/fa6";

// const popularDestn = () => {
//     const splitIntoRows = (cards, rowSize) => {
//         const rows = [];
//         for (let i = 0; i < cards.length; i += rowSize) {
//             rows.push(cards.slice(i, i + rowSize));
//         }
//         return rows;
//     };

//     return (
//         <div className="pop-container">
//             <div className="pop-heading">
//                 <span>Find Popular<br/>Destination</span>
//                 <div className="icons">
//                 <FaAngleLeft style={{margin:'10px', border:'2px solid #FFFFFF', borderRadius:'20px', padding:'6px', fontSize:'40px', color:'#FFFFFF', cursor:'pointer'}}/>
//                 <FaAngleRight style={{margin:'10px', borderRadius:'20px', padding:'6px', fontSize:'40px', color:'#FFFFFF', cursor:'pointer'}}/>
//                 </div>
//             </div>
//             {/* Render each row of cards */}
//             {splitIntoRows(cardsData, 4).map((row, index) => (
//                 <div key={index} className="pop-card-row">
//                     {row.map((card, cardIndex) => (
//                         <div key={cardIndex} className="pop-card-item">
//                             <Card
//                                 imageUrl={card.imageUrl}
//                                 name={card.name}
//                                 country={card.country}
//                                 price={card.price}
//                             />
//                         </div>
//                     ))}
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default popularDestn;
