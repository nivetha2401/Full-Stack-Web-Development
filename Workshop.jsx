import React, { useState } from "react";

export default function WorkshopForm() {
  const [name, setName] = useState("");

  return (
    <div style={styles.box}>
      <h3>Workshop Registration</h3>
      <input onChange={(e) => setName(e.target.value)} placeholder="Your Name" />
      <p>Live Preview: {name}</p>
    </div>
  );
}

const styles = {
  box: { background: "#e8f5e9", padding: 20, textAlign: "center" }
};
