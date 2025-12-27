import React from "react";

export default function HotelReservation() {
  function reserve() {
    const days = prompt("Enter number of days");
    if (confirm(`Reserve hotel for ${days} days?`)) {
      alert("Hotel Reserved Successfully");
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h3>Hotel Reservation</h3>
      <button onClick={reserve}>Reserve Room</button>
    </div>
  );
}
