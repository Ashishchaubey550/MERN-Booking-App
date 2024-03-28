import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from "./TrendyVacationCard";
// import Card from "./MustVisitCard.jsx";
// import data from "../Dummy Data/mustVisit.json";
import data from "../Dummy Data/trendyVacation.json";
import "../styles/TrendyVacation.scss";
// import "./MustVisitDestn.scss";

const TrendyVacation = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <div className='trend-vac-container'>
            <div className="trend-content">
                <div className="heading">
                    <h5>TRENDY</h5>
                    <h1>Our Trending Vacational<br/> Rental Pacakges</h1>
                </div>
                <div className='trend-card-container'>
                    <Slider {...settings}>
                        {data.map((card, index) => (
                            <div key={index}>
                                <Card
                                    imgUrl={card.imgUrl}
                                    city={card.city}
                                    country={card.country}
                                    days={card.days}
                                    peoples={card.peoples}
                                    price={card.price}
                                    discount={card.discount}
                                    quote={card.quote}
                                />
                            </div>))}
                    </Slider>
                </div>
            </div>


        </div>
    )
}

export default TrendyVacation;