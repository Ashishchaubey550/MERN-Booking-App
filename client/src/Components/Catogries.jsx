import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

export default function Catogries() {
    // const CustomPrevArrow = (props) => {
    //     const { className, style, onClick } = props;
    //     return (
    //         <div className={className} style={{ ...style, top: -179, padding:7, left: 1200 }} onClick={onClick}>
    //             Previous
    //         </div>
    //     );
    // };
    //     const CustomNextArrow = (props) => {
    //     const { className, style, onClick } = props;
    //     return (
    //         <div className={className} style={{ ...style, top: -179, padding:7, right: 280 }} onClick={onClick}>
    //             Next
    //         </div>
    //     );
    // };
    const sliderRef = useRef(null);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        // prevArrow: <CustomPrevArrow />,
        // nextArrow: <CustomNextArrow />
    };

    const handlePrev = () => {
        sliderRef.current.slickPrev();
    }
    const handleNext = () => {
        sliderRef.current.slickNext();
    }

    return (
        <div className=" bg-bgCatorgies w-full h-[652px]">
            <div className="">
                <div className="flex flex-col ">
                    <div className="flex flex-row justify-between mx-[130px] my-[60px]">
                        <div className=" flex flex-col">
                            <div className=" w-[200px] h-[57] font-semibold text-6xl text-BgOwnBlue text-left items-start">Categories</div>
                            <div className="w-[370px] h-[79px] mt-[35px] ml-[15px] text-left text-gray-500">Here are lots of interesting destinations to visit, but don’t be confused—they’re already grouped by category.</div>
                        </div>
                        <div className="flex">
                            <FaAngleLeft onClick={handlePrev} style={{ margin: '5px', fontSize: '40px', color: '#4AA5D2', border: '1px solid #4AA5D2', borderRadius: '20px', padding: '4px', cursor: 'pointer' }} />
                            <FaAngleRight onClick={handleNext} style={{ margin: '5px', fontSize: '40px', color: 'white', padding: '4px', cursor: 'pointer', backgroundColor: '#4AA5D2', borderRadius: '20px' }} />
                        </div>
                    </div>


                    <div className=" h-[275px] mx-[130px] text-center">
                        <Slider {...settings}>
                            {data.map((d, index) => (
                                <div key={index}>
                                    <div className="w-full rounded-full  flex justify-evenly items-center h-64">
                                        <button>
                                            <img src={d.img} alt="img" className=" w-full lazy  h-60 w-full justify-even items-center rounded-3xl" />
                                        </button>
                                    </div>
                                    <p className='font-medium text-[24px] text-[#2D3134]'>{d.name}</p>
                                </div>))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

const data = [
    {
        name: 'Beach',
        img: "/PlaceImg/Beach.jpeg",
        Price: 35,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar fermentum tellus, quis convallis elit. Nunc at purus sit amet nisl varius faucibus. Nullam ut vehicula leo.'
    },
    {
        name: 'Desert',
        img: "/PlaceImg/Desert.jpeg",
        Price: 40,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar fermentum tellus, quis convallis elit. Nunc at purus sit amet nisl varius faucibus. Nullam ut vehicula leo.'
    },
    {
        name: 'Mountain',
        img: "/PlaceImg/Mountain.jpeg",
        Price: 15,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar fermentum tellus, quis convallis elit. Nunc at purus sit amet nisl varius faucibus. Nullam ut vehicula leo.'
    },
    {
        name: 'Temple',
        img: "/PlaceImg/Temple.jpeg",
        Price: 25,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar fermentum tellus, quis convallis elit. Nunc at purus sit amet nisl varius faucibus. Nullam ut vehicula leo.'
    },
    {
        name: 'Tower',
        img: "/PlaceImg/Tower.jpeg",
        Price: 55,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar fermentum tellus, quis convallis elit. Nunc at purus sit amet nisl varius faucibus. Nullam ut vehicula leo.'
    },
    {
        name: 'Pyramid',
        img: "/PlaceImg/Pyramid.jpeg",
        Price: 55,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar fermentum tellus, quis convallis elit. Nunc at purus sit amet nisl varius faucibus. Nullam ut vehicula leo.'
    }
];
