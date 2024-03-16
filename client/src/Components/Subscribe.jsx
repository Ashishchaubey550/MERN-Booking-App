import React from 'react';
import "./Subscribe.scss";
import { useState } from "react";


const Subscribe = () => {

  const [email, setEmail] = useState("");


    const handleSubscribe = () => {
        // Handle subscription logic here
        alert('Subscribed!');
      };

    return (
        <div className="subscribe-form">
            <div className="heading">
                <h3>Subscribe and be Update</h3>
            </div>
            
          <form className="input-group" onSubmit={handleSubscribe}>
            <input onChange={(e) => setEmail(e.target.value)} name='email' type="email" placeholder="Please enter your email address to get latest updates and offers" />
            <button type='submit'><span>Subscribe</span></button>
          </form>
        </div>
      );
}

export default Subscribe