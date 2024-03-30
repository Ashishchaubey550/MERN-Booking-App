import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../styles/FeatureNews.scss";
import Card from "./FeatureNewsCard.jsx";
import data from "../Dummy Data/featureNews.json";
import { PiCaretRight, PiCaretLeft } from "react-icons/pi";


const FeatureNews = () => {
    const sliderRef = useRef(null);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
    };

    const handlePrev = () => {
        sliderRef.current.slickPrev();
    }
    const handleNext = () => {
        sliderRef.current.slickNext();
    }
  return (
            <div className="feature-news-cont">
                <div className='heading'>
                    <h2>Feature News</h2>
                    <div className="arrow-icons">
                        <PiCaretLeft onClick={handlePrev} style={{ margin: '5px', fontSize: '35px', border: '0.1px solid #D8D8D8', borderRadius: '4px', padding: '4px', cursor: 'pointer' }} />
                        <PiCaretRight onClick={handleNext} style={{ margin: '5px', fontSize: '35px',border: '1px solid #D8D8D8',borderRadius: '4px', padding: '4px', cursor: 'pointer' }} />
                    </div>
                </div>
                <div className='feature-card-container'>
                    <Slider ref={sliderRef} {...settings}>
                        {data.map((card, index) => (
                            <div key={index} style={{width: '302px'}}>
                                <Card
                                    imgUrl={card.imgUrl}
                                    date={card.date}
                                    place={card.place}
                                    quote={card.quote}
                                />
                            </div>))}
                    </Slider>
                </div>
            </div>
  )
}

export default FeatureNews;
