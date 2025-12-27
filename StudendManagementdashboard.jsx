import React, { useState } from "react";

export default function StudentDashboard() {
  const [show, setShow] = useState(false);

  return (
    <div style={styles.box}>
      <h3>Student Dashboard</h3>
      <button style={styles.btn} onClick={() => setShow(true)}>
        Show Students
      </button>

      {show && (
        <div>
          <p>Anu – Computer Science</p>
          <p>Jhon – BCA</p>
          <p>Priya – Cyber</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  box: { background: "#f3e5f5", padding: 20, textAlign: "center" },
  btn: { background: "#8e24aa", color: "white", border: "none", padding: 8 }
};
