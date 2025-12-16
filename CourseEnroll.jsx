import React, { useState } from "react";

function Course() {
  const [course, setCourse] = useState("");
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const enrollCourse = (e) => {
    e.preventDefault();

    if (course !== "") {
      setEnrolledCourses([...enrolledCourses, course]);
      setCourse("");
    }
  };

  return (
    <div className="container">
      <style>{`
        .container {
          width: 320px;
          margin: 40px auto;
          padding: 20px;
          font-family: Arial;
          border-radius: 10px;
          background: #f4f6ff;
          box-shadow: 0 4px 8px rgba(0,0,0,0.15);
        }

        h3, h4 {
          text-align: center;
          color: #4b2cc4;
        }

        select {
          width: 100%;
          padding: 8px;
          margin-bottom: 10px;
          border-radius: 5px;
          border: 1px solid #ccc;
        }

        button {
          width: 100%;
          padding: 8px;
          background: #4b2cc4;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        button:hover {
          background: #361aa5;
        }

        ul {
          padding-left: 20px;
        }

        li {
          margin: 5px 0;
        }
      `}</style>

      <h3>Course Enrollment</h3>

      <form onSubmit={enrollCourse}>
        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
          <option value="">Select Course</option>
          <option>Web Development</option>
          <option>Python Programming</option>
          <option>Data Science</option>
          <option>AI & ML</option>
        </select>

        <button type="submit">Enroll</button>
      </form>

      <h4>Enrolled Courses</h4>
      <ul>
        {enrolledCourses.map((c, index) => (
          <li key={index}>{c}</li>
        ))}
      </ul>
    </div>
  );
}

export default Course;
