import React, { useEffect, useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [editId, setEditId] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState("");
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const fetchStudents = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:8080/students");
    const data = await res.json();
    setStudents(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // ADD or UPDATE
  const handleSubmit = async () => {

  // ❌ Validation
  if (!name || !email || !course) {
    setToast("All fields are required ❌");
    setTimeout(() => {
  setToast("");
}, 2000);
    return;
  }

  if (!email.includes("@")) {
    setToast("Enter valid email ❌");
    setTimeout(() => {
  setToast("");
}, 2000);
    return;
  }

  try {
    if (editId) {
      await fetch(`http://localhost:8080/students/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, course }),
      });
      setToast("Student Updated Successfully ✅");
      setTimeout(() => {
      setShowModal(false);
      setToast("");
    }, 2000);
    } else {
      await fetch("http://localhost:8080/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, course }),
      });
      setToast("Student Added Successfully ✅");
      setTimeout(() => {
      setToast("");
    }, 2000);
    }

    setEditId(null);
    setName("");
    setEmail("");
    setCourse("");
    fetchStudents();

  } catch (err) {
    setToast("Something went wrong ❌");
  }
};

  // DELETE
  const deleteStudent = async (id) => {

  const confirmDelete = window.confirm("Are you sure you want to delete this student?");

  if (!confirmDelete) return;

  await fetch(`http://localhost:8080/students/${id}`, {
    method: "DELETE",
  });

    setToast("Student Deleted ❌");
    setTimeout(() => {
      setToast("");
    }, 2000);
  fetchStudents();
};

  // EDIT
  const editStudent = (student) => {
    setName(student.name);
    setEmail(student.email);
    setCourse(student.course);
    setEditId(student.id);
    setShowModal(true);
  };

  const filteredStudents = students.filter((s) =>
  s.name.toLowerCase().includes(search.toLowerCase())
);

 return (
  <div className="container">

    {/* ✅ Toast */}
    {toast && (
      <div className="toast">
        {toast}
      </div>
    )}

    <div className="card">
      <h1>Student Management System</h1>

      <div className="form">
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setToast("");
          }}
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setToast("");
          }}
        />
        <input
          placeholder="Course"
          value={course}
          onChange={(e) => {
            setCourse(e.target.value);
            setToast("");
          }}
        />
      </div>

      <button
        className="add-btn"
        onClick={handleSubmit}
        style={{ marginTop: "10px" }}
      >
        {editId ? "Update Student" : "Add Student"}
      </button>

      {/* 🔍 Search */}
      <input
        placeholder="🔍 Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc"
        }}
      />

      <h2 style={{ marginTop: "20px" }}>Student List</h2>

      {/* ✅ Loader + List */}
      {loading ? (
        <p style={{ textAlign: "center" }}>Loading... ⏳</p>
      ) : (
        <>
          {filteredStudents.length === 0 && (
            <p style={{ textAlign: "center" }}>
              No students found 🚫
            </p>
          )}

          {filteredStudents.map((s) => (
            <div key={s.id} className="student">
              <div className="student-info">
                <strong>{s.name}</strong>
                <span>📧 {s.email}</span>
                <span>🎓 {s.course}</span>
              </div>

              <div className="student-actions">
                <button
                  className="edit-btn"
                  onClick={() => editStudent(s)}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => deleteStudent(s.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>

    {/* ✅ Modal */}
    {showModal && (
      <div className="modal-overlay">
        <div className="modal">

          <div className="modal-header">
            <h2>Edit Student</h2>
            <span
              className="close-btn"
              onClick={() => setShowModal(false)}
            >
              ❌
            </span>
          </div>

          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />

          <button onClick={handleSubmit}>Update</button>
        </div>
      </div>
    )}

  </div>
);
}

export default App;