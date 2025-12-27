import React, { useState } from "react";

export default function Feedback() {
  const [rating, setRating] = useState("");

  return (
    <div style={styles.box}>
      <h3>Feedback</h3>
      <select onChange={(e) => setRating(e.target.value)}>
        <option>Select</option>
        <option>Excellent</option>
        <option>Good</option>
        <option>Average</option>
      </select>
      <br /><br />
      <button style={styles.btn} onClick={() => alert("Rating: " + rating)}>
        Submit
      </button>
    </div>
  );
}

const styles = {
  box: { background: "#e0f2f1", padding: 20, textAlign: "center" },
  btn: { background: "#00796b", color: "white", border: "none", padding: 8 }
};
