import React, { useState } from "react";

export default function ProfileEdit() {
  const [name, setName] = useState("");

  function save() {
    name === "" ? alert("Name required") : alert("Profile Updated");
  }

  return (
    <div style={styles.box}>
      <h3>Edit Profile</h3>
      <h4>Name  :  
      <input onChange={(e) => setName(e.target.value)} /></h4>
      <br /><br />
      <button style={styles.btn} onClick={save}>Save</button>
    </div>
  );
}

const styles = {
  box: { background: "#fce4ec", padding: 20, textAlign: "center" },
  btn: { background: "#c2185b", color: "white", border: "none", padding: 8 }
};
