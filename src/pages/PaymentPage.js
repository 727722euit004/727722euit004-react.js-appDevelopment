import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./PaymentPage.css"
import { Card } from 'react-bootstrap';
import { FoodContext } from '../context/FoodContext';
const PaymentPage = () => {
    const [address, setAddress] = useState('');
    const [name,setName] = useState('')
    const [mobile, setMobile] = useState('');
    const [city, setCity] = useState('');
    const [card, setCard] = useState('');
    const navigate = useNavigate();
    const{totalPrice}=useContext(FoodContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here, e.g., API call
        console.log('Address:', address);
        console.log('Mobile Number:', mobile);
        // Navigate to a confirmation or success page after submission
        navigate('/confirmation'); // Example redirection
    };
    const handlePayment=()=>{
        if (window.Razorpay) {
            console.log('Razorpay SDK is loaded'); // Debugging line
      
            const options = {
              key: "rzp_test_xtFnbnQ0oQ9B1o",
              key_secret: "6hJKdPHxGCkjBLvHGzdWjsMK",
              amount: totalPrice*100,
              currency: "INR",
              name: "Hungry Hub",
              description: "Fastest Delivery",
              handler: function (response) {
                console.log('Payment successful', response); // Debugging line
      
                // Format the items for the email
                
      
                // You can send the order data to your backend here, including selectedAddress
              },
              prefill: {
                name: name,
               
              },
              notes: {
                address: "Razorpay Corporate office",
              },
              theme: {
                color: "#3399cc",
              },
            };
      
            console.log('Opening Razorpay payment window'); // Debugging line
            const pay = new window.Razorpay(options);
            pay.open();
          } else {
            console.error("Razorpay SDK not loaded");
          }
    }
    return (
        <div className="payment-container">
            <h2 className="payment-heading">Payment</h2>
            <form onSubmit={handleSubmit} className="payment-form">
                <div className="form-group">
                    <label htmlFor="city">City:</label>
                    <input
                        type="text"
                        id="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    />
                    <label htmlFor="address">address:</label>
                    <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                    <label htmlFor="card">Card Number</label>
                    <input
                        type="tel"
                        id="card"
                        value={card}
                        onChange={(e) => setCard(e.target.value)}
                        required
                    />
                    <label htmlFor="address">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    
                </div>
                <div className="form-group">
                    <label htmlFor="mobile">Mobile Number:</label>
                    <input
                        type="tel"
                        id="mobile"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="submit-button" onClick={handlePayment}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default PaymentPage;
