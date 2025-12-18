import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    // Required
    if (!name.trim()) formErrors.name = "Name is required";

    // Email Regex
    if (!email)
      formErrors.email = "Email is required";
    else if (!/^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(email))
      formErrors.email = "Enter a valid email";

    // Range Validation
    if (!age)
      formErrors.age = "Age is required";
    else if (age < 18 || age > 60)
      formErrors.age = "Age must be between 18 and 60";

    // Phone
    if (!phone) formErrors.phone = "Phone is required";
    else if (!/^\d{10}$/.test(phone))
      formErrors.phone = "Phone must be 10 digits";

    // Password Strength
    if (!password)
      formErrors.password = "Password is required";
    else if (!/^(?=.*[A-Z])(?=.*\d).{6,}$/.test(password))
      formErrors.password =
        "Must be 6+ chars, 1 uppercase & 1 number";

    // Compare Validation
    if (!confirmPass)
      formErrors.confirmPass = "Confirm Password";
    else if (confirmPass !== password)
      formErrors.confirmPass = "Passwords do not match";

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      alert("Form Submitted Successfully!");
    }
  };

  return (
    <div className="wrapper">

      {/* CSS Styling */}
      <style>{`
        body {
          margin: 0;
          padding: 0;
          font-family: 'Poppins', sans-serif;
        }

        .wrapper {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient( #5ac8fa);
        }

        .card {
          width: 380px;
          padding: 30px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(12px);
          box-shadow: 0px 8px 25px rgba(0,0,0,0.2);
          color: white;
        }

        h2 {
          text-align: center;
          margin-bottom: 20px;
          letter-spacing: 1px;
          color:black;
        }

        input {
          width: 100%;
          padding: 12px;
          margin-top: 10px;
          border-radius: 8px;
          border: none;
          outline: none;
          background: rgba(255,255,255,0.25);
          color: white;
          font-size: 15px;
          transition: 0.3s;
        }

        input:focus {
          background: rgba(255,255,255,0.35);
          box-shadow: 0 0 8px rgba(255,255,255,0.6);
        }

        button {
          margin-top: 20px;
          width: 100%;
          padding: 12px;
          font-size: 16px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          background: #4e0ef7;
          color: white;
          transition: 0.3s;
        }

        button:hover {
          background: #3500c9;
        }

        p {
          color: #ffe6e6;
          margin: 4px 0 0 0;
          font-size: 13px;
        }
      `}</style>

      <div className="card">
        <h2>Registration Form</h2>

        <form onSubmit={handleSubmit}>

          {/* Name */}
          <input
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
          <p>{errors.name}</p>

          {/* Email */}
          <input
            type="text"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>{errors.email}</p>

          {/* Age */}
          <input
            type="number"
            placeholder="Enter Age (18–60)"
            onChange={(e) => setAge(e.target.value)}
          />
          <p>{errors.age}</p>

          {/* Phone */}
          <input
            type="text"
            placeholder="Enter Phone (10 digits)"
            onChange={(e) => setPhone(e.target.value)}
          />
          <p>{errors.phone}</p>

          {/* Password */}
          <input
            type="password"
            placeholder="Create Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>{errors.password}</p>

          {/* Confirm Password */}
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPass(e.target.value)}
          />
          <p>{errors.confirmPass}</p>

          <button type="submit">Submit</button>
        </form>
      </div>

    </div>
  );
}

export default Form;
