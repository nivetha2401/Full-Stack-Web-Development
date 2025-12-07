import React from "react";

export default function Vehicle() {
  
  function handleSubmit(e) {
    e.preventDefault();
    alert("Vehicle Registered Successfully!");
  }

  return (
    <>
      <div>
        {/* Internal CSS */}
        <style>{`
          body {
            margin: 0;
            padding: 0;
          }

          .page-bg {
            background: linear-gradient(to right, #6a11cb, #2575fc);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
          }

          .form-box {
            width: 430px;
            background: white;
            padding: 25px;
            border-radius: 15px;
            box-shadow: 0 0 15px rgba(0,0,0,0.3);
            font-family: Arial;
          }

          .form-box h2 {
            text-align: center;
            margin-bottom: 20px;
          }

          .label {
            font-weight: bold;
            margin-bottom: 5px;
            display: block;
          }

          .input-box, .select-box {
            width: 100%;
            padding: 10px;
            border: 1px solid #999;
            border-radius: 5px;
            margin-bottom: 15px;
          }

          .radio-row, .check-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
          }

          .radio-option, .check-option {
            display: flex;
            align-items: center;
            gap: 5px;
          }

          .center-btn {
            display: flex;
            justify-content: center;
          }

          .btn-submit {
            background: #6a11cb;
            padding: 10px 25px;
            border: none;
            border-radius: 6px;
            color: white;
            font-size: 16px;
            cursor: pointer;
          }
        `}</style>

        <div className="page-bg">
          <form className="form-box" onSubmit={handleSubmit}>
            <h2>Vehicle Registration</h2>

            {/* Owner */}
            <label className="label">Owner Name</label>
            <input
              type="text"
              placeholder="Enter owner name"
              required
              className="input-box"
            />

            {/* Vehicle Number */}
            <label className="label">Vehicle Number</label>
            <input
              type="text"
              placeholder="TN 38 AB 1234"
              required
              className="input-box"
            />

            {/* Vehicle Type */}
            <label className="label">Vehicle Type</label>
            <select className="select-box" required>
              <option value="">Select Vehicle Type</option>
              <option>Two Wheeler</option>
              <option>Three Wheeler</option>
              <option>Four Wheeler</option>
              <option>Heavy Vehicle</option>
            </select>

            {/* Fuel Type */}
            <label className="label">Fuel Type</label>
            <div className="radio-row">
              <label className="radio-option">
                <input type="radio" name="fuel" required /> Petrol
              </label>

              <label className="radio-option">
                <input type="radio" name="fuel" /> Diesel
              </label>

              <label className="radio-option">
                <input type="radio" name="fuel" /> EV
              </label>
            </div>

            {/* Registration Date */}
            <label className="label">Registration Date</label>
            <input
              type="date"
              required
              className="input-box"
            />

            {/* Services */}
            <label className="label">Services Opted</label>
            <div className="check-row">
              <label className="check-option">
                <input type="checkbox" /> Insurance
              </label>

              <label className="check-option">
                <input type="checkbox" /> Pollution Check
              </label>
            </div>

            {/* Terms */}
            <label className="check-option" style={{ marginBottom: "15px" }}>
              <input type="checkbox" required /> I accept terms & conditions
            </label>

            {/* Submit Button */}
            <div className="center-btn">
              <button className="btn-submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
