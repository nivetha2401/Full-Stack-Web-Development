import React, { useState } from "react";

function SimpleFeedback() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [output, setOutput] = useState("");

  const submitFeedback = (e) => {
    e.preventDefault();
    setOutput("Name: " + name + " | Feedback: " + message);
    setName("");
    setMessage("");
  };

  return (
    <div style={{ width: "300px", margin: "40px auto", fontFamily: "Arial" }}>
      <h3>Feedback Form</h3>

      <form onSubmit={submitFeedback}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "100%", marginBottom: "8px" }}
        />

        <textarea
          placeholder="Your Feedback"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ width: "100%", marginBottom: "8px" }}
        ></textarea>

        <button type="submit">Submit</button>
      </form>

      {/* Dynamic Display */}
      <p>{output}</p>
    </div>
  );
}

export default SimpleFeedback;
