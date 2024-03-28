import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { PiCaretRight, PiCaretLeft } from "react-icons/pi";
import IconButton from '@mui/material/IconButton';

export default function Catogries() {

    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
    };

    const handlePrev = () => {
        sliderRef.current.slickPrev();
    };

    const handleNext = () => {
        sliderRef.current.slickNext();
    };

    return (
        <div className=" bg-bgCatorgies w-full h-[652px] p-2.5">
            <div className="">
                    <div className="flex flex-row justify-between mx-10 my-[40px]">
                        <div className=" flex flex-col ">
                            <div className=" w-[200px] h-[57] font-semibold text-6xl text-BgOwnBlue text-left items-start ml-3">Categories</div>
                            <div className="w-[370px] h-[79px] mt-[35px] ml-[15px] text-left text-gray-500">Here are lots of interesting destinations to visit, but don’t be confused—they’re already grouped by category.</div>
                        </div>
                        <div className="flex">
                            <IconButton>
                            <PiCaretLeft onClick={handlePrev} style={{ margin: '5px', fontSize: '40px', color: '#4AA5D2', border: '1px solid #4AA5D2', borderRadius: '20px', padding: '4px', cursor: 'pointer' }} />
                            </IconButton>
                            <IconButton>
                            <PiCaretRight onClick={handleNext} style={{ margin: '5px', fontSize: '40px', color: 'white', padding: '4px', cursor: 'pointer', backgroundColor: '#4AA5D2', borderRadius: '20px' }} />
                            </IconButton>
                        </div>
                    </div>


                    <div className=" h-[275px] mx-10 text-center">
                        <Slider ref={sliderRef} {...settings}>
                            {data.map((d, index) => (
                                <div key={index}>
                                    <div className="w-full rounded-full  flex justify-evenly items-center h-64">
                                        <button>
                                            <img src={d.img} alt="img" className=" w-full lazy  h-60 justify-even items-center rounded-3xl" />
                                        </button>
                                    </div>
                                    <p className='font-medium text-[24px] text-[#2D3134]'>{d.name}</p>
                                </div>))}
                        </Slider>
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