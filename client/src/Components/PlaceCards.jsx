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
        <div className="w-full bg-gray-600 ">
            <div className="mt-10  p-10 mx-auto ">
                <Slider {...settings}>
                    {data.map((d, index) => (
                        <div key={index} className=" flex flex-col p-[20px] w-[px] h-[500px] justify-center text-black  space-y-2">
                            {/* <div className="rounded-l-xl justify-center items-center m-auto h-62"> */}
                                <img src={d.img} alt="" className="lazy w-[300px] h-48 rounded-3xl" />
                            {/* </div> */}
                            {/* <div className="flex flex-col justify-center items-center text-center space-y-1 p-2"> */}
                                <p className="text-xl text-left font-semibold">{d.name}</p>
                                <p className=" text-left justify-center  items-center">{`$${d.Price}`}</p>
                                <p className=" justify-center text-left w-[300px] items-center">{d.review}</p>
                            {/* </div> */}
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
