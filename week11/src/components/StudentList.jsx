function StudentList({ students }) {
  return (
    <ul className="grade-list">
      {students.map((student) => (
        <li key={student.id}>
          <span>{student.name}</span>
          <strong>{student.grade}</strong>
        </li>
      ))}
    </ul>
  );
}

export default StudentList;
