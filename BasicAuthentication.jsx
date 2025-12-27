import React, { useState } from "react";

export default function Authentication() {
  const [u, setU] = useState("");
  const [p, setP] = useState("");

  return (
    <div style={styles.box}>
      <h3>Login</h3>
      <input placeholder="Username" onChange={(e) => setU(e.target.value)} />
      <br />
      <input placeholder="Password" onChange={(e) => setP(e.target.value)} />
      <br /><br />
      <button
        style={styles.btn}
        onClick={() =>
          u === "admin" && p === "123"
            ? alert("Login Successful")
            : alert("Invalid Credentials")
        }
      >
        Login
      </button>
    </div>
  );
}

const styles = {
  box: { background: "#ede7f6", padding: 20, textAlign: "center" },
  btn: { background: "#5e35b1", color: "white", border: "none", padding: 8 }
};
