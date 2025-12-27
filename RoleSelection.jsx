import React, { useState } from "react";

export default function RoleLogin() {
  const [role, setRole] = useState("");

  return (
    <div style={styles.box}>
      <h3>Login</h3>
      <select onChange={(e) => setRole(e.target.value)}>
        <option>Select Role</option>
        <option>Student</option>
        <option>Admin</option>
      </select>
      <br /><br />
      <button style={styles.btn} onClick={() => alert(`Redirecting to ${role} Dashboard`)}>
        Login
      </button>
    </div>
  );
}

const styles = {
  box: { background: "#fff3e0", padding: 20, textAlign: "center" },
  btn: { background: "#ef6c00", color: "white", border: "none", padding: 8 }
};
