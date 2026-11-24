import React from 'react';

function Header() {
  return <h1>Student Management System</h1>;
}

function StudentList() {
  const students = [
    { roll: 1, name: "Riya", marks: 85 },
    { roll: 2, name: "Rahul", marks: 35 },
    { roll: 3, name: "Priya", marks: 75 },
    { roll: 4, name: "Arjun", marks: 25 },
    { roll: 5, name: "Sneha", marks: 90 }
  ];

  return (
    <div>
      <h2>Student Details</h2>

      {students.map((s) => (
        <div key={s.roll}>
          <p>Roll No: {s.roll}</p>
          <p>Name: {s.name}</p>
          <p>Marks: {s.marks}</p>
          <p>
            Status: {s.marks >= 40 ? "PASS" : "FAIL"}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return <h3>Thank You!</h3>;
}

function App() {
  return (
    <div>
      <Header />
      <StudentList />
      <Footer />
    </div>
  );
}

export default App;