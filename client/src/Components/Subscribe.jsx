import React from 'react';
import "../styles/Subscribe.scss";
import { useState } from "react";
// import { Button } from '@mui/material';
import CustomButton1 from './CustomButton1';

const Subscribe = () => {

  const [email, setEmail] = useState("");


    const handleSubscribe = (e) => {
        // Handle subscription logic here
        e.preventDefault();
        alert('Subscribed!');
      };

    return (
        <div className="subscribe-form">
            <div className="heading">
                <h3>Subscribe and be Update</h3>
            </div>
            
          <form className="input-group" onSubmit={handleSubscribe}>
            <input onChange={(e) => setEmail(e.target.value)} name='email' type="email" placeholder="Please enter your email address to get latest updates and offers" />
            <button type='submit'>Subscribe</button>
          </form>
        </div>
      );
}

export default Subscribe