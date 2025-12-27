import React, { useState } from "react";

export default function Ecommerce() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.box}>
      <h3>Product</h3>
      <button style={styles.btn} onClick={() => setCount(count + 1)}>
        Add to Cart
      </button>
      <p>Cart Items: {count}</p>
    </div>
  );
}

const styles = {
  box: { background: "#e1f5fe", padding: 20, textAlign: "center" },
  btn: { background: "#0288d1", color: "white", border: "none", padding: 8 }
};
