
import React from "react";

export default function EventRegistration() {
  return (
    <div style={styles.box}>
      <h3>Event Registration</h3>
      <button style={styles.btn} onClick={() => alert("Registered Successfully!")}>
        Register
      </button>
    </div>
  );
}

const styles = {
  box: { background: "#e3f2fd", padding: 20, textAlign: "center" },
  btn: { background: "#1976d2", color: "white", border: "none", padding: 8 }
};
