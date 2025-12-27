import React from "react";

export default function FlightBooking() {
  function bookFlight() {
    const name = prompt("Enter passenger name");
    if (confirm(`Confirm ticket for ${name}?`)) {
      alert("Flight Ticket Booked Successfully");
    } else {
      alert("Booking Cancelled");
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h3>Flight Ticket Booking</h3>
      <button onClick={bookFlight}>Book Ticket</button>
    </div>
  );
}
