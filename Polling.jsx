import React, { useState } from "react";

function Polling() {
  // Question (teacher can change easily)
  const [question, setQuestion] = useState(
    "Which programming language do you like the most?"
  );

  // Options with vote count
  const [votes, setVotes] = useState({
    Java: 0,
    Python: 0,
    JavaScript: 0,
    Cpp: 0,
  });

  // Handle vote
  const castVote = (option) => {
    setVotes({
      ...votes,
      [option]: votes[option] + 1,
    });
  };

  return (
    <div className="poll-box">
      <style>{`
        .poll-box {
          width: 400px;
          margin: 40px auto;
          padding: 25px;
          border-radius: 12px;
          background: #f0f4ff;
          box-shadow: 0 5px 12px rgba(0,0,0,0.2);
          font-family: Arial;
          text-align: center;
        }

        h2 {
          color: #4b2cc4;
        }

        button {
          width: 100%;
          padding: 10px;
          margin: 6px 0;
          border: none;
          border-radius: 6px;
          background: #4b2cc4;
          color: white;
          font-size: 15px;
          cursor: pointer;
        }

        button:hover {
          background: #361aa5;
        }

        .results {
          margin-top: 15px;
          font-weight: bold;
        }
      `}</style>

      <h2>Classroom Poll</h2>
      <p>{question}</p>

      {/* Options */}
      <button onClick={() => castVote("Java")}>Java</button>
      <button onClick={() => castVote("Python")}>Python</button>
      <button onClick={() => castVote("JavaScript")}>JavaScript</button>
      <button onClick={() => castVote("Cpp")}>C++</button>

      {/* Results */}
      <div className="results">
        <p>Java: {votes.Java}</p>
        <p>Python: {votes.Python}</p>
        <p>JavaScript: {votes.JavaScript}</p>
        <p>C++: {votes.Cpp}</p>
      </div>
    </div>
  );
}

export default Polling;
