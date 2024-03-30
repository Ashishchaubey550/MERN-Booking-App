import React, {useState} from 'react';
import "../styles/HeroSectionDeals.scss";
import { IoLocationSharp } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import DatePicker from 'react-datepicker';
import { Button } from '@mui/material';

// import { DatePicker } from 'antd';

const HeroSectionDeals = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [showDatePicker, setShowDatePicker] = useState(false);

  return (
    <div className='deals-hero-container'>
        <div className='heading-cont'>
            <h1 className="text-4 md:text-5xl lg:text-5xl font-semibold text-center text-white mt-[60px] mx-9 md:mt-16 lg:mt-8">We Find The Best Vacation Rentals For You</h1>
            <p className="text-sm md:text-lg lg:text-[16px] font-normal mx-[260px] text-center text-white mt-4 md:mt-6 lg:mt-8">Elevate your travel experience with our expertly curated selection of premier vacation rentals, meticulously chosen to meet your every need and preference.</p>
        </div>
        <div className="check-btn-grp">
            <div className="inp-cont">
                <IoLocationSharp style={{marginTop:'6px', marginRight:'2px', fontSize:'20px', color:'#4AA5D2'}}/>
                <div className="inp">
                    <label>
                        Location <input type="text" className='noBorder' placeholder="Search For A Destination"/>
                    </label>
                </div>
            </div>
            <div className="inp-cont">
                <IoIosPeople style={{marginTop:'5px', marginRight:'3px', fontSize:'20px', color:'#4AA5D2'}}/>
                <div className="inp">
                    <label>
                        Guests <input type="text" className='noBorder' placeholder="How many Guests?"/>
                    </label>
                </div>
            </div>
            <div className="inp-cont">
                <IoCalendarOutline style={{marginTop:'6px', marginRight:'3px', fontSize:'20px', color:'#4AA5D2'}}/>
                  <div className="inp">
                    <label>
                        Date <input type="text" className='noBorder' placeholder="Pick a date"/>
                    </label>
                </div>
      
            </div>
            <Button variant='contained'>Search</Button>
        </div>
    </div>
  )
}

export default HeroSectionDeals
