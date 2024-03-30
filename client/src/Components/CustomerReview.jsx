import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Input } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import data from "../Dummy Data/reviewData.json";
import Card from "../Components/ReviewCard.jsx";
import { CiSearch } from "react-icons/ci";
import { Rate } from 'antd';

const CustomerReview = () => {
    return (
        <div className='py-8 px-16'>
            <div className='mb-8'>
                <div>
                    <h2 className='text-[20px] font-[700] text-[#1C2B38]'>Customer Review</h2>
                    <div className='flex items-baseline gap-3'>
                        <span className='text-[36px] font-[800] text-[#1C2B38]'>4,30</span>
                        <p className='text-[20px] text-[#778088]'>854 reviews</p>
                    </div>
                    <Rate value='4'/>
                </div>
                <div>

                </div>
            </div>
            <div className=''>
                <form className='flex items-center justify-center px-4 py-3 gap-1 border-2'>
                    <div className='flex gap-1'>
                        <FilterAltIcon/><label>Filtering: </label>
                    </div>
                    <Autocomplete
                        disablePortal
                        // id="combo-box-demo"
                        options={recomendOptions}
                        sx={{ width: 200, marginLeft:'8px' }}
                        renderInput={(params) => <TextField {...params} label="Recommended" />}
                    />
                    <Autocomplete
                        disablePortal
                        // id="combo-box-demo"
                        options={recomendOptions}
                        sx={{ width: 200 }}
                        renderInput={(params) => <TextField {...params} label="Traveller Type" />}
                    />
                    <Autocomplete
                        disablePortal
                        // id="combo-box-demo"
                        options={recomendOptions}
                        sx={{ width: 200 }}
                        renderInput={(params) => <TextField {...params} label="Rating" />}
                    />
                    {/* <TextField id="outlined-basic" label="Search Here" variant="outlined" startIcon={<CiSearch/>}/> */}
                    {/* <Input placeholder='Search' variant='outlined'/> */}
                    <TextField
                        id="input-with-icon-textfield"
                        label="Search Here"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <CiSearch fontSize='large'/>
                                </InputAdornment>
                            ),
                        }}
                        variant="outlined"
                    />

                </form>
            </div>
            <div className="py-8 px-2">
                {data.map((card, index) => (
                    <div key={index}>
                        <Card
                            imgUrl={card.imgUrl}
                            name={card.name}
                            review={card.review}
                            desc={card.desc}
                            star={card.star}
                            date={card.date}
                            helpful={card.helpful}
                        />
                    </div>))}
            </div>
            <div className='w-full text-center mb-4'><a className='text-[#4aa5d2] underline'>View More Comments</a></div>
        </div>

    )
}

export default CustomerReview;

const recomendOptions = ['option1', 'option2', 'option3'];
