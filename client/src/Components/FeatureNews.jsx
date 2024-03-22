import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./FeatureNews.scss";
import { FaAngleLeft, FaAngleRight} from "react-icons/fa6";
import Card from "./FeatureNewsCard.jsx";
import data from "../Dummy Data/featureNews.json";

const FeatureNews = () => {
    const sliderRef = useRef(null);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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
    <div className='popular-destn-container'>
            <div className="destn-cont">
                <div className='popular-destn-heading'>
                    <h2 className="">Feature News</h2>
                    <div className="arrow-icons">
                        <FaAngleLeft onClick={handlePrev} style={{ margin: '5px', fontSize: '35px', border: '0.1px solid #D8D8D8', borderRadius: '4px', padding: '4px', cursor: 'pointer' }} />
                        <FaAngleRight onClick={handleNext} style={{ margin: '5px', fontSize: '35px',border: '1px solid #D8D8D8',borderRadius: '4px', padding: '4px', cursor: 'pointer' }} />
                    </div>
                </div>
                <div className='pop-card-container'>
                    <Slider ref={sliderRef} {...settings}>
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
  )
}

export default FeatureNews;
