import React from 'react';
import './css/Thankyou.css';
import Header from './Header'; 


const ThankYou = () => {
    return (
        <div>
            <Header buttonText="Logout" buttonPath="#" />
            <div className="thank-you-container">
                <div className="thank-you-box">
                    <h1 className="thank-you-heading">Thank You!</h1>
                    <p className="thank-you-text">Your response has been added. Thank you for your feedback!</p>
                </div>
            </div>
        </div>
    );
};

export default ThankYou;
