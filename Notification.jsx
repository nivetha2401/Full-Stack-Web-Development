import React, { useState } from "react";

export default function Notification() {
  const [msg, setMsg] = useState("");

  return (
    <div style={styles.box}>
      <h3>Dashboard</h3>
      <button style={styles.btn} onClick={() => setMsg("New Notification!")}>
        Show Notification
      </button>
      <p>{msg}</p>
    </div>
  );
}

const styles = {
  box: { background: "#fffde7", padding: 20, textAlign: "center" },
  btn: { background: "#fbc02d", border: "none", padding: 8 }
};
