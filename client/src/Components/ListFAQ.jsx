import React, { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import data from "../Dummy Data/listFAQ.json";

const ListFAQ = () => {
    const [faqData, setFaqData] = useState([]);
    const [expanded, setExpanded] = useState(null);

    useEffect(() => {
        setFaqData(data);
    }, []);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null);
    };

    return (
        <div className='py-8 px-16'>
            <div className="flex justify-between items-center border-2 mt-4 mb-6 px-10 py-6 rounded-2xl">
                <span className="text-[20px] font-[700] text-[#4AA5D2]">1. FAQ List Your Property</span>
                <button className="text-[16px] font-[500] text-[#4AA5D2] bg-[#F3F1FF] py-3 px-6  rounded-full">Preview FAQ's</button>
            </div>

            <div className="bg-[#F7F7FB] px-16 py-14 rounded-2xl">
                {faqData.map((faq, index) => (
                    <Accordion key={index} expanded={expanded === `panel${index + 1}`}
                        onChange={handleChange(`panel${index + 1}`)} className="my-3 p-4" style={{
                            border: expanded === `panel${index + 1}` ? '1px solid #4AA5D2' : '1px solid transparent', borderRadius: '4px'
                        }}>
                        <AccordionSummary
                            expandIcon={<ExpandCircleDownIcon fontSize='large' style={{ color: "#4AA5D2" }} />}
                            aria-controls={`panel${index + 1}-content`}
                            id={`panel${index + 1}-header`}
                        >
                            <Typography sx={{
                                fontSize: '18px',
                                fontWeight: 500,
                            }} className={expanded === `panel${index + 1}` ? 'text-[#4AA5D2]' : 'text-[#170F49]'}>{faq.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ fontSize: '14px', fontWeight: 400 }} className="font-[400] text-[8px] text-[#6F6C90]">{faq.answer}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </div>
    )
}

export default ListFAQ;
