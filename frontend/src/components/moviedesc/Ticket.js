// Ticket.js

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ticket.css'; // Import the CSS file

function Ticket() {
  const location = useLocation();
  const { title, price, rating, releaseDate, runtime } = location.state;
  const [tktuser , settkt]  = useState({name:"",email:"",number:0,movie:title});

  const handleChange = (e) => {
    e.preventDefault();
    settkt((prev) => ({ ...prev, [e.target.name]: e.target.value }));
}

  return (
    <div className="ticket-container">
      <h2>Ticket Confirmation</h2>
      <div className="ticket-details">
        <p>Movie: {title}</p>
        <p>Rating: {rating}</p>
        <p>Release Date: {releaseDate}</p>
        <p>Duration: {runtime} minutes</p>
        <p>Price: ${price.toFixed(2)}</p>
        <p>YourName: <input type='text' name="name" value={tktuser.name} onChange={handleChange}/></p>
        <p>Email: <input type='email' name="email" value={tktuser.email} onChange={handleChange}/></p>
        <p>Number of Tickets: <input type='number' name="number" value={tktuser.number} onChange={handleChange}/></p>
        {/* Add more details as needed */}
      </div>
      <div className="confirmation-button">
      <button onClick={() => {
    const existingData = localStorage.getItem("UserTKT");
    const userData = existingData ? JSON.parse(existingData) : [];
    userData.push(tktuser);
    localStorage.setItem("UserTKT", JSON.stringify(userData));
    alert("Booking Confirmed!!")
    }}>
    Confirm Booking
    </button>
      </div>
    </div>
  );
}

export default Ticket;
