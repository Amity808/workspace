'use client'
import React, { useState, useEffect } from 'react';


const MEMBERSHIP_RATES = {
  Basic: 10,
  Premium: 15,
  Executive: 20,
  Team: 25
};

const Booking = () => {
  const [desks, setDesks] = useState([]);
  const [selectedDesk, setSelectedDesk] = useState(null);
  const [bookingHours, setBookingHours] = useState(1);
  const [membershipType, setMembershipType] = useState('Basic');
  const [totalAmount, setTotalAmount] = useState(0);
  
  // Initialize desks
  useEffect(() => {
    const initialDesks = Array(15).fill(null).map((_, index) => ({
      id: index + 1,
      type: index < 10 ? 'individual' : 'team',
      isBooked: false,
      bookingDetails: null
    }));
    setDesks(initialDesks);
  }, []);

  const calculateTotal = () => {
    if (!selectedDesk) return 0;
    const baseRate = selectedDesk.type === 'team' ? 
      MEMBERSHIP_RATES.Team : 
      MEMBERSHIP_RATES[membershipType];
    
    const subtotal = baseRate * bookingHours;
    const discount = bookingHours >= 3 ? 0.1 : 0; // 10% discount for 3+ hours
    return subtotal * (1 - discount);
  };

  const handleDeskSelect = (desk) => {
    if (desk.isBooked) return;
    setSelectedDesk(desk);
    setTotalAmount(calculateTotal());
  };

  const handleBooking = () => {
    if (!selectedDesk) return;

    setDesks(prevDesks => prevDesks.map(desk => 
      desk.id === selectedDesk.id ? {
        ...desk,
        isBooked: true,
        bookingDetails: {
          membershipType,
          hours: bookingHours,
          amount: totalAmount
        }
      } : desk
    ));

    // Reset selection
    setSelectedDesk(null);
    setBookingHours(1);
    setTotalAmount(0);
  };

  return (
    <div className="booking-container">
      <h1>Co-working Space Booking System</h1>
      
      <div className="desk-grid">
        {desks.map(desk => (

            
            //
          <div 
            key={desk.id}
            className={`desk ${desk.type} ${desk.isBooked ? 'booked' : ''} ${selectedDesk?.id === desk.id ? 'selected' : ''}`}
            onClick={() => handleDeskSelect(desk)}
          >
            <div className="card bg-primary text-black w-96">
            <div className="card-body">
                <h2 className="card-title text-black"> Desk {desk.id}</h2>
                {desk.isBooked ?  <p>Thanks for choosing use for your project</p>: <p>Get comfortable with our workspace?</p>}
                {/* <p>Get comfortable with our workspace?</p> */}
                <div className="card-actions justify-end">
                <button className="btn" >Book Now</button>
                </div>
            </div>
            </div>
          </div>
        ))}
      </div>

      {selectedDesk && (
        <div className="booking-form">
          <h2>Book Desk {selectedDesk.id}</h2>
          
          {selectedDesk.type === 'individual' && (
            <select 
              value={membershipType}
              onChange={(e) => setMembershipType(e.target.value)}
            >
              <option value="Basic">Basic</option>
              <option value="Premium">Premium</option>
              <option value="Executive">Executive</option>
            </select>
          )}

          <input
            type="number"
            min="1"
            max="8"
            value={bookingHours}
            onChange={(e) => setBookingHours(parseInt(e.target.value))} className=' text-black'
          />

          <p className="total">Total: ${calculateTotal().toFixed(2)}</p>
          <button onClick={handleBooking}>Book Desk</button>
        </div>
      )}
    </div>
  );
};

export default Booking;
