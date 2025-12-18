import React, { useState } from "react";

const Attendance = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Navya", status: "" },
    { id: 2, name: "Niranjana", status: "" },
    { id: 3, name: "Padmapriya", status: "" },
  ]);

  const markAttendance = (id, status) => {
    setStudents(
      students.map((student) =>
        student.id === id ? { ...student, status } : student
      )
    );
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Student Attendance</h2>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Student Name</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Mark Attendance</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id} style={styles.tr}>
                <td style={styles.td}>{student.name}</td>

                <td style={styles.td}>
                  {student.status === "Present" && (
                    <span style={styles.present}>Present</span>
                  )}
                  {student.status === "Absent" && (
                    <span style={styles.absent}>Absent</span>
                  )}
                  {student.status === "" && (
                    <span style={styles.notMarked}>Not Marked</span>
                  )}
                </td>

                <td style={styles.td}>
                  <button
                    style={{ ...styles.button, ...styles.presentBtn }}
                    onClick={() =>
                      markAttendance(student.id, "Present")
                    }
                  >
                    Present
                  </button>

                  <button
                    style={{ ...styles.button, ...styles.absentBtn }}
                    onClick={() =>
                      markAttendance(student.id, "Absent")
                    }
                  >
                    Absent
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(to right, #4facfe, #00f2fe)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    background: "#fff",
    padding: "25px",
    borderRadius: "10px",
    width: "80%",
    maxWidth: "800px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  },

  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  th: {
    padding: "12px",
    background: "#f5f5f5",
    borderBottom: "2px solid #ddd",
  },

  td: {
    padding: "12px",
    textAlign: "center",
    borderBottom: "1px solid #eee",
  },

  tr: {
    background: "#fafafa",
  },

  button: {
    padding: "6px 14px",
    margin: "0 5px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  presentBtn: {
    background: "#2ecc71",
    color: "white",
  },

  absentBtn: {
    background: "#e74c3c",
    color: "white",
  },

  present: {
    color: "#2ecc71",
    fontWeight: "bold",
  },

  absent: {
    color: "#e74c3c",
    fontWeight: "bold",
  },

  notMarked: {
    color: "gray",
    fontStyle: "italic",
  },
};

export default Attendance;
