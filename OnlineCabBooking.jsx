import React from "react";

export default function CabBooking() {
  function bookCab() {
    const place = prompt("Enter pickup location");
    alert(`Cab booked from ${place}`);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h3>Cab Booking</h3>
      <button onClick={bookCab}>Book Cab</button>
    </div>
  );
}
