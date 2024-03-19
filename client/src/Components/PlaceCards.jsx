import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function PlaceCards() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <button className="slick-pre"></button>,
        nextArrow: <button className="slick-next"></button>
    };

    return (
        <div className="w-3/4 m-auto">
            <div className="mt-10">
                <Slider {...settings}>
                    {data.map((d, index) => (
                        <div key={index} className="h-[500px] text-black rounded-xl">
                            <div className="rounded-l-xl flex justify-center items-center h-62">
                                <img src={d.img} alt="" className="lazy w-44 h-48 rounded-3xl" />
                            </div>
                            <div className="flex flex-col justify-center items-center gap-4 p-1">
                                <p className="text-xl font-semibold">{d.name}</p>
                                <p className=" ml-[-90%]">{`$${d.Price}`}</p>
                                <p>{d.review}</p>
                                <button className="bg-BgOwnBlue text-white text-lg px-6 py-1 rounded-xl">Read More</button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

const data = [
    {
        name: 'Burj Khalifa',
        img: "/PlaceImg/Burj_Khalifa.jpg",
        Price: 35,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar fermentum tellus, quis convallis elit. Nunc at purus sit amet nisl varius faucibus. Nullam ut vehicula leo.'
    },
    {
        name: 'India Gate',
        img: "/PlaceImg/IndiaGate.jpg",
        Price: 40,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar fermentum tellus, quis convallis elit. Nunc at purus sit amet nisl varius faucibus. Nullam ut vehicula leo.'
    },
    {
        name: 'Shanghai Tower',
        img: "/PlaceImg/Shanghai tower.jpg",
        Price: 15,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar fermentum tellus, quis convallis elit. Nunc at purus sit amet nisl varius faucibus. Nullam ut vehicula leo.'
    },
    {
        name: 'Eiffel Tower',
        img: "/PlaceImg/Eiffel tower.jpg",
        Price: 25,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar fermentum tellus, quis convallis elit. Nunc at purus sit amet nisl varius faucibus. Nullam ut vehicula leo.'
    },
    {
        name: 'Taj Mahal',
        img: "/PlaceImg/tajMahal.jpg",
        Price: 55,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar fermentum tellus, quis convallis elit. Nunc at purus sit amet nisl varius faucibus. Nullam ut vehicula leo.'
    }
];
