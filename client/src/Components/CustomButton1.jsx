import React, { useState } from 'react';
import { Button } from '@mui/material';

const CustomButton1 = ({ content, onClick, bgColor, textColor, shadow, fontSize, borderRadius, hoverColor, hoverTextColor, hoverBorder, variant, icon:Icon, padding, transform }) => {
    const [isHovered, setIsHovered] = useState(false);

    const normalStyle = {
        backgroundColor: bgColor,
        color: textColor,
        borderRadius: `${borderRadius}px`,
        boxShadow: `0 0 10px ${shadow}`,
        fontSize: `${fontSize}px`,
        // padding: `${paddingTB}px ${paddinLR}px`,
        padding: padding,
        transition: 'background-color 0.3s, color 0.3s',
        textTransform: transform
    };

    const hoverStyle = {
        backgroundColor: hoverColor,
        color: hoverTextColor,
        border: hoverBorder
    };
    return (
        <Button
            variant={variant}
            startIcon={Icon && <Icon/>}
            style={{ ...normalStyle, ...(isHovered && hoverStyle) }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick} 
            >{content}
            
        </Button>
    )
}

export default CustomButton1;
