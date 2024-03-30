import React, { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import data from "../Dummy Data/rentFAQ.json";
import { Button } from '@mui/material';


const RentFAQ = () => {

    const [sections, setSections] = useState([]);
    const [activeSectionIndex, setActiveSectionIndex] = useState(0);
    const [expanded, setExpanded] = useState(null);

    useEffect(() => {
        setSections(data.sections);
    }, []);

    const handleSectionChange = (index) => {
        setActiveSectionIndex(index);
    };

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null);
    };

    return (
        <div className='py-10 px-16'>
            <div className="flex justify-between items-center border-2 mt-4 mb-6 px-10 py-6 rounded-2xl">
                <span className="text-[20px] font-[700] text-[#4AA5D2]">2. FAQ Rent a Property</span>
                <button className="text-[16px] font-[500] text-[#4AA5D2] bg-[#F3F1FF] py-3 px-6  rounded-full">Preview FAQ's</button>
            </div>
            <div className="bg-[#F7F7FB] px-[150px] py-14 rounded-2xl">
                <div className="flex space-x-4 justify-center mb-6">
                    {sections.map((section, index) => (
                        <Button key={index} variant={activeSectionIndex === index ? 'contained' : 'outlined'} onClick={() => handleSectionChange(index)} style={{
                            color: activeSectionIndex === index ? 'white' : '#6F6C90', 
                            backgroundColor: activeSectionIndex === index ? '#4AA5D2' : 'white',
                            borderRadius: '8px'
                        }}>{section.title}</Button>
                    ))}
                </div>
                <div className="bg-white px-12 py-10 rounded-2xl">
                    {sections[activeSectionIndex]?.faqs.map((faq, index) => (
                        <Accordion
                            key={index}
                            defaultExpanded
                            expanded={expanded === `panel${index + 1}-header`}
                            onChange={handleChange(`panel${index + 1}-header`)}
                            className="my-3 p-4"
                            style={{
                                border: expanded === `panel${index + 1}-header` ? '1px solid #4AA5D2' : '1px solid transparent', 
                                borderRadius: '4px',
                                boxShadow: 'none',
                            }}
                        >
                            <AccordionSummary
                                expandIcon={expanded === `panel${index + 1}-header` ? <RemoveIcon /> : <AddIcon />}
                                aria-controls={`panel${index + 1}-content`}
                                id={`panel${index + 1}-header`}
                            >
                                <Typography sx={{
                                    fontSize: '18px', 
                                    fontWeight: 500,
                                    color: expanded === `panel${index + 1}-header` ? '#4AA5D2' : '#170F49',
                                }} >{faq.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ fontSize: '14px', fontWeight: 400 }} className="font-[400] text-[8px] text-[#6F6C90]">{faq.answer}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </div>
        </div>


    )
}

export default RentFAQ;
