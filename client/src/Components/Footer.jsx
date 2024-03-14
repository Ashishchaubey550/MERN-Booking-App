import React from 'react'
import "./Footer.scss";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="top">
                    <div className="topLeft">
                        <div className="logo">
                            <img src="img/lifeVistaLogo.png" alt="" />
                        </div>
                        <div className="caption">
                            <span>Escape to your dream destination with our vacation rentals.<br/> Find the perfect home away from home for your next<br/> adventure.</span>
                        </div>
                    </div>
                    <div className="topRight">
                        <div className="services">
                            <div className="block1">
                                <h6>Home</h6>
                                <span>Destinations</span>
                                <span>Packs</span>
                                <span>About Us</span>
                            </div>
                            <div className="block2">
                                <h6>Contact Us</h6>
                                <span>Help Center</span>
                                <span>Testimony</span>
                                <span>Contact</span>
                            </div>
                            <div className="block3">
                                <h6>Get App</h6>
                                <span>App Store</span>
                                <span>Google Play Store</span>
                            </div>
                        </div>
                        <div className="follow-us">
                            <div className="follow">
                                <span>Follow Us</span></div>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="bottomLeft">
                        <span>Copyright © 2024 LifeVista Vacation.com</span>
                    </div>
                    <div className="bottomRight">
                        <FacebookIcon style={{ color: 'white', margin:'5px' }} />
                        <LinkedInIcon style={{ color: 'white' , margin:'5px'}} />
                        <InstagramIcon style={{ color: 'white', margin:'5px' }} />
                        <XIcon style={{ color: 'white', margin:'5px' }} />
                    </div>
                </div>
            </div>
        </div>
           
      );
}

export default Footer
