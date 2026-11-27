function StudentCard({ name, studentId, major, year, gpa }) {
  return (
    <article className="mini-card profile-card">
      <div className="card-header">
        <h3 className="student-name">{name}</h3>
        <span className="student-id">ID: {studentId}</span>
      </div>
      <div className="card-body">
        <p><strong>Major:</strong> {major}</p>
        <p><strong>Year:</strong> {year}</p>
        <p><strong>GPA:</strong> {gpa.toFixed(1)}</p>
      </div>
    </article>
  );
}

export default StudentCard;
