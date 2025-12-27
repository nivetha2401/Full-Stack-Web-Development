import React, { useState } from "react";

export default function Blog() {
  const [comment, setComment] = useState("");

  return (
    <div style={styles.box}>
      <h3>Blog</h3>
      <input onChange={(e) => setComment(e.target.value)} />
      <p>Comment: {comment}</p>
    </div>
  );
}

const styles = {
  box: { background: "#f1f8e9", padding: 20, textAlign: "center" }
};
